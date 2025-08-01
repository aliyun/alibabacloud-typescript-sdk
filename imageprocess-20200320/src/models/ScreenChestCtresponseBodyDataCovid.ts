// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataCovid extends $dara.Model {
  /**
   * @example
   * 0.9387283236994219
   */
  lesionRatio?: string;
  /**
   * @example
   * http://algo-app-aic-med-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/covid19-dcm/unspecified/2020032702/1b1e1018-6fcf-11ea-8fa1-d20b34387541.nii.gz?Expires=1585276394&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=%2F1LNGWJUqvY0VRYGgg8Ldtb3BF****
   */
  mask?: string;
  /**
   * @example
   * 4.062644e-06
   */
  newProbability?: string;
  /**
   * @example
   * 0.7230905
   */
  normalProbability?: string;
  /**
   * @example
   * 0.27690542
   */
  otherProbability?: string;
  /**
   * @example
   * 1.2.392.200036.9116.2.6.1.44063.1805049129.1658817546.650139
   */
  seriesInstanceUID?: string;
  static names(): { [key: string]: string } {
    return {
      lesionRatio: 'LesionRatio',
      mask: 'Mask',
      newProbability: 'NewProbability',
      normalProbability: 'NormalProbability',
      otherProbability: 'OtherProbability',
      seriesInstanceUID: 'SeriesInstanceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lesionRatio: 'string',
      mask: 'string',
      newProbability: 'string',
      normalProbability: 'string',
      otherProbability: 'string',
      seriesInstanceUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

