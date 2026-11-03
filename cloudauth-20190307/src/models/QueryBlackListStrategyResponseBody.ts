// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlackListStrategyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The blacklist string. Items in the blacklist are separated by **commas**.
   * 
   * @example
   * 127.0.0.1,127.0.0.2
   */
  bizContent?: string;
  /**
   * @remarks
   * The list type. Valid values:
   * - mobile: The mobile phone number blocklist.
   * - ip: The IP address blocklist.
   * - identifyNum: The ID card blocklist.
   * - bankCard: The bank card blocklist.
   * 
   * @example
   * identifyNum
   */
  bizKey?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1711533786000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 234822
   */
  id?: number;
  /**
   * @remarks
   * The product name. Valid values:
   * - id2meta: ID card two-element verification
   * - mobile3Meta: mobile phone number element verification
   * - bankcardMeta: bank card element verification
   * 
   * @example
   * id2meta
   */
  productName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - **disabled**: disabled
   * - **normal**: enabled
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12600512xxxxxxxx
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizContent: 'BizContent',
      bizKey: 'BizKey',
      gmtModified: 'GmtModified',
      id: 'Id',
      productName: 'ProductName',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContent: 'string',
      bizKey: 'string',
      gmtModified: 'number',
      id: 'number',
      productName: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBlackListStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. **200** indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
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
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: QueryBlackListStrategyResponseBodyResultObject[];
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
      resultObject: { 'type': 'array', 'itemType': QueryBlackListStrategyResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

