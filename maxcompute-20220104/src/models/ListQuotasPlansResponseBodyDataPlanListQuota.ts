// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy } from "./ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy";
import { ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo } from "./ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo";
import { ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList } from "./ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList";


export class ListQuotasPlansResponseBodyDataPlanListQuota extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the quota plan was created.
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
   * The ID of the quota.
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
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The information of the level-2 quota.
   */
  subQuotaInfoList?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList[];
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
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
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
      billingPolicy: ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList },
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

