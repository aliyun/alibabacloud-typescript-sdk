// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeToRCSSignatureResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  chatbotCode?: string;
  /**
   * @example
   * 14
   */
  signId?: number;
  static names(): { [key: string]: string } {
    return {
      chatbotCode: 'ChatbotCode',
      signId: 'SignId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatbotCode: 'string',
      signId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeToRCSSignatureResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值
   */
  code?: string;
  data?: UpgradeToRCSSignatureResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * false
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
      data: UpgradeToRCSSignatureResponseBodyData,
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

