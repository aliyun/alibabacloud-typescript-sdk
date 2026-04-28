// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvicesFlatPageResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 192895059480****
   */
  aliyunId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkName?: string;
  /**
   * @example
   * [{"key":"EcsHighCpuUtilization_xxxx", "value":"xxx"}, {"key":"EcsHighCpuUtilization_xxxx", "value":"xxx"}, {"key":"EcsHighCpuUtilization_xxxx", "value":"xxx"}, ]
   */
  content?: string;
  description?: string;
  /**
   * @example
   * 2023-07-01 00:00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2023-07-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 40200899
   */
  id?: number;
  /**
   * @example
   * false
   */
  isExpired?: boolean;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * {"resourceId": "i-2zecnwitr2s7aca6****","resourceName": "ecs-20230701","regionId": "cn-hangzhou",...}
   */
  resource?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      checkId: 'CheckId',
      checkName: 'CheckName',
      content: 'Content',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isExpired: 'IsExpired',
      product: 'Product',
      resource: 'Resource',
      resourceId: 'ResourceId',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'number',
      checkId: 'string',
      checkName: 'string',
      content: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isExpired: 'boolean',
      product: 'string',
      resource: 'string',
      resourceId: 'string',
      severity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesFlatPageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  result?: DescribeAdvicesFlatPageResponseBodyDataResult[];
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      result: 'Result',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': DescribeAdvicesFlatPageResponseBodyDataResult },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesFlatPageResponseBody extends $dara.Model {
  data?: DescribeAdvicesFlatPageResponseBodyData;
  /**
   * @example
   * 566331F9-5AB3-550F-B745-A730331F97A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAdvicesFlatPageResponseBodyData,
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

