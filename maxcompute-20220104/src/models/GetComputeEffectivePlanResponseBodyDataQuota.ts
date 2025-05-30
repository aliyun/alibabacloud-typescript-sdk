// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList } from "./GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList";


export class GetComputeEffectivePlanResponseBodyDataQuota extends $dara.Model {
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
   * The time when the level-1 quota was created.
   * 
   * @example
   * 1719886322347
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
   * 2413
   */
  id?: string;
  /**
   * @remarks
   * The name of the level-1 quota.
   * 
   * @example
   * dp_cn_shanghai_1699533470_p
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
  parameter?: { [key: string]: any };
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
   * The status of the resource.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The list of subquotas.
   */
  subQuotaInfoList?: GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList[];
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
   * 1964
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
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList },
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
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

