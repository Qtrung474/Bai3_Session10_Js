const borrowRecords = [
  { recordId: "PM01", studentId: "SV101", bookTitle: "Lập trình C", borrowDays: 10, isReturned: false },
  { recordId: "PM02", studentId: "SV102", bookTitle: "Javascript cơ bản", borrowDays: 20, isReturned: true },
  { recordId: "PM03", studentId: "SV103", bookTitle: "Cấu trúc dữ liệu", borrowDays: 15, isReturned: false }
];

console.log("--- DANH SÁCH PHIẾU MƯỢN BAN ĐẦU ---");
console.table(borrowRecords);

const newRecord = { 
  recordId: "PM04", 
  studentId: "SV104", 
  bookTitle: "Clean Code", 
  borrowDays: 18, 
  isReturned: false 
};
borrowRecords.push(newRecord);

console.log("--- DANH SÁCH SAU KHI THÊM PHIẾU PM04 ---");
console.table(borrowRecords);

for (let i = 0; i < borrowRecords.length; i++) {
  let fineAmount = 0;
  if (borrowRecords[i].borrowDays > 14) {
    fineAmount = (borrowRecords[i].borrowDays - 14) * 5000;
  }
  borrowRecords[i].fineAmount = fineAmount;
}

console.log("--- DANH SÁCH SAU KHI TÍNH PHÍ PHẠT QUÁ HẠN (> 14 NGÀY) ---");
console.table(borrowRecords);

for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    break;
  }
}

console.log("--- DANH SÁCH SAU KHI CẬP NHẬT TRẢ SÁCH (PM01) ---");
console.table(borrowRecords);

let indexToDelete = -1;
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    indexToDelete = i;
    break;
  }
}

if (indexToDelete !== -1) {
  borrowRecords.splice(indexToDelete, 1);
}

console.log("--- DANH SÁCH CUỐI CÙNG SAU KHI XÓA PHIẾU TẤT TOÁN (PM03) ---");
console.table(borrowRecords);
