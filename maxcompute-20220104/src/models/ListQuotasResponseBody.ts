// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyDataQuotaInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * a12351qHDP6YEQMt
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

export class ListQuotasResponseBodyDataQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - subscription: subscription quota.
   * - payasyougo: pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The order specification.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the Alibaba Cloud billing subsystem. You can use this identifier to associate all fees of the quota object with a specific tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The object type. Only quota and project are supported.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect according to the schedule.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when currPlan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that will take effect according to the schedule.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when next_plan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately. This parameter is not empty if the user triggers immediate effect and the plan is different from curr_plan.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate effect is triggered. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - subscription: indicates a subscription quota.
   * - payasyougo: indicates a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The order specification.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListParameter extends $dara.Model {
  adhocSlot?: number;
  autoScaleCPULimit?: number;
  /**
   * @remarks
   * The number of elastic reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * Specifies whether priority is enabled.
   * 
   * @example
   * true
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Specifies whether the quota is exclusive.
   * 
   * @example
   * true
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The upper limit of reserved CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  maxGu?: number;
  /**
   * @remarks
   * The minimum number of reserved CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  minGu?: number;
  /**
   * @remarks
   * The scheduling policy.
   * 
   * @example
   * Fifo/Fair
   */
  schedulerType?: string;
  /**
   * @remarks
   * The CU limit for a single job.
   * 
   * @example
   * 10
   */
  singleJobCULimit?: number;
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      adhocSlot: 'adhocSlot',
      autoScaleCPULimit: 'autoScaleCPULimit',
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      maxGu: 'maxGu',
      minCU: 'minCU',
      minGu: 'minGu',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhocSlot: 'number',
      autoScaleCPULimit: 'number',
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      maxGu: 'number',
      minCU: 'number',
      minGu: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the Alibaba Cloud billing subsystem. You can use this identifier to associate all fees of the quota object with a specific tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The object type. Only quota and project are supported.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect according to the schedule.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when currPlan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that will take effect according to the schedule.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when next_plan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately. This parameter is not empty if the user triggers immediate effect and the plan is different from curr_plan.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate effect is triggered. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that created the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The ID of the secondary quota.
   * 
   * @example
   * 1000048
   */
  id?: string;
  /**
   * @remarks
   * The name of the secondary quota.
   * 
   * @example
   * subquotaA
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the secondary quota.
   * 
   * @example
   * subquotaA
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * {"minCU":10,	
   * "adhocCU":0,
   * "maxCU":10,
   * "schedulerType":"Fair",
   * }
   */
  parameter?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListParameter;
  /**
   * @remarks
   * The ID of the parent resource.
   * 
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier is consistent with the identifier in Alibaba Cloud billing and is used in tagging scenarios.
   */
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The time-sharing information.
   */
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The resource tag of the quota.
   * 
   * @example
   * abc
   */
  tag?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 280747109771520
   */
  tenantId?: string;
  /**
   * @remarks
   * Corresponds to the resourceSystemType field of the control cluster.
   * 
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListParameter,
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.billingPolicy && typeof (this.billingPolicy as any).validate === 'function') {
      (this.billingPolicy as any).validate();
    }
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The tags.
   */
  tags?: ListQuotasResponseBodyDataQuotaInfoListTags[];
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: ListQuotasResponseBodyDataQuotaInfoListBillingPolicy;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that created the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * quota id
   * 
   * @example
   * 0
   */
  id?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * quota_a
   */
  name?: string;
  /**
   * @remarks
   * The quota alias.
   * 
   * @example
   * quota_nickname
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * {"minCU":10,	
   * "adhocCU":0,
   * "maxCU":10,
   * "schedulerType":"Fair",
   * }
   */
  parameter?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the parent resource.
   * 
   * @example
   * null
   */
  parentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier is consistent with the identifier in Alibaba Cloud billing and is used in tagging scenarios.
   */
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSaleTag;
  /**
   * @remarks
   * The time-sharing information.
   */
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The secondary quota information.
   */
  subQuotaInfoList?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList[];
  /**
   * @remarks
   * The resource tag of the quota.
   * 
   * @example
   * abc
   */
  tag?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 280747109771520
   */
  tenantId?: string;
  /**
   * @remarks
   * Corresponds to the resourceSystemType field of the control cluster.
   * 
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoListTags },
      billingPolicy: ListQuotasResponseBodyDataQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyDataQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.billingPolicy && typeof (this.billingPolicy as any).validate === 'function') {
      (this.billingPolicy as any).validate();
    }
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    if(Array.isArray(this.subQuotaInfoList)) {
      $dara.Model.validateArray(this.subQuotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token. This operation supports only sequential pagination. A non-empty NextToken value indicates that more data is available. Pass the NextToken value as a parameter in the next request to retrieve the next page.
   * 
   * @example
   * "abcde"
   */
  nextToken?: string;
  /**
   * @remarks
   * The marker after which the results are returned in alphabetical order.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of results returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of quotas.
   */
  quotaInfoList?: ListQuotasResponseBodyDataQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.quotaInfoList)) {
      $dara.Model.validateArray(this.quotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
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

export class ListQuotasResponseBodyQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - subscription: subscription quota.
   * - payasyougo: pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The order specification.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the Alibaba Cloud billing subsystem. You can use this identifier to associate all fees of the quota object with a specific tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The object type. Only quota and project are supported.
   * 
   * @example
   * "project"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect according to the schedule.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when currPlan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that will take effect according to the schedule.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when next_plan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately. This parameter is not empty if the user triggers immediate effect and the plan is different from curr_plan.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate effect is triggered. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - subscription: subscription quota.
   * - payasyougo: pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The order specification.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListParameter extends $dara.Model {
  adhocSlot?: number;
  autoScaleCPULimit?: number;
  /**
   * @remarks
   * The number of elastic reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * Specifies whether priority is enabled.
   * 
   * @example
   * true
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Specifies whether the quota is exclusive.
   * 
   * @example
   * true
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The upper limit of reserved CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  maxGu?: number;
  /**
   * @remarks
   * The minimum number of reserved CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  minGu?: number;
  /**
   * @remarks
   * The scheduling policy.
   * 
   * @example
   * Fifo/Fair
   */
  schedulerType?: string;
  /**
   * @remarks
   * The CU limit for a single job.
   * 
   * @example
   * 10
   */
  singleJobCULimit?: number;
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      adhocSlot: 'adhocSlot',
      autoScaleCPULimit: 'autoScaleCPULimit',
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      maxGu: 'maxGu',
      minCU: 'minCU',
      minGu: 'minGu',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhocSlot: 'number',
      autoScaleCPULimit: 'number',
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      maxGu: 'number',
      minCU: 'number',
      minGu: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the Alibaba Cloud billing subsystem. You can use this identifier to associate all fees of the quota object with a specific tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The object type. Only quota and project are supported.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect according to the schedule.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when currPlan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that will take effect according to the schedule.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when next_plan is scheduled. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately. This parameter is not empty if the user triggers immediate effect and the plan is different from curr_plan.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate effect is triggered. The time is in HHmm format. For example, 0800 indicates 08:00.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that created the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The ID of the secondary quota.
   * 
   * @example
   * 1000048
   */
  id?: string;
  /**
   * @remarks
   * The name of the secondary quota.
   * 
   * @example
   * subquotaA
   */
  name?: string;
  /**
   * @remarks
   * The alias of the secondary quota.
   * 
   * @example
   * subquotaA
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * {"minCU":10,	
   * "adhocCU":0,
   * "maxCU":10,
   * "schedulerType":"Fair",
   * }
   */
  parameter?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListParameter;
  /**
   * @remarks
   * The ID of the parent resource.
   * 
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier is consistent with the identifier in Alibaba Cloud billing and is used in tagging scenarios.
   */
  saleTag?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The scheduling information.
   */
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The resource tag of the quota.
   * 
   * @example
   * abc
   */
  tag?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 280747109771520
   */
  tenantId?: string;
  /**
   * @remarks
   * Corresponds to the resourceSystemType field of the control cluster.
   * 
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListParameter,
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.billingPolicy && typeof (this.billingPolicy as any).validate === 'function') {
      (this.billingPolicy as any).validate();
    }
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The tags.
   */
  tags?: ListQuotasResponseBodyQuotaInfoListTags[];
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: ListQuotasResponseBodyQuotaInfoListBillingPolicy;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that created the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * quota ID
   * 
   * @example
   * 0
   */
  id?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * quota_a
   */
  name?: string;
  /**
   * @remarks
   * The quota alias.
   * 
   * @example
   * quota_nickname
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * {"minCU":10,	
   * "adhocCU":0,
   * "maxCU":10,
   * "schedulerType":"Fair",
   * }
   */
  parameter?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the parent resource.
   * 
   * @example
   * null
   */
  parentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier is consistent with the identifier in Alibaba Cloud billing and is used in tagging scenarios.
   */
  saleTag?: ListQuotasResponseBodyQuotaInfoListSaleTag;
  /**
   * @remarks
   * The scheduling information.
   */
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The secondary quota information.
   */
  subQuotaInfoList?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList[];
  /**
   * @remarks
   * The resource tag of the quota.
   * 
   * @example
   * abc
   */
  tag?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 280747109771520
   */
  tenantId?: string;
  /**
   * @remarks
   * Corresponds to the resourceSystemType field of the control cluster.
   * 
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoListTags },
      billingPolicy: ListQuotasResponseBodyQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyQuotaInfoListScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.billingPolicy && typeof (this.billingPolicy as any).validate === 'function') {
      (this.billingPolicy as any).validate();
    }
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    if(Array.isArray(this.subQuotaInfoList)) {
      $dara.Model.validateArray(this.subQuotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token. This operation supports only sequential pagination. A non-empty NextToken value indicates that more data is available. Pass the NextToken value as a parameter in the next request to retrieve the next page.
   * 
   * @example
   * AAAAAdDWBF2w6Olxc+cMPjUtUMo/CvPe4IK7f7kIQFrIZjyc
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQuotasResponseBodyData;
  /**
   * @remarks
   * The marker after which the results are returned in alphabetical order.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of results returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of quotas.
   */
  quotaInfoList?: ListQuotasResponseBodyQuotaInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc12e6f16677875480593081d2956
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      data: 'data',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      data: ListQuotasResponseBodyData,
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.quotaInfoList)) {
      $dara.Model.validateArray(this.quotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

