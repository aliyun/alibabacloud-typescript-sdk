// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAivppResourcesResponseBodyData extends $dara.Model {
  detail?: string;
  /**
   * @example
   * 2034-03-09T17:47:11Z
   */
  expireTime?: string;
  /**
   * @example
   * i-bp154xh3gt3adb4xu1ue
   */
  instanceId?: string;
  /**
   * @example
   * api
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  leftQuantity?: string;
  /**
   * @example
   * 231287932080007
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @example
   * LoadForecasting
   */
  specification?: string;
  /**
   * @example
   * 2024-09-08T01:16Z
   */
  startTime?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      leftQuantity: 'LeftQuantity',
      orderId: 'OrderId',
      quantity: 'Quantity',
      specification: 'Specification',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      expireTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      leftQuantity: 'string',
      orderId: 'string',
      quantity: 'string',
      specification: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAivppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListAivppResourcesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 37cc36b4344b182d36b45d95ae4ef03952ee5c24733ba461
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAivppResourcesResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

