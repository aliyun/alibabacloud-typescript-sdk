// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlackListStrategyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Blacklist string, separated by **commas**.
   * 
   * @example
   * 127.0.0.1,127.0.0.2
   */
  bizContent?: string;
  /**
   * @remarks
   * List type:
   * - mobile: Phone number blacklist
   * - ip: IP blacklist
   * - identifyNum: ID number blacklist
   * - bankCard: Bank card blacklist
   * 
   * @example
   * identifyNum
   */
  bizKey?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1711533786000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 234822
   */
  id?: number;
  /**
   * @remarks
   * Product name:
   * - id2meta: ID number two-factor verification
   * - mobile3Meta: Phone number factor verification
   * - bankcardMeta: Bank card factor verification
   * 
   * @example
   * id2meta
   */
  productName?: string;
  /**
   * @remarks
   * Status:
   * - **disabled**: Disabled
   * - **normal**: Enabled
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * User ID.
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
   * Return code, **200** indicates successful API response.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

