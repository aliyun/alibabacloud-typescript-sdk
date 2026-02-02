// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntElementVerifyV2ResponseBodyResult extends $dara.Model {
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
   * Business term: start and end time of operations.
   * - Format: yyyy-MM-dd/yyyy-MM-dd.
   * - Example: 2018-09-25/9999-09-09.
   * 
   * @example
   * 2018-09-25/9999-09-09
   */
  openTime?: string;
  /**
   * @remarks
   * Details of inconsistencies, multiple inconsistencies will be separated by commas.
   * - LegalPersonNameFlag: Legal person\\"s name does not match
   * - LegalPersonCertNoFlag: Legal person\\"s ID number does not match
   * - EntNameFlag: Enterprise name does not match
   * - LicenseNoFlag: Business license number does not match
   * 
   * @example
   * LegalPersonNameFlag,LegalPersonCertNoFlag
   */
  reasonDetail?: string;
  /**
   * @remarks
   * Business operation status.
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
      reasonDetail: 'ReasonDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      openTime: 'string',
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

export class EntElementVerifyV2ResponseBody extends $dara.Model {
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
   * Id of the request
   * 
   * @example
   * 473469C7***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Result
   */
  result?: EntElementVerifyV2ResponseBodyResult;
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
      result: EntElementVerifyV2ResponseBodyResult,
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

