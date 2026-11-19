// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the animated image template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a443dc52ef10abc4794d700*****
   */
  dynamicImageTemplateId?: string;
  /**
   * @remarks
   * The override parameters in JSON string format. For more information, see [OverrideParams](https://help.aliyun.com/document_detail/98618.html). You can override the parameters in the animated image template configuration. For more information, see [DynamicImageTemplateConfig](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * {"Watermarks":[{"Content":"UserID: 666**","WatermarkId":"8ca03c884944bd05efccc312367****"}]}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * 
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio/Video** to view the video ID.
   * - When you call the [Obtain the upload URL and credential for a video](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId response parameter.
   * - After a video is uploaded, you can call the [Search for media information](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID. The video ID is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 7d2fbc3e273441bdb0e08e55f8****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicImageTemplateId: 'DynamicImageTemplateId',
      overrideParams: 'OverrideParams',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicImageTemplateId: 'string',
      overrideParams: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

