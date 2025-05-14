// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The template configurations.
   * 
   * @example
   * 参见Timeline模板Config文档
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
   * The source from which the template was created.
   * 
   * Valid values:
   * 
   * *   AliyunConsole
   * *   WebSDK
   * *   OpenAPI
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The source from which the template was modified.
   * 
   * Valid values:
   * 
   * *   AliyunConsole
   * *   WebSDK
   * *   OpenAPI
   * 
   * @example
   * OpenAPI
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The template name.
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
   * ****01bf24bf41c78b2754cb3187****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The template state.
   * 
   * Valid values:
   * 
   * *   UploadFailed: Failed to upload the video.
   * *   ProcessFailed: Failed to process the advanced template.
   * *   Available: The template is available.
   * *   Uploading: The video is being uploaded.
   * *   Created: The template is created but not ready for use.
   * *   Processing: The advanced template is being processed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ****01bf24bf41c78b2754cb3187****
   */
  templateId?: string;
  /**
   * @remarks
   * The template type.
   * 
   * Valid values:
   * 
   * *   Timeline: regular template.
   * *   VETemplate: advanced template.
   * 
   * @example
   * Timeline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      coverUrl: 'CoverUrl',
      createSource: 'CreateSource',
      modifiedSource: 'ModifiedSource',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      status: 'Status',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      coverUrl: 'string',
      createSource: 'string',
      modifiedSource: 'string',
      name: 'string',
      previewMedia: 'string',
      status: 'string',
      templateId: 'string',
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

