// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeVideoFaceRequest extends $dara.Model {
  addWatermark?: boolean;
  enhance?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/MergeVideoFace/MergeVideoFace-pic1.png
   */
  referenceURL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/MergeVideoFace/MergeVideoFace1.mp4
   */
  videoURL?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      addWatermark: 'AddWatermark',
      enhance: 'Enhance',
      referenceURL: 'ReferenceURL',
      videoURL: 'VideoURL',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWatermark: 'boolean',
      enhance: 'boolean',
      referenceURL: 'string',
      videoURL: 'string',
      watermarkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

