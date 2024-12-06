function calculateSize() {
    // Lấy giá trị từ các input
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const chest = parseFloat(document.getElementById("chest").value);
    const waist = parseFloat(document.getElementById("waist").value);
    const legLength = parseFloat(document.getElementById("legLength").value);

    let size = "";

    // Kiểm tra các điều kiện để tính size áo
    if (height >= 160 && height <= 167 && weight >= 50 && weight <= 60 && chest >= 92 && chest <= 100) {
        size = "S";
    } else if (height >= 163 && height <= 170 && weight >= 55 && weight <= 65 && chest >= 96 && chest <= 104) {
        size = "M";
    } else if (height >= 165 && height <= 172 && weight >= 65 && weight <= 75 && chest >= 100 && chest <= 108) {
        size = "L";
    } else if (height >= 170 && height <= 180 && weight >= 75 && weight <= 90 && chest >= 104 && chest <= 112) {
        size = "XL";
    } else if (height >= 170 && height <= 190 && weight >= 85 && weight <= 100 && chest >= 106 && chest <= 114) {
        size = "XLL";
    } else {
        size = "Không tìm thấy size phù hợp";
    }

    // Cập nhật kết quả
    document.getElementById("result").textContent = "Size áo của bạn là: " + size;
}
