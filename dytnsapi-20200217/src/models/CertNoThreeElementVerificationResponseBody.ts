// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CertNoThreeElementVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the verification result is consistent. Returned values:
   * 
   * - 0: The name matches the ID card number, but they are recognized as not the same person.
   * 
   * - 1: The name matches the ID card number, and they are recognized as the same person.
   * 
   * - 2: The name matches the ID card number, and they are suspected to be the same person.
   * 
   * - 3: The name matches the ID card number, but no portrait information is found in the database.
   * 
   * - 4: Invalid identity information (the name does not match the ID card number).
   * 
   * - 5: The photo quality is unqualified.
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

export class CertNoThreeElementVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about why access was denied.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code. Valid values:
   * - OK: The request is successful.
   * - For other error codes, see the error code list below.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CertNoThreeElementVerificationResponseBodyData;
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
   * 68A40250-50CD-034C-B728-0BD******177
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
      data: CertNoThreeElementVerificationResponseBodyData,
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

