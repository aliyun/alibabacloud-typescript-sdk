// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";


export class CreateDecodeBlindWatermarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A parameter from the earlier DecodeBlindWatermark API. It specifies the quality of the output image. The default value is 90. The value must be in the range of 70 to 100.
   * 
   * A higher quality results in a larger image size and better watermark parsing quality.
   * 
   * @example
   * 90
   */
  imageQuality?: number;
  /**
   * @remarks
   * A parameter from the earlier DecodeBlindWatermark API. It specifies the watermark algorithm model. Valid values include FFT, FFT_FULL, DWT, and DWT_IBG. The default value is FFT.
   * 
   * If this parameter is left empty, the new version of the blind watermarking feature is used. Otherwise, the earlier version is used.
   * 
   * @example
   * FFT
   */
  model?: string;
  /**
   * @remarks
   * The notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * A parameter from the earlier DecodeBlindWatermark API. It specifies the OSS URI of the image before the blind watermark was added.
   * 
   * This parameter is not required when Model is set to DWT or DWT_IBG.
   * 
   * The OSS URI must be in the `oss://<bucket>/<object>` format. `<bucket>` is the name of the OSS bucket that is in the same region as the current project. `<object>` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://imm-test/testcases/watermarktestbefore.jpg
   */
  originalImageURI?: string;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * >Notice: The project name must be the same as the one used to add the blind watermark with the [EncodeBlindWatermark](https://help.aliyun.com/document_detail/2743655.html) operation. Otherwise, the watermark cannot be extracted.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URI of the image.
   * 
   * The OSS URI must be in the `oss://<bucket>/<object>` format. `<bucket>` is the name of the OSS bucket that is in the same region as the current project. `<object>` is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://target/sampleobject.jpg
   */
  sourceURI?: string;
  /**
   * @remarks
   * The watermark extraction level, which controls the extraction precision. A higher level indicates a longer processing time and a better extraction effect. Valid values:
   * 
   * - low
   * 
   * - medium
   * 
   * - high
   * 
   * @example
   * low
   */
  strengthLevel?: string;
  /**
   * @remarks
   * A parameter from the earlier DecodeBlindWatermark API. It specifies the OSS URI where the image is saved after the blind watermark is parsed.
   * 
   * The OSS URI must be in the `oss://<bucket>/<object>` format. `<bucket>` is the name of the OSS bucket that is in the same region as the current project. `<object>` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://target/targetobject.jpg
   */
  targetURI?: string;
  /**
   * @remarks
   * The type of the embedded watermark. Valid value: text
   * 
   * (Image watermarks are not supported. Therefore, this parameter can only be set to text.)
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

