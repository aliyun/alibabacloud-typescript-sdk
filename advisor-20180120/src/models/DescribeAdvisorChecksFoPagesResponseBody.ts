// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvisorChecksFoPagesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 21
   */
  category?: string;
  /**
   * @example
   * EcsCostLowUtilizationCheck
   */
  code?: string;
  /**
   * @example
   * false
   */
  configSupport?: string;
  description?: string;
  /**
   * @example
   * false
   */
  inspectionScope?: string;
  name?: string;
  /**
   * @example
   * [{\\"type\\":\\"template\\",\\"value\\":\\"cloudmonitor.console.aliyun.com/index.htm?custom_trace=ecs_console#/hostDetail/chart/instanceId=${Resource.resourceId}&system=Linux&region=${Resource.regionId}&aliyunhost=true\\",\\"key\\":\\"Detail\\"},{\\"type\\":\\"template\\",\\"value\\":\\"/diagnosis?product=${Product}&resourceId=${Resource.resourceId}\\",\\"key\\":\\"Refresh\\"}]
   */
  operateColumn?: string;
  /**
   * @example
   * ECS
   */
  product?: string;
  riskLevel?: number;
  /**
   * @example
   * Advisor
   */
  source?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  subCategory?: number[];
  tips?: string;
  /**
   * @example
   * [{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_resourceId\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_resourceName\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_regionId\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_instanceChargeType\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_instanceType\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_severity\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_costBefore\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_costAfter\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"EcsCostIdleCheck_costSavings\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"First_time\\"},{\\"type\\":\\"DEFAULT\\",\\"key\\":\\"Duration_time\\"}]
   */
  viewColumn?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      code: 'Code',
      configSupport: 'ConfigSupport',
      description: 'Description',
      inspectionScope: 'InspectionScope',
      name: 'Name',
      operateColumn: 'OperateColumn',
      product: 'Product',
      riskLevel: 'RiskLevel',
      source: 'Source',
      status: 'Status',
      subCategory: 'SubCategory',
      tips: 'Tips',
      viewColumn: 'ViewColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      code: 'string',
      configSupport: 'string',
      description: 'string',
      inspectionScope: 'string',
      name: 'string',
      operateColumn: 'string',
      product: 'string',
      riskLevel: 'number',
      source: 'string',
      status: 'string',
      subCategory: { 'type': 'array', 'itemType': 'number' },
      tips: 'string',
      viewColumn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subCategory)) {
      $dara.Model.validateArray(this.subCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksFoPagesResponseBodyData extends $dara.Model {
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
  result?: DescribeAdvisorChecksFoPagesResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': DescribeAdvisorChecksFoPagesResponseBodyDataResult },
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

export class DescribeAdvisorChecksFoPagesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeAdvisorChecksFoPagesResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-5AB3-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeAdvisorChecksFoPagesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

