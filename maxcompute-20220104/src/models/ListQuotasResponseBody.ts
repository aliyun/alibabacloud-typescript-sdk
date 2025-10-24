// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyDataQuotaInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
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
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
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
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
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
   * The time zone of the project.
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
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
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
  elasticReservedCU?: number;
  enablePriority?: boolean;
  forceReservedMin?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  maxCU?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minCU?: number;
  schedulerType?: string;
  singleJobCULimit?: number;
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      adhocSlot: 'adhocSlot',
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adhocSlot: 'number',
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
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
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
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
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
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
   * The time zone of the project.
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
   * The information of the order.
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
   * The time when the resource was created.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The ID of the level-2 quota.
   * 
   * @example
   * 1000048
   */
  id?: string;
  /**
   * @remarks
   * The name of the level-2 quota.
   * 
   * @example
   * subquotaA
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the level-2 quota.
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
   * The identifier of an object in a MaxCompute quota. This identifier is the same as the identifier in the sales bill of Alibaba Cloud. This parameter is used for tags.
   */
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The status of the endpoint group.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The tag of the resource for the quota.
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
   * The type of the resource system. This parameter corresponds to the resourceSystemType parameter of the cluster.
   * 
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
   * @remarks
   * The version of the algorithm image.
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
   * The information of the order.
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
   * The time when the resource was created.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * 0
   */
  id?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * quota_a
   */
  name?: string;
  /**
   * @remarks
   * The alias of the quota.
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
   * The identifier of an object in a MaxCompute quota. This identifier is the same as the identifier in the sales bill of Alibaba Cloud. This parameter is used for tags.
   */
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The status of the endpoint group.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The information of the level-2 quota.
   */
  subQuotaInfoList?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList[];
  /**
   * @remarks
   * The tag of the resource for the quota.
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
   * The type of the resource system. This parameter corresponds to the resourceSystemType parameter of the cluster.
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
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * "abcde"
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
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
   * The key of the tag.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
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
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
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
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
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
   * The time zone of the project.
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
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
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
  elasticReservedCU?: number;
  enablePriority?: boolean;
  forceReservedMin?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  maxCU?: number;
  maxGu?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minCU?: number;
  minGu?: number;
  schedulerType?: string;
  singleJobCULimit?: number;
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      adhocSlot: 'adhocSlot',
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
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
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
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
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
   * The time zone of the project.
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
   * The information of the order.
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
   * The time when the resource was created.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The ID of the level-2 quota.
   * 
   * @example
   * 1000048
   */
  id?: string;
  /**
   * @remarks
   * The name of the level-2 quota.
   * 
   * @example
   * subquotaA
   */
  name?: string;
  /**
   * @remarks
   * The alias of the level-2 quota.
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
   * The identifier of an object in a MaxCompute quota. This identifier is the same as the identifier in the sales bill of Alibaba Cloud. This parameter is used for tags.
   */
  saleTag?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The status of the endpoint group.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The tag of the resource for the quota.
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
   * The type of the resource system. This parameter corresponds to the resourceSystemType parameter of the cluster.
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
   * The information of the order.
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
   * The time when the resource was created.
   * 
   * @example
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the resource.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * 0
   */
  id?: string;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * quota_a
   */
  name?: string;
  /**
   * @remarks
   * The alias of the quota.
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
   * The identifier of an object in a MaxCompute quota. This identifier is the same as the identifier in the sales bill of Alibaba Cloud. This parameter is used for tags.
   */
  saleTag?: ListQuotasResponseBodyQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListScheduleInfo;
  /**
   * @remarks
   * The status of the endpoint group.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The information of the level-2 quota.
   */
  subQuotaInfoList?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList[];
  /**
   * @remarks
   * The tag of the resource for the quota.
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
   * The type of the resource system. This parameter corresponds to the resourceSystemType parameter of the cluster.
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
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
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
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
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
   * The ID of the request.
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

