// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";


export class CreateDecodeBlindWatermarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The quality of the output image. This parameter is also available in the earlier DecodeBlindWatermark operation.
   * 
   * Higher image quality indicates a larger image size and higher watermark resolution quality.
   * 
   * @example
   * 90
   */
  imageQuality?: number;
  /**
   * @remarks
   * The watermark algorithm model. This parameter is also available in the earlier DecodeBlindWatermark operation. Valid values: FFT, FFT_FULL, DWT, and DWT_IBG. Default value: FFT.
   * 
   * If this parameter is left empty, the CreateDecodeBlindWatermarkTask operation is called. Otherwise, the earlier DecodeBlindWatermark operation is called.
   * 
   * @example
   * FFT
   */
  model?: string;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The OSS URI of the image before the blind watermark is added. This parameter is also available in the earlier DecodeBlindWatermark operation.
   * 
   * Do not specify this parameter when you set the Model parameter to DWT or DWT_IBG.
   * 
   * Specify the OSS URI in the `oss://<bucket>/<object>` format, where `<bucket>` is the name of the bucket in the same region as the current project and `<object>` is the path of the object with the extension included.
   * 
   * @example
   * oss://imm-test/testcases/watermarktestbefore.jpg
   */
  originalImageURI?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * >  The project specified in the request must match the one in the EncodeBlindWatermark request to encode the blind watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The OSS URI of the image.
   * 
   * Specify the OSS URI in the `oss://<bucket>/<object>` format, where `<bucket>` is the name of the bucket in the same region as the current project and `<object>` is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://target/sampleobject.jpg
   */
  sourceURI?: string;
  /**
   * @remarks
   * The level of watermark extraction. A higher level indicates a longer time and a higher quality. Valid values:
   * 
   * *   low
   * *   medium
   * *   high
   * 
   * @example
   * low
   */
  strengthLevel?: string;
  /**
   * @remarks
   * The OSS URI of the output image. This parameter is also available in the earlier DecodeBlindWatermark operation.
   * 
   * Specify the OSS URI in the `oss://<bucket>/<object>` format, where `<bucket>` is the name of the bucket in the same region as the current project and `<object>` is the path of the object with the extension included.
   * 
   * @example
   * oss://target/targetobject.jpg
   */
  targetURI?: string;
  /**
   * @remarks
   * The type of the watermark. Valid value: text.
   * 
   * No image watermarks are supported.
   * 
   * @example
   * text
   */
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      imageQuality: 'ImageQuality',
      model: 'Model',
      notification: 'Notification',
      originalImageURI: 'OriginalImageURI',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      strengthLevel: 'StrengthLevel',
      targetURI: 'TargetURI',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageQuality: 'number',
      model: 'string',
      notification: Notification,
      originalImageURI: 'string',
      projectName: 'string',
      sourceURI: 'string',
      strengthLevel: 'string',
      targetURI: 'string',
      watermarkType: 'string',
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

