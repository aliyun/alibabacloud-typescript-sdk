// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataMuscleFat extends $dara.Model {
  FAT_TYPE?: number;
  MASK_PATH?: string;
  MUSCLE_MASS?: number;
  MUSCLE_QUALITY?: number;
  NAMA_TAMA_INDEX_TSCORE?: number;
  PERCENT_IMAT?: number;
  PERCENT_LAMA?: number;
  PERCENT_NAMA?: number;
  RENDERING_PATH?: string;
  SFA?: number;
  SFT?: number;
  SMA?: number;
  SMI?: number;
  STUDY_AGE?: number;
  STUDY_GENDER?: string;
  seriesInstanceUid?: string;
  VERTEBRA_IN_USE?: number;
  VFA?: number;
  static names(): { [key: string]: string } {
    return {
      FAT_TYPE: 'FAT_TYPE',
      MASK_PATH: 'MASK_PATH',
      MUSCLE_MASS: 'MUSCLE_MASS',
      MUSCLE_QUALITY: 'MUSCLE_QUALITY',
      NAMA_TAMA_INDEX_TSCORE: 'NAMA_TAMA_INDEX_TSCORE',
      PERCENT_IMAT: 'PERCENT_IMAT',
      PERCENT_LAMA: 'PERCENT_LAMA',
      PERCENT_NAMA: 'PERCENT_NAMA',
      RENDERING_PATH: 'RENDERING_PATH',
      SFA: 'SFA',
      SFT: 'SFT',
      SMA: 'SMA',
      SMI: 'SMI',
      STUDY_AGE: 'STUDY_AGE',
      STUDY_GENDER: 'STUDY_GENDER',
      seriesInstanceUid: 'SeriesInstanceUid',
      VERTEBRA_IN_USE: 'VERTEBRA_IN_USE',
      VFA: 'VFA',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FAT_TYPE: 'number',
      MASK_PATH: 'string',
      MUSCLE_MASS: 'number',
      MUSCLE_QUALITY: 'number',
      NAMA_TAMA_INDEX_TSCORE: 'number',
      PERCENT_IMAT: 'number',
      PERCENT_LAMA: 'number',
      PERCENT_NAMA: 'number',
      RENDERING_PATH: 'string',
      SFA: 'number',
      SFT: 'number',
      SMA: 'number',
      SMI: 'number',
      STUDY_AGE: 'number',
      STUDY_GENDER: 'string',
      seriesInstanceUid: 'string',
      VERTEBRA_IN_USE: 'number',
      VFA: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

