import asyncio
import websockets

async def accept(websocket, path):
    while True:
        data = await websocket.recv()   # 클라이언트로부터 메시지를 대기
        print("클라이언트로 부터 받은 데이터 : " + data)
        await websocket.send("Echo : " + data)  # 클라인언트로 echo를 붙여서 재전송

start_server = websockets.serve(accept, "127.0.0.1", 8080)

# 비동기로 서버를 대기
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
