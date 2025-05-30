// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryQuotaResponseBodyDataBillingPolicy } from "./QueryQuotaResponseBodyDataBillingPolicy";
import { QueryQuotaResponseBodyDataSaleTag } from "./QueryQuotaResponseBodyDataSaleTag";
import { QueryQuotaResponseBodyDataScheduleInfo } from "./QueryQuotaResponseBodyDataScheduleInfo";
import { QueryQuotaResponseBodyDataSubQuotaInfoList } from "./QueryQuotaResponseBodyDataSubQuotaInfoList";


export class QueryQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: QueryQuotaResponseBodyDataBillingPolicy;
  /**
   * @remarks
   * The ID of the Managed Service for Prometheus cluster.
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
   * 1714356241163
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the quota plan.
   * 
   * @example
   * 1248953767546358
   */
  creatorId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * 2523
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
   * The quota description.
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
   * The parent resource ID.
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
   * The identifiers of MaxCompute quota objects. The identifiers are the same as those in the Alibaba Cloud sales bill. This parameter is used for tags.
   */
  saleTag?: QueryQuotaResponseBodyDataSaleTag;
  /**
   * @remarks
   * The information about the scheduling plan.
   */
  scheduleInfo?: QueryQuotaResponseBodyDataScheduleInfo;
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
   * The level-2 quotas.
   */
  subQuotaInfoList?: QueryQuotaResponseBodyDataSubQuotaInfoList[];
  /**
   * @remarks
   * The resource tag of a quota.
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
   * This parameter corresponds to the resourceSystemType field.
   * 
   * @example
   * FUXI_OFFLINE
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
      groupName: 'groupName',
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
      billingPolicy: QueryQuotaResponseBodyDataBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      groupName: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: QueryQuotaResponseBodyDataSaleTag,
      scheduleInfo: QueryQuotaResponseBodyDataScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': QueryQuotaResponseBodyDataSubQuotaInfoList },
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

