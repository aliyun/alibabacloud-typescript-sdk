// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList extends $dara.Model {
  /**
   * @remarks
   * The billable items.
   * 
   * @example
   * 74
   */
  add?: string;
  /**
   * @remarks
   * The fees generated for the verification service. Unitrogen: CNY.
   * 
   * @example
   * 1.48
   */
  amount?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Aliyun
   */
  appName?: string;
  /**
   * @remarks
   * The verification method.
   * 
   * @example
   * Verification of local phone number
   */
  itemName?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FC100000038194004
   */
  sceneCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Alibaba Cloud Communications
   */
  sceneName?: string;
  /**
   * @remarks
   * The unit price. Unit: CNY.
   * 
   * @example
   * 0.02
   */
  singlePrice?: string;
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      amount: 'Amount',
      appName: 'AppName',
      itemName: 'ItemName',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      singlePrice: 'SinglePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'string',
      amount: 'string',
      appName: 'string',
      itemName: 'string',
      sceneCode: 'string',
      sceneName: 'string',
      singlePrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The fees generated for all verification services. Unitrogen: CNY.
   * 
   * @example
   * 1234
   */
  amountSum?: string;
  /**
   * @remarks
   * The details of fees.
   */
  sceneBillingList?: QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList[];
  static names(): { [key: string]: string } {
    return {
      amountSum: 'AmountSum',
      sceneBillingList: 'SceneBillingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountSum: 'string',
      sceneBillingList: { 'type': 'array', 'itemType': QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneBillingList)) {
      $dara.Model.validateArray(this.sceneBillingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The billing information about each verification service.
   */
  data?: QueryGateVerifyBillingPublicResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
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
      data: QueryGateVerifyBillingPublicResponseBodyData,
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

