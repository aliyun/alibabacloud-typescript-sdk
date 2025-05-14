// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The clip parameters.
   * 
   * @example
   * {"Media1":"mediaId","Text1":"text"}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The template configurations.
   * 
   * @example
   * 参考Timeline模板配置详解
   */
  config?: string;
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg
   */
  coverURL?: string;
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
   * The time when the template was created.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  creationTime?: string;
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
   * The time when the template was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
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
   * The preview media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The state of the preview media asset.
   * 
   * Valid values:
   * 
   * *   PrepareFail
   * *   Init
   * *   Normal
   * *   Preparing
   * 
   * @example
   * Normal
   */
  previewMediaStatus?: string;
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
   * ****20b48fb04483915d4f2cd8ac****
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
      clipsParam: 'ClipsParam',
      config: 'Config',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      creationTime: 'CreationTime',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      previewMedia: 'PreviewMedia',
      previewMediaStatus: 'PreviewMediaStatus',
      status: 'Status',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipsParam: 'string',
      config: 'string',
      coverURL: 'string',
      createSource: 'string',
      creationTime: 'string',
      modifiedSource: 'string',
      modifiedTime: 'string',
      name: 'string',
      previewMedia: 'string',
      previewMediaStatus: 'string',
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

