<?php
    $source = file_get_contents('https://www.google.com/finance/quote/USD-IDR');
    function getStringBetween($string, $start, $end) {
        $string = " ".$string;
        $ini = strpos($string,$start);
        if ($ini == 0) return "";
        $ini += strlen($start);
        $len = strpos($string,$end,$ini) - $ini;
        return substr($string,$ini,$len);
    }
    $str  =  getStringBetween($source,  '<div jsname="ip75Cb" class="kf1m0"><div class="YMlKec fxKbKc">',  '</div></div>');
    $new_str = substr(str_replace(",","",$str),0,6);
    $idr_google = intval($new_str);
    echo "Source by Google Finance : ".$idr_google;
?>