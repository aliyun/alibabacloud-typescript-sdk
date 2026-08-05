// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * See the Timeline template Config documentation.
   * 
   * @example
   * See the Config documentation
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
   * The template creation source.
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The template modification source.
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
   * Template name
   */
  name?: string;
  /**
   * @remarks
   * The media asset ID of the preview video.
   * 
   * @example
   * ****01bf24bf41c78b2754cb3187****
   */
  previewMedia?: string;
  /**
   * @remarks
   * The template status.
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
   * The templatetype.
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

export class AddTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  /**
   * @remarks
   * The template information.
   */
  template?: AddTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: AddTemplateResponseBodyTemplate,
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

