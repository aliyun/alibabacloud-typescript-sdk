// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  sceneTemplateCode?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  sceneTemplateName?: string;
  /**
   * @example
   * 示例值示例值
   */
  whatsappCatagory?: string;
  static names(): { [key: string]: string } {
    return {
      sceneTemplateCode: 'SceneTemplateCode',
      sceneTemplateName: 'SceneTemplateName',
      whatsappCatagory: 'WhatsappCatagory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneTemplateCode: 'string',
      sceneTemplateName: 'string',
      whatsappCatagory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyTemplateResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: CopyTemplateResponseBodyData;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CopyTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

