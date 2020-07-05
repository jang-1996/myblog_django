function q1() {
    $('#names_q1').html('');
    $.ajax({
        type: "GET",
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
        data: {},
        success: function (response) {
            //console.log(response);
            let rows = response['RealtimeCityAir']['row']
                    for (let i = 0; i < rows.length; i++) {
                        let cityName = rows[i]['MSRSTE_NM']
                        let per = rows[i]['IDEX_MVL']
                        let rate = rows[i]['IDEX_NM']
                        if (per<0){
                            temp_html = '<tr class="cent">\
                                <td>'+ cityName + '</td>\
                                <td>'+ per + '</td>\
                                <td>'+ rate + '</td>\
                                </tr>'
                        }
                        else if(per <=30) {
                            temp_html = '<tr class="good cent">\
                                <td>'+ cityName + '</td>\
                                <td>'+ per + '</td>\
                                <td>'+ rate + '</td>\
                                </tr>'
                        } else if (30<per<=80){
                            temp_html = '<tr class="soso cent">\
                                <td>'+ cityName + '</td>\
                                <td>'+ per + '</td>\
                                <td>'+ rate + '</td>\
                                </tr>'
                        } else if (80<per<=150){
                            temp_html = '<tr class="warning cent">\
                                <td ">'+ cityName + '</td>\
                                <td>'+ per + '</td>\
                                <td>'+ rate + '</td>\
                                </tr>'
                        } else {
                            temp_html = '<tr class="bad cent">\
                                <td>'+ cityName + '</td>\
                                <td>'+ per + '</td>\
                                <td>'+ rate + '</td>\
                                </tr>'
                        }


                        $("#names_q1").append(temp_html);

                    }
        }
    });
}

function q2() {
    $('#names_q2').html('');
    $.ajax({
        type: "GET",
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/bikeList/1/99",
        data: {},
        success: function (response) {
            //console.log(response);
        let data_list = response['rentBikeStatus']['row']    
            for (let i = 0; i<data_list.length; i++) {
                let stationName = data_list[i]['stationName']
                let rackTotCnt = data_list[i]['rackTotCnt']
                let parkingBikeTotCnt = data_list[i]['parkingBikeTotCnt']
                if (parkingBikeTotCnt<=3){
                    temp_html = '<tr class = "bad cent">\
                    <td>'+ stationName +'</td>\
                    <td>'+ rackTotCnt +'</td>\
                    <td>'+ parkingBikeTotCnt +'</td>\
                    </tr>'
                } else {
                    temp_html = '<tr class = "cent">\
                    <td>'+ stationName +'</td>\
                    <td>'+ rackTotCnt +'</td>\
                    <td>'+ parkingBikeTotCnt +'</td>\
                    </tr>'
                }

                $('#names_q2').append(temp_html);
            }
        }
    });
}