// ========================================================
// 교육운영백서 - 데이터 및 앱 로직
// ========================================================

// ---- 콘텐츠 데이터 ----
const data = [
    // ===== W동 =====
    {
        id: 'w-access',
        category: 'w-building',
        categoryName: 'W동',
        title: 'W동 출입 및 교통 안내',
        keywords: ['출입', '교통', 'W동', '주차', '셔틀', '버스', '지하철', '방문', '출입증', '게이트', '차량', '마곡나루', '김포공항', '신방화', 'ID카드', '방문예약', 'Visit Reservation', '통근버스', 'SP포탈', '식권', 'LAN', '장비반입', '패찰'],
        content: `
            <h1>🏢 W동 출입 및 교통 안내</h1>

            <h2>1. 타사업장 임직원 출입 안내</h2>
            <p><strong>사업장 관계없이 ID카드로 입/출입 가능</strong></p>
            <ul>
                <li>층수 권한이 필요 없는 층: <strong>W동 지하~1층, W10동 3층, Camp Park</strong></li>
            </ul>

            <h2>2. 노트북 반출 기준</h2>
            <table>
                <tr><th>구분</th><th>반출 방법</th></tr>
                <tr><td><strong>업무용 개인 리스 노트북</strong></td><td>기존 반출 신청 내역이 있으면 보안 검색대 통과 후 반출 가능</td></tr>
                <tr><td><strong>자산/공용 노트북</strong></td><td>반출 신청 및 승인 필수 (기간 지정 가능)</td></tr>
            </table>
            <div class="info-box">
                <i class="fas fa-laptop"></i>
                <div>
                    <strong>✔️ 업무용 개인 리스 노트북 등록 여부 확인 경로</strong><br>
                    Security Portal > Checkout > Storage → Item : NB코드 / Type : 개인 입력 후 검색
                </div>
            </div>

            <h2>3. 사외강사 방문 신청 (교육일 기준 D-3일까지)</h2>
            <p>👉 <a href="https://visit.lge.com/login" target="_blank" style="color:#6C63FF;font-weight:600;text-decoration:underline;">LG Visit Reservation | LG 방문 예약 바로가기</a> → 비회원 방문 예약</p>
            <ol>
                <li><strong>모두 동의</strong> 체크</li>
                <li><strong>장소:</strong> 마곡 검색 (LG전자 마곡 선택)</li>
                <li><strong>방문자:</strong> 교육 운영자 이름 검색 후 지정</li>
                <li><strong>날짜:</strong> 교육 기간 지정</li>
                <li>노트북 및 전자기기는 반드시 <strong>'반입 물품' 항목에 기입</strong></li>
            </ol>
            <p>📄 참고: <a href="files/[방문] LG_방문포탈_사용자_가이드_V1.0.pdf" target="_blank" style="color:#6C63FF;font-weight:500;">[방문] LG_방문포탈_사용자_가이드_V1.0.pdf 다운로드</a></p>
            <p>📄 참고: <a href="files/외부인방문신청_FAQ.pptx" download style="color:#6C63FF;font-weight:500;">외부인방문신청_FAQ.pptx 다운로드</a></p>

            <div class="info-box">
                <i class="fas fa-info-circle"></i>
                <div>방문예약 시 <strong>'LAN 포트 해제'</strong>가 필요한 경우 반드시 체크해 주세요.</div>
            </div>

            <h3>👤 교육생 vs 사외강사 비교</h3>
            <table>
                <tr><th>구분</th><th>방문예약</th><th>주차</th></tr>
                <tr><td>교육생</td><td>불필요</td><td>❌ 불가</td></tr>
                <tr><td>사외강사</td><td>필요</td><td>✅ 가능 (담당자 요청)</td></tr>
            </table>

            <h2>교통 안내</h2>
            <h3>🚌 통근버스</h3>
            <ul>
                <li><strong>Space > LG사이언스파크 게시판</strong>에서 '통근버스' 검색</li>
                <li>또는 <strong>SP포탈</strong>에서 노선 확인</li>
            </ul>

            <h3>🚗 주차 안내</h3>
            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div><strong>교육생 주차는 불가합니다.</strong><br>※ 단, 마곡 상주자는 SP포탈을 통해 일일/잔여주차권 신청 가능</div>
            </div>

            <p><strong>사외강사 주차:</strong> 가능하나 X사번으로 직접 신청은 불가합니다.</p>
            <ul>
                <li><strong>LG전자 담당자</strong>가 SP포탈에서 대신 신청해야 합니다.</li>
                <li>SP포탈 주차 등록은 반드시 <strong>LG전자 담당자만</strong> 신청 가능</li>
            </ul>

            <div class="info-box">
                <i class="fas fa-parking"></i>
                <div>SP포탈 주차 신청 페이지에서 LG전자 담당자를 통해 신청해 주세요. (전용건물 방문자 주차신청 메뉴)</div>
            </div>

            <p>📸 <strong>SP포탈 주차 신청 화면 참고:</strong></p>
            <img src="images/1.png" alt="SP포탈 주차 신청 화면" style="width:100%;max-width:800px;border-radius:12px;border:1px solid #f0e8ee;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin:10px 0 20px;" />

            <h2>식권 구매</h2>
            <ul>
                <li>사업장 관계없이 <strong>ID카드 태깅</strong>으로 구매 가능</li>
                <li>현장 구매 가능 (지하1층 키오스크 이용)</li>
                <li>아워홈 / CJ 구분 필요</li>
                <li><strong>대량 구매 시 사전 협의 필요</strong></li>
            </ul>

            <h2>전자기기 / 장비 반입</h2>
            <p>사외강사의 경우, 장비 반입 시 아래 사항을 반드시 준수해야 합니다.</p>
            <ul>
                <li>반드시 <strong>방문예약 시 '반입 물품' 항목에 등록</strong></li>
                <li>저장매체, 실습장비 등 모두 포함</li>
                <li><strong>자산반출(오반입반출) 사전 결재</strong> 필수</li>
                <li>교육 종료 후 <strong>B1층 정보지원센터</strong>에서 장비 확인 필요</li>
            </ul>

            <div class="warning-box">
                <i class="fas fa-shield-alt"></i>
                <div>반입 물품 미등록 시 반입이 거부될 수 있으며, 반출 시에도 B1층 정보지원센터에서 반드시 확인을 받아야 합니다.</div>
            </div>

            <h2>✅ 운영자 참고사항</h2>
            <ul>
                <li><strong>SP포탈 주차 등록:</strong> 반드시 LG전자 담당자만 신청 가능</li>
                <li><strong>LAN 포트 사용 필요 시:</strong> 방문예약 시 'LAN 포트 해제' 체크 필요</li>
                <li><strong>장비 반입:</strong> 방문예약 시 반입 물품 항목에 빠짐없이 등록</li>
                <li><strong>사외강사 주차:</strong> X사번 직접 신청 불가 → LG전자 담당자 대행</li>
            </ul>
        `
    },
    {
        id: 'w-classroom',
        category: 'w-building',
        categoryName: 'W동',
        title: '강의장 이용안내',
        keywords: ['강의장', '이용', '예약', 'W동', '프로젝터', '화이트보드', '음료', '좌석', '와이파이', 'WiFi', '교실', '세미나', '디스플레이', '도면', 'W2', 'W3', 'W5', 'W6', 'W10', 'CampPark', '캠프파크'],
        content: `
            <h1>🏫 강의장 이용안내</h1>

            <h2>📐 강의장 도면 (마곡)</h2>
            <p>각 건물/층별 강의장 도면을 확인하세요. PDF를 클릭하면 상세 도면을 볼 수 있습니다.</p>
            <table>
                <tr><th>건물/위치</th><th>도면 다운로드</th></tr>
                <tr><td><strong>W2동 1F</strong></td><td><a href="files/강의장 도면_마곡 W2 1층.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 도면 보기</a></td></tr>
                <tr><td><strong>W3동 Camp Park 1, 2</strong></td><td><a href="files/강의장 도면_마곡 W3 Camp Park 1,2.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 도면 보기</a></td></tr>
                <tr><td><strong>W3동 Camp Park 3</strong></td><td><a href="files/강의장 도면_마곡 W3 Camp Park3.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 도면 보기</a></td></tr>
                <tr><td><strong>W5동 1F 교육실2</strong></td><td><a href="files/강의장 도면_마곡 W5동 1층.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 도면 보기</a></td></tr>
                <tr><td><strong>W6동 4F 대회의실</strong></td><td><a href="files/강의장 도면_마곡 W6 4층 대회의실.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 도면 보기</a></td></tr>
                <tr><td><strong>W10동 3F 교육장</strong></td><td><a href="files/강의장 도면_10동 3층.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 도면 보기</a></td></tr>
            </table>

            <h2>📞 강의장 예약 문의</h2>
            <table>
                <tr><th>교육장</th><th>문의처</th></tr>
                <tr><td><strong>W2동 1층, W10동 3층</strong></td><td>한지영 사원 (<a href="mailto:jiyoung.han@lgepartner.com" style="color:#c97bb6;">jiyoung.han@lgepartner.com</a>)<br>전수현 선임 (<a href="mailto:suhyun.jeon@lgepartner.com" style="color:#c97bb6;">suhyun.jeon@lgepartner.com</a>)</td></tr>
                <tr><td><strong>그 외 교육장</strong></td><td>마곡공용회의실 (<a href="mailto:mgmr@lge.com" style="color:#c97bb6;">mgmr@lge.com</a>)</td></tr>
            </table>

            <p>▶ <a href="https://forms.office.com/r/jzZ4EVtmTC" target="_blank" style="color:#c97bb6; font-weight:bold;">강의장 예약 신청/취소 Form (☜클릭)</a></p>
            <p>▶ <a href="https://lgeteams.sharepoint.com/sites/O365_xA26621/Lists/test/view.aspx?env=WebViewList" target="_blank" style="color:#c97bb6; font-weight:bold;">강의장 예약현황 캘린더 (☜클릭)</a></p>
            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>※ 위 캘린더 사이트는 예약현황 조회 목적으로 사용해주시고, 사이트 자체에서 캘린더 서식 및 예약정보 등을 추가/수정하지 말아주세요.</div>
            </div>

            <div class="info-box">
                <i class="fas fa-file-alt"></i>
                <div>📄 <a href="files/마곡LGSP W2동, W10동 강의장 예약 매뉴얼.pdf" target="_blank" style="color:#c97bb6; font-weight:bold;">마곡LGSP W2동, W10동 강의장 예약 매뉴얼.pdf 보기</a></div>
            </div>
        `
    },
    {
        id: 'w-security',
        category: 'w-building',
        categoryName: 'W동',
        title: '보안안내',
        keywords: ['보안', '보안규정', '촬영', '반출', '정보보호', 'USB', 'W동', '노트북', '카메라', '보안서약서', '분실물', '자산', '반입금지', '영상', '촬영장비', '바코드', '오반입'],
        content: `
            <h1>🔒 보안안내</h1>

            <h2>1. 사내 반입 금지 물품</h2>
            <p>👉 <a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200175796861&itemId=200178870022&docPopup=true" target="_blank" style="color:#6C63FF; font-weight:bold;">사내 반입 금지 물품 안내 (☜클릭)</a></p>

            <h2>2. 자산 반출</h2>
            <table>
                <tr><th>구분</th><th>안내</th></tr>
                <tr><td><strong>문서 반출</strong></td><td><a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200174461731&itemId=200179738880&docPopup=true" target="_blank" style="color:#6C63FF;">문서 반출 신청 방법 (☜클릭)</a></td></tr>
                <tr><td><strong>오반입 물품 반출</strong></td><td><a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200174461731&itemId=200179738568&docPopup=true" target="_blank" style="color:#6C63FF;">오반입 물품 반출 신청 방법 (☜클릭)</a></td></tr>
                <tr><td><strong>정보자산(바코드) 반출</strong></td><td><a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200174461731&itemId=200179732032&docPopup=true" target="_blank" style="color:#6C63FF;">정보자산(바코드) 반출 신청 방법 (☜클릭)</a></td></tr>
                <tr><td><strong>미등록자산 반출</strong></td><td><a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200174461731&itemId=200179733182&docPopup=true" target="_blank" style="color:#6C63FF;">미등록 정보자산(바코드X) 반출 신청 방법 (☜클릭)</a></td></tr>
                <tr><td><strong>고정/일반자산 반출</strong></td><td><a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200174461731&itemId=200179737394&docPopup=true" target="_blank" style="color:#6C63FF;">고정/일반자산 반출 신청 방법 (☜클릭)</a></td></tr>
                <tr><td><strong>정보자산/대리 반출<br>(공용PC 대리 반출)</strong></td><td>정보자산 대리 반출 신청 방법 (아래 이미지 참고)</td></tr>
            </table>

            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [정보자산 대리 반출 신청 방법 보기]</summary><img src="images/정보자산 대리 반출 신청 방법.png" alt="정보자산 대리 반출 신청 방법" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <div class="info-box">
                <i class="fas fa-file-alt"></i>
                <div>✔️ 자산반출 관련 FAQ는 아래 파일을 참고하세요.<br>
                📄 <a href="files/자산 반출 FAQ.pptx" download style="color:#6C63FF; font-weight:bold;">자산 반출 FAQ.pptx 다운로드</a></div>
            </div>

            <h2>3. 영상 촬영장비 반/출입</h2>
            <p>고정/일반자산에 <strong>S/N 등록해야 반/출입 가능</strong></p>
            <p>📄 <a href="files/영상담당자 장비반출 품의.pptx" download style="color:#6C63FF; font-weight:bold;">영상담당자 장비반출 가이드(품의/장비명단).pptx 다운로드</a></p>
            <p>📄 <a href="files/ISC_촬영장비 리스트.xlsx" download style="color:#6C63FF; font-weight:bold;">ISC_촬영장비 리스트.xlsx 다운로드</a></p>

            <div class="warning-box">
                <i class="fas fa-shield-alt"></i>
                <div>보안 위반 적발 시 교육 참여가 제한될 수 있으며, 관련 규정에 따라 조치됩니다.</div>
            </div>

            <h2>분실물 처리</h2>
            <p>건물 내에서 분실물 발견 시 <strong>1층 안내 데스크</strong> 또는 교육운영 담당자에게 전달해 주세요.</p>
        `
    },
    {
        id: 'w-network',
        category: 'w-building',
        categoryName: 'W동',
        title: '사내/외 네트워크 연결 방법',
        keywords: ['네트워크', '무선', '와이파이', 'WiFi', 'LGE_Welcome', 'gLGE', '게스트망', '무선랜', 'AP', 'MAC', '무선네트워크', '인터넷', '사외강사', '방문자', 'Security Portal', '김영천'],
        content: `
            <h1>🌐 사내/외 네트워크 연결 방법</h1>

            <h2>1. 무선 네트워크 연결 가이드</h2>
            <table>
                <tr><th>대상</th><th>연결 가이드</th><th>참고 자료</th></tr>
                <tr>
                    <td><strong>타 사업장 임직원</strong></td>
                    <td>LGE_Welcome 무선랜 연결 가이드</td>
                    <td><a href="files/마곡 네트워크 연결.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 마곡 네트워크 연결.pdf</a></td>
                </tr>
                <tr>
                    <td><strong>방문자용 (gLGE 게스트망)</strong></td>
                    <td>LG사이언스파크 무선 설정 가이드 (gLGE)</td>
                    <td><a href="files/LG사이언스파크_무선 설정가이드(gLGE)_V1.pptx" target="_blank" style="color:#c97bb6;font-weight:500;">📄 LG사이언스파크_무선 설정가이드(gLGE)_V1.pptx</a></td>
                </tr>
            </table>

            <h2>2. 사외강사 무선 네트워크 신청 절차</h2>
            <div class="info-box">
                <i class="fas fa-wifi"></i>
                <div>
                    <strong>경로:</strong> New Security Portal > 네트워크보안 > 무선 네트워크<br>
                    <strong>신청 유형:</strong> 무선망 접속신청<br>
                    <strong>신청 항목:</strong> 게스트망 (gLGE)<br>
                    <strong>대상자 유형:</strong> 임직원
                </div>
            </div>

            <h3>📝 필수 입력 항목</h3>
            <ul>
                <li>제조사</li>
                <li>무선 MAC 주소</li>
                <li>기간</li>
            </ul>

            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>필수 입력 항목은 <strong>방문자 무선 AP정보</strong>를 입력해야 합니다. 무선 MAC 주소가 다를 경우 <strong>연결이 불가</strong>하오니 정확히 입력해 주세요.</div>
            </div>

            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [사외강사 무선 네트워크 신청 절차 이미지 보기]</summary><img src="images/사외강사 무선 네트워크 신청 절차.png" alt="사외강사 무선 네트워크 신청 절차" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <h2>3. 네트워크 문의 (담당자)</h2>
            <p>✔️ 무선(AP포함) 네트워크 관련 FAQ를 먼저 확인해 보세요.</p>
            <p><a href="files/무선네트워크 사용_FAQ.pptx" target="_blank" style="color:#c97bb6;font-weight:500;">📄 무선네트워크 사용_FAQ.pptx 다운로드</a></p>

            <h3>📞 네트워크 담당자 연락처</h3>
            <table>
                <tr><th>이름</th><th>소속</th><th>연락처</th><th>위치</th></tr>
                <tr>
                    <td><strong>김영천 책임</strong> (협력사)</td>
                    <td>협력업체 > LGEKR > 프라임엔시스템</td>
                    <td>youngchon.kim / 02-2033-2112</td>
                    <td>LG Science Park(LGEKR) W10 1F</td>
                </tr>
            </table>
        `
    },

    {
        id: 'w-facilities',
        category: 'w-building',
        categoryName: 'W동',
        title: '편의시설 안내 (식당/카페/지원센터)',
        keywords: ['편의시설', '식당', '카페', '편의점', '아워홈', 'CJ', 'GS25', '건강관리실', '피트니스', '탁구장', '어린이집', '하이프라자', 'L카페', '베이커리', '우리은행', 'TTT카페', '레드캡', '도움마당', '안내데스크', '운영시간', '사내식당', '풀무원', '맘스터치', '석관동떡볶이', '업무지원센터', '메일센터', 'PC유지보수', '정보보호지원센터', '모성보호실'],
        content: `
            <h1>🏬 편의시설 안내</h1>

            <h2>🍽️ 사내식당 운영</h2>
            <table>
                <tr><th>구분</th><th>명칭</th><th>운영시간</th><th>연락처</th></tr>
                <tr><td><strong>임직원 식당</strong></td><td>아워홈/CJ</td><td>조식 07:20~08:20 / 중식 11:30~13:30 / 석식 17:30~18:30</td><td>아워홈 2033-1161~4 / CJ 2033-1083~4</td></tr>
                <tr><td><strong>Dining Hall</strong></td><td>-</td><td>별도요청</td><td>2033-1185</td></tr>
            </table>

            <h3>🍱 풀무원 사내식당 이용 방법 (ISC 지하 1층)</h3>
            <ul>
                <li>LG전자 전용 리더기로 이용</li>
                <li>상주 임직원 외 인원은 <strong>식권 구매</strong>하여 식사</li>
                <li>식권 구매 시간: AM 07:30~08:30 / AM 10:00~11:00 (풀무원 식당 내 G카페에서 구매 가능)</li>
            </ul>

            <h2>☕ 카페 / 편의시설</h2>
            <table>
                <tr><th>구분</th><th>명칭</th><th>운영시간</th><th>연락처</th></tr>
                <tr><td>편의점</td><td>GS25 (1단계)</td><td>07:00~22:00</td><td>-</td></tr>
                <tr><td>편의점</td><td>GS25 (2단계)</td><td>07:00~21:00 (야간/휴일 무인운영)</td><td>-</td></tr>
                <tr><td>카페</td><td>하누리 Café</td><td>07:30~18:30</td><td>-</td></tr>
                <tr><td>카페</td><td>L Café (ISC B1)</td><td>07:20~18:30</td><td>-</td></tr>
                <tr><td>카페</td><td>TTT Café (ISC B1)</td><td>07:30~17:00</td><td>-</td></tr>
                <tr><td>휴대폰 매장</td><td>-</td><td>09:00~18:00</td><td>6952-1431</td></tr>
                <tr><td>은행</td><td>SC제일은행 출장상담소</td><td>11:00~15:00</td><td>2661-0071</td></tr>
                <tr><td>가전매장</td><td>LG전자 베스트샵 (ISC B1)</td><td>08:00~19:00</td><td>6952-1441</td></tr>
                <tr><td>생활건강</td><td>LG생활건강 Shop (ISC B1)</td><td>10:00~19:00</td><td>6987-1098</td></tr>
                <tr><td>여행사</td><td>레드캡투어 (ISC B1)</td><td>09:00~17:00</td><td>2139-2784</td></tr>
                <tr><td>은행</td><td>우리은행 (ISC B1)</td><td>09:00~16:00</td><td>2135-1750</td></tr>
                <tr><td>출력</td><td>출력서비스 LG CNS (ISC B1)</td><td>09:00~18:00</td><td>6932-3434</td></tr>
                <tr><td>통신</td><td>LG U+ (ISC B1)</td><td>08:00~19:30</td><td>070-4062-1358</td></tr>
            </table>

            <h2>🏥 지원센터 / 복지시설</h2>
            <table>
                <tr><th>시설명</th><th>운영시간</th><th>연락처</th></tr>
                <tr><td>건강관리실</td><td>08:30~17:30</td><td>2033-1147</td></tr>
                <tr><td>마음나눔상담센터</td><td>-</td><td>2033-1146</td></tr>
                <tr><td>업무지원센터 (북/남)</td><td>08:30~18:30</td><td>2033-1145 / 2033-1152</td></tr>
                <tr><td>메일센터</td><td>-</td><td>2033-1134</td></tr>
                <tr><td>PC유지보수센터</td><td>-</td><td>2033-1136</td></tr>
                <tr><td>시료 폐기실</td><td>08:30~17:30</td><td>2033-1158</td></tr>
                <tr><td>정보보호지원센터</td><td>08:30~17:30</td><td>2033-1144</td></tr>
                <tr><td>모성보호실</td><td>24시간 운영</td><td>-</td></tr>
                <tr><td>Fitness Center / 샤워실</td><td>06:00~08:30 / 11:30~13:30 / 17:30~21:00</td><td>2033-8282</td></tr>
                <tr><td>도움마당</td><td>-</td><td>2033-8282</td></tr>
            </table>

            <h2>📍 각 동 1F 안내데스크</h2>
            <table>
                <tr><th>위치</th><th>연락처</th><th>운영시간</th><th>지원업무</th></tr>
                <tr><td>W1동</td><td>2030-2114</td><td rowspan="4">08:00~19:00</td><td rowspan="4">방문자 출입 지원, 파트너십 룸 예약, 위치/연락처 안내</td></tr>
                <tr><td>W2동</td><td>2033-1107</td></tr>
                <tr><td>W3 / W5동</td><td>0-2113 / 2112</td></tr>
                <tr><td>W4 / W6동</td><td>3-1106 / 1105</td></tr>
            </table>
        `
    },
    {
        id: 'w-commute',
        category: 'w-building',
        categoryName: 'W동',
        title: '통근버스 / 셔틀버스',
        keywords: ['통근버스', '셔틀', '셔틀버스', '버스', '출퇴근', '퇴근', '출근', '노선', '탑승', '엣스퍼트', 'APP', '평택', '인천', '서초', '가산', '마곡', '통근', '정류장'],
        content: `
            <h1>🚌 통근버스 / 셔틀버스</h1>

            <h2>통근버스 운영 현황</h2>
            <ul>
                <li>출근 버스 <strong>225대</strong>, 퇴근 버스 <strong>116대</strong> 운행</li>
                <li>퇴근 통근버스는 주정차 공간상의 제약을 고려하여 <strong>3회차 분승 운행</strong></li>
                <li>1회차: 17:50 / 2회차: 18:20 / 3회차: 19:20</li>
            </ul>

            <h2>탑승 권한</h2>
            <ul>
                <li>각 사업장 정보보호팀을 통해 <strong>ID카드를 정상 발급</strong> 받을 시 자동 부여</li>
                <li>ID카드 교체로 당일 통근/셔틀 이용 시 태깅이 안되는 경우, 단말기 상에 <strong>'사번' 입력</strong>하여 탑승 가능</li>
            </ul>

            <h2>📱 통근버스 APP 설치</h2>
            <div class="info-box">
                <i class="fas fa-mobile-alt"></i>
                <div>
                    Play스토어 → <strong>'엣스퍼트 통근버스'</strong> 검색 → APP 다운로드/설치 → 회원가입 or 로그인<br>
                    사업장설정 변경: APP 로그인 → 우측 상단 '≡' → '관리' → 관심지역(사업장) 변경<br>
                    문의: [출근] 02-6987-1333,1334 (06:30~15:30) / [퇴근] 02-6987-1336 (08:30~19:30)
                </div>
            </div>

            <h2>🚐 사업장간 셔틀버스 운행시간</h2>
            <h3>마곡 ↔ 평택</h3>
            <table>
                <tr><th>구간</th><th>출발</th><th>도착</th></tr>
                <tr><td>마곡 → 평택 (오전)</td><td>08:50</td><td>11:00</td></tr>
                <tr><td>마곡 → 평택 (오후)</td><td>13:20</td><td>15:10</td></tr>
                <tr><td>평택 → 마곡 (오전)</td><td>11:20</td><td>13:30</td></tr>
                <tr><td>평택 → 마곡 (오후)</td><td>15:30</td><td>17:10</td></tr>
            </table>

            <h3>마곡 ↔ 인천</h3>
            <table>
                <tr><th>구간</th><th>출발</th><th>도착</th></tr>
                <tr><td>마곡 → 인천 (오전)</td><td>09:00</td><td>09:40</td></tr>
                <tr><td>마곡 → 인천 (오후)</td><td>15:00</td><td>15:40</td></tr>
                <tr><td>인천 → 마곡 (오전)</td><td>10:00</td><td>10:40</td></tr>
                <tr><td>인천 → 마곡 (오후)</td><td>16:00</td><td>16:40</td></tr>
            </table>

            <h3>마곡 ↔ 서초</h3>
            <table>
                <tr><th>구간</th><th>출발</th><th>도착</th></tr>
                <tr><td>마곡 → 서초 (오전)</td><td>08:40</td><td>10:00</td></tr>
                <tr><td>서초 → 마곡 (오후)</td><td>10:30</td><td>11:50</td></tr>
            </table>

            <h3>마곡 ↔ 가산</h3>
            <table>
                <tr><th>구간</th><th>출발</th><th>도착</th></tr>
                <tr><td>마곡 → 가산 (오전)</td><td>09:00</td><td>10:00</td></tr>
                <tr><td>마곡 → 가산 (오후)</td><td>13:30</td><td>14:30</td></tr>
                <tr><td>가산 → 마곡 (오전)</td><td>10:30</td><td>11:30</td></tr>
                <tr><td>가산 → 마곡 (오후)</td><td>15:00</td><td>16:00</td></tr>
            </table>

            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>※ 셔틀버스 및 분실물 관련 문의사항은 <strong>02-6987-1334,6</strong>으로 연락주시기 바랍니다.<br>
                ※ 퇴근 승강장은 차량 진입 순서에 따라 노선별 승차 위치가 변경될 수 있으며, 실시간 차량 진입 순서는 '엣스퍼트 통근버스 APP'에서 확인 가능합니다.</div>
            </div>
        `
    },
    {
        id: 'w-parking',
        category: 'w-building',
        categoryName: 'W동',
        title: '주차장 / 전기차 충전소',
        keywords: ['주차', '주차장', '주차권', '정기권', '일일주차', '방문주차', '전기차', '충전소', '충전', 'EV', '지하주차장', '주차석', '경차', '장애인', 'portal.lgsp.co.kr'],
        content: `
            <h1>🅿️ 주차장 / 전기차 충전소</h1>

            <h2>주차장 현황</h2>
            <p>주차석: <strong>2,371석</strong> (여성 전용 287석, 장애인 70석, 경차 228석, 전기차 46석 포함)</p>

            <h2>정기주차권</h2>
            <ul>
                <li>년 2회(상/하반기) 입주조직의 인원 50% + 면적 50% 비율로 본부/부문별 배부</li>
                <li>조직 내 양도 가능하며, 30% 미만(워킹데이 기준) 사용 시 1차 독려 → 2차 회수 조치</li>
                <li>등록 경로: SP Portal > Support > 주차 > 정기주차권 > 정기주차권 ID 등록</li>
            </ul>

            <h2>일일주차권 신청</h2>
            <ul>
                <li>자차를 이용하여 출퇴근이 필요한 임직원 신청 가능</li>
                <li><strong>경로:</strong> 사이언스파크 포탈 (<a href="https://portal.lgsp.co.kr" target="_blank" style="color:#c97bb6;">https://portal.lgsp.co.kr</a>) > Support > 주차 > 일일주차권 신청</li>
                <li>추첨 방법: Random 추첨 (당첨자 제한 없음)</li>
                <li>신청가능시간: 09시 ~ 14시 50분 / 당첨시간: 근무일 기준 입차 전일 15시</li>
            </ul>
            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>※ 당첨 후 미입차 시 <strong>2주간 시스템 신청 불가</strong> 패널티가 부과됩니다.<br>
                ※ 양일간 당첨되어도 반드시 출차 후 재입차 해야 합니다.</div>
            </div>

            <h2>방문 주차 신청</h2>
            <ul>
                <li>업무 목적으로 방문자의 차량 입/출차 필요 시 신청 가능</li>
                <li><strong>경로:</strong> 사이언스파크 포탈 > Support > 주차 > 전용건물 방문주차</li>
                <li>승인절차 없이 저장 후 즉시 입차 가능</li>
            </ul>
            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>※ 임직원 차량이 방문주차 차량으로 위장 신청하여 적발 시 <strong>경고 및 영구차단</strong> 조치<br>
                ※ 마곡 상주 임직원이 마곡 상주 인원 차량을 등록해줄 경우 위반 대상</div>
            </div>

            <h2>임직원 휴일주차 신청</h2>
            <ul>
                <li>주말/공휴일의 경우 하루 1대에 한하여 주차 신청 가능</li>
                <li><strong>경로:</strong> 사이언스파크 포탈 > Support > 주차 > 임직원 휴일 주차</li>
            </ul>

            <h2>⚡ 전기차 충전소</h2>
            <ul>
                <li>설치 현황: 총 46대 운영 (1단계 24대 운영, 2단계 추가 20대 설치)</li>
                <li>이용시간: <strong>07:00 ~ 18:00</strong> (18시 이후에는 충전 종료 및 이동주차)</li>
            </ul>
        `
    },

    // ===== ISC =====
    {
        id: 'isc-reservation',
        category: 'isc',
        categoryName: 'ISC',
        title: 'ISC 예약 및 방문등록',
        keywords: ['ISC', '예약', '방문', '등록', '방문등록', '회의실', '시설', '신청', '승인', '게스트', '대강당'],
        content: `
            <h1>📋 ISC 예약 및 방문등록</h1>

            <h2>☑️ ISC 회의실/다목적홀 예약</h2>
            <p>ISC 회의실/다목적홀 예약 방법 : LG 사이언스파크 홈페이지 통해 예약 가능</p>
            <ul>
                <li><strong>접속 방법 :</strong> <a href="https://portal.lgsp.co.kr" target="_blank" style="color:#6C63FF; font-weight:bold;">https://portal.lgsp.co.kr</a> 접속 or EP 메인페이지 우측 하단 배너 클릭</li>
                <li>※ 개인정보보호법 등에 의거, 최초 1회 포털 회원가입 절차 및 개인정보사용 동의 필요</li>
            </ul>
            <img src="images/ISC,다목적홀 예약 방법1.png" alt="ISC 다목적홀 예약 방법1" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);">
            <img src="images/ISC,다목적홀 예약 방법2.png" alt="ISC 다목적홀 예약 방법2" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);">

            <h2>🚗 ISC 방문 및 주차</h2>
            <p><strong>ISC 외부인원 방문 및 주차</strong></p>
            <p>ISC 담당자에게 방문 및 주차등록 메일 요청</p>
            <ul>
                <li>최광규 파트너 : <a href="mailto:narayan@sni.co.kr" style="color:#6C63FF; font-weight:bold;">narayan@sni.co.kr</a></li>
                <li>CC : <a href="mailto:LGSP_Phy_ISC@sni.co.kr" style="color:#6C63FF; font-weight:bold;">LGSP_Phy_ISC@sni.co.kr</a></li>
            </ul>
            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [요청 메일 예시 보기]</summary><img src="images/ISC 방문등록 요청메일 예시.png" alt="ISC 방문등록 요청메일 예시" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <h2>📡 ISC 네트워크</h2>
            <p>ISC건물은 <strong>사내/사외망 둘 다 이용 가능</strong>합니다.</p>
            <p>각 회의실마다 와이파이 / 와이파이PW 가 부착되어 있습니다.</p>

            <div class="info-box">
                <i class="fas fa-wifi"></i>
                <div>ISC 각 회의실에 부착된 와이파이 정보를 확인하여 접속하세요. 사내망/사외망 모두 이용 가능합니다.</div>
            </div>
        `
    },
    {
        id: 'isc-catering',
        category: 'isc',
        categoryName: 'ISC',
        title: 'ISC 중식 및 케이터링 요청',
        keywords: ['ISC', '중식', '식사', '점심', '케이터링', '도시락', '식당', '메뉴', '단체', '식비', '음식', '구내식당'],
        content: `
            <h1>🍱 ISC 중식 및 케이터링 요청</h1>

            <h2>📞 ISC 담당자 연락처</h2>
            <table>
                <tr><th>분류</th><th>이름</th><th>연락처</th><th>메일</th><th>내용</th><th>기타</th></tr>
                <tr><td>ISC</td><td>이배성 책임</td><td>010-9588-2485</td><td>baesung.lee@lge.com</td><td>풀무원 식권 구입</td><td>ISC에서 교육 중, 이동의 편의를 위해 풀무원에서 식사를 진행하게 될 경우<br>*타사업장 인원이라 식수 권한이 없을 경우에만 해당 (마곡 근무 LG전자 인원은 권한 있음)</td></tr>
                <tr><td>ISC</td><td>이현웅 선임</td><td>010-4154-8257</td><td>hyunwoong@sni.co.kr</td><td>ISC 관련 문의</td><td>ISC 강의장 설비 관련 문의<br>냉난방 조절 or 책걸상 요청 등</td></tr>
                <tr><td>ISC</td><td>최광규 파트너</td><td>010-9291-5662</td><td>narayan@sni.co.kr</td><td>ISC 흡연장 오픈</td><td>ISC 8층 흡연장 오픈 요청</td></tr>
                <tr><td>ISC</td><td>글로벌라운지 담당자<br>(박상호 책임)</td><td>02-6987-1392</td><td>psh4227@dnocorp.com</td><td>케이터링 및 중식</td><td>ISC 강의장 다과 셋팅 및 글로벌라운지 중식 이용할 경우, 해당 담당자에게 요청</td></tr>
            </table>

            <h2>🎫 풀무원 식권 구입</h2>
            <ul>
                <li>해당 메일 내용에 대한 확인 답변 메일 받은 후, 풀무원 식당 식권 구매처에서 식권 구입</li>
                <li>소량(2~3장)은 별도 메일 없이, 캐셔에서 식권 구입</li>
                <li><strong>식권 구매 가능 시간 :</strong> 07:30~08:30 / 10:00~11:00</li>
                <li><strong>식권 구매처 :</strong> 풀무원 식당 건강도시락 판매장소 뒷 편 G-CAFE or 옆쪽 식권판매처 (아래 식권 판매 안내문 참고)</li>
            </ul>
            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [요청 메일 예시 및 식권판매안내 보기]</summary><img src="images/풀무원 식권 요청 메일 예시 및 식권판매안내.png" alt="풀무원 식권 요청 메일 예시 및 식권판매안내" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <h2>🚬 ISC 흡연장 오픈 요청</h2>
            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [요청 메일 예시 보기]</summary><img src="images/ISC 흡연장 오픈 요청 메일 예시.png" alt="ISC 흡연장 오픈 요청 메일 예시" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <h2>🍮 ISC 다과 셋팅</h2>
            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [요청 메일 예시 보기]</summary><img src="images/ISC 다과 셋팅 요청 메일 예시.png" alt="ISC 다과 셋팅 요청 메일 예시" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <h2>🍱 ISC 글로벌라운지 중식 요청</h2>
            <p>글로벌 라운지 중식 신청은 <strong>메일 요청</strong> or <strong>SP Portal > 공용시설 > 글로벌라운지 > 예약신청</strong></p>
            <details style="margin:12px 0; cursor:pointer;"><summary style="color:#6C63FF; font-weight:bold; font-size:1.05em;">📩 [요청 메일 예시 보기]</summary><img src="images/ISC글로벌라운지 중식요청 메일 예시.png" alt="ISC 글로벌라운지 중식요청 메일 예시" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"><img src="images/ISC글로벌라운지 중식요청 메일 예시2.png" alt="ISC 글로벌라운지 중식요청 메일 예시2" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);"></details>

            <div class="info-box">
                <i class="fas fa-utensils"></i>
                <div>ISC 중식 및 케이터링 관련 문의는 각 담당자에게 연락해주세요.</div>
            </div>
        `
    },
    {
        id: 'isc-equipment',
        category: 'isc',
        categoryName: 'ISC',
        title: 'ISC 장비 반/출입',
        keywords: ['ISC', '장비', '반입', '출입', '노트북', '모니터', '프로젝터', '반출', '장비 대여', '기기', '화상회의'],
        content: `
            <h1>🖥️ ISC 장비 반/출입</h1>

            <h2>📎 관련 파일 다운로드</h2>
            <ul>
                <li>📄 <a href="files/영상담당자 장비반출 품의.pptx" download style="color:#6C63FF; font-weight:bold;">영상담당자 장비반출 품의.pptx (다운로드)</a></li>
                <li>📄 <a href="files/ISC_촬영장비 리스트.xlsx" download style="color:#6C63FF; font-weight:bold;">ISC_촬영장비 리스트.xlsx (다운로드)</a></li>
            </ul>
        `
    },

    // ===== 지하공용회의실/CampPark =====
    {
        id: 'meeting-camppark',
        category: 'meeting-room',
        categoryName: '지하공용회의실 / CampPark',
        title: '지하공용회의실 / Camp Park 이용안내',
        keywords: ['지하', '공용', '회의실', 'CampPark', '캠프파크', '예약', '이용', '지하회의실', '공용회의실', 'B1', '해커톤', '네트워킹'],
        content: `
            <h1>🚪 지하공용회의실 / Camp Park 이용안내</h1>

            <h2>공용회의실 상세안내</h2>
            <p><a href="http://space.lge.com/collpack/collaboration/board/boardItem/readBoardItemLinkView.do?boardId=200043823364&itemId=200118770356&docPopup=true" target="_blank" style="color:#6C63FF; font-weight:bold;">★LG사이언스파크 회의실 현황 및 예약방법 안내★ (☜클릭)</a></p>

            <h2>공용회의실 예약방법</h2>
            <p>마곡공용회의실 담당자에게 예약 가능여부 문의<br>
            📧 <a href="mailto:mgmr@lge.com" style="color:#6C63FF; font-weight:bold;">mgmr@lge.com</a></p>

            <h3>📋 회의실 예약 요청 상세내용</h3>
            <img src="images/회의실 예약 요청 상세내용.png" alt="회의실 예약 요청 상세내용" style="width:100%; max-width:800px; border-radius:12px; margin:16px 0; box-shadow:0 2px 12px rgba(0,0,0,0.1);">

            <h3>⚠️ 회의실 예약시 유의사항</h3>
            <ul>
                <li>오디토리움/캠프파크 책상 전원작업의 경우 설치/해체작업 할 수 있도록 <strong>09:00~11:00, 13:00~16:00</strong> 내 별도 예약해주셔야 합니다. (약 2시간 30분 소요)</li>
                <li>사전에 요청하시지 않은 지원 건은 당일에 도움드리기 어려울 수 있는 점 양해부탁드립니다.</li>
                <li>공용회의실 예약의 경우, 주요 행사 일정에 따라 회의실 예약 사항 조정될 수 있습니다.</li>
                <li>회의 취소 또는 변경될 경우, 다른 구성원이 사용할 수 있도록 <strong>즉시 연락</strong>하여 주시기 바랍니다.</li>
                <li>쾌적한 회의실 환경 유지를 위해 회의실 내 <strong>음식 섭취를 제한</strong>하고 있습니다.</li>
                <li>다음 사용자를 위하여 사용 후 회의실 원복 후 퇴실 바랍니다. (ex: 책상 및 의자 정리, 빔 프로젝트 전원 종료 등)</li>
            </ul>

            <div class="info-box">
                <i class="fas fa-envelope"></i>
                <div>공용회의실 예약은 <strong>mgmr@lge.com</strong>으로 문의해주세요. 사전 요청되지 않은 건은 당일 지원이 어려울 수 있습니다.</div>
            </div>
        `
    },

    // ===== 간식 및 굿즈 업체 =====
    {
        id: 'snack-list',
        category: 'snack-goods',
        categoryName: '간식 및 굿즈 업체',
        title: '간식 추천 업체 List',
        keywords: ['간식', '추천', '업체', '디저트', '요거트', '아이스크림', '도넛', '크리스피크림', '과일', '컵과일', '티라미수', '바나나푸딩', '와플', '벤앤제리스', '마곡', '단체주문', '의정석', 'FRUIT13.5', 'BLCTD', '와플대학', '레디투고', '카페', '빵', '쿠키', '마카롱', '크로플', '고드니', '프레베리', '소카크', '올웨이즈베이글', '엘리케이커', '나따오비까', '오지오커피', '라크루뜨', '휘낭시에', '케이크', '베이글', '카이막', '에그타르트', '까눌레'],
        content: `
            <h1>🍪 간식 추천 업체 List</h1>

            <h2>🍦 단체 간식 주문 추천 업체</h2>
            <table>
                <tr><th>상호명</th><th>연락처</th><th>메뉴 구성 및 정보</th><th>비고</th></tr>
                <tr>
                    <td><a href="https://naver.me/GKbHgon1" target="_blank" style="color:#c97bb6;font-weight:600;">요거트아이스크림의정석 마곡점</a></td>
                    <td>📞 010-5812-3393</td>
                    <td>요거트 아이스크림 (메뉴 구성 예시 참고)</td>
                    <td>최소 <strong>2일 전</strong> 주문<br>만나서 카드결제 가능</td>
                </tr>
                <tr>
                    <td><a href="https://naver.me/FNIBB7mm" target="_blank" style="color:#c97bb6;font-weight:600;">크리스피크림도넛 화곡역점</a></td>
                    <td>📞 02-2602-1937</td>
                    <td>
                        1) 어쏘티드 하프더즌(6구) 40박스<br>
                        2) 오리지널 글레이즈드 하프더즌(6구) 40박스<br>
                        <em>※ 1인당 하프더즌 1박스 주문 (더즌을 나눠달라 요청)</em>
                    </td>
                    <td>할인 가능 (메뉴별 상이)<br>배송 시간 확인 필요<br>최소 <strong>2일 전</strong> 주문<br>만나서 카드결제 가능</td>
                </tr>
                <tr>
                    <td><a href="https://naver.me/GNWkXbUE" target="_blank" style="color:#c97bb6;font-weight:600;">FRUIT13.5</a></td>
                    <td>📞 0507-1491-1362</td>
                    <td>
                        1) 캔밀봉 컵과일 80개<br>
                        <em>※ 사장님께서 알아서 계절과일로 구성해주심</em>
                    </td>
                    <td>최소 <strong>1일 전</strong> 주문<br>만나서 카드결제 ❌<br><strong>직접 매장 방문 후 결제</strong></td>
                </tr>
                <tr>
                    <td><a href="https://naver.me/5EUZSlt5" target="_blank" style="color:#c97bb6;font-weight:600;">BLCTD 디저트 마곡점</a></td>
                    <td>📞 0507-1391-5052<br>사장님 📞 010-7438-1250</td>
                    <td>
                        1) BLCTD 티라미수 60개<br>
                        2) 바나나푸딩 20개<br>
                        <em>※ 단체주문 가능 메뉴 문의 필요</em>
                    </td>
                    <td>전화주문 후, 사장님께 확인문자 안내 필요<br>최소 <strong>2일 전</strong> 주문<br>만나서 카드결제 ❌<br><strong>직접 매장 방문 후 결제</strong></td>
                </tr>
                <tr>
                    <td><a href="https://naver.me/xGIETCaV" target="_blank" style="color:#c97bb6;font-weight:600;">와플대학 마곡역캠퍼스</a></td>
                    <td>📞 02-2088-7563<br>사장님 📞 010-4152-7612</td>
                    <td>
                        1) 애플시나몬 30개<br>
                        2) 바나나누텔라 20개<br>
                        3) 딸기누텔라 30개
                    </td>
                    <td>전화주문 후, 사장님께서 확인문자 송부<br>최소 <strong>1일 전</strong> 주문<br>만나서 카드결제 가능</td>
                </tr>
                <tr>
                    <td><a href="https://naver.me/FIf23jO7" target="_blank" style="color:#c97bb6;font-weight:600;">레디투고 디저트카페 &amp; 벤앤제리스 마곡DV점</a></td>
                    <td>📞 0507-1478-8309<br>사장님 📞 010-9729-0129</td>
                    <td>
                        골라먹는 더블팩 - 1개당 12,500원<br>
                        1) 하프 베이크드 30개<br>
                        2) 청키몽키 30개<br>
                        3) 체리 가르시아 10개<br>
                        4) 민트 초콜릿 청크 5개<br>
                        <em>※ 초콜릿칩 쿠키도우 등 품절 메뉴 多</em>
                    </td>
                    <td>전화주문 후, 사장님께 확인문자 안내 필요<br>최소 <strong>1일 전</strong> 주문<br>만나서 카드결제 ❌<br><strong>직접 매장 방문 후 결제</strong></td>
                </tr>
            </table>

            <h2>🍰 마곡 주변 디저트 & 간식 추천 매장 (블로그 인기 맛집)</h2>
            <table>
                <tr><th>상호명</th><th>추천 메뉴</th><th>비고</th></tr>
                <tr>
                    <td><a href="https://map.naver.com/p/entry/place/1374736548" target="_blank" style="color:#c97bb6;font-weight:600;">고드니 마곡본점</a></td>
                    <td>휘낭시에, 구움과자, 시즌 케이크</td>
                    <td>마곡나루역 2번 출구 도보 2분<br>글루텐프리 구움과자 전문<br>📞 070-8667-1053</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%ED%94%84%EB%A0%88%EB%B2%A0%EB%A6%AC%20%EB%A7%88%EA%B3%A1%EC%BC%80%EC%9D%B4%ED%81%AC" target="_blank" style="color:#c97bb6;font-weight:600;">프레베리 마곡케이크</a></td>
                    <td>딸기 생크림 케이크, 생과일 케이크, 조각케이크</td>
                    <td>발산역 9번 출구 도보 3분<br>생일·이벤트 케이크 예약 가능<br>📞 02-2668-7999</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%EC%86%8C%EC%B9%B4%ED%81%AC%20%EB%A7%88%EA%B3%A1" target="_blank" style="color:#c97bb6;font-weight:600;">소카크(SOKAK)</a></td>
                    <td>카이막 &amp; 빵, 크로플, 퀴네페, 두바이 초콜릿</td>
                    <td>발산역 도보 6분<br>튀르키예 감성 디저트 카페<br>📞 0507-1376-2207</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%EC%98%AC%EC%9B%A8%EC%9D%B4%EC%A6%88%EB%B2%A0%EC%9D%B4%EA%B8%80%20%EB%A7%88%EA%B3%A1" target="_blank" style="color:#c97bb6;font-weight:600;">올웨이즈 베이글</a></td>
                    <td>소금빵 베이글, 카야버터 베이글, 연어 샌드위치</td>
                    <td>마곡나루역 1번 출구 도보 4분<br>쫄깃 수제 베이글 전문<br>📞 0507-1479-7907</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%EC%97%98%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%BB%A4%20%EB%A7%88%EA%B3%A1" target="_blank" style="color:#c97bb6;font-weight:600;">엘리케이커</a></td>
                    <td>까눌레, 키슈, 수제 구움과자</td>
                    <td>마곡나루역 인근<br>파티셰 수제 디저트<br>디저트 소진 시 조기마감</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%EB%82%98%EB%94%B0%EC%98%A4%EB%B9%84%EA%B9%8C%20%EB%A7%88%EA%B3%A1%EC%A0%90" target="_blank" style="color:#c97bb6;font-weight:600;">나따오비까 마곡점</a></td>
                    <td>포르투갈식 에그타르트, 크림치즈타르트</td>
                    <td>발산역 인근<br>선물 포장 가능<br>📞 0507-1497-7973</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%EC%98%A4%EC%A7%80%EC%98%A4%EC%BB%A4%ED%94%BC%20%EB%A7%88%EA%B3%A1" target="_blank" style="color:#c97bb6;font-weight:600;">오지오커피</a></td>
                    <td>쑥크림라떼, 녹차크루, 호지티 크림라떼</td>
                    <td>마곡 인근<br>음료 + 디저트 함께 추천<br>10잔 스탬프 적립 이벤트</td>
                </tr>
                <tr>
                    <td><a href="https://map.naver.com/p/search/%EB%9D%BC%ED%81%AC%EB%A3%A8%EB%9C%A8%20%EC%84%9C%EC%9A%B8%EB%B3%B8%EC%A0%90" target="_blank" style="color:#c97bb6;font-weight:600;">라크루뜨 서울본점</a></td>
                    <td>바게트, 크루아상, 소금빵, 시즌 빵</td>
                    <td>마곡동<br>빵지순례 인기 베이커리<br>빵 종류 다양 · 포장 추천</td>
                </tr>
            </table>

            <div class="info-box">
                <i class="fas fa-cookie-bite"></i>
                <div>
                    <strong>📌 주문 TIP</strong><br>
                    · 대부분의 매장은 최소 <strong>1~2일 전</strong> 사전 주문이 필요합니다.<br>
                    · 결제 방식(현장 카드결제 / 매장 방문 결제)을 반드시 사전 확인하세요.
                </div>
            </div>
        `
    },
    {
        id: 'goods-list',
        category: 'snack-goods',
        categoryName: '간식 및 굿즈 업체',
        title: '굿즈 추천 업체 List',
        keywords: ['굿즈', '추천', '업체', '기념품', '에코백', '텀블러', '노트', '볼펜', '인쇄', '제작', '스티커', '배지', '키링', '머그컵', '마플', '오프린트미', '위프레스', '나눔기프트', '기프트앤', '프로모션', '다이버', '개성상인', '아이디어스', '레드프린팅', '오즈의제작소', '먼데이팩토리', '프린팅팅', '아유디샵', '다있다', 'Remati', '비더굿즈', '올댓프린팅', '퍼즐러브', '브랜딩', '웰컴키트', '판촉물', '포토카드', '각인'],
        content: `
            <h1>🎁 굿즈 추천 업체 List</h1>

            <h2>🛍️ 일반 굿즈 (소량 가능)</h2>
            <table>
                <tr><th>업체명</th><th>주요 품목</th><th>단가</th><th>최소주문</th><th>제작기간</th></tr>
                <tr><td><a href="https://www.marpple.com" target="_blank" style="color:#c97bb6;font-weight:600;">마플샵</a></td><td>에코백, 텀블러, 스티커</td><td>5,000원~</td><td>1개</td><td>3~5일</td></tr>
                <tr><td><a href="https://www.ohprint.me" target="_blank" style="color:#c97bb6;font-weight:600;">오프린트미</a></td><td>노트, 엽서, 포스터</td><td>1,000원~</td><td>10부</td><td>2~3일</td></tr>
                <tr><td><a href="https://wepress.kr" target="_blank" style="color:#c97bb6;font-weight:600;">위프레스</a></td><td>볼펜, 머그컵, 키링</td><td>3,000원~</td><td>10개</td><td>5~7일</td></tr>
            </table>

            <h2>📦 대량 제작 (50개 이상)</h2>
            <table>
                <tr><th>업체명</th><th>주요 품목</th><th>단가</th><th>최소주문</th><th>제작기간</th></tr>
                <tr><td><a href="https://www.nanumgift.com" target="_blank" style="color:#c97bb6;font-weight:600;">나눔기프트</a></td><td>기업 판촉물 전반</td><td>2,000원~</td><td>50개</td><td>7~10일</td></tr>
                <tr><td><a href="https://giftn.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">기프트앤</a></td><td>에코백, 파우치, USB</td><td>3,000원~</td><td>100개</td><td>7~14일</td></tr>
                <tr><td><a href="https://promotion119.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">프로모션119</a></td><td>배지, 메달, 트로피</td><td>5,000원~</td><td>30개</td><td>10~14일</td></tr>
            </table>

            <h2>🏷️ 추가 굿즈 추천 업체</h2>
            <table>
                <tr><th>업체명</th><th>주요 특징</th></tr>
                <tr><td><a href="https://www.idus.com" target="_blank" style="color:#c97bb6;font-weight:600;">아이디어스</a></td><td>핸드메이드 작품 플랫폼, 커스텀 굿즈·답례품</td></tr>
                <tr><td><a href="https://www.redprinting.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">레드프린팅 앤 프레스</a></td><td>스티커·명함·포스터·아크릴굿즈 등 디지털 인쇄 전문</td></tr>
                <tr><td><a href="https://mondayfactory.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">먼데이팩토리</a></td><td>퍼스널 브랜딩 굿즈·웰컴키트·에코백·키링 등</td></tr>
                <tr><td><a href="https://www.printingting.com" target="_blank" style="color:#c97bb6;font-weight:600;">프린팅팅</a></td><td>원스탑 인쇄 서비스, 포토카드·스티커·현수막 제작</td></tr>
                <tr><td><a href="https://www.gaesungsangin.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">개성상인</a></td><td>기업 판촉물·기념품·단체 굿즈 제작</td></tr>
                <tr><td><a href="https://www.diver.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">다이버</a></td><td>커스텀 굿즈·단체 상품 제작</td></tr>
                <tr><td><a href="https://ozfactory.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">오즈의 제작소</a></td><td>아크릴·키링·스티커 등 소량 맞춤 제작</td></tr>
                <tr><td><a href="https://ayudishop.com" target="_blank" style="color:#c97bb6;font-weight:600;">아유디샵</a></td><td>각인·커스텀 소품·개인화 굿즈</td></tr>
                <tr><td><a href="https://bethegoods.kr" target="_blank" style="color:#c97bb6;font-weight:600;">비더굿즈</a></td><td>브랜드 굿즈 기획·제작 전문</td></tr>
                <tr><td><a href="https://allthatprinting.com" target="_blank" style="color:#c97bb6;font-weight:600;">올댓프린팅</a></td><td>인쇄·출력·홍보물·판촉물 제작</td></tr>
                <tr><td><a href="https://www.puzzlove.co.kr" target="_blank" style="color:#c97bb6;font-weight:600;">퍼즐러브</a></td><td>포토퍼즐·맞춤 퍼즐 제작</td></tr>
                <tr><td><a href="https://remati.kr" target="_blank" style="color:#c97bb6;font-weight:600;">Remati</a></td><td>친환경 굿즈·리사이클링 소재 제작</td></tr>
                <tr><td><a href="https://daitdagift.com" target="_blank" style="color:#c97bb6;font-weight:600;">다있다! 기프트</a></td><td>기프트·답례품·기념품 종합 쇼핑몰</td></tr>
                <tr><td><a href="https://initialengraving.kr" target="_blank" style="color:#c97bb6;font-weight:600;">이니셜 각인 레이저 포인터</a></td><td>레이저 각인·이니셜 커스텀 소품</td></tr>
            </table>

            <h2>주문 절차</h2>
            <ol>
                <li>교육운영 담당자에게 필요 품목, 수량, 예산, 희망 납기일을 전달합니다.</li>
                <li>업체 견적 확인 후 디자인 시안을 협의합니다.</li>
                <li>디자인 확정 후 제작에 들어갑니다.</li>
                <li>완성품 검수 후 배송/수령합니다.</li>
            </ol>

            <div class="warning-box">
                <i class="fas fa-clock"></i>
                <div>대량 주문 시 최소 2~3주 전에 주문을 진행해 주세요. 급행 제작은 추가 비용이 발생할 수 있습니다.</div>
            </div>
        `
    },

    // ===== 마곡 생활안내 =====
    {
        id: 'magok-life',
        category: 'magok-life',
        categoryName: '마곡 생활안내',
        title: '마곡 생활안내',
        keywords: ['마곡', '생활', '식당', '카페', '편의시설', '약국', '병원', '은행', 'ATM', '편의점', '음식점', '맛집', '주변', '공원', '산책', '서울식물원'],
        content: `
            <h1>🗺️ 마곡 생활안내</h1>

            <h2>📎 참고 자료</h2>
            <p>LG사이언스파크 생활에 대한 더 자세한 안내는 아래 생활백서를 참고하세요.</p>
            <div class="info-box">
                <i class="fas fa-file-pdf"></i>
                <div>
                    <a href="files/★LG사이언스파크 생활백서_250716.pdf" target="_blank" style="color:#6C63FF;font-weight:600;text-decoration:underline;font-size:15px;">📄 ★LG사이언스파크 생활백서 다운로드</a>
                </div>
            </div>

            <h2>🍽️ 마곡 맛집 추천</h2>
            <p>마곡나루역·발산역 근처 20~30대에게 인기 많은 맛집이에요!</p>
            <table>
                <tr><th>식당명</th><th>종류</th><th>가격대</th><th>위치</th><th>특징</th></tr>
                <tr><td>리틀넥 마곡</td><td>브런치/양식</td><td>15,000~25,000원</td><td>마곡나루역 도보 5분</td><td>인스타 감성 브런치, 파스타 맛집 📸</td></tr>
                <tr><td>로우앤슬로우</td><td>수제버거</td><td>12,000~18,000원</td><td>마곡나루역 도보 3분</td><td>수제버거 명소, 점심 웨이팅 있음 🍔</td></tr>
                <tr><td>온기정</td><td>한식 덮밥</td><td>10,000~14,000원</td><td>마곡나루역 도보 5분</td><td>건강한 한 끼, 직장인 인기 ✨</td></tr>
                <tr><td>몽중헌 마곡점</td><td>중식</td><td>12,000~20,000원</td><td>마곡나루역 도보 7분</td><td>딤섬·짬뽕 맛집, 단체석 가능</td></tr>
                <tr><td>수담</td><td>한정식</td><td>13,000~18,000원</td><td>발산역 도보 5분</td><td>가성비 한정식, 깔끔한 인테리어</td></tr>
                <tr><td>텐동요시</td><td>일식 텐동</td><td>10,000~15,000원</td><td>마곡나루역 도보 4분</td><td>바삭한 튀김덮밥, 혼밥 추천 🍤</td></tr>
                <tr><td>더플레이트</td><td>양식/스테이크</td><td>15,000~30,000원</td><td>마곡나루역 도보 6분</td><td>분위기 좋은 데이트 맛집 🥩</td></tr>
                <tr><td>포베이 마곡점</td><td>베트남 쌀국수</td><td>9,000~13,000원</td><td>마곡나루역 도보 3분</td><td>가벼운 점심, 깔끔한 쌀국수 🍜</td></tr>
            </table>

            <h2>☕ 카페 추천</h2>
            <p>작업하기 좋고 분위기 있는 카페들이에요!</p>
            <table>
                <tr><th>카페명</th><th>위치</th><th>특징</th></tr>
                <tr><td>어니언 마곡점</td><td>마곡나루역 도보 5분</td><td>감성 베이커리 카페, 인스타 핫플 📸</td></tr>
                <tr><td>블루보틀 마곡</td><td>마곡나루역 도보 8분</td><td>스페셜티 커피, 조용한 분위기 ☕</td></tr>
                <tr><td>카페 레이어드 마곡</td><td>마곡나루역 도보 6분</td><td>넓은 공간, 대형 창문 뷰</td></tr>
                <tr><td>스타벅스 마곡나루역점</td><td>마곡나루역 도보 1분</td><td>접근성 최고, 콘센트 많음 🔌</td></tr>
                <tr><td>투썸플레이스 마곡점</td><td>마곡나루역 도보 4분</td><td>케이크 맛집, 미팅하기 좋음 🍰</td></tr>
                <tr><td>노티드 마곡</td><td>마곡나루역 도보 5분</td><td>도넛 맛집, 선물용 도넛 추천 🍩</td></tr>
            </table>

            <h2>🏪 편의시설</h2>
            <ul>
                <li><strong>편의점:</strong> CU, GS25 (W동 1층 및 지하 1층)</li>
                <li><strong>ATM:</strong> 신한은행 ATM (W동 1층 로비)</li>
                <li><strong>약국:</strong> 마곡온누리약국 (도보 3분)</li>
                <li><strong>병원:</strong> 마곡메디컬센터 (도보 5분) - 내과, 치과, 정형외과</li>
                <li><strong>우체국:</strong> 마곡우체국 (도보 7분)</li>
                <li><strong>다이소:</strong> 다이소 마곡나루역점 (도보 3분) - 급한 물품 구매 🛒</li>
                <li><strong>올리브영:</strong> 올리브영 마곡나루역점 (도보 4분) 💄</li>
            </ul>

            <h2>🌿 주변 공원 & 산책로</h2>
            <p>교육 사이 리프레시를 위해 가까운 공원을 방문해 보세요!</p>
            <ul>
                <li><strong>서울식물원:</strong> 도보 15분, 온실과 야외 정원 (입장료 5,000원) 🌱</li>
                <li><strong>서울식물원 호수공원:</strong> 도보 10분, 산책 & 사진 명소 📸</li>
                <li><strong>W동 옥상 정원:</strong> 건물 내, 출입 가능 시간 09:00~18:00</li>
            </ul>

            <div class="info-box">
                <i class="fas fa-map-marked-alt"></i>
                <div>마곡 지역은 지속적으로 개발 중이므로, 신규 매장 정보는 교육운영 담당자에게 문의해 주세요.</div>
            </div>
        `
    },

    // ===== 생활 지원 =====
    {
        id: 'life-meeting-detail',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '공용회의실 예약 및 운영규정',
        keywords: ['공용회의실', 'EP', '예약', '이메일', '회의실', 'Auditorium', 'Conference', 'Innovation Hall', 'Reinvent Hall', 'Camp Park', 'mgmr', '오디토리움', '컨퍼런스룸', '회의실예약', '패널티', 'No Show', '예약패드', '입실'],
        content: `
            <h1>🏛️ 공용회의실 예약 및 운영규정</h1>

            <h2>EP 시스템 예약 방법</h2>
            <div class="info-box">
                <i class="fas fa-desktop"></i>
                <div>LGEP → Biz. Support → 회의실 예약 → 회의실 장소선택(동/회의실호수) → 날짜/시간 선택 → 회의명 기입 → 신청<br>
                ※ 입실 시 회의실 앞 패널 <strong>'입실확인' 터치 必</strong><br>
                ※ 예약 후 10분 초과 시 '입실' 버튼 미터치 시 회의예약 자동 취소</div>
            </div>

            <h2>E-mail 예약 방법</h2>
            <p>📧 <a href="mailto:mgmr@lge.com" style="color:#c97bb6;">마곡공용회의실 (mgmr@lge.com)</a> 으로 아래 양식으로 메일 발송</p>
            <div class="info-box">
                <i class="fas fa-envelope"></i>
                <div>
                    <strong>제목:</strong> OO 회의실 예약신청<br>
                    1. 회의 일시: O월 O일 00시~00시<br>
                    2. 예약회의실: OO 회의실<br>
                    3. 회의명: 외부 OO고객사 Buyer Meeting<br>
                    4. 회의참석인원: 총 OO명<br>
                    5. 주요참석자: VIP, OO 임원<br>
                    6. 예약자 이름/본부/연락처:<br>
                    7. 기타사항: ex) 기자재, 레이아웃 요청
                </div>
            </div>

            <h2>운영 규정</h2>
            <table>
                <tr><th>항목</th><th>내용</th></tr>
                <tr><td><strong>사용목적</strong></td><td>업무 회의 및 주요 거래선 미팅 등 회의 용도로만 사용 가능 (Task/개발/실험 공간 사용 금지)</td></tr>
                <tr><td><strong>예약기간</strong></td><td>사전 예약 최대 1개월 전부터 가능, 최대 예약 기간 2일 (3일 이상 시 반려, 조직책임자 품의 시 최대 5일)</td></tr>
                <tr><td><strong>운영시간</strong></td><td>08:30~17:30 (초과 사용 시 담당자와 사전 협의)</td></tr>
                <tr><td><strong>Penalty</strong></td><td>위반 시 신청자 소속 조직 3개월간 후순위 배정</td></tr>
            </table>

            <h3>준수 사항</h3>
            <ol>
                <li>회의실 내 소모품 및 기자재 외부 반출 금지</li>
                <li>관리자 승인 없이 이용자간 회의실 양도 금지</li>
                <li>개인업무 용도 회의실 독점 예약/사용 금지</li>
                <li>예약 시간 준수 (초과 사용 시 관리자에게 사전 공유)</li>
                <li>수용인원 초과 사용 불가</li>
                <li>사용 후 원상 복구 (OA 전원 Off, 화이트보드 지우기, 책걸상 정리, 청소)</li>
                <li>사전 협의 없이 음식물 반입 금지</li>
                <li>미사용 시 최소 1일 전 담당자에게 공유, <strong>No Show 절대 금지!</strong></li>
            </ol>

            <h2>E-mail 예약 회의실 현황</h2>
            <table>
                <tr><th>위치</th><th>명칭</th><th>수용인원</th><th>비고</th></tr>
                <tr><td>B1F</td><td>Auditorium</td><td>96~270석</td><td>마이크(최대 4개), 조명, 현수막 설치 가능</td></tr>
                <tr><td>B1F</td><td>Conference Room</td><td>52석</td><td>동시통역 장비 사용 가능</td></tr>
                <tr><td>B1F</td><td>1번 회의실</td><td>22석</td><td>빔, 음향</td></tr>
                <tr><td>B1F</td><td>2번 회의실</td><td>18석</td><td>빔, 화상, 음향</td></tr>
                <tr><td>B1F</td><td>Decision Room</td><td>12석</td><td>VIP룸 - 자사 임원 참석 시</td></tr>
                <tr><td>W5 1F</td><td>Conference Room</td><td>43석</td><td>VIP룸</td></tr>
                <tr><td>W6 1F</td><td>대회의실</td><td>41석</td><td>VIP룸, 컨퍼런스 콜 사전 요청</td></tr>
                <tr><td>W10 1F</td><td>대회의실/중회의실</td><td>25/20석</td><td>빔, TV, 음향</td></tr>
                <tr><td>3F 브릿지</td><td>Camp Park 1</td><td>40석</td><td>통합 시 70석, 음향 사용 가능</td></tr>
                <tr><td>3F 브릿지</td><td>Camp Park 2</td><td>30석</td><td>Camp Park 1,2 통합 시에만 음향</td></tr>
                <tr><td>3F 브릿지</td><td>Camp Park 3</td><td>40석</td><td>빔</td></tr>
                <tr><td>W7~10 B1F</td><td>Innovation Hall</td><td>54석</td><td>양쪽 TV 설치</td></tr>
                <tr><td>W7~10 B1F</td><td>Reinvent Hall</td><td>52석</td><td>빔, TV, 화상, 음향</td></tr>
            </table>

            <p>📞 회의실 관련 문의: <a href="mailto:mgmr@lge.com" style="color:#c97bb6;">마곡공용회의실 (mgmr@lge.com)</a>, 마곡총무팀 (<a href="mailto:forest.shin@lge.com" style="color:#c97bb6;">forest.shin@lge.com</a>)</p>
        `
    },
    {
        id: 'life-posting',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '게시물/부착물 운영 기준',
        keywords: ['게시물', '부착물', '게시판', '포스터', '홍보', '부착', '품의', '게시', '철거'],
        content: `
            <h1>📌 게시물/부착물 운영 기준</h1>

            <h2>운영 절차</h2>
            <div class="info-box">
                <i class="fas fa-clipboard-list"></i>
                <div>EP 품의 작성 → 소속 HR조직(노경/조직문화) 승인 → 마곡총무팀장 승인 → 총무팀 방문하여 도장 날인 → 부착 → 철거 (게시기간 종료 후)</div>
            </div>

            <h2>게시판 위치</h2>
            <table>
                <tr><th>구분</th><th>위치</th><th>지원 게시물</th></tr>
                <tr><td>공용</td><td>B1F EV홀 게시판 / 3F 남북브릿지 게시판</td><td>전체공지 또는 본부 홍보 게시물</td></tr>
                <tr><td>공용</td><td>B1F 식당중앙 게시판</td><td>전체공지 목적 게시물</td></tr>
                <tr><td>전용</td><td>각동 층별 EV홀 벽면</td><td>본부 홍보목적 게시물</td></tr>
            </table>

            <h2>품의 작성 내용</h2>
            <div class="info-box">
                <i class="fas fa-file-alt"></i>
                <div>
                    <strong>제목:</strong> 사이언스파크 게시물 부착 승인 요청(OO본부/부문)<br><br>
                    1. 게시물 내용: OO본부 XXX행사의 건<br>
                    2. 게시장소 및 개수: W4동 3층 E/V홀 (1개소)<br>
                    3. 게시기간: 2025년 7월 13일(월) ~ 17일(금)<br>
                    4. 담당자: OO본부 OOO팀 OOO책임<br>
                    5. 비고: 게시기간 종료 후 부착 담당자가 직접 제거 예정<br>
                    ※ 첨부: 게시물 O부<br><br>
                    <strong>결재선:</strong> 1차 소속 HR조직 담당자 → 2차 마곡총무팀장<br>
                    <strong>참조자:</strong> 마곡노경파트 진성현 책임, 마곡총무팀 이원영 책임
                </div>
            </div>

            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>※ 승인을 받지 않은 게시물 또는 게시 기한이 지났으나 철거하지 않은 게시물은 별도 안내 없이 회수/폐기<br>
                ※ 종교/정치 관련 또는 회사 운영/업무 목적에 부합하지 않는 게시물은 지원 불가</div>
            </div>
        `
    },
    {
        id: 'life-carwash',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '하누리 스팀세차',
        keywords: ['세차', '하누리', '스팀세차', '차량', '세차장'],
        content: `
            <h1>🚗 하누리 스팀세차</h1>

            <h2>신청 방법</h2>
            <div class="info-box">
                <i class="fas fa-mouse-pointer"></i>
                <div>Work → Request-Map → <strong>하누리 or 스팀세차</strong> 검색 → 하누리 스팀세차 클릭 → 세차 신청</div>
            </div>

            <h2>세차 정보</h2>
            <ul>
                <li><strong>세차장소:</strong> W6동 지하 2F (310 기둥앞)</li>
                <li><strong>연락처:</strong> 2033-4855</li>
            </ul>

            <h2>세차 단가 (실내+실외)</h2>
            <table>
                <tr><th>차종</th><th>가격</th></tr>
                <tr><td>경차</td><td>8,000원</td></tr>
                <tr><td>승용차</td><td>10,000원</td></tr>
                <tr><td>SUV</td><td>14,000원</td></tr>
                <tr><td>승합</td><td>20,000원</td></tr>
            </table>

            <h2>이용 절차</h2>
            <ol>
                <li>차량 입고 (차량 Key 전달/보관 - Key 투입구 이용)</li>
                <li>스팀 세차 진행</li>
                <li>세차완료 문자 발송</li>
                <li>결제 후 출차 (신용카드만 결제 가능)</li>
            </ol>

            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>※ 당첨자의 경우 당첨 후 3개월 이후부터 재신청 가능<br>
                ※ 세차 당첨은 양도 불가, 반드시 본인명의 차량만 수혜 가능<br>
                ※ 사내 부부의 경우에도 동일 차량 중복 신청 불가<br>
                ※ 당첨 후 개인사유로 취소 시 3개월 패널티 적용</div>
            </div>
        `
    },
    {
        id: 'life-sandy',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '샌디앱 등록/사용 방법',
        keywords: ['샌디앱', '샌디', 'sandy', '앱', '식당메뉴', 'ID카드', '식대', '통근버스', '무인택배', '물품대여', '우산', '공구', '도와주세요'],
        content: `
            <h1>📱 샌디앱 등록/사용 방법</h1>

            <h2>주요 메뉴</h2>
            <table>
                <tr><th>메뉴</th><th>기능</th></tr>
                <tr><td><strong>사원식당</strong></td><td>식당 메뉴 확인 (일간, 주간)</td></tr>
                <tr><td><strong>ID카드 식대 잔액</strong></td><td>현재 본인 ID카드에 충전된 식대 금액 확인</td></tr>
                <tr><td><strong>통근버스/통근민원</strong></td><td>통근버스 및 사업장 셔틀버스 노선 확인 및 민원 접수</td></tr>
                <tr><td><strong>무인택배</strong></td><td>B1동 ISC 연결통로 무인택배 신청 (회원 가입 및 보안 통문 별도)</td></tr>
                <tr><td><strong>우산/물품/공구 대여</strong></td><td>14개 품목에 대한 대여신청 (B1 업무지원센터에서 수령)</td></tr>
                <tr><td><strong>도와주세요</strong></td><td>위험 및 고장 신고, 청소요청, 냉난방 신청 등</td></tr>
            </table>

            <h2>대여 가능 품목</h2>
            <table>
                <tr><th>항목</th><th>대여 가능 품목</th></tr>
                <tr><td><strong>물품 대여</strong></td><td>카메라, 스피커, 포스터 스탠드, 이동 카트, 피크닉 매트, 휴대용 청소기, 철제 X배너, 손풍기</td></tr>
                <tr><td><strong>우산 대여</strong></td><td>UV차단 양산, 파인애플 우산</td></tr>
                <tr><td><strong>공구 대여</strong></td><td>아크릴 삼각 명판, 수공구 세트, 헤머 드릴</td></tr>
            </table>

            <div class="info-box">
                <i class="fas fa-question-circle"></i>
                <div>
                    <strong>문의사항 (설치 및 기능 관련)</strong><br>
                    카카오톡 채널: <a href="http://pf.kakao.com/_xhJxkZK" target="_blank" style="color:#c97bb6;">http://pf.kakao.com/_xhJxkZK</a><br>
                    이메일: <a href="mailto:sandiapp@sni.co.kr" style="color:#c97bb6;">sandiapp@sni.co.kr</a><br>
                    문의 가능 시간: 평일 09:00 ~ 17:00
                </div>
            </div>
        `
    },
    {
        id: 'life-mail',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '문서 행낭 / 등기 / 택배',
        keywords: ['행낭', '등기', '택배', '문서', '발송', '우편', '편의점택배', '판토스', '시료', '자재', '업무지원센터', '메일센터'],
        content: `
            <h1>📦 문서 행낭 / 등기 / 택배</h1>

            <h2>문서 행낭 발송 방법</h2>
            <div class="info-box">
                <i class="fas fa-paper-plane"></i>
                <div>업무지원센터 방문 → 발송대장 작성 후 발송함에 물건 적재 → 접수된 물건 확인 후 행낭가방에 정리 → 행낭 전문 업체 통해 수/발신 → 수신한 물품 업무지원센터에서 정리/메일 발송 → 물품 전달</div>
            </div>

            <h2>행낭 수신일 안내</h2>
            <table>
                <tr><th>발신 → 수신</th><th>수신일</th><th>비고</th></tr>
                <tr><td>마곡 → 트윈</td><td>다음날 오전</td><td>-</td></tr>
                <tr><td>마곡 → 인사서비스센터</td><td>다음날 오전</td><td>-</td></tr>
                <tr><td>마곡 → 서울역</td><td>다음날 오후</td><td>-</td></tr>
                <tr><td>마곡 → 그 외 사업장</td><td>다다음날 오후 (2~3일)</td><td>서초, 인천, 창원, 구미 등</td></tr>
            </table>
            <p>※ 행낭 마지막 접수 시간(12시55분) 이후 접수 건은 다음날 발송</p>

            <h2>등기 서비스</h2>
            <div class="info-box">
                <i class="fas fa-envelope-open-text"></i>
                <div>등기 품의 결재 작성/완료 → 해당 품의 출력 → 북측 업무지원센터 방문 → 등기물품 전달<br>
                ※ 등기 발송시간: 당일 <strong>14시 50분</strong> (이후 접수 시 다음날 발송)<br>
                ※ 빠른 등기 다음날 도착, 일반 등기 2~3일 소요<br>
                ※ CC(참조자)에 <strong>'jungwon1.yeom@lgepartner.com'</strong> 반영 必</div>
            </div>

            <h2>시료/자재 통문</h2>
            <ul>
                <li>남측 업무지원센터 방문하여 근무자에게 지원 요청 (사무실 이사에 한해 지원)</li>
                <li>당일 발송 가능: 평택 12시55분 이전 / 인천 14시35분 이전 접수 건</li>
                <li>마감시간 이후 접수 건은 명일 발송</li>
            </ul>

            <h2>편의점 택배</h2>
            <p>GS25 편의점 택배 서비스를 이용할 수 있습니다.</p>

            <h2>해외 발송</h2>
            <p>📞 판토스: 2033-5604</p>
        `
    },
    {
        id: 'life-security-detail',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '정보보안 (물리보안 상세)',
        keywords: ['정보보안', '물리보안', 'Mobile On', '모바일온', 'X-ray', '보안검색', '통문', '출입권한', '제한구역', '실험실', 'Security Portal', '휴대기기', '홀로그램', '비정형품의', 'SLC', '보안서약', 'CCTV', 'ID카드', '반출입', '정보보호지원센터'],
        content: `
            <h1>🔐 정보보안 (물리보안 상세)</h1>

            <h2>보안검색존 안내</h2>
            <ul>
                <li>통문 장소 및 검색 장비는 <strong>각 동 1층</strong>에 구성 (동간 이동 시 B1층 또는 3층 연결 브릿지)</li>
                <li>Mobile On 미 설치자 퇴실 시 알람 발생 → 보안 요원의 휴대기기 확인 요청 시 적극 협조</li>
                <li>임산부 전용 퇴근 Gate 운영 (보안부서 사전 신청 必)</li>
            </ul>

            <h2>정보보호지원센터 주요 업무</h2>
            <table>
                <tr><th>업무</th></tr>
                <tr><td>출입 관련 문의</td></tr>
                <tr><td>정보자산 및 고정자산 반/출입</td></tr>
                <tr><td>정보자산 바코드 등록</td></tr>
                <tr><td>휴대기기 등록</td></tr>
                <tr><td>미등록 물품 반출</td></tr>
                <tr><td>임직원/협력업체 보안서약 (퇴사/입퇴실)</td></tr>
                <tr><td>ID카드 발급 및 케이스 교체</td></tr>
                <tr><td>보안라벨 재 부착</td></tr>
                <tr><td>핸드폰 카메라 봉인</td></tr>
            </table>
            <p>📞 정보보호지원센터: <strong>2033-1144 / 1086</strong></p>

            <h2>개인 휴대기기 등록</h2>
            <div class="info-box">
                <i class="fas fa-mobile-alt"></i>
                <div>
                    <strong>경로:</strong> New Security Portal > 자산 > 개인휴대기기등록 > 상세내용 작성 및 요청 > 정보보호지원센터 방문<br>
                    개인 휴대기기 등록하여 <strong>홀로그램 스티커 부착</strong> 후 지참 가능
                </div>
            </div>

            <h2>제한구역/실험실 출입 권한 신청</h2>
            <h3>W동</h3>
            <div class="info-box">
                <i class="fas fa-key"></i>
                <div>
                    <strong>경로:</strong> New Security Portal > 기타 > 비정형품의 → 양식선택 → "출입권한" 검색하여 해당 품의 양식 선택<br><br>
                    ※ ID Card 단말기 위치(건물동/층)와 단말기명 확인 (상단 라벨)<br>
                    ※ 실험실/Task Room의 경우 현업 관리자에게 문의 후 진행<br>
                    ※ 공용구역(B1F~1F)은 임직원 권한 신청 불필요<br>
                    ※ 타 본부/제한구역(실험실 등)은 별도 출입권한 신청 필요
                </div>
            </div>

            <h3>SLC동</h3>
            <div class="info-box">
                <i class="fas fa-key"></i>
                <div>
                    <strong>경로:</strong> New Security Portal > 기타 > 비정형품의 → [사이언스파크][출입]SLC출입제한구역 출입권한 신청<br>
                    ※ 층/실험실명 정확히 기재<br>
                    ※ 품의 완료 후 SLC 1층에서 생체정보 등록 필요
                </div>
            </div>

            <div class="warning-box">
                <i class="fas fa-shield-alt"></i>
                <div>※ 비인가 지역 출입 시도는 모니터링되며, 우회 경로 보안 위반 시 권한 제한 및 보안 Penalty 부여<br>
                ※ 허가 받은 출입자 외 권한 없는 동행인의 출입 불허 (적발 시 보안 Penalty 부과 및 권한 회수)<br>
                ※ 문의: 유선 02-2033-1144(정보보호지원센터) / 1113(출입안내데스크) / 메일 <a href="mailto:mgaccess@lge.com" style="color:#c97bb6;">mgaccess@lge.com</a></div>
            </div>

            <h2>Mobile On 설치</h2>
            <p>📱 <a href="http://mobileonv3.lge.com" target="_blank" style="color:#c97bb6;">http://mobileonv3.lge.com</a> URL 접속 → 앱 다운 설치 or 1544-5770 Help desk 설치앱 SMS 요청</p>
            <p>상세 설치 가이드: sp.lge.com 접속 → 우측 상단 정보보호가이드 → 모바일 보안 → Mobile ON 설치가이드&FAQ</p>
        `
    },
    {
        id: 'life-emergency',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '응급의료기기 / 비상상황 행동요령',
        keywords: ['응급', '의료', 'AED', 'CPR', '심폐소생술', '자동심장충격기', '비상', '화재', '대피', '비상대피', '소방', '관제센터', '1119', '피난', '비상계단', '집결지', 'LG아트센터'],
        content: `
            <h1>🚨 응급의료기기 / 비상상황 행동요령</h1>

            <h2>🏥 응급의료기기 설치위치</h2>
            <ul>
                <li><strong>자동심장충격기(AED):</strong> W1동~W10동 로비 및 각층 통로 (93개소), SLC동 B2F 방재실 통로 및 4층 (2개소), 1,2단계 B2,3F (12개소), B3F 수변전실 (6개소)</li>
                <li><strong>인공소생기:</strong> W1동~W10동 1F 로비 안내데스크 (8개소)</li>
                <li><strong>휠체어:</strong> W5동, W6동 1F 자판기, 건강관리실 (3개소)</li>
            </ul>

            <div class="warning-box">
                <i class="fas fa-phone-alt"></i>
                <div><strong>응급 상황 발생 시 119 우선 신고 후</strong> 아래 연락처로 연락<br>
                📞 통합관제센터: <strong>02-2033-1119</strong></div>
            </div>

            <h2>🔥 비상상황 발생시 행동요령</h2>
            <h3>통합관제센터</h3>
            <ul>
                <li>위치: W4동 M층</li>
                <li>인력운영: 평일/휴일 주·야간 8명 (교대근무, 24시간 감시체계)</li>
                <li>Safety Police: 사업장 내 위험요인·안전감시활동</li>
                <li>자위소방대: 화재 시 초기대응, 피난유도</li>
            </ul>

            <h3>비상대피 집결지</h3>
            <p>🏃 <strong>LG아트센터 광장</strong> (LG사이언스파크 마주보는 방면 광장)</p>

            <h3>층별 대피 요령</h3>
            <table>
                <tr><th>구역</th><th>대피 방법</th></tr>
                <tr><td><strong>지하1층</strong></td><td>피난유도등 표시를 따라 가까운 비상계단 또는 선큰을 통해 지상 대피 → 집결지</td></tr>
                <tr><td><strong>지하2,3층 주차장</strong></td><td>피난유도선 및 표지를 따라 가까운 비상계단 → 지상 대피 → 집결지</td></tr>
                <tr><td><strong>1층</strong></td><td>피난유도 표지를 따라 로비 또는 외부 Emergency Exit → 바깥 대피 → 집결지</td></tr>
                <tr><td><strong>2층~최상층</strong></td><td>피난유도 표지를 따라 비상계단 → 1층으로 대피 → 집결지</td></tr>
                <tr><td><strong>옥상층</strong></td><td>피난유도 표지를 따라 가까운 비상계단 → 지상 대피 → 집결지</td></tr>
            </table>

            <div class="warning-box">
                <i class="fas fa-exclamation-circle"></i>
                <div>
                    ⚠️ 화재 시 비상구는 자동으로 개방됩니다 (잠금해제)<br>
                    ⚠️ <strong>엘리베이터 절대 탑승 금지</strong><br>
                    📞 통합관제센터: <strong>02-2033-1119</strong>
                </div>
            </div>
        `
    },
    {
        id: 'life-contacts',
        category: 'life-support',
        categoryName: '생활 지원',
        title: '업무지원 부서 연락처 (Contact Point)',
        keywords: ['연락처', '담당자', '총무팀', '안전보건', '정보보호', '환경시설', 'Contact', '문의', '전화번호', '내선', '채승우', '이배성', '홍의표', '신동근', '황선흥', '이원영', '박형기', '홍재화', '장준혁'],
        content: `
            <h1>📞 업무지원 부서 연락처</h1>

            <h2>총무팀</h2>
            <table>
                <tr><th>업무명</th><th>담당자</th></tr>
                <tr><td>의전/행사 (공통행사, VS, HS, ES, MS, 고가혁 등)</td><td>채승우 책임</td></tr>
                <tr><td>식당/식대 (아워홈/풀무원)</td><td>이배성 책임</td></tr>
                <tr><td>CJ식당</td><td>홍의표 책임</td></tr>
                <tr><td>통근버스, 셔틀버스 관리</td><td>홍재화 책임</td></tr>
                <tr><td>기획, 인천사업장 관리</td><td>정희석 책임</td></tr>
                <tr><td>어린이집, 예산, 배부비율</td><td>조인애 책임</td></tr>
                <tr><td>레이아웃(W2~7동), 회의실 관리</td><td>신동근 책임</td></tr>
                <tr><td>레이아웃(W1, W8~10동), 부착물 관리</td><td>황선흥 책임</td></tr>
                <tr><td>가구 집기 지원, 수선 문의</td><td>신동근 책임</td></tr>
                <tr><td>미화/피트니스</td><td>홍재화 책임</td></tr>
                <tr><td>차량 및 기사관리</td><td>채승우 책임</td></tr>
                <tr><td>법인/유선회선, 인장, 스포츠티켓, 게시물</td><td>이원영 책임</td></tr>
                <tr><td>하누리Café, 입점업체 관리(편의점, 은행 등)</td><td>박형기 책임</td></tr>
                <tr><td>주차 관리 (주차권 배부, 기준 수립 등)</td><td>홍의표 책임</td></tr>
                <tr><td>다이닝홀</td><td><a href="mailto:dininghall@lge.com" style="color:#c97bb6;">dininghall@lge.com</a> / 2033-1185</td></tr>
                <tr><td>ISC 글로벌라운지 예약</td><td><a href="https://portal.lgsp.co.kr" target="_blank" style="color:#c97bb6;">portal.lgsp.co.kr</a> / 02-6987-1392</td></tr>
            </table>

            <h2>안전/보건팀 (W4동 1층)</h2>
            <table>
                <tr><th>업무명</th><th>담당자</th></tr>
                <tr><td>공사안전관리, Safety Walk, SHEE Index</td><td>김정민 책임</td></tr>
                <tr><td>해외법인 지원, 사전 심사 관리</td><td>김재호 책임</td></tr>
                <tr><td>안전사고/산업재해 관리, 중처법</td><td>윤대찬 책임</td></tr>
                <tr><td>인천사업장 중처법, 해외법인 지원</td><td>류태영 책임</td></tr>
                <tr><td>인천사업장 안전관리기획, ISO 인증</td><td>구자경 책임</td></tr>
                <tr><td>소방안전 (소방공사, 화재예방, 비상대응 훈련)</td><td>조휘래 선임</td></tr>
                <tr><td>산업보건, 방사선 안전관리, 안전교육</td><td>최선우 선임</td></tr>
                <tr><td>안전문화, 위험성평가, ISO인증</td><td>안홍준 선임</td></tr>
                <tr><td>연구실 안전관리, 안전체험관 운영</td><td>강현민 사원</td></tr>
                <tr><td>건강관리실 (산업보건, 건강검진, 응급대응)</td><td>김서윤 책임간호사 / 정주리 선임간호사 / 김지혜 간호사</td></tr>
            </table>

            <h2>정보보호 (W4동 1층)</h2>
            <table>
                <tr><th>업무명</th><th>담당자</th></tr>
                <tr><td>반출입/CCTV/방문예약/ID카드/물리보안</td><td>장준혁 책임 / 김영상 선임</td></tr>
                <tr><td>무선보안(WIPS), Mobile ON, 외부망</td><td>김용태 책임</td></tr>
                <tr><td>Privacy-I, 비업무 트래픽, 사이버 보안</td><td>손경태 책임</td></tr>
                <tr><td>MAC DLP</td><td>김영상 선임</td></tr>
                <tr><td>정보보안 인증, 고객사 보안 대응, VPN</td><td>김택영 책임</td></tr>
                <tr><td>TSS활동, 보안교육/홍보</td><td>김양훈 책임</td></tr>
                <tr><td>개인정보보호</td><td>권기대 책임</td></tr>
                <tr><td>미환입 정보/고정 자산 관리</td><td>이혜지 주임</td></tr>
            </table>
            <p>📞 정보보호지원센터 (ID카드/모바일온 스티커 발급 등): <strong>2033-1144 / 1086</strong></p>

            <h2>환경시설팀</h2>
            <table>
                <tr><th>업무명</th><th>연락처/담당자</th></tr>
                <tr><td>조명제어, 냉난방 및 시설물 보수요청</td><td>2033-1119</td></tr>
                <tr><td>주차정기권 변경/양도, 일일주차 문의</td><td>2033-1122</td></tr>
                <tr><td>회의실 예약, Welcome Board</td><td>2033-1229</td></tr>
                <tr><td>해외발송 (판토스)</td><td>2033-5604</td></tr>
                <tr><td>스팀세차 (하누리)</td><td>2033-4855</td></tr>
                <tr><td>전기설비, 승강기, 에너지관리</td><td>장우석 책임</td></tr>
                <tr><td>통신/방송 설비관리</td><td>최우석 책임</td></tr>
                <tr><td>건축/기계/Lay-out</td><td>백석현 선임</td></tr>
                <tr><td>화학물질, 회의장비(빔/화상) 관리</td><td>장석원 선임</td></tr>
                <tr><td>고압가스 안전관리, 폐기물관리</td><td>박형민 선임</td></tr>
                <tr><td>환경관리(대기/수질), 환경설비</td><td>전보현 선임</td></tr>
                <tr><td>개인용 전기/전열기기 신청/승인</td><td>이아현 사원</td></tr>
            </table>
        `
    }
];

// ---- 카테고리 정의 ----
const categories = {
    'w-building': {
        name: 'W동',
        icon: 'fas fa-building',
        emoji: '🏢',
        items: ['w-access', 'w-classroom', 'w-security', 'w-network', 'w-facilities', 'w-commute', 'w-parking']
    },
    'isc': {
        name: 'ISC',
        icon: 'fas fa-calendar-check',
        emoji: '📋',
        items: ['isc-reservation', 'isc-catering', 'isc-equipment']
    },
    'meeting-room': {
        name: '지하공용회의실 / CampPark',
        icon: 'fas fa-door-open',
        emoji: '🚪',
        items: ['meeting-camppark']
    },
    'snack-goods': {
        name: '간식 및 굿즈 업체',
        icon: 'fas fa-cookie-bite',
        emoji: '🍪',
        items: ['snack-list', 'goods-list']
    },
    'magok-life': {
        name: '마곡 생활안내',
        icon: 'fas fa-map-marked-alt',
        emoji: '🗺️',
        items: ['magok-life']
    },
    'life-support': {
        name: '생활 지원',
        icon: 'fas fa-hands-helping',
        emoji: '🛠️',
        items: ['life-meeting-detail', 'life-posting', 'life-carwash', 'life-sandy', 'life-mail', 'life-security-detail', 'life-emergency', 'life-contacts']
    }
};

// ---- DOM 요소 ----
const heroSection = document.getElementById('heroSection');
const categorySection = document.getElementById('categorySection');
const searchResults = document.getElementById('searchResults');
const detailView = document.getElementById('detailView');
const headerSearch = document.getElementById('headerSearch');
const mainSearchInput = document.getElementById('mainSearchInput');
const headerSearchInput = document.getElementById('headerSearchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

// ---- 현재 상태 ----
let currentView = 'home';

// ========== 네비게이션 ==========
let isRouting = false; // 라우팅 중복 방지

function goHome() {
    currentView = 'home';
    heroSection.style.display = '';
    categorySection.style.display = '';
    searchResults.style.display = 'none';
    detailView.style.display = 'none';
    headerSearch.classList.remove('visible');
    mainSearchInput.value = '';
    headerSearchInput.value = '';
    if (!isRouting) updateHash('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showView(view) {
    heroSection.style.display = 'none';
    categorySection.style.display = 'none';
    searchResults.style.display = 'none';
    detailView.style.display = 'none';
    headerSearch.classList.add('visible');

    if (view === 'search') {
        searchResults.style.display = '';
    } else if (view === 'detail') {
        detailView.style.display = '';
    }
    currentView = view;
}

// ========== 검색 기능 ==========
function performSearch(query) {
    query = query.trim();
    if (!query) return;

    headerSearchInput.value = query;
    const results = searchData(query);
    renderSearchResults(query, results);
    showView('search');
    if (!isRouting) updateHash('search/' + encodeURIComponent(query));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchData(query) {
    const q = query.toLowerCase();
    const terms = q.split(/\s+/);

    return data
        .map(item => {
            let score = 0;

            // 제목 매칭
            terms.forEach(term => {
                if (item.title.toLowerCase().includes(term)) score += 10;
            });

            // 키워드 매칭
            terms.forEach(term => {
                item.keywords.forEach(kw => {
                    if (kw.toLowerCase().includes(term)) score += 5;
                });
            });

            // 본문 매칭
            const plainText = item.content.replace(/<[^>]*>/g, '').toLowerCase();
            terms.forEach(term => {
                const regex = new RegExp(escapeRegExp(term), 'gi');
                const matches = plainText.match(regex);
                if (matches) score += matches.length;
            });

            return { ...item, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderSearchResults(query, results) {
    const queryEl = document.getElementById('searchQuery');
    const countEl = document.getElementById('resultCount');
    const listEl = document.getElementById('resultsList');

    queryEl.textContent = `"${query}"`;
    countEl.textContent = `(${results.length}건)`;

    if (results.length === 0) {
        listEl.innerHTML = `
            <div class="no-results fade-in">
                <span class="no-results-emoji">🔍</span>
                <p>"${query}"에 대한 검색 결과가 없습니다.</p>
                <p style="margin-top:8px;font-size:13px;color:#c0b0c0;">다른 키워드로 검색해 보세요!</p>
            </div>
        `;
        return;
    }

    listEl.innerHTML = results.map(item => {
        const plainText = item.content.replace(/<[^>]*>/g, '');
        let snippet = getSnippet(plainText, query);

        return `
            <div class="result-card fade-in" onclick="showDetail('${item.id}')">
                <div class="result-category"><i class="fas fa-folder"></i> ${item.categoryName}</div>
                <div class="result-title">${highlightText(item.title, query)}</div>
                <div class="result-snippet">${highlightText(snippet, query)}</div>
            </div>
        `;
    }).join('');
}

function getSnippet(text, query) {
    const q = query.toLowerCase();
    const terms = q.split(/\s+/);
    const idx = text.toLowerCase().indexOf(terms[0]);

    if (idx === -1) {
        return text.substring(0, 150) + '...';
    }

    const start = Math.max(0, idx - 50);
    const end = Math.min(text.length, idx + 150);
    let snippet = text.substring(start, end).trim();

    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';

    return snippet;
}

function highlightText(text, query) {
    const terms = query.trim().split(/\s+/);
    let result = text;
    terms.forEach(term => {
        if (term) {
            const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        }
    });
    return result;
}

// ========== 자동완성 ==========
mainSearchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim();
    if (q.length === 0) {
        searchSuggestions.classList.remove('active');
        return;
    }
    const suggestions = getSuggestions(q);
    if (suggestions.length > 0) {
        searchSuggestions.innerHTML = suggestions.map(s =>
            `<div class="suggestion-item" onclick="performSearch('${s.replace(/'/g, "\\'")}')">
                <i class="fas fa-search"></i>
                ${highlightText(s, q)}
            </div>`
        ).join('');
        searchSuggestions.classList.add('active');
    } else {
        searchSuggestions.classList.remove('active');
    }
});

mainSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchSuggestions.classList.remove('active');
        performSearch(mainSearchInput.value);
    }
});

headerSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        performSearch(headerSearchInput.value);
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchSuggestions.classList.remove('active');
    }
});

function getSuggestions(query) {
    const q = query.toLowerCase();
    const allKeywords = new Set();

    data.forEach(item => {
        allKeywords.add(item.title);
        item.keywords.forEach(kw => allKeywords.add(kw));
    });

    return Array.from(allKeywords)
        .filter(kw => kw.toLowerCase().includes(q))
        .slice(0, 8);
}

// ========== 카테고리 & 상세 ==========
function showCategory(categoryId) {
    const cat = categories[categoryId];
    if (!cat) return;

    const firstItemId = cat.items[0];
    showDetail(firstItemId);
}

function showDetail(itemId) {
    const item = data.find(d => d.id === itemId);
    if (!item) return;

    renderSidebar(item.category, itemId);
    renderContent(item);
    showView('detail');
    if (!isRouting) updateHash('detail/' + itemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSidebar(categoryId, activeItemId) {
    const cat = categories[categoryId];
    const sidebar = document.getElementById('detailSidebar');

    const menuItems = cat.items.map(id => {
        const item = data.find(d => d.id === id);
        return `<li><a class="${id === activeItemId ? 'active' : ''}" onclick="showDetail('${id}')">${item.title}</a></li>`;
    }).join('');

    sidebar.innerHTML = `
        <div class="sidebar-header">
            <span style="font-size:18px;">${cat.emoji}</span>
            ${cat.name}
        </div>
        <ul class="sidebar-menu">
            ${menuItems}
        </ul>
    `;
}

function renderContent(item) {
    const content = document.getElementById('detailContent');
    const cat = categories[item.category];

    content.innerHTML = `
        <div class="content-breadcrumb">
            <span class="bc-link" onclick="goHome()">홈</span>
            <i class="fas fa-chevron-right" style="font-size:9px;color:#d0c0d0;"></i>
            <span class="bc-link" onclick="showCategory('${item.category}')">${cat.name}</span>
            <i class="fas fa-chevron-right" style="font-size:9px;color:#d0c0d0;"></i>
            <span>${item.title}</span>
        </div>
        <div class="fade-in">
            ${item.content}
        </div>
    `;
}

// ========== 스크롤 시 헤더 검색바 노출 ==========
window.addEventListener('scroll', () => {
    if (currentView === 'home') {
        if (window.scrollY > 280) {
            headerSearch.classList.add('visible');
        } else {
            headerSearch.classList.remove('visible');
        }
    }
});

// ========== 챗봇 ==========
function toggleChatbot() {
    const w = document.getElementById('chatbotWindow');
    w.classList.toggle('open');
}

function closeChatbot() {
    document.getElementById('chatbotWindow').classList.remove('open');
}

function sendChat() {
    const input = document.getElementById('chatbotInput');
    const query = input.value.trim();
    if (!query) return;

    const msgs = document.getElementById('chatbotMessages');

    // 사용자 메시지 추가
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.textContent = query;
    msgs.appendChild(userMsg);
    input.value = '';

    // 봇 응답 생성
    setTimeout(() => {
        const answer = generateBotAnswer(query);
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-msg bot';
        botMsg.innerHTML = answer;
        msgs.appendChild(botMsg);
        msgs.scrollTop = msgs.scrollHeight;
    }, 400);

    msgs.scrollTop = msgs.scrollHeight;
}

function generateBotAnswer(query) {
    const q = query.toLowerCase();
    const terms = q.split(/\s+/).filter(t => t.length > 0);

    // 인사 처리
    const greetings = ['안녕', '하이', 'hi', 'hello', '반가', '헬로'];
    if (greetings.some(g => q.includes(g))) {
        return '반가워요~! 🐰✨<br>저는 <strong>백서 도우미</strong>예요!<br>궁금한 거 뭐든 물어봐 주세요 💕<br><br>💬 <em>"간식 업체 알려줘", "회의실 예약", "네트워크 연결"</em>';
    }

    // 도움말
    if (q.includes('도움') || q.includes('help') || q === '?' || q.includes('뭐 물어')) {
        return '이런 것들을 물어볼 수 있어요! 🐰💡<br><br>' +
            '🏢 W동 출입 방법<br>' +
            '🎓 강의장 이용안내<br>' +
            '🔒 보안 관련 안내<br>' +
            '🌐 네트워크 연결 방법<br>' +
            '📋 ISC 예약/방문등록<br>' +
            '🍱 중식/케이터링 요청<br>' +
            '🏛️ 회의실 예약 방법<br>' +
            '🍪 간식/굿즈 업체 추천<br>' +
            '🍽️ 마곡 맛집/카페 추천';
    }

    // 데이터 검색 (기존 searchData 활용 + 부분 매칭 보강)
    let results = searchData(query);

    // 결과가 없으면 붙여쓴 단어를 한글 음절 단위로 분리하여 재검색
    if (results.length === 0) {
        const subTerms = splitKoreanCompound(q);
        if (subTerms.length > 1) {
            results = searchData(subTerms.join(' '));
        }
    }

    // 그래도 없으면 각 글자 2글자씩 슬라이딩 매칭
    if (results.length === 0) {
        results = fuzzySearchData(q);
    }

    if (results.length === 0) {
        return '🐰💦 앗, 그건 잘 모르겠어요~<br>다른 키워드로 다시 물어봐 주세요!<br><br>💡 <em>"간식", "회의실", "출입", "네트워크"</em>';
    }

    // 가장 관련도 높은 항목 선택
    const top = results[0];
    // 링크(<a> 태그)는 보존하고 나머지 HTML만 제거
    const linkPreservedText = top.content
        .replace(/<a\s/g, '%%%LINK_START%%%<a ')
        .replace(/<\/a>/g, '</a>%%%LINK_END%%%')
        .replace(/<[^>]*>/g, '')
        .replace(/%%%LINK_START%%%/g, '')
        .replace(/%%%LINK_END%%%/g, '');

    // 질문 키워드가 포함된 문장 추출 (링크 포함)
    let snippet = extractRelevantSnippet(linkPreservedText, terms);

    let answer = `🐰💜 <em>${top.title}</em> 에서 찾았어요!<br><br>${snippet}`;

    // 추가 결과가 있으면 안내
    if (results.length > 1) {
        answer += `<br><br>📎 관련 항목이 ${results.length - 1}개 더 있어요~`;
    }

    answer += `<br><br><span style="color:#a855f7;cursor:pointer;text-decoration:underline;font-weight:600;" onclick="showDetail('${top.id}');closeChatbot();">👉 상세 페이지 바로가기</span>`;

    return answer;
}

// 붙여쓴 한글을 키워드 단위로 분리 시도
function splitKoreanCompound(text) {
    // 알려진 키워드 사전 (data에서 추출)
    const knownWords = [];
    data.forEach(item => {
        knownWords.push(item.title.toLowerCase());
        item.keywords.forEach(kw => knownWords.push(kw.toLowerCase()));
    });
    // 길이 내림차순 정렬 (긴 키워드 우선 매칭)
    knownWords.sort((a, b) => b.length - a.length);

    const words = [];
    let remaining = text.toLowerCase().replace(/\s+/g, '');
    // 불용어 제거
    const stopWords = ['알려줘', '알려주세요', '뭐야', '어디', '어떻게', '해줘', '하는법', '방법', '좀', '요', '은', '는', '이', '가', '을', '를', '에', '의', '도', '로'];
    stopWords.forEach(sw => {
        remaining = remaining.replace(new RegExp(sw, 'g'), ' ');
    });

    remaining = remaining.trim();
    if (!remaining) return [text];

    let found = true;
    while (remaining.length > 0 && found) {
        found = false;
        for (const kw of knownWords) {
            if (kw.length >= 2 && remaining.includes(kw)) {
                words.push(kw);
                remaining = remaining.replace(kw, ' ').trim();
                found = true;
                break;
            }
        }
        if (!found && remaining.length > 0) {
            words.push(remaining);
            remaining = '';
        }
    }
    return words.length > 0 ? words : [text];
}

// 퍼지 검색: 2글자 이상 부분 매칭
function fuzzySearchData(query) {
    const q = query.toLowerCase().replace(/\s+/g, '');

    return data
        .map(item => {
            let score = 0;

            // 키워드가 쿼리에 포함되어 있는지 확인
            item.keywords.forEach(kw => {
                const kwLower = kw.toLowerCase();
                if (q.includes(kwLower) && kwLower.length >= 2) score += 5;
                if (kwLower.includes(q) && q.length >= 2) score += 5;
            });

            // 제목이 쿼리에 포함되어 있는지
            const titleLower = item.title.toLowerCase().replace(/\s+/g, '');
            if (q.includes(titleLower) || titleLower.includes(q)) score += 10;

            // 2글자 슬라이딩 윈도우 매칭
            if (score === 0 && q.length >= 2) {
                for (let i = 0; i <= q.length - 2; i++) {
                    const bigram = q.substring(i, i + 2);
                    item.keywords.forEach(kw => {
                        if (kw.toLowerCase().includes(bigram)) score += 1;
                    });
                }
            }

            return { ...item, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);
}

function extractRelevantSnippet(text, terms) {
    const sentences = text.split(/[.。\n]+/).filter(s => s.trim().length > 5);

    // 키워드가 포함된 문장 찾기
    let matched = [];
    sentences.forEach(s => {
        const lower = s.toLowerCase();
        let matchCount = 0;
        terms.forEach(t => {
            if (lower.includes(t)) matchCount++;
        });
        if (matchCount > 0) {
            matched.push({ text: s.trim(), score: matchCount });
        }
    });

    // 관련도 높은 순 정렬
    matched.sort((a, b) => b.score - a.score);

    if (matched.length > 0) {
        // 상위 3문장 반환
        return matched.slice(0, 3).map(m => '• ' + m.text).join('<br>');
    }

    // 매칭 문장 없으면 앞부분 발췌
    const preview = sentences.slice(0, 3).map(s => '• ' + s.trim()).join('<br>');
    return preview || text.substring(0, 150) + '...';
}

// ========== URL 해시 라우팅 ==========
function updateHash(hash) {
    if (hash) {
        history.pushState(null, '', '#' + hash);
    } else {
        history.pushState(null, '', window.location.pathname);
    }
}

function handleRoute() {
    const hash = window.location.hash.replace('#', '');
    isRouting = true;

    if (!hash) {
        goHome();
    } else if (hash.startsWith('detail/')) {
        const itemId = hash.replace('detail/', '');
        const item = data.find(d => d.id === itemId);
        if (item) {
            showDetail(itemId);
        } else {
            goHome();
        }
    } else if (hash.startsWith('category/')) {
        const catId = hash.replace('category/', '');
        if (categories[catId]) {
            showCategory(catId);
        } else {
            goHome();
        }
    } else if (hash.startsWith('search/')) {
        const query = decodeURIComponent(hash.replace('search/', ''));
        performSearch(query);
    } else {
        goHome();
    }

    isRouting = false;
}

window.addEventListener('popstate', handleRoute);

// ========== 초기화 ==========
document.addEventListener('DOMContentLoaded', () => {
    handleRoute();
});
