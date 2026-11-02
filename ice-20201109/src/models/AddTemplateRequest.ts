// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * - The Config parameter for standard templates is an encapsulation based on the cloud editing timeline. Custom template configurations are more flexible. If you have special requirements, familiarize yourself with the Config structure and customize the template. For more information, see [Config details for standard templates](https://help.aliyun.com/document_detail/456193.html).
   * - For more Config examples, see [Common Config examples for standard templates](https://help.aliyun.com/document_detail/451634.html).
   * - For the Config settings of one-click video generation templates, see [Metric description for one-click video generation template configuration](https://help.aliyun.com/document_detail/2878274.html).
   * 
   * @example
   * See Config documentation
   */
  config?: string;
  /**
   * @remarks
   * The URL of the template cover.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg
   */
  coverUrl?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * TemplateName
   */
  name?: string;
  /**
   * @remarks
   * The media asset ID of the template preview video.
   * 
   * @example
   * ****01bf24bf41c78b2754cb3187****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The media assets associated with the template. This parameter is used by the standard template editor.
   * 
   * @example
   * {"video":["1805a0c6ca544fb395a06ca683619655"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The source from which the template is created. Valid values:
   * - OpenAPI: Created by calling an API operation.
   * - AliyunConsole: Created in the Alibaba Cloud Management Console.
   * - WebSDK: Created by using WebSDK.
   * 
   * @example
   * OpenAPI
   */
  source?: string;
  /**
   * @remarks
   * The template status. Valid values:
   * - Available: Normal.
   * - Created: Created but unavailable.
   * - Uploading: Uploading.
   * - Processing: Analyzing the advanced template.
   * - UploadFailed: Upload failed.
   * - ProcessFailed: Advanced template analysis failed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The templatetype. Valid values:  
   * - Timeline: standard template. It is created based on the timeline of a video clip project, where multiple materials are spliced across multiple layers. It supports effects such as text-to-video, photo albums, intros and outros, and default watermarks.
   * - VETemplate: advanced template. It is created based on Adobe After Effects (AE) effects to achieve advanced media effects with complex motion graphics.
   * - BatchEditing: one-click video generation template. It supports parameters such as sticker watermarks, background music, background images, voiceover subtitle styles, title subtitle styles, and output resolution. These parameters are automatically applied when a one-click video generation node is committed.
   * 
   * @example
   * Timeline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      relatedMediaids: 'RelatedMediaids',
      source: 'Source',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      coverUrl: 'string',
      name: 'string',
      previewMedia: 'string',
      relatedMediaids: 'string',
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

