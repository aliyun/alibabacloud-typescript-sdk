// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyLogisticsSmsMailNoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  expressCompanyCode?: string;
  /**
   * @example
   * 示例值
   */
  mobileSuffix?: string;
  /**
   * @example
   * false
   */
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      expressCompanyCode: 'ExpressCompanyCode',
      mobileSuffix: 'MobileSuffix',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressCompanyCode: 'string',
      mobileSuffix: 'string',
      verifyResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyLogisticsSmsMailNoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值
   */
  code?: string;
  data?: VerifyLogisticsSmsMailNoResponseBodyData;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值示例值
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
      data: VerifyLogisticsSmsMailNoResponseBodyData,
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

