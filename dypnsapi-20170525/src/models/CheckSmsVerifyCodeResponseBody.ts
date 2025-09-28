// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckSmsVerifyCodeResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 1212312
   */
  outId?: string;
  /**
   * @remarks
   * The verification results. Valid values:
   * 
   * *   PASS: The verification is successful.
   * *   UNKNOWN: The verification failed.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponseBody extends $dara.Model {
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
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [Response codes](https://help.aliyun.com/zh/pnvs/developer-reference/api-return-code?spm=a2c4g.11174283.0.0.70c5616bkj38Wa).
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
  model?: CheckSmsVerifyCodeResponseBodyModel;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: CheckSmsVerifyCodeResponseBodyModel,
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

