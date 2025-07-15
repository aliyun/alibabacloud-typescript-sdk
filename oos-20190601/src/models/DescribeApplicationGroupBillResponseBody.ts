// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationGroupBillResponseBodyApplicationGroupConsume extends $dara.Model {
  /**
   * @remarks
   * The amount consumed by the instance.
   * 
   * @example
   * 18.88
   */
  amount?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-06-10T06:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-0jl781czrhqey0s5zpsj
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test-
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ALIYUN::ECS::INSTANCE
   */
  instanceType?: string;
  /**
   * @remarks
   * Optimization suggestions.
   * 
   * @example
   * 1
   */
  optimization?: string;
  /**
   * @remarks
   * The peak type.
   * 
   * @example
   * WHITE
   */
  peakType?: string;
  /**
   * @remarks
   * The performance of the data synchronization instance.
   * 
   * @example
   * "{\\"mem\\":\\"6.82\\",\\"cpu\\":\\"0.55\\"}"
   */
  performance?: string;
  /**
   * @remarks
   * The status of instance.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      creationTime: 'CreationTime',
      currency: 'Currency',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      optimization: 'Optimization',
      peakType: 'PeakType',
      performance: 'Performance',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      creationTime: 'string',
      currency: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      optimization: 'string',
      peakType: 'string',
      performance: 'string',
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

export class DescribeApplicationGroupBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The consume of application group.
   */
  applicationGroupConsume?: DescribeApplicationGroupBillResponseBodyApplicationGroupConsume[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E897A1AB-4701-5B71-93AD-38FD703763A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroupConsume: 'ApplicationGroupConsume',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroupConsume: { 'type': 'array', 'itemType': DescribeApplicationGroupBillResponseBodyApplicationGroupConsume },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationGroupConsume)) {
      $dara.Model.validateArray(this.applicationGroupConsume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

