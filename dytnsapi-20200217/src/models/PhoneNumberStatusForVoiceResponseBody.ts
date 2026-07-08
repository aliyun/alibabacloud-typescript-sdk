// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForVoiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current carrier for the number. If the number has been ported, this field returns the new carrier. Valid values:
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
   * CTCC
   */
  carrier?: string;
  /**
   * @remarks
   * The status of the phone number. Valid values:
   * 
   * - **NORMAL**: The number is active.
   * 
   * - **SHUTDOWN**: The service for the number is suspended.
   * 
   * - **POWER_OFF**: The phone is powered off.
   * 
   * - **NOT_EXIST**: The number does not exist.
   * 
   * - **SUSPECTED_POWER_OFF**: The phone is likely powered off.
   * 
   * - **DEFECT**: The number is invalid.
   * 
   * - **UNKNOWN**: The status is unknown.
   * 
   * > Due to carrier system adjustments, the `SUSPECTED_POWER_OFF` and `POWER_OFF` statuses are not returned for China Telecom numbers. [For more information, see the official announcement.](https://help.aliyun.com/document_detail/2489709.html)
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

export class PhoneNumberStatusForVoiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **OperatorLimit**: The carrier restricts queries for this phone number.
   * 
   * - **RequestFrequencyLimit**: Carrier restrictions limit how frequently you can query the same number. If you receive this error, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: PhoneNumberStatusForVoiceResponseBodyData;
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
   * The request ID. This is a common parameter. Each request has a unique ID that you can use to troubleshoot issues.
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
      data: PhoneNumberStatusForVoiceResponseBodyData,
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

