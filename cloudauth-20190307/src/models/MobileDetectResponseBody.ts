// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileDetectResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * The location to which the phone number belongs. This field is available only for plaintext phone numbers.
   * 
   * @example
   * 安徽-马**
   */
  area?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - 1: Active and available. 
   * - 2: Not in active and available status.
   * - 3: No query results.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The carrier name. Valid values:
   * 
   * - CMCC: China Mobile 
   * - CUCC: China Unicom 
   * - CTCC: China Telecom.
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 131********
   */
  mobile?: string;
  /**
   * @remarks
   * The verification details. Valid values:
   * 
   * - 101: Available number.
   * - 102: Empty number.
   * - 103: Suspended. 
   * - 104: Silent number (inactive secondary number in the past six months, new number, or non-smartphone user). 
   * - 105: Risky number (user with prolonged shutdown, voice service not activated, or prone to complaints).
   * - 301: No record found.
   * 
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizCode: 'BizCode',
      ispName: 'IspName',
      mobile: 'Mobile',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizCode: 'string',
      ispName: 'string',
      mobile: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The total number of billing counts in a single request.
   * 
   * @example
   * 2
   */
  chargeCount?: string;
  /**
   * @remarks
   * The verification result set.
   */
  items?: MobileDetectResponseBodyResultObjectItems[];
  static names(): { [key: string]: string } {
    return {
      chargeCount: 'ChargeCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeCount: 'string',
      items: { 'type': 'array', 'itemType': MobileDetectResponseBodyResultObjectItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 969434DF-926B-4997-9881-4DE94E39F805
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  resultObject?: MobileDetectResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: MobileDetectResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

