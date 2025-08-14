// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The clip parameters for submitting a video production job. You can replace mediaId and text with real values to submit a job. References:
   * 
   * *   [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html)
   * *   [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html)
   * 
   * @example
   * {"Media1":"mediaId","Text1":"text"}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The template configurations.
   * 
   * *   For more information about the configurations of a regular template, see [Config object of a regular template](https://help.aliyun.com/document_detail/456193.html).
   * *   For more information about the configurations of an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
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
   * The source from which the template was created. Valid values:
   * 
   * *   AliyunConsole
   * *   OpenAPI
   * *   WebSDK
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
   * The source from which the template was modified. Valid values:
   * 
   * *   AliyunConsole
   * *   OpenAPI
   * *   WebSDK
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
   * The state of the preview media asset. Valid values:
   * 
   * *   Init: the initial state, which indicates that the source file is not ready.
   * *   Preparing: The source file is being prepared. For example, the file is being uploaded or edited.
   * *   PrepareFail: The source file failed to be prepared. For example, the information about the source file failed to be obtained.
   * *   Normal: The source file is ready.
   * 
   * @example
   * Normal
   */
  previewMediaStatus?: string;
  /**
   * @remarks
   * The IDs of the materials associated with the template for use by the regular template editor.
   * 
   * @example
   * {"video":["******c04f1d4a06996144cc1a******"],"audio":["******c04f1d4a06996144cc1a******"],"image":["******c04f1d4a06996144cc1a******"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The template state. Valid values:
   * 
   * *   Available
   * *   Created
   * *   Uploading
   * *   Processing
   * *   UploadFailed
   * *   ProcessFailed
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
   * The template type. Valid values:
   * 
   * *   Timeline
   * *   VETemplate
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
      relatedMediaids: 'RelatedMediaids',
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
      relatedMediaids: 'string',
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

export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The template information.
   */
  template?: GetTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: GetTemplateResponseBodyTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

