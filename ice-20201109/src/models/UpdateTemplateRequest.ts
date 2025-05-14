// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @example
   * 参见模板Config文档
   */
  config?: string;
  /**
   * @remarks
   * The URL of the template thumbnail.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg
   */
  coverUrl?: string;
  /**
   * @remarks
   * The name of the online editing template.
   * 
   * @example
   * 视频添加水印模板
   */
  name?: string;
  /**
   * @remarks
   * The ID of the preview video.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The IDs of the materials associated with the template for use by the regular template editor.
   * 
   * @example
   * {"video":["******c04f1d4a06996144cc1a******","******cb7db64841b159b4f2ea******"],"audio":["******c04f1d4a06996144cc1a******"],"image":["******c04f1d4a06996144cc1a******"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The source from which the template is modified. Default value: OpenAPI. Valid values:
   * 
   * *   AliyunConsole
   * *   OpenAPI
   * *   WebSDK
   * 
   * @example
   * OpenAPI
   */
  source?: string;
  /**
   * @remarks
   * The template state. Valid values:
   * 
   * *   Available: The template is available.
   * *   Created: The template is created but not ready for use.
   * *   Uploading: The video is being uploaded.
   * *   Processing: The advanced template is being processed.
   * *   UploadFailed: Failed to upload the video.
   * *   ProcessFailed: Failed to process the advanced template.
   * 
   * >  After an advanced template is created, it enters the Processing state. In this case, the template is unavailable. The template can be used only when it is in the Available state. The time required for template processing varies based on the size of the template file. Generally, it ranges from 10 seconds to 5 minutes.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the online editing template. You can obtain the template ID in the [Intelligent Media Services (IMS) console](https://ice.console.aliyun.com/production/template/list/common) or the response parameters of the [AddTemplate](https://help.aliyun.com/document_detail/441161.html) operation.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
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

