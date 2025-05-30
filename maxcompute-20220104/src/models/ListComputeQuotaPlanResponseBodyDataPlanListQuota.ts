// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComputeQuotaPlanResponseBodyDataPlanListQuotaParameter } from "./ListComputeQuotaPlanResponseBodyDataPlanListQuotaParameter";
import { ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoList } from "./ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoList";


export class ListComputeQuotaPlanResponseBodyDataPlanListQuota extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @remarks
   * The time when the level-1 quota was created.
   * 
   * @example
   * 1730247361356
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
   * The ID of the level-1 quota.
   * 
   * @example
   * 186
   */
  id?: string;
  /**
   * @remarks
   * The name of the level-1 quota.
   * 
   * @example
   * dp_cn_hangzhou_1717465943_p
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the level-1 quota.
   * 
   * @example
   * os_MyQuota_p
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the level-1 quota.
   * 
   * @example
   * {
   *   "enablePriority": false,
   *   "minCU": 25,
   *   "adhocCU": 0,
   *   "elasticReservedCU": 0,
   *   "forceReservedMin": false,
   *   "maxCU": 50,
   *   "schedulerType": "Fifo"
   * }
   */
  parameter?: ListComputeQuotaPlanResponseBodyDataPlanListQuotaParameter;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource status.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The list of subquotas.
   */
  subQuotaInfoList?: ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoList[];
  /**
   * @remarks
   * Tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * The type of quota.
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
   * 2056
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      regionId: 'regionId',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: ListComputeQuotaPlanResponseBodyDataPlanListQuotaParameter,
      regionId: 'string',
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoList },
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
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

