// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSmsVerifyCodeResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 112231421412414124123^4
   */
  bizId?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 1231231313
   */
  outId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * API-reqelekrqkllkkewrlwrjlsdfsdf
   */
  requestId?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * @example
   * 42324
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      outId: 'OutId',
      requestId: 'RequestId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      outId: 'string',
      requestId: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. If OK is returned, the request is successful. For more information, see [Response codes](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11174283.0.0.70c5616bkj38Wa).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned data.
   */
  model?: SendSmsVerifyCodeResponseBodyModel;
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: SendSmsVerifyCodeResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

