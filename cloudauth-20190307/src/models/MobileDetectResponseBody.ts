// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileDetectResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * Phone number\\"s area (only for plaintext phone numbers)
   * 
   * @example
   * 安徽-马**
   */
  area?: string;
  /**
   * @remarks
   * Verification result
   * 
   * - 1: Available online 
   * - 2: Not available online
   * - 3: No query result
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * Operator name
   * 
   * - CMCC: China Mobile 
   * - CUCC: China Unicom 
   * - CTCC: China Telecom
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * Phone number
   * 
   * @example
   * 131********
   */
  mobile?: string;
  /**
   * @remarks
   * Verification details
   * 
   * - 101: Available number
   * - 102: Empty number
   * - 103: Suspended 
   * - 104: Silent number (inactive small number, new number, non-smartphone user within the last six months) 
   * - 105: Risky number (long-term shutdown or no voice service activated and prone to complaints)
   * - 301: No record found
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
   * Billing count, the total billing count in one request
   * 
   * @example
   * 2
   */
  chargeCount?: string;
  /**
   * @remarks
   * Verification results set
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
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 969434DF-926B-4997-9881-4DE94E39F805
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
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

