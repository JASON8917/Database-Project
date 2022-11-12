## 1주차 미션
### 🔥회원가입을 완성시켜라 
- 현재 회원가입 페이지가 존재합니다. 이때 백엔드에서 필요한 로직들을 구현해야하는 미션입니다. 
### 🗓구현목록
- [ ] 아이디 중복검사 로직 - 김재승
- [ ] 닉네임 중복검사 로직 - 김보성
- [ ] 회원가입 로직 - 김보성, 김재승 (빨리 끝난사람이 작성할 것)

## 👨‍💻 구현 조건
### 공통사항 
- 모든 로직은 `./server` 디렉터리에서 작성을 해야한다. 
- MVC로 변경 전까지는 `./server/router/controller` 에서 모든 로직을 작성한다.
- API의 주소는 `./server/router/index.js` 에 작성을 합니다. 

### 아이디 중복검사 로직 
- API 주소는 `/check-id-duplicate` 이다.
- HTTP 메서드는 `post`이다. 
- 프론트에서 받는 값은 다음과 같다.
```json
{
  "user_id" : "유저아이디"
}
```
- 아이디를 확인하고 중복검사 성공시 다음과 같은 메시지를 보낸다.
```json
// 성공시
{ 
  "duplicated": true
}

// 실패시
{
  "duplicated": false
}
```
### 닉네임 중복검사 로직
- API 주소는 `/check-nickname-duplicate` 이다.
- HTTP 메서드는 `post`이다.
- 프론트에서 받는 값은 다음과 같다. 
```json
{
  "nickname" : "닉네임"
}
```
- 닉네임을 확인하고 중복검사 성공시 다음과 같은 메시지를 보낸다.
```json
// 성공시
{ 
  "duplicated": true
}

// 실패시
{
  "duplicated": false
}
```

### 회원가입 로직
- API 주소는 `/sign-up` 이다.
- HTTP 메서드는 `post`이다.
- 프론트에서 받는 값은 다음과 같다. 
```json
{
  "user_id" : "아이디",
  "password": "패스워드",
  "age": 나이,
  "nickname": "닉네임"
}
```
- 백엔드에서 보내주는 값은 다음과 같다.
```json
{
  "isSuccess" : true
}
```