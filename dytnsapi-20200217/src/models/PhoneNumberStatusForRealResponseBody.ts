// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForRealResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The carrier that provides service for the phone number. If the number has been ported through mobile number portability (MNP), this field returns the new carrier. Valid values:
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
   * - **NORMAL**: The number is in service.
   * 
   * - **SHUTDOWN**: The service for the number is suspended.
   * 
   * - **POWER_OFF**: The phone is powered off.
   * 
   * - **NOT_EXIST**: The number is not in service.
   * 
   * - **BUSY**: The line is busy.
   * 
   * - **SUSPECTED_POWER_OFF**: The phone is suspected to be powered off.
   * 
   * - **DEFECT**: The number is invalid.
   * 
   * - **UNKNOWN**: The status is unknown.
   * 
   * > Due to carrier system adjustments, China Telecom numbers no longer return the `BUSY`, `SUSPECTED_POWER_OFF`, and `POWER_OFF` statuses. For more information, see the [official announcement](https://help.aliyun.com/document_detail/2489709.html).
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

export class PhoneNumberStatusForRealResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **OperatorLimit**: The query for the phone number is restricted by the carrier.
   * 
   * - **RequestFrequencyLimit**: Carriers prohibit high-frequency queries for the same number within a short period. If this error code is returned, try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned for the request.
   */
  data?: PhoneNumberStatusForRealResponseBodyData;
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
   * A unique identifier for the request. You can use this ID to troubleshoot issues.
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
      data: PhoneNumberStatusForRealResponseBodyData,
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

