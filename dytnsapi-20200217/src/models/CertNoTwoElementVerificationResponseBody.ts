// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertNoTwoElementVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the verification result is consistent. Valid values:
   * 
   * - **1**: Consistent
   * 
   * - **0**: Inconsistent
   * 
   * - **2**: Not found
   * 
   * @example
   * 1
   */
  isConsistent?: string;
  static names(): { [key: string]: string } {
    return {
      isConsistent: 'IsConsistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isConsistent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertNoTwoElementVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CertNoTwoElementVerificationResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CertNoTwoElementVerificationResponseBodyData,
      message: 'string',
      requestId: 'string',
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

