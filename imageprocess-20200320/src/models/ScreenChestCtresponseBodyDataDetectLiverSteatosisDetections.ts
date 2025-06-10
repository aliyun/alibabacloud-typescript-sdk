// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataDetectLiverSteatosisDetections extends $dara.Model {
  fatFract?: number;
  liverHU?: number;
  liverROI1?: number;
  liverROI2?: number;
  liverROI3?: number;
  liverSlice?: number;
  liverSpleenDifference?: number;
  liverSpleenRatio?: number;
  liverVolume?: number;
  maossScore?: number;
  prediction?: string;
  probability?: number;
  ROI1Center?: number[];
  ROI2Center?: number[];
  ROI3Center?: number[];
  radius?: number;
  spleenCenter?: number[];
  spleenHU?: number;
  spleenROI?: number;
  spleenSlice?: number;
  spleenVolume?: number;
  static names(): { [key: string]: string } {
    return {
      fatFract: 'FatFract',
      liverHU: 'LiverHU',
      liverROI1: 'LiverROI1',
      liverROI2: 'LiverROI2',
      liverROI3: 'LiverROI3',
      liverSlice: 'LiverSlice',
      liverSpleenDifference: 'LiverSpleenDifference',
      liverSpleenRatio: 'LiverSpleenRatio',
      liverVolume: 'LiverVolume',
      maossScore: 'MaossScore',
      prediction: 'Prediction',
      probability: 'Probability',
      ROI1Center: 'ROI1Center',
      ROI2Center: 'ROI2Center',
      ROI3Center: 'ROI3Center',
      radius: 'Radius',
      spleenCenter: 'SpleenCenter',
      spleenHU: 'SpleenHU',
      spleenROI: 'SpleenROI',
      spleenSlice: 'SpleenSlice',
      spleenVolume: 'SpleenVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatFract: 'number',
      liverHU: 'number',
      liverROI1: 'number',
      liverROI2: 'number',
      liverROI3: 'number',
      liverSlice: 'number',
      liverSpleenDifference: 'number',
      liverSpleenRatio: 'number',
      liverVolume: 'number',
      maossScore: 'number',
      prediction: 'string',
      probability: 'number',
      ROI1Center: { 'type': 'array', 'itemType': 'number' },
      ROI2Center: { 'type': 'array', 'itemType': 'number' },
      ROI3Center: { 'type': 'array', 'itemType': 'number' },
      radius: 'number',
      spleenCenter: { 'type': 'array', 'itemType': 'number' },
      spleenHU: 'number',
      spleenROI: 'number',
      spleenSlice: 'number',
      spleenVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ROI1Center)) {
      $dara.Model.validateArray(this.ROI1Center);
    }
    if(Array.isArray(this.ROI2Center)) {
      $dara.Model.validateArray(this.ROI2Center);
    }
    if(Array.isArray(this.ROI3Center)) {
      $dara.Model.validateArray(this.ROI3Center);
    }
    if(Array.isArray(this.spleenCenter)) {
      $dara.Model.validateArray(this.spleenCenter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

