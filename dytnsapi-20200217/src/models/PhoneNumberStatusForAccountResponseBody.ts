// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number\\"s current carrier. If the number has been ported to a new carrier through mobile number portability, the new carrier is returned. Valid values:
   * 
   * - **CMCC**: China Mobile
   * 
   * - **CUCC**: China Unicom
   * 
   * - **CTCC**: China Telecom
   * 
   * > Queries for China Broadnet numbers are not supported.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The status of the phone number. Valid values:
   * 
   * - **NORMAL**: The number is active.
   * 
   * - **SHUTDOWN**: The number is suspended or temporarily out of service.
   * 
   * - **POWER_OFF**: The phone is powered off.
   * 
   * - **NOT_EXIST**: The number is non-existent.
   * 
   * - **DEFECT**: The number is invalid.
   * 
   * - **UNKNOWN**: The status is unknown.
   * 
   * > Due to adjustments in the carrier\\"s system, China Telecom numbers do not return the `busy` and `powered off` statuses. For more information, [see the official announcement](https://help.aliyun.com/document_detail/2489709.html).
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
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

export class PhoneNumberStatusForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **OperatorLimit**: The query is prohibited by the carrier.
   * 
   * - **RequestFrequencyLimit**: Carriers restrict frequent queries for the same number within a short period. If you receive this error code, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response object.
   */
  data?: PhoneNumberStatusForAccountResponseBodyData;
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
   * The ID of the request. This ID is unique to each request and can be used for troubleshooting.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PhoneNumberStatusForAccountResponseBodyData,
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

