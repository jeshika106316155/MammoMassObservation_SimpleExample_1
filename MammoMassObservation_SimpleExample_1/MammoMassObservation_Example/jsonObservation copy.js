var Observation = {
    "resourceType": "Observation",
    "subject": {
        "reference": "Patient/2565 "
    },
    "component" : [{ //可放觀察結果
        "code" : { 
            "coding" : [{ 
                "system" : "MammoMass/", //定義結果代碼系統的url
                "code" : "DistancenMassCodeSystem" // 存結果代碼
             }]},
        "valueCodeableConcept": {
            "coding": [{
                    "system" : "https://jeshika106316155.github.io/newCodeSystem/DistanceCS.html",
                    "code" : ""
                }
            ]
        }
    },
    { 
        "code" : { 
            "coding" : [{ 
                "system" : "MammoMass/", 
                "code" : "LocationMassCodeSystem"
             }]},
        "valueCodeableConcept": {
            "coding": [{
                    "system" : "https://jeshika106316155.github.io/newCodeSystem/LocationCS.html",
                    "code" : ""
                }
            ]
        }
    }]
}
var fhir = {
    "url": "http://203.64.84.213:8080/fhir/"//"https://hapi.fhir.org/baseR4/"
}
