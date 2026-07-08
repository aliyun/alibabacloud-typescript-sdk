// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForSmsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The carrier of the phone number. If the number has been ported, this parameter returns the current carrier. Valid values:
   * 
   * - **CMCC**: China Mobile.
   * 
   * - **CUCC**: China Unicom.
   * 
   * - **CTCC**: China Telecom.
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
   * - **NORMAL**: Active.
   * 
   * - **SHUTDOWN**: Shutdown.
   * 
   * - **POWER_OFF**: Powered off.
   * 
   * - **NOT_EXIST**: Non-existent number.
   * 
   * - **DEFECT**: Invalid number.
   * 
   * - **UNKNOWN**: Unknown.
   * 
   * > Due to carrier system adjustments, the statuses for busy, suspected to be powered off, and powered off are not returned for China Telecom numbers. For more information, see the [official announcement](https://help.aliyun.com/document_detail/2489709.html).
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

export class PhoneNumberStatusForSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **OperatorLimit**: The carrier restricts queries for this phone number.
   * 
   * - **RequestFrequencyLimit**: Indicates that requests for a single number are too frequent. Due to carrier restrictions, repeated queries for the same number within a short period are prohibited. If you receive this error code, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A container for the returned data.
   */
  data?: PhoneNumberStatusForSmsResponseBodyData;
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
   * The unique ID of the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
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
      data: PhoneNumberStatusForSmsResponseBodyData,
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

