// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * Example value
   */
  sceneTemplateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Example value
   */
  sceneTemplateName?: string;
  /**
   * @remarks
   * The WhatsApp category.
   * 
   * @example
   * Example value
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
   * The access denial details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Example value
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
   * Example value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Example value
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

