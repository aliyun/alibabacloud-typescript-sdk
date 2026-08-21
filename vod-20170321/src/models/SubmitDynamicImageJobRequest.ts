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
   * The override parameters in the JSON format. For more information, see [OverrideParams](https://help.aliyun.com/document_detail/98618.html). You can use this parameter to override the parameters in the animated image template. For more information, see [DynamicImageTemplateConfig](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * {"Watermarks":[{"Content":"UserID: 666**","WatermarkId":"8ca03c884944bd05efccc312367****"}]}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * 
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio/Video** to view the video ID.
   * - Obtain the video ID from the value of the VideoId parameter returned by the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation when you obtain the upload URL and credential.
   * - After the video is uploaded, obtain the video ID from the value of the VideoId parameter returned by the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation.
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

