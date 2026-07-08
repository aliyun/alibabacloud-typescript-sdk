// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HistoryThreeElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consistency of the verification result. Valid values:
   * 
   * - `0`: No record found.
   * 
   * - `1`: The phone number, ID number, and name match the carrier\\"s records.
   * 
   * - `2`: The phone number and ID number match the carrier\\"s records, but the name does not.
   * 
   * - `3`: The phone number and name match the carrier\\"s records, but the ID number does not.
   * 
   * - `4`: The phone number matches the carrier\\"s records, but the name and ID number do not.
   * 
   * @example
   * 72
   */
  isConsistent?: number;
  /**
   * @remarks
   * The carrier to which the request was routed.
   * 
   * @example
   * CMCC
   */
  requestCarrier?: string;
  static names(): { [key: string]: string } {
    return {
      isConsistent: 'IsConsistent',
      requestCarrier: 'RequestCarrier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isConsistent: 'number',
      requestCarrier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HistoryThreeElementsVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about why access is denied.
   * 
   * > This parameter is returned only when RAM authentication fails.
   * 
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of `OK` indicates the request was successful.
   * 
   * - For other values, see the Error Codes section.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The query results.
   */
  data?: HistoryThreeElementsVerificationResponseBodyData;
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
      data: HistoryThreeElementsVerificationResponseBodyData,
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

