## Permission 목록

`A, –allow-all`
- 모든 Permission을 허용

`–allow-env`
- Environment Access를 허용
- 환경변수를 이용 가능

`–allow-hrtime`
- high-resolution 시간 측정을 제공
  
`–allow-net=`
- 네트워크 액세스를 허용
- 허용할 도메인을 쉼표로 구분
- 명시적으로 특정 도메인만 허용가능

`–allow-plugin`
- 플러그인을 이용 (stable 상태의 feature는 아니라고 합니다.)

`–allow-read=`
- 파일시스템의 파일을 읽을 수 있는 권한을 부여
- 쉼표로 구분해 디렉토리나 파일을 특정가능

`–allow-write=`
- 파일시스템의 파일을 작성/수정을 수 있는 권한을 부여
- 쉼표로 구분해 디렉토리나 파일을 특정가능
  
`–allow-run`
- 서브프로세스를 실행할 수 있는 권한을 부여
- 서브프로세스는 샌드박스 내에서 실행되는 것이 아님
- 본 프로세스와 동일한 보안 효과가 없음
