// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasResponseBodyQuotaInfoListTags } from "./ListQuotasResponseBodyQuotaInfoListTags";
import { ListQuotasResponseBodyQuotaInfoListBillingPolicy } from "./ListQuotasResponseBodyQuotaInfoListBillingPolicy";
import { ListQuotasResponseBodyQuotaInfoListSaleTag } from "./ListQuotasResponseBodyQuotaInfoListSaleTag";
import { ListQuotasResponseBodyQuotaInfoListScheduleInfo } from "./ListQuotasResponseBodyQuotaInfoListScheduleInfo";
import { ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList } from "./ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList";


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

