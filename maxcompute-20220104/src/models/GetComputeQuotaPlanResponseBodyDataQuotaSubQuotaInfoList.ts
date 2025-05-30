// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter } from "./GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter";


export class GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoList extends $dara.Model {
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
   * 1718155201628
   */
  createTime?: number;
  /**
   * @remarks
   * Creator cloud account UID.
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
   * subquotaA
   */
  nickName?: string;
  /**
   * @remarks
   * The parameters of the level-2 quota.
   */
  parameter?: GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter;
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
   * Version number.
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
      parameter: GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter,
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

