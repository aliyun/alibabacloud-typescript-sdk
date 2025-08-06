// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicImageJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the frame animation template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a443dc52ef10abc4794d700*****
   */
  dynamicImageTemplateId?: string;
  /**
   * @remarks
   * The override parameter. Specify the value in the JSON format. For more information, see [Parameters for media processing](https://help.aliyun.com/document_detail/98618.html). You can use this parameter to override configurations in the animated image template. For more information, see the "DynamicImageTemplateConfig: the configurations of an animated sticker template" section of the [Basic data types](https://help.aliyun.com/document_detail/52839.html) topic.
   * 
   * @example
   * {"Watermarks":[{"Content":"UserID: 666**","WatermarkId":"8ca03c884944bd05efccc312367****"}]}
   */
  overrideParams?: string;
  /**
   * @remarks
   * The ID of the video. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the media file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you call to upload media files.
   * *   Obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation after you upload media files.
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

