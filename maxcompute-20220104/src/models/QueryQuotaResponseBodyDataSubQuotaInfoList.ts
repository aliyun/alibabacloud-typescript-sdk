// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy } from "./QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy";
import { QueryQuotaResponseBodyDataSubQuotaInfoListSaleTag } from "./QueryQuotaResponseBodyDataSubQuotaInfoListSaleTag";
import { QueryQuotaResponseBodyDataSubQuotaInfoListScheduleInfo } from "./QueryQuotaResponseBodyDataSubQuotaInfoListScheduleInfo";


export class QueryQuotaResponseBodyDataSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  billingPolicy?: QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy;
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
   * 1688653978768
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the quota plan.
   * 
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @remarks
   * The role group name.
   * 
   * @example
   * abc
   */
  groupName?: string;
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
   * The quota description.
   * 
   * @example
   * {\\"maxCU\\": 10, \\"minCU\\": 10, \\"adhocCU\\": 0, \\"schedulerType\\": \\"Fifo\\"}
   */
  parameter?: { [key: string]: any };
  /**
   * @remarks
   * The parent resource ID.
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
   * The identifiers of MaxCompute quota objects. The identifiers are the same as those in the Alibaba Cloud sales bill. This parameter is used for tags.
   */
  saleTag?: QueryQuotaResponseBodyDataSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information about the scheduling plan.
   */
  scheduleInfo?: QueryQuotaResponseBodyDataSubQuotaInfoListScheduleInfo;
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
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy,
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
      saleTag: QueryQuotaResponseBodyDataSubQuotaInfoListSaleTag,
      scheduleInfo: QueryQuotaResponseBodyDataSubQuotaInfoListScheduleInfo,
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
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
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

