// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PhoneNumberStatusForPublicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic carrier of the number. If the number has been ported, this parameter returns the current carrier.
   * 
   * Valid values:
   * 
   * - **CMCC**: China Mobile
   * 
   * - **CUCC**: China Unicom
   * 
   * - **CTCC**: China Telecom
   * 
   * - **CBN**: China Broadnet
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The status of the queried phone number. Valid values:
   * 
   * - **NORMAL**: The number is in service.
   * 
   * - **SHUTDOWN**: The service for the number is suspended.
   * 
   * - **POWER_OFF**: The phone is powered off.
   * 
   * - **NOT_EXIST**: The number is non-existent.
   * 
   * - **SUSPECTED_POWER_OFF**: The phone is suspected to be powered off.
   * 
   * - **BUSY**: The line is busy.
   * 
   * - **UNKNOWN**: The status is unknown.
   * 
   * > Due to carrier system adjustments, the `BUSY`, `SUSPECTED_POWER_OFF`, and `POWER_OFF` statuses are not returned for China Telecom numbers. For more information, see the [official announcement](https://help.aliyun.com/document_detail/2489709.html).
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

export class PhoneNumberStatusForPublicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. Valid values:
   * 
   * - **OK**: The request was successful.
   * 
   * - **OperatorLimit**: The query for the phone number is prohibited by the carrier.
   * 
   * - **RequestFrequencyLimit**: Carrier restrictions prohibit frequent queries for the same number in a short period. If this error code is returned, try again later.
   * 
   * > For a list of other error codes, see [API Error Center](https://next.api.aliyun.com/document/Dytnsapi/2020-02-17/errorCode).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: PhoneNumberStatusForPublicResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * CC3BB6D2-****-****-9DCE-B38165CE4C47
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
      data: PhoneNumberStatusForPublicResponseBodyData,
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

