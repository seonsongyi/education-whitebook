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

            <h2>출입 안내</h2>
            <h3>🪪 자유 출입 (ID카드)</h3>
            <ul>
                <li>ID카드로 자유 출입 가능</li>
                <li>층수 권한이 필요 없는 층: <strong>W동 지하~1층, W10동 3층, Camp Park</strong></li>
            </ul>

            <h3>📋 방문 예약 (Visit Reservation)</h3>
            <p>출입 예약이 필요한 경우, <strong>방문자가 직접 Visit Reservation을 통해 예약</strong>해야 합니다.</p>
            <p>👉 <a href="https://visit.lge.com/login" target="_blank" style="color:#c97bb6;font-weight:600;text-decoration:underline;">Visit Reservation 바로가기</a></p>
            <ul>
                <li>방문신청 가이드: <a href="files/[방문] LG_방문포탈_사용자_가이드_V1.0.pdf" target="_blank" style="color:#c97bb6;font-weight:500;">📄 [방문] LG_방문포탈_사용자_가이드_V1.0.pdf 다운로드</a></li>
                <li>입실 시 <strong>임직원 동행 필요</strong> (퇴실 시에는 불필요)</li>
                <li>강사 패찰은 없음</li>
            </ul>

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

            <div class="info-box">
                <i class="fas fa-file-alt"></i>
                <div>📄 <a href="files/마곡LGSP W2동, W10동 강의장 예약 매뉴얼.pdf" target="_blank" style="color:#c97bb6; font-weight:bold;">마곡LGSP W2동, W10동 강의장 예약 매뉴얼.pdf 보기</a></div>
            </div>
            <div style="margin: 30px 0 20px 0; text-align: center;">
                <img src="images/W10동 303호 강의장 이용 방법.png" alt="W10동 303호 강의장 이용 방법" style="width:100%;max-width:700px;border-radius:14px;border:1px solid #e8a0bf;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:8px;" />
                <div style="font-size:13px;color:#a898ae;margin-top:6px;">W10동 303호 강의장 이용 방법</div>
            </div>

            <h2>📞 강의장 예약 문의</h2>
            <table>
                <tr><th>교육장</th><th>문의처</th></tr>
                <tr><td><strong>W2동 1층, W10동 3층</strong></td><td>한지영 사원 (<a href="mailto:jiyoung.han@lgepartner.com" style="color:#c97bb6;">jiyoung.han@lgepartner.com</a>)<br>전수현 선임 (<a href="mailto:suhyun.jeon@lgepartner.com" style="color:#c97bb6;">suhyun.jeon@lgepartner.com</a>)</td></tr>
                <tr><td><strong>그 외 교육장</strong></td><td>마곡공용회의실 (<a href="mailto:mgmr@lge.com" style="color:#c97bb6;">mgmr@lge.com</a>)</td></tr>
            </table>
        `
    },
    {
        id: 'w-security',
        category: 'w-building',
        categoryName: 'W동',
        title: '보안안내',
        keywords: ['보안', '보안규정', '촬영', '반출', '정보보호', 'USB', 'W동', '노트북', '카메라', '보안서약서', '분실물'],
        content: `
            <h1>🔒 보안안내</h1>

            <h2>일반 보안 수칙</h2>
            <ul>
                <li>건물 내 <strong>사진 및 동영상 촬영은 금지</strong>됩니다. (교육 관련 촬영은 사전 승인 필요)</li>
                <li>사내 문서 및 자료의 외부 반출은 엄격히 금지됩니다.</li>
                <li>외부 USB 저장장치 사용은 보안 정책에 따라 제한됩니다.</li>
                <li>보안 서약서 작성이 교육 시작 전 필수입니다.</li>
            </ul>

            <div class="warning-box">
                <i class="fas fa-shield-alt"></i>
                <div>보안 위반 적발 시 교육 참여가 제한될 수 있으며, 관련 규정에 따라 조치됩니다.</div>
            </div>

            <h2>정보보호 관련 안내</h2>
            <p>교육 중 제공되는 자료는 내부 학습 목적으로만 사용 가능하며, 교육 종료 후 자료 삭제 또는 반납이 필요합니다.</p>
            <ul>
                <li>교육 자료 복제 및 배포 금지</li>
                <li>화면 캡처 시 사전 허가 필요</li>
                <li>교육용 계정은 교육 기간 내에만 유효</li>
            </ul>

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

    // ===== ISC =====
    {
        id: 'isc-reservation',
        category: 'isc',
        categoryName: 'ISC',
        title: 'ISC 예약 및 방문등록',
        keywords: ['ISC', '예약', '방문', '등록', '방문등록', '회의실', '시설', '신청', '승인', '게스트', '대강당'],
        content: `
            <h1>📋 ISC 예약 및 방문등록</h1>

            <h2>ISC 시설 예약</h2>
            <p>ISC(Innovation Support Center) 시설 이용을 위해서는 사전 예약이 필요합니다.</p>

            <h3>📝 예약 절차</h3>
            <ol>
                <li><strong>예약 신청:</strong> 교육운영 담당자에게 이메일 또는 메신저로 예약 요청</li>
                <li><strong>필수 정보:</strong> 사용 목적, 일시, 인원, 필요 장비</li>
                <li><strong>승인 확인:</strong> 담당자 확인 후 예약 확정 메일 발송</li>
                <li><strong>이용:</strong> 예약 확정 후 해당 일시에 시설 이용</li>
            </ol>

            <div class="info-box">
                <i class="fas fa-calendar-alt"></i>
                <div>예약은 최소 <strong>5영업일 전</strong>에 신청해 주세요. 긴급 사용이 필요한 경우 담당자에게 직접 문의하세요.</div>
            </div>

            <h2>방문 등록 절차</h2>
            <p>ISC 방문 시 아래 절차를 따라 주세요:</p>
            <ol>
                <li>방문 3일 전까지 방문자 정보(성명, 소속, 연락처, 차량번호)를 담당자에게 전달</li>
                <li>방문 당일 1층 안내 데스크에서 방문증 수령</li>
                <li>방문증 패용 후 시설 이용</li>
                <li>퇴실 시 방문증 반납</li>
            </ol>

            <h2>ISC 이용 가능 시설</h2>
            <table>
                <tr><th>시설명</th><th>수용인원</th><th>용도</th></tr>
                <tr><td>대강당</td><td>200명</td><td>대규모 세미나, 행사</td></tr>
                <tr><td>중회의실 A</td><td>40명</td><td>교육, 워크숍</td></tr>
                <tr><td>중회의실 B</td><td>30명</td><td>교육, 회의</td></tr>
                <tr><td>소회의실 1~4</td><td>8~10명</td><td>소규모 미팅</td></tr>
            </table>
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

            <h2>중식 안내</h2>
            <p>교육 진행 시 교육생 중식을 아래와 같이 지원할 수 있습니다.</p>

            <h3>🍚 구내식당 이용</h3>
            <ul>
                <li><strong>운영시간:</strong> 11:30 ~ 13:30</li>
                <li><strong>위치:</strong> W동 지하 1층</li>
                <li><strong>이용방법:</strong> 교육생 명단 사전 등록 후 식권 배부</li>
                <li><strong>메뉴:</strong> 한식/양식/일식 중 택 1 (매주 메뉴표 제공)</li>
            </ul>

            <h3>🍱 도시락 주문</h3>
            <table>
                <tr><th>업체</th><th>단가(1인)</th><th>최소 주문</th><th>주문 마감</th></tr>
                <tr><td>한솥도시락</td><td>8,000원~</td><td>10인</td><td>전일 15:00</td></tr>
                <tr><td>본도시락</td><td>9,000원~</td><td>10인</td><td>전일 17:00</td></tr>
                <tr><td>프리미엄 도시락</td><td>12,000원~</td><td>20인</td><td>3일 전</td></tr>
            </table>

            <h2>케이터링 서비스</h2>
            <p>교육 행사 시 케이터링 서비스를 이용할 수 있습니다.</p>
            <ul>
                <li><strong>신청 방법:</strong> 교육운영 담당자에게 행사일 최소 7일 전 요청</li>
                <li><strong>제공 가능 메뉴:</strong> 다과, 핑거푸드, 커피/음료 세트, 뷔페</li>
                <li><strong>예산:</strong> 1인당 10,000원 ~ 30,000원 (메뉴에 따라 상이)</li>
            </ul>

            <div class="info-box">
                <i class="fas fa-utensils"></i>
                <div>알레르기 또는 특이 식단이 있는 교육생은 사전에 알려주시면 별도 대응이 가능합니다.</div>
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

            <h2>장비 반입 절차</h2>
            <p>교육에 필요한 장비를 반입할 경우 아래 절차를 따라 주세요.</p>
            <ol>
                <li>반입 3일 전까지 장비 목록(품명, 수량, 시리얼번호)을 교육운영 담당자에게 전달</li>
                <li>보안팀 승인 후 반입 허가증 발급</li>
                <li>반입 당일 1층 안내 데스크에서 반입 허가증 확인 후 반입</li>
                <li>반입 장비는 지정된 장소에서만 사용</li>
            </ol>

            <h2>장비 반출 절차</h2>
            <ol>
                <li>반출 장비 목록을 교육운영 담당자에게 사전 전달</li>
                <li>보안팀 확인 후 반출 허가증 발급</li>
                <li>1층 안내 데스크에서 반출 허가증 및 장비 대조 확인 후 반출</li>
            </ol>

            <div class="warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div>승인 없이 장비를 반출하는 경우 보안 위반으로 처리됩니다.</div>
            </div>

            <h2>대여 가능 장비</h2>
            <table>
                <tr><th>장비</th><th>수량</th><th>대여 절차</th></tr>
                <tr><td>노트북</td><td>30대</td><td>5일 전 신청, 교육 기간 내 사용</td></tr>
                <tr><td>빔프로젝터</td><td>5대</td><td>3일 전 신청</td></tr>
                <tr><td>마이크 세트</td><td>10세트</td><td>3일 전 신청</td></tr>
                <tr><td>화상회의 장비</td><td>3세트</td><td>5일 전 신청</td></tr>
                <tr><td>모니터(27")</td><td>20대</td><td>5일 전 신청</td></tr>
            </table>
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

            <h2>지하공용회의실</h2>
            <p>지하 1층에 위치한 공용회의실은 교육 및 회의 목적으로 이용 가능합니다.</p>

            <h3>📍 회의실 현황</h3>
            <table>
                <tr><th>회의실</th><th>위치</th><th>수용인원</th><th>장비</th></tr>
                <tr><td>B1-A</td><td>지하1층 A구역</td><td>12명</td><td>디스플레이(65"), 화이트보드</td></tr>
                <tr><td>B1-B</td><td>지하1층 B구역</td><td>8명</td><td>디스플레이(55"), 화이트보드</td></tr>
                <tr><td>B1-C</td><td>지하1층 C구역</td><td>20명</td><td>빔프로젝터, 마이크</td></tr>
                <tr><td>B1-D</td><td>지하1층 D구역</td><td>6명</td><td>디스플레이(50")</td></tr>
            </table>

            <h3>📅 예약 방법</h3>
            <ul>
                <li>사내 회의실 예약 시스템을 통해 예약 (Outlook 캘린더 연동)</li>
                <li>교육 목적 장기 예약 시 교육운영 담당자를 통해 신청</li>
                <li>예약 취소는 사용 시작 <strong>1시간 전</strong>까지 가능</li>
            </ul>

            <h2>Camp Park</h2>
            <p>Camp Park는 자유로운 분위기에서 교육, 워크숍, 네트워킹 등을 진행할 수 있는 개방형 공간입니다.</p>

            <h3>🏕️ 이용 안내</h3>
            <ul>
                <li><strong>위치:</strong> W동 1층 로비 옆</li>
                <li><strong>운영시간:</strong> 평일 09:00 ~ 18:00</li>
                <li><strong>수용인원:</strong> 최대 60명</li>
                <li><strong>용도:</strong> 교육, 해커톤, 네트워킹 행사, 세미나</li>
            </ul>

            <h3>📝 Camp Park 예약</h3>
            <ol>
                <li>교육운영 담당자에게 사용 목적, 일시, 인원, 필요 시설을 전달</li>
                <li>시설 담당자 확인 후 예약 확정</li>
                <li>대형 행사 시 최소 <strong>2주 전</strong> 예약 필요</li>
            </ol>

            <div class="info-box">
                <i class="fas fa-campground"></i>
                <div>Camp Park는 개방형 구조로, 동시에 여러 팀이 사용할 수 있습니다. 대규모 행사 시 전체 대관도 가능하니 담당자에게 문의하세요.</div>
            </div>
        `
    },

    // ===== 간식 및 굿즈 업체 =====
    {
        id: 'snack-list',
        category: 'snack-goods',
        categoryName: '간식 및 굿즈 업체',
        title: '간식 추천 업체 List',
        keywords: ['간식', '추천', '업체', '커피', '음료', '다과', '빵', '쿠키', '베이커리', '디저트', '과일', '스타벅스', '파리바게뜨'],
        content: `
            <h1>🍪 간식 추천 업체 List</h1>

            <h2>☕ 커피 & 음료</h2>
            <table>
                <tr><th>업체명</th><th>주요 메뉴</th><th>단가(1인)</th><th>최소주문</th><th>비고</th></tr>
                <tr><td>커피빈 케이터링</td><td>아메리카노, 라떼</td><td>4,500원~</td><td>20잔</td><td>당일 배달 가능</td></tr>
                <tr><td>스타벅스 트레이</td><td>커피 트레이(12잔)</td><td>54,000원/트레이</td><td>1트레이</td><td>전일 주문</td></tr>
                <tr><td>폴바셋</td><td>핸드드립, 스페셜티</td><td>6,000원~</td><td>15잔</td><td>프리미엄 옵션</td></tr>
            </table>

            <h2>🥐 다과 & 베이커리</h2>
            <table>
                <tr><th>업체명</th><th>주요 메뉴</th><th>단가</th><th>최소주문</th><th>비고</th></tr>
                <tr><td>파리바게뜨</td><td>모닝세트, 샌드위치</td><td>5,000원~/1인</td><td>10인</td><td>당일 가능</td></tr>
                <tr><td>뚜레쥬르</td><td>케이크, 쿠키세트</td><td>30,000원~/세트</td><td>3세트</td><td>전일 주문</td></tr>
                <tr><td>성심당 택배</td><td>튀김소보로 등</td><td>개별 가격</td><td>50,000원</td><td>2~3일 소요</td></tr>
            </table>

            <h2>🍎 과일 & 건강 간식</h2>
            <table>
                <tr><th>업체명</th><th>주요 메뉴</th><th>단가</th><th>최소주문</th><th>비고</th></tr>
                <tr><td>헬로네이처</td><td>과일 플래터</td><td>40,000원~/세트</td><td>1세트(10인)</td><td>전일 주문</td></tr>
                <tr><td>마켓컬리 선물하기</td><td>견과류, 건과일</td><td>20,000원~</td><td>없음</td><td>새벽배송</td></tr>
            </table>

            <div class="info-box">
                <i class="fas fa-cookie-bite"></i>
                <div>간식 주문 시 교육운영 담당자에게 사전 요청하시면 대량 할인 협의가 가능합니다.</div>
            </div>
        `
    },
    {
        id: 'goods-list',
        category: 'snack-goods',
        categoryName: '간식 및 굿즈 업체',
        title: '굿즈 추천 업체 List',
        keywords: ['굿즈', '추천', '업체', '기념품', '에코백', '텀블러', '노트', '볼펜', '인쇄', '제작', '스티커', '배지', '키링', '머그컵'],
        content: `
            <h1>🎁 굿즈 추천 업체 List</h1>

            <h2>🛍️ 일반 굿즈 (소량 가능)</h2>
            <table>
                <tr><th>업체명</th><th>주요 품목</th><th>단가</th><th>최소주문</th><th>제작기간</th></tr>
                <tr><td>마플샵</td><td>에코백, 텀블러, 스티커</td><td>5,000원~</td><td>1개</td><td>3~5일</td></tr>
                <tr><td>오프린트미</td><td>노트, 엽서, 포스터</td><td>1,000원~</td><td>10부</td><td>2~3일</td></tr>
                <tr><td>위프레스</td><td>볼펜, 머그컵, 키링</td><td>3,000원~</td><td>10개</td><td>5~7일</td></tr>
            </table>

            <h2>📦 대량 제작 (50개 이상)</h2>
            <table>
                <tr><th>업체명</th><th>주요 품목</th><th>단가</th><th>최소주문</th><th>제작기간</th></tr>
                <tr><td>나눔기프트</td><td>기업 판촉물 전반</td><td>2,000원~</td><td>50개</td><td>7~10일</td></tr>
                <tr><td>기프트앤</td><td>에코백, 파우치, USB</td><td>3,000원~</td><td>100개</td><td>7~14일</td></tr>
                <tr><td>프로모션119</td><td>배지, 메달, 트로피</td><td>5,000원~</td><td>30개</td><td>10~14일</td></tr>
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

            <h2>🍽️ 주변 맛집 추천</h2>
            <table>
                <tr><th>식당명</th><th>종류</th><th>가격대</th><th>거리</th><th>특징</th></tr>
                <tr><td>마곡국밥</td><td>한식</td><td>8,000~12,000원</td><td>도보 5분</td><td>든든한 한끼</td></tr>
                <tr><td>봉추찜닭</td><td>한식</td><td>10,000~15,000원</td><td>도보 7분</td><td>단체 식사 가능</td></tr>
                <tr><td>마곡파스타</td><td>양식</td><td>12,000~18,000원</td><td>도보 8분</td><td>분위기 좋음 ✨</td></tr>
                <tr><td>스시마곡</td><td>일식</td><td>15,000~25,000원</td><td>도보 10분</td><td>회식 추천</td></tr>
                <tr><td>마곡화로구이</td><td>고기</td><td>15,000~20,000원</td><td>도보 6분</td><td>단체석 가능</td></tr>
            </table>

            <h2>☕ 카페</h2>
            <table>
                <tr><th>카페명</th><th>거리</th><th>특징</th></tr>
                <tr><td>스타벅스 마곡점</td><td>도보 3분</td><td>넓은 좌석, 콘센트 多</td></tr>
                <tr><td>투썸플레이스</td><td>도보 5분</td><td>케이크 맛집 🍰</td></tr>
                <tr><td>블루보틀 마곡</td><td>도보 8분</td><td>스페셜티 커피</td></tr>
            </table>

            <h2>🏪 편의시설</h2>
            <ul>
                <li><strong>편의점:</strong> CU, GS25 (W동 1층 및 지하 1층)</li>
                <li><strong>ATM:</strong> 신한은행 ATM (W동 1층 로비)</li>
                <li><strong>약국:</strong> 마곡온누리약국 (도보 3분)</li>
                <li><strong>병원:</strong> 마곡메디컬센터 (도보 5분) - 내과, 치과, 정형외과</li>
                <li><strong>우체국:</strong> 마곡우체국 (도보 7분)</li>
            </ul>

            <h2>🌿 주변 공원 & 산책로</h2>
            <p>교육 사이 리프레시를 위해 가까운 공원을 방문해 보세요!</p>
            <ul>
                <li><strong>서울식물원:</strong> 도보 15분, 온실과 야외 정원 (입장료 5,000원)</li>
                <li><strong>마곡 서울식물원 호수공원:</strong> 도보 10분, 산책 코스</li>
                <li><strong>W동 옥상 정원:</strong> 건물 내, 출입 가능 시간 09:00~18:00</li>
            </ul>

            <div class="info-box">
                <i class="fas fa-map-marked-alt"></i>
                <div>마곡 지역은 지속적으로 개발 중이므로, 신규 매장 정보는 교육운영 담당자에게 문의해 주세요.</div>
            </div>

            <h2>📎 참고 자료</h2>
            <p>LG사이언스파크 생활에 대한 더 자세한 안내는 아래 생활백서를 참고하세요.</p>
            <div class="info-box">
                <i class="fas fa-file-pdf"></i>
                <div>
                    <a href="files/★LG사이언스파크 생활백서_250716.pdf" target="_blank" style="color:#c97bb6;font-weight:600;text-decoration:underline;font-size:15px;">📄 ★LG사이언스파크 생활백서 다운로드</a>
                </div>
            </div>
        `
    }
];

// ---- 카테고리 정의 ----
const categories = {
    'w-building': {
        name: 'W동',
        icon: 'fas fa-building',
        emoji: '🏢',
        items: ['w-access', 'w-classroom', 'w-security']
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
function goHome() {
    currentView = 'home';
    heroSection.style.display = '';
    categorySection.style.display = '';
    searchResults.style.display = 'none';
    detailView.style.display = 'none';
    headerSearch.classList.remove('visible');
    mainSearchInput.value = '';
    headerSearchInput.value = '';
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

// ========== 초기화 ==========
document.addEventListener('DOMContentLoaded', () => {
    goHome();
});
