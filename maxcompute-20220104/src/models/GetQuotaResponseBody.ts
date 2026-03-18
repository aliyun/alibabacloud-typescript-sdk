// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaResponseBodyBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * - subscription: indicates a subscription quota.
   * 
   * - payasyougo: indicates a pay-as-you-go quota.
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

export class GetQuotaResponseBodyDataBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * - subscription: indicates a subscription quota.
   * 
   * - payasyougo: indicates a pay-as-you-go quota.
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

export class GetQuotaResponseBodyDataSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the billing subsystem of Alibaba Cloud. You can use this identifier to associate the costs of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Currently, only quota and project are supported.
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

export class GetQuotaResponseBodyDataScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that is in effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the currPlan was scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that is about to take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next_plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately.
   * This parameter is not empty if a user triggers a plan that is different from the curr_plan to take effect immediately.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate-effect plan was triggered.
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

export class GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * - subscription: indicates a subscription quota.
   * 
   * - payasyougo: indicates a pay-as-you-go quota.
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

export class GetQuotaResponseBodyDataSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * Enables the priority feature.
   * 
   * @example
   * true
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Specifies whether to enable exclusive use.
   * 
   * @example
   * true
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The upper limit of reserved computing units (CUs).
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The guaranteed reserved CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
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
   * The upper limit of CUs for a single job.
   * 
   * @example
   * 10
   */
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the billing subsystem of Alibaba Cloud. You can use this identifier to associate the costs of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Currently, only quota and project are supported.
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

export class GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that is in effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the currPlan was scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that is about to take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next_plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately.
   * This parameter is not empty if a user triggers a plan that is different from the curr_plan to take effect immediately.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate-effect plan was triggered.
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

export class GetQuotaResponseBodyDataSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy;
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
   * The creator of the resource. This parameter is the UID of an Alibaba Cloud account.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The level-2 quota ID.
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
   */
  parameter?: GetQuotaResponseBodyDataSubQuotaInfoListParameter;
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
   * The identifier of the MaxCompute quota object. This identifier is the same as the identifier in the bill of Alibaba Cloud. This parameter is used in tagging scenarios.
   */
  saleTag?: GetQuotaResponseBodyDataSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The time-sharing information.
   */
  scheduleInfo?: GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo;
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
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter corresponds to the resourceSystemType field of the control cluster.
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
      billingPolicy: GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: GetQuotaResponseBodyDataSubQuotaInfoListParameter,
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodyDataSubQuotaInfoListSaleTag,
      scheduleInfo: GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo,
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

export class GetQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: GetQuotaResponseBodyDataBillingPolicy;
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
   * The creator of the resource. This parameter is the UID of an Alibaba Cloud account.
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
   * The quota name.
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
   * The identifier of the MaxCompute quota object. This identifier is the same as the identifier in the bill of Alibaba Cloud. This parameter is used in tagging scenarios.
   */
  saleTag?: GetQuotaResponseBodyDataSaleTag;
  /**
   * @remarks
   * The time-sharing information.
   */
  scheduleInfo?: GetQuotaResponseBodyDataScheduleInfo;
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
   * The information about the level-2 quotas.
   */
  subQuotaInfoList?: GetQuotaResponseBodyDataSubQuotaInfoList[];
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
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter corresponds to the resourceSystemType field of the control cluster.
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
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaResponseBodyDataBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodyDataSaleTag,
      scheduleInfo: GetQuotaResponseBodyDataScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaResponseBodyDataSubQuotaInfoList },
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

export class GetQuotaResponseBodySaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the billing subsystem of Alibaba Cloud. You can use this identifier to associate the costs of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Currently, only quota and project are supported.
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

export class GetQuotaResponseBodyScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that is in effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the currPlan was scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that is about to take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next_plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately.
   * This parameter is not empty if a user triggers a plan that is different from the curr_plan to take effect immediately.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate-effect plan was triggered.
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

export class GetQuotaResponseBodySubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * - subscription: indicates a subscription quota.
   * 
   * - payasyougo: indicates a pay-as-you-go quota.
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

export class GetQuotaResponseBodySubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * Enables the priority feature.
   * 
   * @example
   * true
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Specifies whether to enable exclusive use.
   * 
   * @example
   * true
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The upper limit of reserved computing units (CUs).
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The guaranteed reserved CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
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
   * The upper limit of CUs for a single job.
   * 
   * @example
   * 10
   */
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier also exists in the billing subsystem of Alibaba Cloud. You can use this identifier to associate the costs of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Currently, only quota and project are supported.
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

export class GetQuotaResponseBodySubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that is in effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the currPlan was scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The quota plan that is about to take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next_plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that takes effect immediately.
   * This parameter is not empty if a user triggers a plan that is different from the curr_plan to take effect immediately.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the immediate-effect plan was triggered.
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

export class GetQuotaResponseBodySubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: GetQuotaResponseBodySubQuotaInfoListBillingPolicy;
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
   * The creator of the resource. This parameter is the UID of an Alibaba Cloud account.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The level-2 quota ID.
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
  parameter?: GetQuotaResponseBodySubQuotaInfoListParameter;
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
   * The identifier of the MaxCompute quota object. This identifier is the same as the identifier in the bill of Alibaba Cloud. This parameter is used in tagging scenarios.
   */
  saleTag?: GetQuotaResponseBodySubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The time-sharing information.
   */
  scheduleInfo?: GetQuotaResponseBodySubQuotaInfoListScheduleInfo;
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
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter corresponds to the resourceSystemType field of the control cluster.
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
      billingPolicy: GetQuotaResponseBodySubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: GetQuotaResponseBodySubQuotaInfoListParameter,
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodySubQuotaInfoListSaleTag,
      scheduleInfo: GetQuotaResponseBodySubQuotaInfoListScheduleInfo,
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

export class GetQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: GetQuotaResponseBodyBillingPolicy;
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
   * The creator of the resource. This parameter is the UID of an Alibaba Cloud account.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetQuotaResponseBodyData;
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
   * The quota name.
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
   * The request ID.
   * 
   * @example
   * 0b87b7a316654730544735643e9200
   */
  requestId?: string;
  /**
   * @remarks
   * The identifier of the MaxCompute quota object. This identifier is the same as the identifier in the bill of Alibaba Cloud. This parameter is used in tagging scenarios.
   */
  saleTag?: GetQuotaResponseBodySaleTag;
  /**
   * @remarks
   * The time-sharing information.
   */
  scheduleInfo?: GetQuotaResponseBodyScheduleInfo;
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
   * The information about the level-2 quotas.
   */
  subQuotaInfoList?: GetQuotaResponseBodySubQuotaInfoList[];
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
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter corresponds to the resourceSystemType field of the control cluster.
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
      data: 'data',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      requestId: 'requestId',
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
      billingPolicy: GetQuotaResponseBodyBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      data: GetQuotaResponseBodyData,
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      requestId: 'string',
      saleTag: GetQuotaResponseBodySaleTag,
      scheduleInfo: GetQuotaResponseBodyScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaResponseBodySubQuotaInfoList },
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
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
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

