# react-payments

### step 1 기능 명세서

### 카드 번호 입력 및 식별

- [x] 사용자가 입력하는 카드 번호를 실시간으로 파악
- [x] Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시
- [x] 입력은 숫자만 가능
  - [x] 총 16자, 4개씩 입력
  - [x] 유효하지 않은 번호 입력 시, input창 아래에 경고 문구를 출력

### 카드 유효기간 입력

- [x] 월과 년도를 입력
  - [x] 범위 내만 가능 : 월 (1 ~ 12) / 년도 : 숫자 2글자 초과 불가
  - [x] 유효하지 않은 번호 입력 시, input창 아래에 경고 문구를 출력

### 카드 소유자 이름 입력

- [x] 영문자 대문자만 입력 가능한 폼을 구현
  - [x] 유효하지 않은 글자 입력 시, input창 아래에 경고 문구를 출력

### 실시간 프리뷰 업데이트

- [x] 사용자의 카드 정보 입력에 따라 카드 프리뷰를 동시에 업데이트
  - [x] 카드 번호 9번자 자리부터는 미표시

---

### step 2 기능 명세서

### 동적 입력 UI 구현

- [ ] 입력 필드는 사용자의 입력이 완료되면 다음 필드로 자동으로 이동한다.

### 카드사 선택

- [x] 사용자는 카드사를 선택할 수 있다.
- [x] 카드사에 따라 미리보기 카드의 색상을 변경한다.

### CVC 번호

- [x] CVC 번호를 입력할 때는 미리보기 카드의 뒷면을 시각적으로 보여준다.
  - [ ] 앞면에서 뒷면으로 변한다.
- [ ] 입력은 숫자만 가능하다.
  - [x] 유효하지 않은 값을 입력 시 피드백을 제공한다.

### 폼 제출 및 상태 관리

- [ ] 하나의 필드가 완성되어야 그 다음 필드가 보여진다.
- [ ] 모든 카드 정보가 정확하게 입력되고 검증되었을 때 확인 버튼이 활성화된다.
- [ ] 사용자가 입력한 정보 중 하나라도 지우거나 수정하여 유효하지 않게 되면, 확인 버튼은 보이지 않는다.

### 카드 등록 완료 및 네비게이션

- [ ] 확인 버튼을 클릭하면 사용자는 카드 등록 완료 페이지로 이동한다.
- [ ] 카드 등록 완료 페이지에서는 카드 등록이 성공적으로 완료되었다는 메시지와 함께, 다시 카드 등록 페이지로 돌아갈 수 있는 확인 버튼을 제공한다.
