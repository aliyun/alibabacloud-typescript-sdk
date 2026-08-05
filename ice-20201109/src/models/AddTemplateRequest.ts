// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * - The standard template Config is an encapsulation based on the cloud editing Timeline. Custom template Config provides more flexibility. If you have special requirements, familiarize yourself with the Config structure and customize the template. For details, see [Standard template Config details](https://help.aliyun.com/document_detail/456193.html).
   * - For more template Config examples, see [Common standard template Config examples](https://help.aliyun.com/document_detail/451634.html).
   * - For one-click video production template Config configurations, see [One-click video production template configuration parameter description](https://help.aliyun.com/document_detail/2878274.html).
   * 
   * @example
   * See the Timeline template Config documentation
   */
  config?: string;
  /**
   * @remarks
   * The template cover URL.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg
   */
  coverUrl?: string;
  /**
   * @remarks
   * The custom template name.
   * 
   * @example
   * Template name
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
   * The media assets associated with the template, used by the standard template editor.
   * 
   * @example
   * {"video":["1805a0c6ca544fb395a06ca683619655"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The template creation source. Valid values:
   * - OpenAPI: created by using OpenAPI.
   * - AliyunConsole: created by using the Alibaba Cloud Management Console.
   * - WebSDK: created by using WebSDK.
   * 
   * @example
   * OpenAPI
   */
  source?: string;
  /**
   * @remarks
   * The template status. Valid values:
   * - Available: normal.
   * - Created: created but not yet available.
   * - Uploading: uploading.
   * - Processing: advanced template is being analyzed.
   * - UploadFailed: upload failed.
   * - ProcessFailed: advanced template analysis failed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The templatetype. Valid values:  
   * - Timeline (standard template): a template created based on the Timeline of a video clip node (multiple materials on multiple tracks are concatenated in sequence). This templatetype can be used to implement effects such as image-to-video conversion, photo albums, intros and outros, and default watermarks.
   * - VETemplate (advanced template): a template created based on Adobe After Effects (AE) effects. This templatetype can be used to implement advanced media effects with complex animations.
   * - BatchEditing (one-click video production template): supports configurations for sticker watermarks, background music, background images, narration subtitle styles, title subtitle styles, and output resolution parameters. These configurations are automatically applied when you commit a one-click video production node.
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

