// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataPredictCVDLesionFeatureScore extends $dara.Model {
  aortaCalciumScore?: number[];
  aortaCalciumVolume?: number[];
  aortaMaxDiam?: number[];
  aortaMaxDiamStd?: number[];
  aorticHeightIndex?: number[];
  aorticTortuosityIndex?: number[];
  ascAoMaxDiam?: number[];
  ascendAortaLength?: number[];
  cardioThoracicRatio?: number[];
  chestWidth?: number[];
  coronaryCalciumScore?: number[];
  coronaryCalciumVol?: number[];
  deepFeature?: number[];
  eatHUMean?: number[];
  eatHUSTD?: number[];
  eatVolume?: number[];
  heartLongDiam?: number[];
  heartShortDiam?: number[];
  heartWidth?: number[];
  leftLungHighattRatio?: number[];
  leftLungLowattRatio?: number[];
  myoEpiRatio?: number[];
  rightLungHighattRatio?: number[];
  rightLungLowattRatio?: number[];
  static names(): { [key: string]: string } {
    return {
      aortaCalciumScore: 'AortaCalciumScore',
      aortaCalciumVolume: 'AortaCalciumVolume',
      aortaMaxDiam: 'AortaMaxDiam',
      aortaMaxDiamStd: 'AortaMaxDiamStd',
      aorticHeightIndex: 'AorticHeightIndex',
      aorticTortuosityIndex: 'AorticTortuosityIndex',
      ascAoMaxDiam: 'AscAoMaxDiam',
      ascendAortaLength: 'AscendAortaLength',
      cardioThoracicRatio: 'CardioThoracicRatio',
      chestWidth: 'ChestWidth',
      coronaryCalciumScore: 'CoronaryCalciumScore',
      coronaryCalciumVol: 'CoronaryCalciumVol',
      deepFeature: 'DeepFeature',
      eatHUMean: 'EatHUMean',
      eatHUSTD: 'EatHUSTD',
      eatVolume: 'EatVolume',
      heartLongDiam: 'HeartLongDiam',
      heartShortDiam: 'HeartShortDiam',
      heartWidth: 'HeartWidth',
      leftLungHighattRatio: 'LeftLungHighattRatio',
      leftLungLowattRatio: 'LeftLungLowattRatio',
      myoEpiRatio: 'MyoEpiRatio',
      rightLungHighattRatio: 'RightLungHighattRatio',
      rightLungLowattRatio: 'RightLungLowattRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aortaCalciumScore: { 'type': 'array', 'itemType': 'number' },
      aortaCalciumVolume: { 'type': 'array', 'itemType': 'number' },
      aortaMaxDiam: { 'type': 'array', 'itemType': 'number' },
      aortaMaxDiamStd: { 'type': 'array', 'itemType': 'number' },
      aorticHeightIndex: { 'type': 'array', 'itemType': 'number' },
      aorticTortuosityIndex: { 'type': 'array', 'itemType': 'number' },
      ascAoMaxDiam: { 'type': 'array', 'itemType': 'number' },
      ascendAortaLength: { 'type': 'array', 'itemType': 'number' },
      cardioThoracicRatio: { 'type': 'array', 'itemType': 'number' },
      chestWidth: { 'type': 'array', 'itemType': 'number' },
      coronaryCalciumScore: { 'type': 'array', 'itemType': 'number' },
      coronaryCalciumVol: { 'type': 'array', 'itemType': 'number' },
      deepFeature: { 'type': 'array', 'itemType': 'number' },
      eatHUMean: { 'type': 'array', 'itemType': 'number' },
      eatHUSTD: { 'type': 'array', 'itemType': 'number' },
      eatVolume: { 'type': 'array', 'itemType': 'number' },
      heartLongDiam: { 'type': 'array', 'itemType': 'number' },
      heartShortDiam: { 'type': 'array', 'itemType': 'number' },
      heartWidth: { 'type': 'array', 'itemType': 'number' },
      leftLungHighattRatio: { 'type': 'array', 'itemType': 'number' },
      leftLungLowattRatio: { 'type': 'array', 'itemType': 'number' },
      myoEpiRatio: { 'type': 'array', 'itemType': 'number' },
      rightLungHighattRatio: { 'type': 'array', 'itemType': 'number' },
      rightLungLowattRatio: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.aortaCalciumScore)) {
      $dara.Model.validateArray(this.aortaCalciumScore);
    }
    if(Array.isArray(this.aortaCalciumVolume)) {
      $dara.Model.validateArray(this.aortaCalciumVolume);
    }
    if(Array.isArray(this.aortaMaxDiam)) {
      $dara.Model.validateArray(this.aortaMaxDiam);
    }
    if(Array.isArray(this.aortaMaxDiamStd)) {
      $dara.Model.validateArray(this.aortaMaxDiamStd);
    }
    if(Array.isArray(this.aorticHeightIndex)) {
      $dara.Model.validateArray(this.aorticHeightIndex);
    }
    if(Array.isArray(this.aorticTortuosityIndex)) {
      $dara.Model.validateArray(this.aorticTortuosityIndex);
    }
    if(Array.isArray(this.ascAoMaxDiam)) {
      $dara.Model.validateArray(this.ascAoMaxDiam);
    }
    if(Array.isArray(this.ascendAortaLength)) {
      $dara.Model.validateArray(this.ascendAortaLength);
    }
    if(Array.isArray(this.cardioThoracicRatio)) {
      $dara.Model.validateArray(this.cardioThoracicRatio);
    }
    if(Array.isArray(this.chestWidth)) {
      $dara.Model.validateArray(this.chestWidth);
    }
    if(Array.isArray(this.coronaryCalciumScore)) {
      $dara.Model.validateArray(this.coronaryCalciumScore);
    }
    if(Array.isArray(this.coronaryCalciumVol)) {
      $dara.Model.validateArray(this.coronaryCalciumVol);
    }
    if(Array.isArray(this.deepFeature)) {
      $dara.Model.validateArray(this.deepFeature);
    }
    if(Array.isArray(this.eatHUMean)) {
      $dara.Model.validateArray(this.eatHUMean);
    }
    if(Array.isArray(this.eatHUSTD)) {
      $dara.Model.validateArray(this.eatHUSTD);
    }
    if(Array.isArray(this.eatVolume)) {
      $dara.Model.validateArray(this.eatVolume);
    }
    if(Array.isArray(this.heartLongDiam)) {
      $dara.Model.validateArray(this.heartLongDiam);
    }
    if(Array.isArray(this.heartShortDiam)) {
      $dara.Model.validateArray(this.heartShortDiam);
    }
    if(Array.isArray(this.heartWidth)) {
      $dara.Model.validateArray(this.heartWidth);
    }
    if(Array.isArray(this.leftLungHighattRatio)) {
      $dara.Model.validateArray(this.leftLungHighattRatio);
    }
    if(Array.isArray(this.leftLungLowattRatio)) {
      $dara.Model.validateArray(this.leftLungLowattRatio);
    }
    if(Array.isArray(this.myoEpiRatio)) {
      $dara.Model.validateArray(this.myoEpiRatio);
    }
    if(Array.isArray(this.rightLungHighattRatio)) {
      $dara.Model.validateArray(this.rightLungHighattRatio);
    }
    if(Array.isArray(this.rightLungLowattRatio)) {
      $dara.Model.validateArray(this.rightLungLowattRatio);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

