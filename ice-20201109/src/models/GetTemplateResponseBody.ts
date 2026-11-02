// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The ClipsParam parameter template for submitting a synthesis task. You can replace mediaId and text with actual parameters to submit the synthesis task. For usage methods, refer to:
   * 
   * - [Create and use standard templates](https://help.aliyun.com/document_detail/445399.html)
   * - [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html)
   * 
   * @example
   * {"Media1":"mediaId","Text1":"text"}
   */
  clipsParam?: string;
  /**
   * @remarks
   * The template configuration.
   * - For standard template configuration, refer to [Timeline template configuration details](https://help.aliyun.com/document_detail/456193.html).
   * - For advanced template configuration, refer to [Create advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * - For one-click video production template configuration, refer to [One-click video production template configuration parameter description](https://help.aliyun.com/document_detail/2878274.html).
   * 
   * @example
   * Refer to Timeline template configuration details
   */
  config?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/cover.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The creation source. Valid values:
   * - AliyunConsole    
   * - OpenAPI
   * - WebSDK
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The creation time. The time is in the ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The modification source. Valid values:
   * - AliyunConsole    
   * - OpenAPI
   * - WebSDK
   * 
   * @example
   * OpenAPI
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The modification time. The time is in the ISO 8601 format and uses UTC (ending with Z).
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
   * Video watermark template
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
   * The preview media asset status. Valid values:
   * - Init (initial status: the source file is not ready)
   * - Preparing (the source file is being prepared, such as being uploaded or undergoing editing and synthesis)
   * - PrepareFail (the source file preparation failed, such as a failure to obtain the source file information)
   * - Normal (normal: the source file is ready)
   * 
   * @example
   * Normal
   */
  previewMediaStatus?: string;
  /**
   * @remarks
   * The media assets associated with the template. Used by the standard template editor.
   * 
   * @example
   * {"video":["******c04f1d4a06996144cc1a******"],"audio":["******c04f1d4a06996144cc1a******"],"image":["******c04f1d4a06996144cc1a******"]}
   */
  relatedMediaids?: string;
  /**
   * @remarks
   * The template status. Valid values:
   * - Available
   * - Created
   * - Uploading
   * - Processing
   * - UploadFailed
   * - ProcessFailed
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
   * The templatetype. Valid values:
   * - Timeline: standard template
   * - VETemplate: advanced template
   * - BatchEditing: one-click video production template
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

