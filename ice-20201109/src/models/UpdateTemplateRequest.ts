// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The template configuration. For more information, see [Common template configuration details](https://help.aliyun.com/document_detail/456193.html).
   * 
   * @example
   * {
   *     "VideoTracks": [
   *         {
   *             "VideoTrackClips": [
   *                 {
   *                     "Sys_Type" : "ArrayItems",
   *                     "Sys_ArrayObject" : "$VideoArray",
   *                     "Sys_Template" : {
   *                         "MediaId" : "$MediaId"
   *                     }
   *                 }
   *             ]
   *         }
   *     ]
   * }
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
   * The name of the cloud editing template.
   * 
   * @example
   * Cloud Clip Template 1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the preview video media asset.
   * 
   * @example
   * 1ae320b48fb04483915d4f2cd8ac****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The media assets associated with the template, used by the common template editor.
   * 
   * @example
   * {"video":["f64c6acc840247edb6b12f575c66****","9675dcf040ba4525bb037c29d156****"],"audio":["62a54019d9114009a5ae9bcfd70b****"],"image":["743ffbeb7e004c758cdc1fb34c04****"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The update source. Default value: OpenAPI. Valid values:
   * - AliyunConsole: Created through the Alibaba Cloud Management Console.
   * - OpenAPI: Created through OpenAPI.
   * - WebSDK: Created through WebSDK.
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
   * > After an advanced template is created, it requires analysis time and its status is Processing. The template is unavailable during this period and can only be used when its status changes to Available. The analysis time depends on the template file size and typically ranges from 10 seconds to 5 minutes.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the cloud editing template. You can obtain the ID from the [Intelligent Media Services console](https://ice.console.aliyun.com/production/template/list/common) or the response parameters of the [CreateTemplate](https://help.aliyun.com/document_detail/441161.html) operation.
   * 
   * @example
   * 23923ec3318f4c359e42e1e5b296****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      relatedMediaids: 'RelatedMediaids',
      source: 'Source',
      status: 'Status',
      templateId: 'TemplateId',
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
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

