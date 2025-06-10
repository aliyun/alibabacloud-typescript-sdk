// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataDetectRibFractureDetections } from "./ScreenChestCtresponseBodyDataDetectRibFractureDetections";


export class ScreenChestCTResponseBodyDataDetectRibFracture extends $dara.Model {
  detections?: ScreenChestCTResponseBodyDataDetectRibFractureDetections[];
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-chest-ct/detect-rib-fracture/2022-07-27/2022-07-27-15_15_39-8BBD1C28-383A-548F-AD7D-CB5E0ABA207D_be6ffcb2d2e9494cba8112e07f93f466_ribFracture-mask.nii.gz?Expires=1659165340&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=2lzFDLfGbhVXsHm%2BKhgpglWmA****
   */
  fractureMaskURL?: string;
  origin?: number[];
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/detect-rib-fracture/local_test/2020-12-22/result-D5CD101C-F8E5-43CA-9E99-44C783B8F8BE.tar.gz?Expires=1608631727&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=d6c32E1IB4b7Ayo1lpjs%2Bq3Ylv****
   */
  resultURL?: string;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/screen-chest-ct/detect-rib-fracture/2022-07-27/2022-07-27-15_15_39-8BBD1C28-383A-548F-AD7D-CB5E0ABA207D_be6ffcb2d2e9494cba8112e07f93f466_ribFracture-ribmask.nii.gz?Expires=1659165340&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=5Z%2FCS3B%2B%2Ff6nlBk7alY39LvH3****
   */
  ribSegmentMaskURL?: string;
  /**
   * @example
   * 1.2.392.489642.9116.2.6.1.78361.1298784213.1658817546.650139
   */
  seriesInstanceUID?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      fractureMaskURL: 'FractureMaskURL',
      origin: 'Origin',
      resultURL: 'ResultURL',
      ribSegmentMaskURL: 'RibSegmentMaskURL',
      seriesInstanceUID: 'SeriesInstanceUID',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': ScreenChestCTResponseBodyDataDetectRibFractureDetections },
      fractureMaskURL: 'string',
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
      ribSegmentMaskURL: 'string',
      seriesInstanceUID: 'string',
      spacing: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.detections)) {
      $dara.Model.validateArray(this.detections);
    }
    if(Array.isArray(this.origin)) {
      $dara.Model.validateArray(this.origin);
    }
    if(Array.isArray(this.spacing)) {
      $dara.Model.validateArray(this.spacing);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

