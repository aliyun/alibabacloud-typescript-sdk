// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class EntElementVerifyResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Verification result code.
   * - 1: Verification consistent
   * - 2: Verification inconsistent
   * - 3: Not found
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Operating period: start and end time of operations.
   * - Format: yyyy-MM-dd/yyyy-MM-dd.
   * - Example: 2018-09-25/9999-09-09.
   * 
   * @example
   * 2018-09-25/9999-09-09
   */
  openTime?: string;
  /**
   * @remarks
   * ReasonCode explanation:
   * 
   * - 100: Verification consistent
   * 
   * - 201: Inconsistent between person and enterprise
   * 
   * - 202: Inconsistent in two elements of the enterprise
   * 
   * - 301: No enterprise found, unable to verify
   * 
   * - 302: Legal representative does not exist in the database
   * >Warning: This field will be discontinued on June 15, 2023. Existing customers are not affected.
   * 
   * @example
   * 100
   */
  reasonCode?: string;
  /**
   * @remarks
   * Details of inconsistencies, multiple inconsistencies will be separated by commas.
   * - LegalPersonNameFlag: Inconsistent legal representative name
   * - LegalPersonCertNoFlag: Inconsistent legal representative ID number
   * - EntNameFlag: Inconsistent enterprise name
   * - LicenseNoFlag: Inconsistent business license number
   * 
   * @example
   * LegalPersonNameFlag,LegalPersonCertNoFlag
   */
  reasonDetail?: string;
  /**
   * @remarks
   * Enterprise operating status.
   * - 1: In operation (open)
   * - 2: Relocated
   * - 3: Deregistered
   * - 4: Revoked
   * - 5: Canceled
   * - 6: Suspended
   * - 0: Other
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      openTime: 'OpenTime',
      reasonCode: 'ReasonCode',
      reasonDetail: 'ReasonDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      openTime: 'string',
      reasonCode: 'string',
      reasonDetail: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntElementVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 473469C7***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Result
   */
  result?: EntElementVerifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: EntElementVerifyResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

