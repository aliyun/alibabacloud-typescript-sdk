// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CalcBMDResponseBodyDataDetections } from "./CalcBmdresponseBodyDataDetections";


export class CalcBMDResponseBodyData extends $dara.Model {
  detections?: CalcBMDResponseBodyDataDetections[];
  origin?: number[];
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/calc-bmd/local_test/2023-03-31/7772ECE3-22A7-193F-81B4-B0D6A02B5DAF-result.tgz?Expires=1680486509&amp;OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&amp;Signature=GWi%2BhCCtamefKVYiS9oZJduswH****
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
      detections: { 'type': 'array', 'itemType': CalcBMDResponseBodyDataDetections },
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

