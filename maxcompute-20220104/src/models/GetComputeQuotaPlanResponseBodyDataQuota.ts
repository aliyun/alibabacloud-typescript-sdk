// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComputeQuotaPlanResponseBodyDataQuotaParameter } from "./GetComputeQuotaPlanResponseBodyDataQuotaParameter";
import { GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoList } from "./GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoList";


export class GetComputeQuotaPlanResponseBodyDataQuota extends $dara.Model {
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
   * Creation time.
   * 
   * @example
   * 1719886322347
   */
  createTime?: number;
  /**
   * @remarks
   * Creator\\"s cloud account UID.
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
   * quota_a
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the level-1 quota.
   * 
   * @example
   * quota_nickname
   */
  nickName?: string;
  /**
   * @remarks
   * CU value parameters for the level-1 quota.
   */
  parameter?: GetComputeQuotaPlanResponseBodyDataQuotaParameter;
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
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoList[];
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
   * Corresponds to the `resourceSystemType` field of the control cluster.
   * 
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
   * @remarks
   * Version number.
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
      parameter: GetComputeQuotaPlanResponseBodyDataQuotaParameter,
      regionId: 'string',
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoList },
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

