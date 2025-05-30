// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList extends $dara.Model {
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
   * The time when the resource was created.
   * 
   * @example
   * 1718155201628
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
   * 10940
   */
  id?: string;
  /**
   * @remarks
   * The name of the level-2 quota.
   * 
   * @example
   * dp_cn_shanghai_1696659792_p
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
   * Resource status.
   * 
   * @example
   * ON
   */
  status?: string;
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
   * 1386
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
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      status: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

