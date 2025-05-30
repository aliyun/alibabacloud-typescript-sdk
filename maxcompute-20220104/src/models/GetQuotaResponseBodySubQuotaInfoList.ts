// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQuotaResponseBodySubQuotaInfoListBillingPolicy } from "./GetQuotaResponseBodySubQuotaInfoListBillingPolicy";
import { GetQuotaResponseBodySubQuotaInfoListParameter } from "./GetQuotaResponseBodySubQuotaInfoListParameter";
import { GetQuotaResponseBodySubQuotaInfoListSaleTag } from "./GetQuotaResponseBodySubQuotaInfoListSaleTag";
import { GetQuotaResponseBodySubQuotaInfoListScheduleInfo } from "./GetQuotaResponseBodySubQuotaInfoListScheduleInfo";


export class GetQuotaResponseBodySubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about the order.
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
   * The identifier of an object in a MaxCompute quota. This identifier is the same as the identifier in the sales bill of Alibaba Cloud. This parameter is used for tags.
   */
  saleTag?: GetQuotaResponseBodySubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information about the scheduling plan.
   */
  scheduleInfo?: GetQuotaResponseBodySubQuotaInfoListScheduleInfo;
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

