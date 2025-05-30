// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoListParameter } from "./ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoListParameter";


export class ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoList extends $dara.Model {
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
   * The creation time.
   * 
   * @example
   * 1730946421757
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
   * 6790
   */
  id?: string;
  /**
   * @remarks
   * The name of the level-2 quota.
   * 
   * @example
   * dp_cn_shanghai_1702627945_p
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * @example
   * os_MyQuota
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the level-2 quota.
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
  parameter?: ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoListParameter;
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
      parameter: ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoListParameter,
      regionId: 'string',
      status: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

