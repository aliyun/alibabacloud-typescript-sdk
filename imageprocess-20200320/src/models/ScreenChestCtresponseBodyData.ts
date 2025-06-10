// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataAnalyzeChestVessel } from "./ScreenChestCtresponseBodyDataAnalyzeChestVessel";
import { ScreenChestCTResponseBodyDataCACS } from "./ScreenChestCtresponseBodyDataCacs";
import { ScreenChestCTResponseBodyDataCalcBMD } from "./ScreenChestCtresponseBodyDataCalcBmd";
import { ScreenChestCTResponseBodyDataCovid } from "./ScreenChestCtresponseBodyDataCovid";
import { ScreenChestCTResponseBodyDataDetectAD } from "./ScreenChestCtresponseBodyDataDetectAd";
import { ScreenChestCTResponseBodyDataDetectLiverSteatosis } from "./ScreenChestCtresponseBodyDataDetectLiverSteatosis";
import { ScreenChestCTResponseBodyDataDetectLymph } from "./ScreenChestCtresponseBodyDataDetectLymph";
import { ScreenChestCTResponseBodyDataDetectPdac } from "./ScreenChestCtresponseBodyDataDetectPdac";
import { ScreenChestCTResponseBodyDataDetectRibFracture } from "./ScreenChestCtresponseBodyDataDetectRibFracture";
import { ScreenChestCTResponseBodyDataLungNodule } from "./ScreenChestCtresponseBodyDataLungNodule";
import { ScreenChestCTResponseBodyDataMuscleFat } from "./ScreenChestCtresponseBodyDataMuscleFat";
import { ScreenChestCTResponseBodyDataPredictCVD } from "./ScreenChestCtresponseBodyDataPredictCvd";
import { ScreenChestCTResponseBodyDataScreenBC } from "./ScreenChestCtresponseBodyDataScreenBc";
import { ScreenChestCTResponseBodyDataScreenCRC } from "./ScreenChestCtresponseBodyDataScreenCrc";
import { ScreenChestCTResponseBodyDataScreenEc } from "./ScreenChestCtresponseBodyDataScreenEc";
import { ScreenChestCTResponseBodyDataScreenGC } from "./ScreenChestCtresponseBodyDataScreenGc";
import { ScreenChestCTResponseBodyDataScreenLC } from "./ScreenChestCtresponseBodyDataScreenLc";


export class ScreenChestCTResponseBodyData extends $dara.Model {
  analyzeChestVessel?: ScreenChestCTResponseBodyDataAnalyzeChestVessel;
  CACS?: ScreenChestCTResponseBodyDataCACS;
  calcBMD?: ScreenChestCTResponseBodyDataCalcBMD;
  covid?: ScreenChestCTResponseBodyDataCovid;
  detectAD?: ScreenChestCTResponseBodyDataDetectAD;
  detectLiverSteatosis?: ScreenChestCTResponseBodyDataDetectLiverSteatosis;
  detectLymph?: ScreenChestCTResponseBodyDataDetectLymph;
  detectPdac?: ScreenChestCTResponseBodyDataDetectPdac;
  detectRibFracture?: ScreenChestCTResponseBodyDataDetectRibFracture;
  /**
   * @example
   * Failed to execute [cacs,covid]
   */
  errorMessage?: string;
  lungNodule?: ScreenChestCTResponseBodyDataLungNodule;
  muscleFat?: ScreenChestCTResponseBodyDataMuscleFat;
  /**
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/coronacases_org_001/1.2.112.92121.1.1689.19.2.2020040219072764787101585825****.dcm
   */
  nestedUrlList?: { [key: string]: any };
  predictCVD?: ScreenChestCTResponseBodyDataPredictCVD;
  screenBC?: ScreenChestCTResponseBodyDataScreenBC;
  screenCRC?: ScreenChestCTResponseBodyDataScreenCRC;
  screenEc?: ScreenChestCTResponseBodyDataScreenEc;
  screenGC?: ScreenChestCTResponseBodyDataScreenGC;
  screenLC?: ScreenChestCTResponseBodyDataScreenLC;
  /**
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/coronacases_org_001/1.2.112.92121.1.1689.19.2.2020040219072764787101585825****.dcm
   */
  URLList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      analyzeChestVessel: 'AnalyzeChestVessel',
      CACS: 'CACS',
      calcBMD: 'CalcBMD',
      covid: 'Covid',
      detectAD: 'DetectAD',
      detectLiverSteatosis: 'DetectLiverSteatosis',
      detectLymph: 'DetectLymph',
      detectPdac: 'DetectPdac',
      detectRibFracture: 'DetectRibFracture',
      errorMessage: 'ErrorMessage',
      lungNodule: 'LungNodule',
      muscleFat: 'MuscleFat',
      nestedUrlList: 'NestedUrlList',
      predictCVD: 'PredictCVD',
      screenBC: 'ScreenBC',
      screenCRC: 'ScreenCRC',
      screenEc: 'ScreenEc',
      screenGC: 'ScreenGC',
      screenLC: 'ScreenLC',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeChestVessel: ScreenChestCTResponseBodyDataAnalyzeChestVessel,
      CACS: ScreenChestCTResponseBodyDataCACS,
      calcBMD: ScreenChestCTResponseBodyDataCalcBMD,
      covid: ScreenChestCTResponseBodyDataCovid,
      detectAD: ScreenChestCTResponseBodyDataDetectAD,
      detectLiverSteatosis: ScreenChestCTResponseBodyDataDetectLiverSteatosis,
      detectLymph: ScreenChestCTResponseBodyDataDetectLymph,
      detectPdac: ScreenChestCTResponseBodyDataDetectPdac,
      detectRibFracture: ScreenChestCTResponseBodyDataDetectRibFracture,
      errorMessage: 'string',
      lungNodule: ScreenChestCTResponseBodyDataLungNodule,
      muscleFat: ScreenChestCTResponseBodyDataMuscleFat,
      nestedUrlList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predictCVD: ScreenChestCTResponseBodyDataPredictCVD,
      screenBC: ScreenChestCTResponseBodyDataScreenBC,
      screenCRC: ScreenChestCTResponseBodyDataScreenCRC,
      screenEc: ScreenChestCTResponseBodyDataScreenEc,
      screenGC: ScreenChestCTResponseBodyDataScreenGC,
      screenLC: ScreenChestCTResponseBodyDataScreenLC,
      URLList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.analyzeChestVessel && typeof (this.analyzeChestVessel as any).validate === 'function') {
      (this.analyzeChestVessel as any).validate();
    }
    if(this.CACS && typeof (this.CACS as any).validate === 'function') {
      (this.CACS as any).validate();
    }
    if(this.calcBMD && typeof (this.calcBMD as any).validate === 'function') {
      (this.calcBMD as any).validate();
    }
    if(this.covid && typeof (this.covid as any).validate === 'function') {
      (this.covid as any).validate();
    }
    if(this.detectAD && typeof (this.detectAD as any).validate === 'function') {
      (this.detectAD as any).validate();
    }
    if(this.detectLiverSteatosis && typeof (this.detectLiverSteatosis as any).validate === 'function') {
      (this.detectLiverSteatosis as any).validate();
    }
    if(this.detectLymph && typeof (this.detectLymph as any).validate === 'function') {
      (this.detectLymph as any).validate();
    }
    if(this.detectPdac && typeof (this.detectPdac as any).validate === 'function') {
      (this.detectPdac as any).validate();
    }
    if(this.detectRibFracture && typeof (this.detectRibFracture as any).validate === 'function') {
      (this.detectRibFracture as any).validate();
    }
    if(this.lungNodule && typeof (this.lungNodule as any).validate === 'function') {
      (this.lungNodule as any).validate();
    }
    if(this.muscleFat && typeof (this.muscleFat as any).validate === 'function') {
      (this.muscleFat as any).validate();
    }
    if(this.nestedUrlList) {
      $dara.Model.validateMap(this.nestedUrlList);
    }
    if(this.predictCVD && typeof (this.predictCVD as any).validate === 'function') {
      (this.predictCVD as any).validate();
    }
    if(this.screenBC && typeof (this.screenBC as any).validate === 'function') {
      (this.screenBC as any).validate();
    }
    if(this.screenCRC && typeof (this.screenCRC as any).validate === 'function') {
      (this.screenCRC as any).validate();
    }
    if(this.screenEc && typeof (this.screenEc as any).validate === 'function') {
      (this.screenEc as any).validate();
    }
    if(this.screenGC && typeof (this.screenGC as any).validate === 'function') {
      (this.screenGC as any).validate();
    }
    if(this.screenLC && typeof (this.screenLC as any).validate === 'function') {
      (this.screenLC as any).validate();
    }
    if(this.URLList) {
      $dara.Model.validateMap(this.URLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

