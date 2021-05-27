var Observation = {
    "resourceType": "Observation",
    "subject": {
        "reference": "Patient/1479506"
    },
    "component" : [{ //可放觀察結果
        "code" : { 
            "coding" : [{ 
                "system" : "SizeMassCodeSystem", //定義結果代碼系統的url
                "code" : "", // 存結果代碼
                "display" : "" //存在網頁先是的結果
             },
             { 
                "system" : "ShapeMassCodeSystem", 
                "code" : "",
                "display" : ""
             }]}
    }]
}
var fhir = {
    "url": "https://hapi.fhir.org/baseR4/"
}

//https://www.hl7.org/fhir/patient.html