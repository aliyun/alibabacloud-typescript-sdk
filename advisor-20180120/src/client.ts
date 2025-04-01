// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class RdAccountDTOTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBodyDataAdvice extends $dara.Model {
  /**
   * @example
   * 1234567891234567
   */
  aliyunId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkName?: string;
  checkPlanId?: number;
  /**
   * @example
   * [
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"value":xxx
   * 	},
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"value":xxx
   * 	},
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"value":xxx
   * 	},
   * ]
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
   * @remarks
   * ID
   * 
   * @example
   * 123
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
   * {
   * 	"resourceId": xxxx,
   * 	"resourceName": xxxxxx,
   * 	"regionId": xxxx,
   * 	...
   * }
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
      checkPlanId: 'CheckPlanId',
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
      checkPlanId: 'number',
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

export class DescribeAdvicesResponseBodyData extends $dara.Model {
  advice?: DescribeAdvicesResponseBodyDataAdvice[];
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': DescribeAdvicesResponseBodyDataAdvice },
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeAdvicesPageResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 1234567891234567
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
   * [
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"value":xxx
   * 	},
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"value":xxx
   * 	},
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"value":xxx
   * 	},
   * ]
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
   * @remarks
   * ID
   * 
   * @example
   * 123
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
   * {
   * 	"resourceId": xxxx,
   * 	"resourceName": xxxxxx,
   * 	"regionId": xxxx,
   * 	...
   * }
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

export class DescribeAdvicesPageResponseBodyData extends $dara.Model {
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
  result?: DescribeAdvicesPageResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': DescribeAdvicesPageResponseBodyDataResult },
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

export class DescribeAdvisorChecksResponseBodyDataAdvisorCheck extends $dara.Model {
  /**
   * @example
   * 1
   */
  category?: string;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  code?: string;
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
  name?: string;
  operateColumn?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  tips?: string;
  /**
   * @example
   * [
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"type":"DEFAULT"
   * 	},
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"type":"DEFAULT"
   * 	},
   * 	{
   * 		"key":"EcsHighCpuUtilization_xxxx",
   * 		"type":"DEFAULT"
   * 	},
   * ]
   */
  viewColumn?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      code: 'Code',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      name: 'Name',
      operateColumn: 'OperateColumn',
      product: 'Product',
      status: 'Status',
      tips: 'Tips',
      viewColumn: 'ViewColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      code: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      name: 'string',
      operateColumn: 'string',
      product: 'string',
      status: 'string',
      tips: 'string',
      viewColumn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBodyData extends $dara.Model {
  advisorCheck?: DescribeAdvisorChecksResponseBodyDataAdvisorCheck[];
  static names(): { [key: string]: string } {
    return {
      advisorCheck: 'AdvisorCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advisorCheck: { 'type': 'array', 'itemType': DescribeAdvisorChecksResponseBodyDataAdvisorCheck },
    };
  }

  validate() {
    if(Array.isArray(this.advisorCheck)) {
      $dara.Model.validateArray(this.advisorCheck);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeAdvisorResourcesResponseBodyDataResultResource extends $dara.Model {
  /**
   * @example
   * {
   *     "resourceId": "xxxxx",
   *     "deviceAvailable": true,
   *     ...
   * }
   */
  data?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @example
   * ecs-20230701
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesResponseBodyDataResult extends $dara.Model {
  resource?: DescribeAdvisorResourcesResponseBodyDataResultResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAdvisorResourcesResponseBodyDataResultResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesResponseBodyData extends $dara.Model {
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
  result?: DescribeAdvisorResourcesResponseBodyDataResult;
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
      result: DescribeAdvisorResourcesResponseBodyDataResult,
      total: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesRequestTagList extends $dara.Model {
  /**
   * @example
   * ecs_***_shanghai
   */
  tagKey?: string;
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValue)) {
      $dara.Model.validateArray(this.tagValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBodyDataAdviceListTags extends $dara.Model {
  /**
   * @example
   * autoTest-7
   */
  tagKey?: string;
  /**
   * @example
   * basic
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBodyDataAdviceList extends $dara.Model {
  /**
   * @example
   * 1
   */
  accountFolderId?: string;
  /**
   * @example
   * 1
   */
  accountFolderName?: string;
  /**
   * @example
   * 111******767
   */
  aliyunId?: number;
  /**
   * @example
   * {\\"Domains\\": [{\\"Status\\": \\"success\\", \\"\\": \\"cn\\", \\"DomainName\\": \\"www.****.com\\", Region\\"Desc\\": \\"ok\\"}]}
   */
  content?: string;
  /**
   * @remarks
   * Email
   * 
   * @example
   * xxx
   */
  email?: string;
  /**
   * @example
   * 2025-03-05T02:02:00Z
   */
  endTime?: number;
  /**
   * @example
   * 2025-03-05T02:02:00Z
   */
  gmtDeleted?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * i-2ze5*****ef7d2lk63in
   */
  resourceId?: string;
  /**
   * @example
   * 1200***bles_df
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: string;
  /**
   * @example
   * 2025-02-04T16:00:00Z
   */
  startTime?: number;
  tags?: DescribeCostCheckAdvicesResponseBodyDataAdviceListTags[];
  url?: string;
  /**
   * @example
   * test
   */
  userName?: string;
  /**
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountFolderId: 'AccountFolderId',
      accountFolderName: 'AccountFolderName',
      aliyunId: 'AliyunId',
      content: 'Content',
      email: 'Email',
      endTime: 'EndTime',
      gmtDeleted: 'GmtDeleted',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      severity: 'Severity',
      startTime: 'StartTime',
      tags: 'Tags',
      url: 'Url',
      userName: 'UserName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountFolderId: 'string',
      accountFolderName: 'string',
      aliyunId: 'number',
      content: 'string',
      email: 'string',
      endTime: 'number',
      gmtDeleted: 'number',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      severity: 'string',
      startTime: 'number',
      tags: { 'type': 'array', 'itemType': DescribeCostCheckAdvicesResponseBodyDataAdviceListTags },
      url: 'string',
      userName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBodyData extends $dara.Model {
  adviceList?: DescribeCostCheckAdvicesResponseBodyDataAdviceList[];
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  /**
   * @example
   * 4
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceList: 'AdviceList',
      checkId: 'CheckId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceList: { 'type': 'array', 'itemType': DescribeCostCheckAdvicesResponseBodyDataAdviceList },
      checkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adviceList)) {
      $dara.Model.validateArray(this.adviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsRequestTagList extends $dara.Model {
  /**
   * @example
   * ERP
   */
  tagKey?: string;
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValue)) {
      $dara.Model.validateArray(this.tagValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBodyDataViewGroupCheckItems extends $dara.Model {
  /**
   * @example
   * 100
   */
  adviceCount?: number;
  /**
   * @example
   * 1
   */
  adviceResourceCount?: number;
  /**
   * @example
   * 4
   */
  category?: string;
  /**
   * @example
   * EbsCostIdleCheck
   */
  checkId?: string;
  checkName?: string;
  /**
   * @example
   * 1
   */
  currentCost?: number;
  description?: string;
  /**
   * @example
   * 1
   */
  expectedSavingCost?: number;
  /**
   * @example
   * 1
   */
  optimizedCost?: number;
  /**
   * @example
   * slb
   */
  product?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  /**
   * @example
   * true
   */
  summary?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      adviceCount: 'AdviceCount',
      adviceResourceCount: 'AdviceResourceCount',
      category: 'Category',
      checkId: 'CheckId',
      checkName: 'CheckName',
      currentCost: 'CurrentCost',
      description: 'Description',
      expectedSavingCost: 'ExpectedSavingCost',
      optimizedCost: 'OptimizedCost',
      product: 'Product',
      severity: 'Severity',
      summary: 'Summary',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceCount: 'number',
      adviceResourceCount: 'number',
      category: 'string',
      checkId: 'string',
      checkName: 'string',
      currentCost: 'number',
      description: 'string',
      expectedSavingCost: 'number',
      optimizedCost: 'number',
      product: 'string',
      severity: 'number',
      summary: 'string',
      tips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBodyDataViewGroup extends $dara.Model {
  checkItems?: DescribeCostCheckResultsResponseBodyDataViewGroupCheckItems[];
  /**
   * @example
   * 22
   */
  groupCode?: string;
  /**
   * @example
   * 0
   */
  groupCount?: number;
  /**
   * @example
   * 1
   */
  groupExpectedSavingCost?: number;
  /**
   * @example
   * aut***8ainRh1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'CheckItems',
      groupCode: 'GroupCode',
      groupCount: 'GroupCount',
      groupExpectedSavingCost: 'GroupExpectedSavingCost',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': DescribeCostCheckResultsResponseBodyDataViewGroupCheckItems },
      groupCode: 'string',
      groupCount: 'number',
      groupExpectedSavingCost: 'number',
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBodyData extends $dara.Model {
  adviceResourceCount?: number;
  /**
   * @example
   * Category
   */
  groupBy?: string;
  /**
   * @example
   * 1
   */
  normalCount?: number;
  /**
   * @example
   * 76
   */
  resourceCount?: number;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  viewGroup?: DescribeCostCheckResultsResponseBodyDataViewGroup[];
  /**
   * @example
   * 1
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceResourceCount: 'AdviceResourceCount',
      groupBy: 'GroupBy',
      normalCount: 'NormalCount',
      resourceCount: 'ResourceCount',
      totalCount: 'TotalCount',
      viewGroup: 'ViewGroup',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceResourceCount: 'number',
      groupBy: 'string',
      normalCount: 'number',
      resourceCount: 'number',
      totalCount: 'number',
      viewGroup: { 'type': 'array', 'itemType': DescribeCostCheckResultsResponseBodyDataViewGroup },
      warningCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.viewGroup)) {
      $dara.Model.validateArray(this.viewGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * AuthAction
   * 
   * @example
   * null
   */
  authAction?: string;
  /**
   * @example
   * null
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * null
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * null
   */
  authPrincipalType?: string;
  /**
   * @example
   * *****
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * null
   */
  noPermissionType?: string;
  /**
   * @example
   * PauseNotify
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  billingCycleDate?: string;
  /**
   * @example
   * 100
   */
  currentBillingCost?: string;
  /**
   * @example
   * 100
   */
  expectedSavingCost?: string;
  /**
   * @example
   * 2023-07-01 00:00:00
   */
  gmtModified?: number;
  /**
   * @example
   * 100
   */
  optCheckItemNum?: string;
  /**
   * @example
   * 100
   */
  optResourceNum?: string;
  /**
   * @example
   * 95***135
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycleDate: 'BillingCycleDate',
      currentBillingCost: 'CurrentBillingCost',
      expectedSavingCost: 'ExpectedSavingCost',
      gmtModified: 'GmtModified',
      optCheckItemNum: 'OptCheckItemNum',
      optResourceNum: 'OptResourceNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycleDate: 'string',
      currentBillingCost: 'string',
      expectedSavingCost: 'string',
      gmtModified: 'number',
      optCheckItemNum: 'string',
      optResourceNum: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkName?: string;
  description?: string;
  /**
   * @example
   * 2023-07-01 00:00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
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
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      product: 'Product',
      resourceId: 'ResourceId',
      severity: 'Severity',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
      gmtCreated: 'string',
      product: 'string',
      resourceId: 'string',
      severity: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  result?: GetHistoryAdvicesResponseBodyDataResult[];
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      result: 'Result',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      result: { 'type': 'array', 'itemType': GetHistoryAdvicesResponseBodyDataResult },
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

export class GetInspectProgressResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  allSubtaskCount?: number;
  /**
   * @example
   * True
   */
  finish?: boolean;
  /**
   * @example
   * 1
   */
  finishRate?: number;
  /**
   * @example
   * 1
   */
  finishSubtaskCount?: number;
  /**
   * @example
   * 111
   */
  lastInspectDate?: number;
  /**
   * @example
   * 95***135
   */
  taskId?: number;
  /**
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      allSubtaskCount: 'AllSubtaskCount',
      finish: 'Finish',
      finishRate: 'FinishRate',
      finishSubtaskCount: 'FinishSubtaskCount',
      lastInspectDate: 'LastInspectDate',
      taskId: 'TaskId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSubtaskCount: 'number',
      finish: 'boolean',
      finishRate: 'number',
      finishSubtaskCount: 'number',
      lastInspectDate: 'number',
      taskId: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * *
   */
  authAction?: string;
  /**
   * @example
   * *
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * *
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * *
   */
  authPrincipalType?: string;
  /**
   * @example
   * ****
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * *
   */
  noPermissionType?: string;
  /**
   * @example
   * *
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBodyDataProductList extends $dara.Model {
  newLabel?: string;
  /**
   * @example
   * hologres
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      newLabel: 'NewLabel',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newLabel: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBodyData extends $dara.Model {
  category?: string;
  productList?: GetProductListResponseBodyDataProductList[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      productList: { 'type': 'array', 'itemType': GetProductListResponseBodyDataProductList },
    };
  }

  validate() {
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusByIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 95906135
   */
  taskId?: number;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      taskStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckRequestResourceDimensionList extends $dara.Model {
  cost?: boolean;
  performance?: boolean;
  product?: string;
  productName?: string;
  reliablility?: boolean;
  security?: boolean;
  service?: boolean;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      performance: 'Performance',
      product: 'Product',
      productName: 'ProductName',
      reliablility: 'Reliablility',
      security: 'Security',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'boolean',
      performance: 'boolean',
      product: 'string',
      productName: 'string',
      reliablility: 'boolean',
      security: 'boolean',
      service: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckResponseBodyData extends $dara.Model {
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 12345678
   */
  taskId?: number;
  /**
   * @example
   * manual-1be17af1121b4974822e69daee4f2481
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
      taskId: 'number',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCostCheckResponseBodyData extends $dara.Model {
  /**
   * @example
   * c-wl*****n0g
   */
  commandId?: string;
  /**
   * @example
   * 11***********35
   */
  managerTaskId?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 959***135
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      managerTaskId: 'ManagerTaskId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      managerTaskId: 'number',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportBizAlertInfoResponseBodyData extends $dara.Model {
  result?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RdAccountDTO extends $dara.Model {
  accountType?: string;
  checked?: boolean;
  displayName?: string;
  id?: number;
  name?: string;
  tags?: RdAccountDTOTags[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      checked: 'Checked',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      checked: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      tags: { 'type': 'array', 'itemType': RdAccountDTOTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RdAccountFolderDTO extends $dara.Model {
  accountCount?: number;
  accountList?: RdAccountDTO[];
  folderId?: string;
  folderList?: RdAccountFolderDTO[];
  folderName?: string;
  resourceDirectoryId?: string;
  resourceDirectoryPath?: string;
  resourceDirectoryPathName?: string;
  selectedCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountCount: 'AccountCount',
      accountList: 'AccountList',
      folderId: 'FolderId',
      folderList: 'FolderList',
      folderName: 'FolderName',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      resourceDirectoryPathName: 'ResourceDirectoryPathName',
      selectedCount: 'SelectedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCount: 'number',
      accountList: { 'type': 'array', 'itemType': RdAccountDTO },
      folderId: 'string',
      folderList: { 'type': 'array', 'itemType': RdAccountFolderDTO },
      folderName: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      resourceDirectoryPathName: 'string',
      selectedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountList)) {
      $dara.Model.validateArray(this.accountList);
    }
    if(Array.isArray(this.folderList)) {
      $dara.Model.validateArray(this.folderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesRequest extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  adviceId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * 12345678
   */
  excludeAdviceId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      excludeAdviceId: 'ExcludeAdviceId',
      language: 'Language',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      excludeAdviceId: 'number',
      language: 'string',
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBody extends $dara.Model {
  data?: DescribeAdvicesResponseBodyData;
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
      data: DescribeAdvicesResponseBodyData,
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

export class DescribeAdvicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdvicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesFlatPageRequest extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  adviceId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-2zecnwitr2s7aca6****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      checkId: 'CheckId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      checkId: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
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

export class DescribeAdvicesFlatPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvicesFlatPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdvicesFlatPageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageRequest extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  adviceId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesPageResponseBody extends $dara.Model {
  data?: DescribeAdvicesPageResponseBodyData;
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
      data: DescribeAdvicesPageResponseBodyData,
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

export class DescribeAdvicesPageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvicesPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdvicesPageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeAdvisorChecksResponseBodyData;
  /**
   * @example
   * 566331F9-5AB3-550F-B745-A730331F97A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAdvisorChecksResponseBodyData,
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

export class DescribeAdvisorChecksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvisorChecksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdvisorChecksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksFoPagesRequest extends $dara.Model {
  /**
   * @example
   * 11*********35
   */
  assumeAliyunId?: number;
  /**
   * @example
   * 2
   */
  bizCategory?: string;
  /**
   * @example
   * *
   */
  category?: string;
  checkTypes?: number[];
  /**
   * @example
   * ****
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * *
   */
  source?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      bizCategory: 'BizCategory',
      category: 'Category',
      checkTypes: 'CheckTypes',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      source: 'Source',
      status: 'Status',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      bizCategory: 'string',
      category: 'string',
      checkTypes: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      source: 'string',
      status: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkTypes)) {
      $dara.Model.validateArray(this.checkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksFoPagesShrinkRequest extends $dara.Model {
  /**
   * @example
   * 11*********35
   */
  assumeAliyunId?: number;
  /**
   * @example
   * 2
   */
  bizCategory?: string;
  /**
   * @example
   * *
   */
  category?: string;
  checkTypesShrink?: string;
  /**
   * @example
   * ****
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * *
   */
  source?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      bizCategory: 'BizCategory',
      category: 'Category',
      checkTypesShrink: 'CheckTypes',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      source: 'Source',
      status: 'Status',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      bizCategory: 'string',
      category: 'string',
      checkTypesShrink: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      source: 'string',
      status: 'string',
      token: 'string',
    };
  }

  validate() {
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

export class DescribeAdvisorChecksFoPagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvisorChecksFoPagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdvisorChecksFoPagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesRequest extends $dara.Model {
  /**
   * @example
   * abcd
   */
  keyword?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesResponseBody extends $dara.Model {
  data?: DescribeAdvisorResourcesResponseBodyData;
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
      data: DescribeAdvisorResourcesResponseBodyData,
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

export class DescribeAdvisorResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvisorResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdvisorResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesRequest extends $dara.Model {
  assumeAliyunIdList?: number[];
  /**
   * @example
   * EcsCostLowUtilizationCheck
   */
  checkId?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 6
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  regionIds?: string[];
  resourceIds?: string[];
  /**
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: string;
  tagKeys?: string[];
  tagList?: DescribeCostCheckAdvicesRequestTagList[];
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkId: 'CheckId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      resourceIds: 'ResourceIds',
      resourceName: 'ResourceName',
      severity: 'Severity',
      tagKeys: 'TagKeys',
      tagList: 'TagList',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      checkId: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      severity: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      tagList: { 'type': 'array', 'itemType': DescribeCostCheckAdvicesRequestTagList },
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesShrinkRequest extends $dara.Model {
  assumeAliyunIdListShrink?: string;
  /**
   * @example
   * EcsCostLowUtilizationCheck
   */
  checkId?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 6
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  regionIdsShrink?: string;
  resourceIdsShrink?: string;
  /**
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: string;
  tagKeysShrink?: string;
  tagListShrink?: string;
  tagValuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkId: 'CheckId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIdsShrink: 'RegionIds',
      resourceIdsShrink: 'ResourceIds',
      resourceName: 'ResourceName',
      severity: 'Severity',
      tagKeysShrink: 'TagKeys',
      tagListShrink: 'TagList',
      tagValuesShrink: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdListShrink: 'string',
      checkId: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIdsShrink: 'string',
      resourceIdsShrink: 'string',
      resourceName: 'string',
      severity: 'string',
      tagKeysShrink: 'string',
      tagListShrink: 'string',
      tagValuesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckAdvicesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCostCheckAdvicesResponseBodyData;
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
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
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
      data: DescribeCostCheckAdvicesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class DescribeCostCheckAdvicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCostCheckAdvicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCostCheckAdvicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsRequest extends $dara.Model {
  assumeAliyunIdList?: number[];
  checkIds?: string[];
  /**
   * @example
   * Category
   */
  groupBy?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  regionIds?: string[];
  resourceGroupIdList?: string[];
  resourceIds?: string[];
  /**
   * @example
   * SYNC_********_TASK
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  tagKeys?: string[];
  tagList?: DescribeCostCheckResultsRequestTagList[];
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkIds: 'CheckIds',
      groupBy: 'GroupBy',
      product: 'Product',
      regionIds: 'RegionIds',
      resourceGroupIdList: 'ResourceGroupIdList',
      resourceIds: 'ResourceIds',
      resourceName: 'ResourceName',
      severity: 'Severity',
      tagKeys: 'TagKeys',
      tagList: 'TagList',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      checkIds: { 'type': 'array', 'itemType': 'string' },
      groupBy: 'string',
      product: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      severity: 'number',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      tagList: { 'type': 'array', 'itemType': DescribeCostCheckResultsRequestTagList },
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.regionIds)) {
      $dara.Model.validateArray(this.regionIds);
    }
    if(Array.isArray(this.resourceGroupIdList)) {
      $dara.Model.validateArray(this.resourceGroupIdList);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsShrinkRequest extends $dara.Model {
  assumeAliyunIdListShrink?: string;
  checkIdsShrink?: string;
  /**
   * @example
   * Category
   */
  groupBy?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  regionIdsShrink?: string;
  resourceGroupIdListShrink?: string;
  resourceIdsShrink?: string;
  /**
   * @example
   * SYNC_********_TASK
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  tagKeysShrink?: string;
  tagListShrink?: string;
  tagValuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkIdsShrink: 'CheckIds',
      groupBy: 'GroupBy',
      product: 'Product',
      regionIdsShrink: 'RegionIds',
      resourceGroupIdListShrink: 'ResourceGroupIdList',
      resourceIdsShrink: 'ResourceIds',
      resourceName: 'ResourceName',
      severity: 'Severity',
      tagKeysShrink: 'TagKeys',
      tagListShrink: 'TagList',
      tagValuesShrink: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdListShrink: 'string',
      checkIdsShrink: 'string',
      groupBy: 'string',
      product: 'string',
      regionIdsShrink: 'string',
      resourceGroupIdListShrink: 'string',
      resourceIdsShrink: 'string',
      resourceName: 'string',
      severity: 'number',
      tagKeysShrink: 'string',
      tagListShrink: 'string',
      tagValuesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostCheckResultsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCostCheckResultsResponseBodyData;
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
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
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
      data: DescribeCostCheckResultsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class DescribeCostCheckResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCostCheckResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCostCheckResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewRequest extends $dara.Model {
  /**
   * @example
   * 11***********35
   */
  assumeAliyunId?: number;
  assumeAliyunIdList?: number[];
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      assumeAliyunIdList: 'AssumeAliyunIdList',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewShrinkRequest extends $dara.Model {
  /**
   * @example
   * 11***********35
   */
  assumeAliyunId?: number;
  assumeAliyunIdListShrink?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      assumeAliyunIdListShrink: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewResponseBody extends $dara.Model {
  accessDeniedDetail?: DescribeCostOptimizationOverviewResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeCostOptimizationOverviewResponseBodyData;
  /**
   * @example
   * Internal service issue. Detail:.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeCostOptimizationOverviewResponseBodyAccessDeniedDetail,
      code: 'string',
      data: DescribeCostOptimizationOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostOptimizationOverviewResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCostOptimizationOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCostOptimizationOverviewResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesRequest extends $dara.Model {
  /**
   * @example
   * 2023-07-01
   */
  endDate?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1
   */
  severity?: string;
  /**
   * @example
   * 2023-07-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      language: 'Language',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      product: 'Product',
      reverse: 'Reverse',
      severity: 'Severity',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      language: 'string',
      pageNum: 'number',
      pageSize: 'number',
      product: 'string',
      reverse: 'boolean',
      severity: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBody extends $dara.Model {
  data?: GetHistoryAdvicesResponseBodyData;
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
      data: GetHistoryAdvicesResponseBodyData,
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

export class GetHistoryAdvicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistoryAdvicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHistoryAdvicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectProgressRequest extends $dara.Model {
  /**
   * @example
   * 14********37
   */
  assumeAliyunId?: number;
  /**
   * @example
   * 95***135
   */
  taskId?: number;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      taskId: 'TaskId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      taskId: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectProgressResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetInspectProgressResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
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
      data: GetInspectProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetInspectProgressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInspectProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInspectProgressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListRequest extends $dara.Model {
  /**
   * @example
   * ****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBody extends $dara.Model {
  accessDeniedDetail?: GetProductListResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetProductListResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 566331F9-****-550F-B745-A730331F97A9
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * *
   */
  userMessage?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userMessage: 'UserMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetProductListResponseBodyAccessDeniedDetail,
      code: 'string',
      data: { 'type': 'array', 'itemType': GetProductListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userMessage: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusByIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 95906135
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusByIdResponseBody extends $dara.Model {
  data?: GetTaskStatusByIdResponseBodyData;
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
      data: GetTaskStatusByIdResponseBodyData,
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

export class GetTaskStatusByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatusByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskStatusByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckRequest extends $dara.Model {
  assumeAliyunId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  resourceDimensionList?: RefreshAdvisorCheckRequestResourceDimensionList[];
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      language: 'Language',
      product: 'Product',
      resourceDimensionList: 'ResourceDimensionList',
      resourceId: 'ResourceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      product: 'string',
      resourceDimensionList: { 'type': 'array', 'itemType': RefreshAdvisorCheckRequestResourceDimensionList },
      resourceId: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceDimensionList)) {
      $dara.Model.validateArray(this.resourceDimensionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckShrinkRequest extends $dara.Model {
  assumeAliyunId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  resourceDimensionListShrink?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      language: 'Language',
      product: 'Product',
      resourceDimensionListShrink: 'ResourceDimensionList',
      resourceId: 'ResourceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      product: 'string',
      resourceDimensionListShrink: 'string',
      resourceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckResponseBody extends $dara.Model {
  data?: RefreshAdvisorCheckResponseBodyData;
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
      data: RefreshAdvisorCheckResponseBodyData,
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

export class RefreshAdvisorCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshAdvisorCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshAdvisorCheckResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCostCheckRequest extends $dara.Model {
  assumeAliyunIdList?: number[];
  checkIds?: string[];
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * false
   */
  refreshResource?: boolean;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkIds: 'CheckIds',
      product: 'Product',
      refreshResource: 'RefreshResource',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      checkIds: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      refreshResource: 'boolean',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCostCheckShrinkRequest extends $dara.Model {
  assumeAliyunIdListShrink?: string;
  checkIdsShrink?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * false
   */
  refreshResource?: boolean;
  resourceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkIdsShrink: 'CheckIds',
      product: 'Product',
      refreshResource: 'RefreshResource',
      resourceIdsShrink: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdListShrink: 'string',
      checkIdsShrink: 'string',
      product: 'string',
      refreshResource: 'boolean',
      resourceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCostCheckResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: RefreshAdvisorCostCheckResponseBodyData;
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
   * 566331F9-****-550F-B745-A730331F97A9
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
      data: RefreshAdvisorCostCheckResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class RefreshAdvisorCostCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshAdvisorCostCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshAdvisorCostCheckResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  data?: number;
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
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshAdvisorResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshAdvisorResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportBizAlertInfoRequest extends $dara.Model {
  alertDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertDetail?: string;
  alertGrade?: string;
  alertLabels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertScene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertToken?: string;
  alertUid?: number[];
  language?: string;
  static names(): { [key: string]: string } {
    return {
      alertDescription: 'AlertDescription',
      alertDetail: 'AlertDetail',
      alertGrade: 'AlertGrade',
      alertLabels: 'AlertLabels',
      alertScene: 'AlertScene',
      alertToken: 'AlertToken',
      alertUid: 'AlertUid',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDescription: 'string',
      alertDetail: 'string',
      alertGrade: 'string',
      alertLabels: 'string',
      alertScene: 'string',
      alertToken: 'string',
      alertUid: { 'type': 'array', 'itemType': 'number' },
      language: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertUid)) {
      $dara.Model.validateArray(this.alertUid);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportBizAlertInfoShrinkRequest extends $dara.Model {
  alertDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertDetail?: string;
  alertGrade?: string;
  alertLabels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertScene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertToken?: string;
  alertUidShrink?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      alertDescription: 'AlertDescription',
      alertDetail: 'AlertDetail',
      alertGrade: 'AlertGrade',
      alertLabels: 'AlertLabels',
      alertScene: 'AlertScene',
      alertToken: 'AlertToken',
      alertUidShrink: 'AlertUid',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDescription: 'string',
      alertDetail: 'string',
      alertGrade: 'string',
      alertLabels: 'string',
      alertScene: 'string',
      alertToken: 'string',
      alertUidShrink: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportBizAlertInfoResponseBody extends $dara.Model {
  code?: string;
  data?: ReportBizAlertInfoResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: ReportBizAlertInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ReportBizAlertInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportBizAlertInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportBizAlertInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("advisor", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 根据多个维度获取用户最新的巡检结果，全量返回-openApi
   * 
   * @param request - DescribeAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvicesResponse
   */
  async describeAdvicesWithOptions(request: DescribeAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.excludeAdviceId)) {
      query["ExcludeAdviceId"] = request.excludeAdviceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAdvicesResponse>(await this.callApi(params, req, runtime), new DescribeAdvicesResponse({}));
    } else {
      return $dara.cast<DescribeAdvicesResponse>(await this.execute(params, req, runtime), new DescribeAdvicesResponse({}));
    }

  }

  /**
   * 根据多个维度获取用户最新的巡检结果，全量返回-openApi
   * 
   * @param request - DescribeAdvicesRequest
   * @returns DescribeAdvicesResponse
   */
  async describeAdvices(request: DescribeAdvicesRequest): Promise<DescribeAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvicesWithOptions(request, runtime);
  }

  /**
   * DescribeAdvicesFlat分页
   * 
   * @param request - DescribeAdvicesFlatPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvicesFlatPageResponse
   */
  async describeAdvicesFlatPageWithOptions(request: DescribeAdvicesFlatPageRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAdvicesFlatPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvicesFlatPage",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAdvicesFlatPageResponse>(await this.callApi(params, req, runtime), new DescribeAdvicesFlatPageResponse({}));
    } else {
      return $dara.cast<DescribeAdvicesFlatPageResponse>(await this.execute(params, req, runtime), new DescribeAdvicesFlatPageResponse({}));
    }

  }

  /**
   * DescribeAdvicesFlat分页
   * 
   * @param request - DescribeAdvicesFlatPageRequest
   * @returns DescribeAdvicesFlatPageResponse
   */
  async describeAdvicesFlatPage(request: DescribeAdvicesFlatPageRequest): Promise<DescribeAdvicesFlatPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvicesFlatPageWithOptions(request, runtime);
  }

  /**
   * DescribeAdvices分页
   * 
   * @param request - DescribeAdvicesPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvicesPageResponse
   */
  async describeAdvicesPageWithOptions(request: DescribeAdvicesPageRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAdvicesPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvicesPage",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAdvicesPageResponse>(await this.callApi(params, req, runtime), new DescribeAdvicesPageResponse({}));
    } else {
      return $dara.cast<DescribeAdvicesPageResponse>(await this.execute(params, req, runtime), new DescribeAdvicesPageResponse({}));
    }

  }

  /**
   * DescribeAdvices分页
   * 
   * @param request - DescribeAdvicesPageRequest
   * @returns DescribeAdvicesPageResponse
   */
  async describeAdvicesPage(request: DescribeAdvicesPageRequest): Promise<DescribeAdvicesPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvicesPageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAdvisorChecksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvisorChecksResponse
   */
  async describeAdvisorChecksWithOptions(request: DescribeAdvisorChecksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAdvisorChecksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvisorChecks",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAdvisorChecksResponse>(await this.callApi(params, req, runtime), new DescribeAdvisorChecksResponse({}));
    } else {
      return $dara.cast<DescribeAdvisorChecksResponse>(await this.execute(params, req, runtime), new DescribeAdvisorChecksResponse({}));
    }

  }

  /**
   * @param request - DescribeAdvisorChecksRequest
   * @returns DescribeAdvisorChecksResponse
   */
  async describeAdvisorChecks(request: DescribeAdvisorChecksRequest): Promise<DescribeAdvisorChecksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvisorChecksWithOptions(request, runtime);
  }

  /**
   * 巡检项设置-分页
   * 
   * @param tmpReq - DescribeAdvisorChecksFoPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvisorChecksFoPagesResponse
   */
  async describeAdvisorChecksFoPagesWithOptions(tmpReq: DescribeAdvisorChecksFoPagesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAdvisorChecksFoPagesResponse> {
    tmpReq.validate();
    let request = new DescribeAdvisorChecksFoPagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkTypes)) {
      request.checkTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkTypes, "CheckTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.bizCategory)) {
      query["BizCategory"] = request.bizCategory;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.checkTypesShrink)) {
      query["CheckTypes"] = request.checkTypesShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvisorChecksFoPages",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAdvisorChecksFoPagesResponse>(await this.callApi(params, req, runtime), new DescribeAdvisorChecksFoPagesResponse({}));
    } else {
      return $dara.cast<DescribeAdvisorChecksFoPagesResponse>(await this.execute(params, req, runtime), new DescribeAdvisorChecksFoPagesResponse({}));
    }

  }

  /**
   * 巡检项设置-分页
   * 
   * @param request - DescribeAdvisorChecksFoPagesRequest
   * @returns DescribeAdvisorChecksFoPagesResponse
   */
  async describeAdvisorChecksFoPages(request: DescribeAdvisorChecksFoPagesRequest): Promise<DescribeAdvisorChecksFoPagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvisorChecksFoPagesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAdvisorResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvisorResourcesResponse
   */
  async describeAdvisorResourcesWithOptions(request: DescribeAdvisorResourcesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAdvisorResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvisorResources",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAdvisorResourcesResponse>(await this.callApi(params, req, runtime), new DescribeAdvisorResourcesResponse({}));
    } else {
      return $dara.cast<DescribeAdvisorResourcesResponse>(await this.execute(params, req, runtime), new DescribeAdvisorResourcesResponse({}));
    }

  }

  /**
   * @param request - DescribeAdvisorResourcesRequest
   * @returns DescribeAdvisorResourcesResponse
   */
  async describeAdvisorResources(request: DescribeAdvisorResourcesRequest): Promise<DescribeAdvisorResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvisorResourcesWithOptions(request, runtime);
  }

  /**
   * 查询成本优化结果详情
   * 
   * @param tmpReq - DescribeCostCheckAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostCheckAdvicesResponse
   */
  async describeCostCheckAdvicesWithOptions(tmpReq: DescribeCostCheckAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCostCheckAdvicesResponse> {
    tmpReq.validate();
    let request = new DescribeCostCheckAdvicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    if (!$dara.isNull(tmpReq.tagList)) {
      request.tagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagList, "TagList", "json");
    }

    if (!$dara.isNull(tmpReq.tagValues)) {
      request.tagValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagValues, "TagValues", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    if (!$dara.isNull(request.tagListShrink)) {
      query["TagList"] = request.tagListShrink;
    }

    if (!$dara.isNull(request.tagValuesShrink)) {
      query["TagValues"] = request.tagValuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostCheckAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCostCheckAdvicesResponse>(await this.callApi(params, req, runtime), new DescribeCostCheckAdvicesResponse({}));
    } else {
      return $dara.cast<DescribeCostCheckAdvicesResponse>(await this.execute(params, req, runtime), new DescribeCostCheckAdvicesResponse({}));
    }

  }

  /**
   * 查询成本优化结果详情
   * 
   * @param request - DescribeCostCheckAdvicesRequest
   * @returns DescribeCostCheckAdvicesResponse
   */
  async describeCostCheckAdvices(request: DescribeCostCheckAdvicesRequest): Promise<DescribeCostCheckAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostCheckAdvicesWithOptions(request, runtime);
  }

  /**
   * 查询巡检项聚合成本优化结果概览
   * 
   * @param tmpReq - DescribeCostCheckResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostCheckResultsResponse
   */
  async describeCostCheckResultsWithOptions(tmpReq: DescribeCostCheckResultsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCostCheckResultsResponse> {
    tmpReq.validate();
    let request = new DescribeCostCheckResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    if (!$dara.isNull(tmpReq.checkIds)) {
      request.checkIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkIds, "CheckIds", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceGroupIdList)) {
      request.resourceGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceGroupIdList, "ResourceGroupIdList", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    if (!$dara.isNull(tmpReq.tagList)) {
      request.tagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagList, "TagList", "json");
    }

    if (!$dara.isNull(tmpReq.tagValues)) {
      request.tagValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagValues, "TagValues", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkIdsShrink)) {
      query["CheckIds"] = request.checkIdsShrink;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.resourceGroupIdListShrink)) {
      query["ResourceGroupIdList"] = request.resourceGroupIdListShrink;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    if (!$dara.isNull(request.tagListShrink)) {
      query["TagList"] = request.tagListShrink;
    }

    if (!$dara.isNull(request.tagValuesShrink)) {
      query["TagValues"] = request.tagValuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostCheckResults",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCostCheckResultsResponse>(await this.callApi(params, req, runtime), new DescribeCostCheckResultsResponse({}));
    } else {
      return $dara.cast<DescribeCostCheckResultsResponse>(await this.execute(params, req, runtime), new DescribeCostCheckResultsResponse({}));
    }

  }

  /**
   * 查询巡检项聚合成本优化结果概览
   * 
   * @param request - DescribeCostCheckResultsRequest
   * @returns DescribeCostCheckResultsResponse
   */
  async describeCostCheckResults(request: DescribeCostCheckResultsRequest): Promise<DescribeCostCheckResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostCheckResultsWithOptions(request, runtime);
  }

  /**
   * 成本优化-概览
   * 
   * @param tmpReq - DescribeCostOptimizationOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostOptimizationOverviewResponse
   */
  async describeCostOptimizationOverviewWithOptions(tmpReq: DescribeCostOptimizationOverviewRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCostOptimizationOverviewResponse> {
    tmpReq.validate();
    let request = new DescribeCostOptimizationOverviewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostOptimizationOverview",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCostOptimizationOverviewResponse>(await this.callApi(params, req, runtime), new DescribeCostOptimizationOverviewResponse({}));
    } else {
      return $dara.cast<DescribeCostOptimizationOverviewResponse>(await this.execute(params, req, runtime), new DescribeCostOptimizationOverviewResponse({}));
    }

  }

  /**
   * 成本优化-概览
   * 
   * @param request - DescribeCostOptimizationOverviewRequest
   * @returns DescribeCostOptimizationOverviewResponse
   */
  async describeCostOptimizationOverview(request: DescribeCostOptimizationOverviewRequest): Promise<DescribeCostOptimizationOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostOptimizationOverviewWithOptions(request, runtime);
  }

  /**
   * @param request - GetHistoryAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoryAdvicesResponse
   */
  async getHistoryAdvicesWithOptions(request: GetHistoryAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<GetHistoryAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoryAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHistoryAdvicesResponse>(await this.callApi(params, req, runtime), new GetHistoryAdvicesResponse({}));
    } else {
      return $dara.cast<GetHistoryAdvicesResponse>(await this.execute(params, req, runtime), new GetHistoryAdvicesResponse({}));
    }

  }

  /**
   * @param request - GetHistoryAdvicesRequest
   * @returns GetHistoryAdvicesResponse
   */
  async getHistoryAdvices(request: GetHistoryAdvicesRequest): Promise<GetHistoryAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHistoryAdvicesWithOptions(request, runtime);
  }

  /**
   * 获取任务执行进度(普通用户、RD单账号)
   * 
   * @param request - GetInspectProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInspectProgressResponse
   */
  async getInspectProgressWithOptions(request: GetInspectProgressRequest, runtime: $dara.RuntimeOptions): Promise<GetInspectProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInspectProgress",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInspectProgressResponse>(await this.callApi(params, req, runtime), new GetInspectProgressResponse({}));
    } else {
      return $dara.cast<GetInspectProgressResponse>(await this.execute(params, req, runtime), new GetInspectProgressResponse({}));
    }

  }

  /**
   * 获取任务执行进度(普通用户、RD单账号)
   * 
   * @param request - GetInspectProgressRequest
   * @returns GetInspectProgressResponse
   */
  async getInspectProgress(request: GetInspectProgressRequest): Promise<GetInspectProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInspectProgressWithOptions(request, runtime);
  }

  /**
   * 获取云产品的列表
   * 
   * @param request - GetProductListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductListResponse
   */
  async getProductListWithOptions(request: GetProductListRequest, runtime: $dara.RuntimeOptions): Promise<GetProductListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetProductListResponse>(await this.callApi(params, req, runtime), new GetProductListResponse({}));
    } else {
      return $dara.cast<GetProductListResponse>(await this.execute(params, req, runtime), new GetProductListResponse({}));
    }

  }

  /**
   * 获取云产品的列表
   * 
   * @param request - GetProductListRequest
   * @returns GetProductListResponse
   */
  async getProductList(request: GetProductListRequest): Promise<GetProductListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductListWithOptions(request, runtime);
  }

  /**
   * 根据id获取任务状态
   * 
   * @param request - GetTaskStatusByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusByIdResponse
   */
  async getTaskStatusByIdWithOptions(request: GetTaskStatusByIdRequest, runtime: $dara.RuntimeOptions): Promise<GetTaskStatusByIdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatusById",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTaskStatusByIdResponse>(await this.callApi(params, req, runtime), new GetTaskStatusByIdResponse({}));
    } else {
      return $dara.cast<GetTaskStatusByIdResponse>(await this.execute(params, req, runtime), new GetTaskStatusByIdResponse({}));
    }

  }

  /**
   * 根据id获取任务状态
   * 
   * @param request - GetTaskStatusByIdRequest
   * @returns GetTaskStatusByIdResponse
   */
  async getTaskStatusById(request: GetTaskStatusByIdRequest): Promise<GetTaskStatusByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskStatusByIdWithOptions(request, runtime);
  }

  /**
   * 触发立即巡检
   * 
   * @param tmpReq - RefreshAdvisorCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAdvisorCheckResponse
   */
  async refreshAdvisorCheckWithOptions(tmpReq: RefreshAdvisorCheckRequest, runtime: $dara.RuntimeOptions): Promise<RefreshAdvisorCheckResponse> {
    tmpReq.validate();
    let request = new RefreshAdvisorCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceDimensionList)) {
      request.resourceDimensionListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceDimensionList, "ResourceDimensionList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceDimensionListShrink)) {
      body["ResourceDimensionList"] = request.resourceDimensionListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAdvisorCheck",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshAdvisorCheckResponse>(await this.callApi(params, req, runtime), new RefreshAdvisorCheckResponse({}));
    } else {
      return $dara.cast<RefreshAdvisorCheckResponse>(await this.execute(params, req, runtime), new RefreshAdvisorCheckResponse({}));
    }

  }

  /**
   * 触发立即巡检
   * 
   * @param request - RefreshAdvisorCheckRequest
   * @returns RefreshAdvisorCheckResponse
   */
  async refreshAdvisorCheck(request: RefreshAdvisorCheckRequest): Promise<RefreshAdvisorCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAdvisorCheckWithOptions(request, runtime);
  }

  /**
   * 发起成本优化巡检
   * 
   * @param tmpReq - RefreshAdvisorCostCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAdvisorCostCheckResponse
   */
  async refreshAdvisorCostCheckWithOptions(tmpReq: RefreshAdvisorCostCheckRequest, runtime: $dara.RuntimeOptions): Promise<RefreshAdvisorCostCheckResponse> {
    tmpReq.validate();
    let request = new RefreshAdvisorCostCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    if (!$dara.isNull(tmpReq.checkIds)) {
      request.checkIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkIds, "CheckIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkIdsShrink)) {
      query["CheckIds"] = request.checkIdsShrink;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.refreshResource)) {
      query["RefreshResource"] = request.refreshResource;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAdvisorCostCheck",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshAdvisorCostCheckResponse>(await this.callApi(params, req, runtime), new RefreshAdvisorCostCheckResponse({}));
    } else {
      return $dara.cast<RefreshAdvisorCostCheckResponse>(await this.execute(params, req, runtime), new RefreshAdvisorCostCheckResponse({}));
    }

  }

  /**
   * 发起成本优化巡检
   * 
   * @param request - RefreshAdvisorCostCheckRequest
   * @returns RefreshAdvisorCostCheckResponse
   */
  async refreshAdvisorCostCheck(request: RefreshAdvisorCostCheckRequest): Promise<RefreshAdvisorCostCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAdvisorCostCheckWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshAdvisorResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAdvisorResourceResponse
   */
  async refreshAdvisorResourceWithOptions(request: RefreshAdvisorResourceRequest, runtime: $dara.RuntimeOptions): Promise<RefreshAdvisorResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAdvisorResource",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshAdvisorResourceResponse>(await this.callApi(params, req, runtime), new RefreshAdvisorResourceResponse({}));
    } else {
      return $dara.cast<RefreshAdvisorResourceResponse>(await this.execute(params, req, runtime), new RefreshAdvisorResourceResponse({}));
    }

  }

  /**
   * @param request - RefreshAdvisorResourceRequest
   * @returns RefreshAdvisorResourceResponse
   */
  async refreshAdvisorResource(request: RefreshAdvisorResourceRequest): Promise<RefreshAdvisorResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAdvisorResourceWithOptions(request, runtime);
  }

  /**
   * 上报用户业务报警信息
   * 
   * @param tmpReq - ReportBizAlertInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportBizAlertInfoResponse
   */
  async reportBizAlertInfoWithOptions(tmpReq: ReportBizAlertInfoRequest, runtime: $dara.RuntimeOptions): Promise<ReportBizAlertInfoResponse> {
    tmpReq.validate();
    let request = new ReportBizAlertInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertUid)) {
      request.alertUidShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertUid, "AlertUid", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alertDescription)) {
      query["AlertDescription"] = request.alertDescription;
    }

    if (!$dara.isNull(request.alertDetail)) {
      query["AlertDetail"] = request.alertDetail;
    }

    if (!$dara.isNull(request.alertGrade)) {
      query["AlertGrade"] = request.alertGrade;
    }

    if (!$dara.isNull(request.alertLabels)) {
      query["AlertLabels"] = request.alertLabels;
    }

    if (!$dara.isNull(request.alertScene)) {
      query["AlertScene"] = request.alertScene;
    }

    if (!$dara.isNull(request.alertToken)) {
      query["AlertToken"] = request.alertToken;
    }

    if (!$dara.isNull(request.alertUidShrink)) {
      query["AlertUid"] = request.alertUidShrink;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportBizAlertInfo",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReportBizAlertInfoResponse>(await this.callApi(params, req, runtime), new ReportBizAlertInfoResponse({}));
    } else {
      return $dara.cast<ReportBizAlertInfoResponse>(await this.execute(params, req, runtime), new ReportBizAlertInfoResponse({}));
    }

  }

  /**
   * 上报用户业务报警信息
   * 
   * @param request - ReportBizAlertInfoRequest
   * @returns ReportBizAlertInfoResponse
   */
  async reportBizAlertInfo(request: ReportBizAlertInfoRequest): Promise<ReportBizAlertInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportBizAlertInfoWithOptions(request, runtime);
  }

}
