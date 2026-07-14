// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 示例值示例值
   */
  sceneTemplateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 示例值示例值示例值
   */
  sceneTemplateName?: string;
  /**
   * @remarks
   * The WhatsApp category.
   * 
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
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CopyTemplateResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
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

