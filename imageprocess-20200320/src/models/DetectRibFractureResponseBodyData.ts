// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectRibFractureResponseBodyDataDetections } from "./DetectRibFractureResponseBodyDataDetections";


export class DetectRibFractureResponseBodyData extends $dara.Model {
  detections?: DetectRibFractureResponseBodyDataDetections[];
  origin?: number[];
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/detect-rib-fracture/local_test/2020-12-22/result-D5CD101C-F8E5-43CA-9E99-44C783B8F8BE.tar.gz?Expires=1608631727&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=d6c32E1IB4b7Ayo1lpjs%2Bq3Ylv****
   */
  resultURL?: string;
  spacing?: number[];
  static names(): { [key: string]: string } {
    return {
      detections: 'Detections',
      origin: 'Origin',
      resultURL: 'ResultURL',
      spacing: 'Spacing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detections: { 'type': 'array', 'itemType': DetectRibFractureResponseBodyDataDetections },
      origin: { 'type': 'array', 'itemType': 'number' },
      resultURL: 'string',
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

