// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOnlineTimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The carrier SMS status code. Valid values:
   * - **CMCC**: China Mobile
   * - **CUCC**: China Unicom
   * - **CTCC**: China Telecom
   * - **CBN**: China Broadnet
   * 
   * @example
   * CMCC
   */
  carrierCode?: string;
  /**
   * @remarks
   * The enumeration value of the network registration duration. Valid values:
   * 
   * - **-1**: No duration was found.
   * - **0**: Abnormal phone status, for example, a non-existent number.
   * - **1**: [0-3) months.
   * - **2**: [3-6) months.
   * - **3**: [6-12) months.
   * - **4**: [12-24) months.
   * - **5**: [24,+∞) months.
   * 
   * @example
   * 1
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      carrierCode: 'CarrierCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrierCode: 'string',
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhoneNumberOnlineTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - **OK**: The request was successful.
   * - **PortabilityNumberNotSupported**: The mobile number portability number is not supported.
   * - **RequestFrequencyLimit**: Due to carrier restrictions, frequent repeated queries on the same number within a short period are prohibited. If this error code is returned, try again later.
   * 
   * > Charges are incurred when Code is OK and VerifyResult is not -1. For billing details, see [Cell Phone Number Service Pricing](https://help.aliyun.com/document_detail/154751.html).
   * >
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribePhoneNumberOnlineTimeResponseBodyData;
  /**
   * @remarks
   * The description of the number status code.
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
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribePhoneNumberOnlineTimeResponseBodyData,
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

