// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateComputeQuotaPlanRequestQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs in the level-1 quota.
   * > The default value is 0. The maximum value of this parameter must be equal to the number of subscription-based reserved CUs and cannot exceed 10,000 CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * > The total number of elastically reserved CUs in all the level-2 quotas is equal to the number of elastically reserved CUs in the level-1 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * > The value of maxCU must be less than or equal to the value of maxCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * > 
   * >- The total value of minCU in all the level-2 quotas is equal to the value of minCU in the level-1 quota.
   * >- The value of minCU must be less than or equal to the value of maxCU in the level-2 quota and less than or equal to the value of minCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * os_ComputeQuota
   */
  nickName?: string;
  /**
   * @remarks
   * The parameters of the level-2 quota.
   */
  parameter?: CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: CreateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter,
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

export class CreateComputeQuotaPlanRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The parameters of level-1 quota.
   */
  parameter?: CreateComputeQuotaPlanRequestQuotaParameter;
  /**
   * @remarks
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'parameter',
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreateComputeQuotaPlanRequestQuotaParameter,
      subQuotaInfoList: { 'type': 'array', 'itemType': CreateComputeQuotaPlanRequestQuotaSubQuotaInfoList },
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

export class CreateMmsDataSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 18
   */
  dataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsFetchMetadataJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1000002
   */
  scanId?: number;
  static names(): { [key: string]: string } {
    return {
      scanId: 'scanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsJobResponseBodyData extends $dara.Model {
  asyncTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'asyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetComputeEffectivePlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 1714356241163
   */
  createTime?: string;
  /**
   * @remarks
   * Whether it is currently effective.
   * > A Quota plan that has taken effect cannot be deleted, i.e., isEffective=true
   * 
   * @example
   * true/false
   */
  isEffective?: boolean;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: GetComputeEffectivePlanResponseBodyDataQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      isEffective: 'isEffective',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isEffective: 'boolean',
      name: 'string',
      quota: GetComputeEffectivePlanResponseBodyDataQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaPlanResponseBodyDataQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * whether to enable the priority feature.
   * 
   * @example
   * true/false
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Whether it is exclusive.
   * 
   * @example
   * true/false
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * 
   * @example
   * 50
   */
  minCU?: number;
  /**
   * @remarks
   * Scheduling policy.
   * 
   * @example
   * Fifo/Fair
   */
  schedulerType?: string;
  /**
   * @remarks
   * The upper limit for CUs that can be concurrently used by a job scheduled to the quota.
   * 
   * @example
   * 50
   */
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetComputeQuotaPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 1730946421757
   */
  createTime?: string;
  /**
   * @remarks
   * Whether it is currently effective.
   * > 
   * > - A Quota plan that has taken effect cannot be deleted, i.e., isEffective=true
   * 
   * @example
   * true/false
   */
  isEffective?: boolean;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: GetComputeQuotaPlanResponseBodyDataQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      isEffective: 'isEffective',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      isEffective: 'boolean',
      name: 'string',
      quota: GetComputeQuotaPlanResponseBodyDataQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaScheduleResponseBodyDataCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * @example
   * 09:00
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      at: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of effective condition.
   */
  condition?: GetComputeQuotaScheduleResponseBodyDataCondition;
  /**
   * @remarks
   * The ID of the quota plan.
   * 
   * @example
   * 89b54db44d384f26964951ea457f64a5
   */
  id?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The time zone property.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * @example
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetComputeQuotaScheduleResponseBodyDataCondition,
      id: 'string',
      plan: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobSubStatusList extends $dara.Model {
  /**
   * @remarks
   * The code of the sub-status.
   * 
   * @example
   * 1010
   */
  code?: number;
  /**
   * @remarks
   * The description of the sub-status.
   * 
   * @example
   * Waiting for scheduling
   */
  description?: string;
  /**
   * @remarks
   * The start time of the sub-status.
   * 
   * @example
   * 2025-03-05 00:04:15.717364 +0800
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataSceneResults extends $dara.Model {
  /**
   * @remarks
   * The intelligent diagnostics result description.
   * 
   * @example
   * This job uses annual and monthly computing resources. It may be that the job is waiting for resources due to the large amount of overall job running data, many resources requested, and low job priority. Please go to Resource Consumption to view the specific situation. You can also go to Cost Optimization to see if you need to adjust resource configuration.
   */
  description?: string;
  /**
   * @remarks
   * Information about the nodes where data skew or data expansion is detected. This parameter is returned only when the diagnostics scenario is data skew or data expansion.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The intelligent diagnostics result scenario.
   * 
   * @example
   * LackResource
   */
  scene?: string;
  /**
   * @remarks
   * The intelligent diagnostics result tag.
   * 
   * @example
   * SubscriptionLackResource
   */
  sceneTag?: string;
  /**
   * @remarks
   * The intelligent diagnostics result summary.
   * 
   * @example
   * Insufficient computing resources available for the job. Click to view details.
   */
  summary?: string;
  /**
   * @remarks
   * The intelligent diagnostics result type.
   * 
   * @example
   * warning
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      params: 'params',
      scene: 'scene',
      sceneTag: 'sceneTag',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      sceneTag: 'string',
      summary: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * CPU usage of the job at the snapshot time. Unit: Core.
   * 
   * @example
   * 10
   */
  cuUsage?: number;
  /**
   * @remarks
   * The time when the job was finished.
   * 
   * @example
   * 1672112913
   */
  endAtTime?: number;
  /**
   * @remarks
   * The ID of the upstream node.
   * 
   * @example
   * node_4
   */
  extNodeId?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * duty_2
   */
  extNodeOnDuty?: string;
  /**
   * @remarks
   * The upstream platform.
   * 
   * @example
   * platform_3
   */
  extPlantFrom?: string;
  /**
   * @remarks
   * The amount of scanned data for the job. Unit: byte.
   * 
   * @example
   * 1234
   */
  inputBytes?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20230410****60gg
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that commits the job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The list of sub-status of the job.
   */
  jobSubStatusList?: GetJobInfoResponseBodyDataJobSubStatusList[];
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * Memory usage of the job at the snapshot time. Unit: MB.
   * 
   * @example
   * 40
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * dp_cdm_prod
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the computing Quota used by the job.
   * 
   * @example
   * os_bigdata
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * @example
   * subscription
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The start time of the job.
   * > The time when the job received the first batch of computing resources.
   * 
   * @example
   * 1672112113
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The running duration, which is the duration from the runningAtTime to the snapshotTime of the job. Unit: seconds (s).
   * 
   * @example
   * 800
   */
  runningTime?: number;
  /**
   * @remarks
   * The intelligent diagnostics results.
   */
  sceneResults?: GetJobInfoResponseBodyDataSceneResults[];
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * 20c1efb4a7caca1865f4aa784bb500efae74af04
   */
  signature?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was committed.
   * 
   * @example
   * 1672112013
   */
  submittedAtTime?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 4784****5249
   */
  tenantId?: string;
  /**
   * @remarks
   * The interval from the time when the job was submitted to the snapshotTime .Unit: seconds (s).
   * 
   * @example
   * 900
   */
  totalTime?: number;
  /**
   * @remarks
   * The duration from the time the job is submitted to the time the job starts to run. Unit: seconds (s).
   * 
   * @example
   * 100
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      endAtTime: 'endAtTime',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      inputBytes: 'inputBytes',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobSubStatusList: 'jobSubStatusList',
      jobType: 'jobType',
      memoryUsage: 'memoryUsage',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      sceneResults: 'sceneResults',
      signature: 'signature',
      status: 'status',
      submittedAtTime: 'submittedAtTime',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      endAtTime: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      inputBytes: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      jobSubStatusList: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataJobSubStatusList },
      jobType: 'string',
      memoryUsage: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      sceneResults: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataSceneResults },
      signature: 'string',
      status: 'string',
      submittedAtTime: 'number',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobSubStatusList)) {
      $dara.Model.validateArray(this.jobSubStatusList);
    }
    if(Array.isArray(this.sceneResults)) {
      $dara.Model.validateArray(this.sceneResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBodyDataJobResourceUsageList extends $dara.Model {
  /**
   * @remarks
   * The total number of used compute units (CUs).
   * 
   * @example
   * 1185100
   */
  cuUsage?: number;
  /**
   * @remarks
   * The start date of the query in the format of yyyy-MM-dd.
   * 
   * @example
   * 2023-05-09
   */
  date?: string;
  /**
   * @remarks
   * The job executor.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The total memory usage.
   * 
   * @example
   * 15169536
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The quota nickname.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      date: 'date',
      jobOwner: 'jobOwner',
      memoryUsage: 'memoryUsage',
      quotaNickname: 'quotaNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      date: 'string',
      jobOwner: 'string',
      memoryUsage: 'number',
      quotaNickname: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list returned.
   */
  jobResourceUsageList?: GetJobResourceUsageResponseBodyDataJobResourceUsageList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobResourceUsageList: 'jobResourceUsageList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResourceUsageList: { 'type': 'array', 'itemType': GetJobResourceUsageResponseBodyDataJobResourceUsageList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobResourceUsageList)) {
      $dara.Model.validateArray(this.jobResourceUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-17 15:44:00
   */
  createTime?: string;
  /**
   * @example
   * 2024-12-17 17:44:17
   */
  endTime?: string;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 2523
   */
  id?: number;
  /**
   * @example
   * 232
   */
  objectId?: number;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * null
   */
  result?: string;
  /**
   * @example
   * false
   */
  running?: boolean;
  /**
   * @example
   * 2000017
   */
  sourceId?: number;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  startTime?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * TASK_CREATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      id: 'id',
      objectId: 'objectId',
      progress: 'progress',
      result: 'result',
      running: 'running',
      sourceId: 'sourceId',
      startTime: 'startTime',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      errorMsg: 'string',
      id: 'number',
      objectId: 'number',
      progress: 'number',
      result: 'string',
      running: 'boolean',
      sourceId: 'number',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDataSourceResponseBodyDataConfig extends $dara.Model {
  desc?: string;
  enums?: string[];
  /**
   * @example
   * basic_group
   */
  group?: string;
  /**
   * @example
   * bigquery.range.partition.migrate.type
   */
  key?: string;
  name?: string;
  /**
   * @example
   * Cluster or Partition
   */
  placeHolder?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * Partition
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enums: 'enums',
      group: 'group',
      key: 'key',
      name: 'name',
      placeHolder: 'placeHolder',
      required: 'required',
      subType: 'subType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enums: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      key: 'string',
      name: 'string',
      placeHolder: 'string',
      required: 'boolean',
      subType: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDataSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  agentIsOnline?: boolean;
  config?: GetMmsDataSourceResponseBodyDataConfig[];
  /**
   * @example
   * 2024-12-17 09:29:58
   */
  createTime?: string;
  /**
   * @example
   * 3
   */
  dbNum?: number;
  /**
   * @example
   * unexpected exception
   */
  errMsg?: string;
  /**
   * @example
   * 2000015
   */
  id?: number;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  lastUpdateTime?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * vpc-2zebqp6uojhdla46677tl:cn-shanghai
   */
  networklink?: string;
  /**
   * @example
   * 10000000
   */
  partitionNum?: number;
  /**
   * @example
   * 23322
   */
  partitionsDoingNum?: number;
  /**
   * @example
   * 11113
   */
  partitionsDoneNum?: number;
  /**
   * @example
   * 32
   */
  partitionsFailedNum?: number;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 1000253
   */
  scanId?: number;
  /**
   * @example
   * STARTED
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  tableNum?: number;
  /**
   * @example
   * 19
   */
  tablesDoingNum?: number;
  /**
   * @example
   * 16
   */
  tablesDoneNum?: number;
  /**
   * @example
   * 2
   */
  tablesFailedNum?: number;
  /**
   * @example
   * 123
   */
  tablesPartDoneNum?: number;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentIsOnline: 'agentIsOnline',
      config: 'config',
      createTime: 'createTime',
      dbNum: 'dbNum',
      errMsg: 'errMsg',
      id: 'id',
      lastUpdateTime: 'lastUpdateTime',
      name: 'name',
      networklink: 'networklink',
      partitionNum: 'partitionNum',
      partitionsDoingNum: 'partitionsDoingNum',
      partitionsDoneNum: 'partitionsDoneNum',
      partitionsFailedNum: 'partitionsFailedNum',
      region: 'region',
      scanId: 'scanId',
      status: 'status',
      tableNum: 'tableNum',
      tablesDoingNum: 'tablesDoingNum',
      tablesDoneNum: 'tablesDoneNum',
      tablesFailedNum: 'tablesFailedNum',
      tablesPartDoneNum: 'tablesPartDoneNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIsOnline: 'boolean',
      config: { 'type': 'array', 'itemType': GetMmsDataSourceResponseBodyDataConfig },
      createTime: 'string',
      dbNum: 'number',
      errMsg: 'string',
      id: 'number',
      lastUpdateTime: 'string',
      name: 'string',
      networklink: 'string',
      partitionNum: 'number',
      partitionsDoingNum: 'number',
      partitionsDoneNum: 'number',
      partitionsFailedNum: 'number',
      region: 'string',
      scanId: 'number',
      status: 'string',
      tableNum: 'number',
      tablesDoingNum: 'number',
      tablesDoneNum: 'number',
      tablesFailedNum: 'number',
      tablesPartDoneNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDbResponseBodyData extends $dara.Model {
  /**
   * @example
   * for mms_test
   */
  description?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  /**
   * @example
   * 63
   */
  id?: number;
  /**
   * @remarks
   * last ddl time
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * hdfs://master-1-1.c-6fc187819ed6bae0.cn-shanghai.emr.aliyuncs.com:9000/user/hive/warehouse
   */
  location?: string;
  /**
   * @example
   * mms_test
   */
  name?: string;
  /**
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @example
   * System user
   */
  owner?: string;
  /**
   * @example
   * 2000
   */
  partitions?: number;
  /**
   * @example
   * 200
   */
  partitionsDoing?: number;
  /**
   * @example
   * 1400
   */
  partitionsDone?: number;
  /**
   * @example
   * 400
   */
  partitionsFailed?: number;
  /**
   * @example
   * 323232332
   */
  size?: number;
  /**
   * @example
   * 2000017
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * 200
   */
  tables?: number;
  /**
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @example
   * 120
   */
  tablesDone?: number;
  /**
   * @example
   * 20
   */
  tablesFailed?: number;
  /**
   * @example
   * 20
   */
  tablesPartDone?: number;
  /**
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      extra: 'extra',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tables: 'tables',
      tablesDoing: 'tablesDoing',
      tablesDone: 'tablesDone',
      tablesFailed: 'tablesFailed',
      tablesPartDone: 'tablesPartDone',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extra: 'string',
      id: 'number',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tables: 'number',
      tablesDoing: 'number',
      tablesDone: 'number',
      tablesFailed: 'number',
      tablesPartDone: 'number',
      updated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsFetchMetadataJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-16 19:10:07
   */
  endTime?: string;
  /**
   * @example
   * unexpected exception
   */
  errorMsg?: string;
  /**
   * @example
   * 1000002
   */
  id?: number;
  /**
   * @example
   * 5000
   */
  progress?: number;
  /**
   * @example
   * {"databases":5,"tables":75,"partitions":215}
   */
  result?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * 2024-12-16 19:09:37
   */
  startTime?: string;
  /**
   * @example
   * SCAN_DOING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      id: 'id',
      progress: 'progress',
      result: 'result',
      sourceId: 'sourceId',
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      errorMsg: 'string',
      id: 'number',
      progress: 'number',
      result: 'string',
      sourceId: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsJobResponseBodyDataConfig extends $dara.Model {
  columnMapping?: { [key: string]: string };
  enableVerification?: boolean;
  increment?: boolean;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  schemaOnly?: boolean;
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
  tables?: string[];
  taskType?: string;
  tunnelQuota?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      enableVerification: 'enableVerification',
      increment: 'increment',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      schemaOnly: 'schemaOnly',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
      taskType: 'taskType',
      tunnelQuota: 'tunnelQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enableVerification: 'boolean',
      increment: 'boolean',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      schemaOnly: 'boolean',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
      tunnelQuota: 'string',
    };
  }

  validate() {
    if(this.columnMapping) {
      $dara.Model.validateMap(this.columnMapping);
    }
    if(this.others) {
      $dara.Model.validateMap(this.others);
    }
    if(this.partitionFilters) {
      $dara.Model.validateMap(this.partitionFilters);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    if(Array.isArray(this.tableBlackList)) {
      $dara.Model.validateArray(this.tableBlackList);
    }
    if(this.tableMapping) {
      $dara.Model.validateMap(this.tableMapping);
    }
    if(Array.isArray(this.tableWhiteList)) {
      $dara.Model.validateArray(this.tableWhiteList);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsJobResponseBodyData extends $dara.Model {
  config?: GetMmsJobResponseBodyDataConfig;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @example
   * mms_target
   */
  dstDbName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  eta?: string;
  /**
   * @example
   * 10
   */
  id?: number;
  /**
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @example
   * 2
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 100
   */
  taskDone?: number;
  /**
   * @example
   * 100
   */
  taskNum?: number;
  /**
   * @example
   * Tables
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      eta: 'eta',
      id: 'id',
      name: 'name',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      status: 'status',
      stopped: 'stopped',
      taskDone: 'taskDone',
      taskNum: 'taskNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetMmsJobResponseBodyDataConfig,
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      eta: 'string',
      id: 'number',
      name: 'string',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      status: 'string',
      stopped: 'boolean',
      taskDone: 'number',
      taskNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsPartitionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  dbId?: number;
  /**
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @example
   * 2323
   */
  id?: number;
  /**
   * @remarks
   * lastDdlTime
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @example
   * 12323
   */
  size?: number;
  /**
   * @example
   * 200018
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  /**
   * @example
   * p1=1/p2=abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'dbName',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tableId: 'tableId',
      tableName: 'tableName',
      updated: 'updated',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      id: 'number',
      lastDdlTime: 'string',
      numRows: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tableId: 'number',
      tableName: 'string',
      updated: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTableResponseBodyDataSchemaColumns extends $dara.Model {
  /**
   * @example
   * user id
   */
  comment?: string;
  /**
   * @example
   * 10
   */
  defaultValue?: string;
  /**
   * @example
   * user_id
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTableResponseBodyDataSchemaPartitions extends $dara.Model {
  /**
   * @example
   * first partition level
   */
  comment?: string;
  /**
   * @example
   * abc
   */
  defaultValue?: string;
  /**
   * @example
   * p1
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTableResponseBodyDataSchema extends $dara.Model {
  columns?: GetMmsTableResponseBodyDataSchemaColumns[];
  /**
   * @example
   * for mms test
   */
  comment?: string;
  /**
   * @example
   * test
   */
  name?: string;
  partitions?: GetMmsTableResponseBodyDataSchemaPartitions[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      comment: 'comment',
      name: 'name',
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetMmsTableResponseBodyDataSchemaColumns },
      comment: 'string',
      name: 'string',
      partitions: { 'type': 'array', 'itemType': GetMmsTableResponseBodyDataSchemaPartitions },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTableResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dbName?: string;
  /**
   * @example
   * {"mapkey.delim":":","collection.delim":",","serialization.format":"|","field.delim":"|"}
   */
  extra?: string;
  /**
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @remarks
   * table ID
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * inputFormat
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * lastDdlTime
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * | hdfs://master-1-1.c-c127cd184bb029ea.cn-zhangjiakou.emr.aliyuncs.com:9000/user/hive/warehouse/demo
   */
  location?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 233232
   */
  numRows?: number;
  /**
   * @remarks
   * outputFormat
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @example
   * Hive
   */
  owner?: string;
  /**
   * @example
   * 100
   */
  partitions?: number;
  /**
   * @example
   * 20
   */
  partitionsDoing?: number;
  /**
   * @example
   * 80
   */
  partitionsDone?: number;
  /**
   * @example
   * 0
   */
  partitionsFailed?: number;
  schema?: GetMmsTableResponseBodyDataSchema;
  /**
   * @remarks
   * serde
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serde?: string;
  /**
   * @example
   * 23232
   */
  size?: number;
  /**
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * MANAGED_TABLED
   */
  type?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'dbId',
      dbName: 'dbName',
      extra: 'extra',
      hasPartitions: 'hasPartitions',
      id: 'id',
      inputFormat: 'inputFormat',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      outputFormat: 'outputFormat',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      schema: 'schema',
      serde: 'serde',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      extra: 'string',
      hasPartitions: 'boolean',
      id: 'number',
      inputFormat: 'string',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      outputFormat: 'string',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      schema: GetMmsTableResponseBodyDataSchema,
      serde: 'string',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      type: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-10-25 04:21:01
   */
  createTime?: string;
  /**
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @example
   * mms_target
   */
  dstDbName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @example
   * table_1
   */
  dstTableName?: string;
  /**
   * @example
   * 2024-10-25 07:21:01
   */
  endTime?: string;
  /**
   * @example
   * 7680
   */
  id?: number;
  /**
   * @example
   * 87
   */
  jobId?: number;
  /**
   * @example
   * test_odps_spark
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  retriedTimes?: number;
  /**
   * @example
   * true
   */
  running?: boolean;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @example
   * table_1
   */
  srcTableName?: string;
  /**
   * @example
   * 2024-10-25 06:21:01
   */
  startTime?: string;
  /**
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 2323
   */
  tableId?: number;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      dstTableName: 'dstTableName',
      endTime: 'endTime',
      id: 'id',
      jobId: 'jobId',
      jobName: 'jobName',
      retriedTimes: 'retriedTimes',
      running: 'running',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      srcTableName: 'srcTableName',
      startTime: 'startTime',
      status: 'status',
      stopped: 'stopped',
      tableId: 'tableId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      dstTableName: 'string',
      endTime: 'string',
      id: 'number',
      jobId: 'number',
      jobName: 'string',
      retriedTimes: 'number',
      running: 'boolean',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      srcTableName: 'string',
      startTime: 'string',
      status: 'string',
      stopped: 'boolean',
      tableId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataAllowedProjectList extends $dara.Model {
  /**
   * @remarks
   * The security level for sensitive data.
   * 
   * @example
   * 2
   */
  label?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * proejctB
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListFunction extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the function.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * function_1
   */
  name?: string;
  /**
   * @remarks
   * The name of schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListResource extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * res_1
   */
  name?: string;
  /**
   * @remarks
   * The name of schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListTable extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the table.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dim_odps
   */
  name?: string;
  /**
   * @remarks
   * The name of schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The functions.
   */
  function?: GetPackageResponseBodyDataResourceListFunction[];
  /**
   * @remarks
   * The resources.
   */
  resource?: GetPackageResponseBodyDataResourceListResource[];
  /**
   * @remarks
   * The tables.
   */
  table?: GetPackageResponseBodyDataResourceListTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListFunction },
      resource: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListResource },
      table: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListTable },
    };
  }

  validate() {
    if(Array.isArray(this.function)) {
      $dara.Model.validateArray(this.function);
    }
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The projects in which the package is installed.
   */
  allowedProjectList?: GetPackageResponseBodyDataAllowedProjectList[];
  /**
   * @remarks
   * The details of the resources that are included in the package.
   */
  resourceList?: GetPackageResponseBodyDataResourceList;
  static names(): { [key: string]: string } {
    return {
      allowedProjectList: 'allowedProjectList',
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedProjectList: { 'type': 'array', 'itemType': GetPackageResponseBodyDataAllowedProjectList },
      resourceList: GetPackageResponseBodyDataResourceList,
    };
  }

  validate() {
    if(Array.isArray(this.allowedProjectList)) {
      $dara.Model.validateArray(this.allowedProjectList);
    }
    if(this.resourceList && typeof (this.resourceList as any).validate === 'function') {
      (this.resourceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services.
   * 
   * >  If you configure only the IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services, the access over the Internet or the network for interconnecting with other Alibaba Cloud services is subject to configurations, and access over a virtual private cloud (VPC) is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP address whitelist for access over a VPC.
   * 
   * >  If you configure only the IP address whitelist for access over a VPC, the access over a VPC is subject to configurations, and the access over the Internet or the network for interconnecting with other Alibaba Cloud services is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.
   * 
   * @example
   * SHA1
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see
   * 
   * [Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key that is used for data encryption. You can select MaxCompute Default Key or Bring Your Own Key (BYOK) as the key type. If you select MaxCompute Default Key, the default key that is created by MaxCompute is used.
   * 
   * @example
   * dafault
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesExternalProjectProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the external project is an external project for [data lakehouse solution 2.0](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
   * 
   * @example
   * true
   */
  isExternalCatalogBound?: string;
  static names(): { [key: string]: string } {
    return {
      isExternalCatalogBound: 'isExternalCatalogBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExternalCatalogBound: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize extends $dara.Model {
  /**
   * @remarks
   * The storage usage at the long-term storage tier.
   * 
   * @example
   * 21764917
   */
  longTermSize?: number;
  /**
   * @remarks
   * The storage usage at the Infrequent Access (IA) layer.
   * 
   * @example
   * 767693
   */
  lowFrequencySize?: number;
  /**
   * @remarks
   * The storage usage at the standard storage tier.
   * 
   * @example
   * 27649172
   */
  standardSize?: number;
  static names(): { [key: string]: string } {
    return {
      longTermSize: 'longTermSize',
      lowFrequencySize: 'lowFrequencySize',
      standardSize: 'standardSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTermSize: 'number',
      lowFrequencySize: 'number',
      standardSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesStorageTierInfo extends $dara.Model {
  /**
   * @remarks
   * The backup storage usage.
   * 
   * @example
   * 86672917
   */
  projectBackupSize?: number;
  /**
   * @remarks
   * The total storage usage.
   * 
   * @example
   * 56066037
   */
  projectTotalSize?: number;
  /**
   * @remarks
   * The [storage tier](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierSize?: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize;
  static names(): { [key: string]: string } {
    return {
      projectBackupSize: 'projectBackupSize',
      projectTotalSize: 'projectTotalSize',
      storageTierSize: 'storageTierSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBackupSize: 'number',
      projectTotalSize: 'number',
      storageTierSize: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize,
    };
  }

  validate() {
    if(this.storageTierSize && typeof (this.storageTierSize as any).validate === 'function') {
      (this.storageTierSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * 
   * *   **mandatory**: The lifecycle clause is required in a table creation statement.
   * *   **optional**: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
   * *   **inherit**: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The table lifecycle. Unit: days. Valid values: 1 to 37231. Default value: 37231.
   * 
   * @example
   * 37231
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm extends $dara.Model {
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last access time of data. N is specified by this parameter and corresponds to `LastAccessTime` that is configured for the table or partition.
   * 
   * >  If LastAccessTime of a table or partition is left empty, the following rules are applied:
   * 
   * *   For tables or partitions that you created before October 1, 2023, 2023.10.01 00:00:00 in UTC+0 is considered as the last access time.
   * 
   * *   For tables or partitions that you created on or after October 1, 2023, if no data is accessed, the table or partition creation time is considered as the last access time.
   * 
   * @example
   * 180
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last modification time of data. N is specified by this parameter and corresponds to `LastModifiedTime` that is configured for the table or partition.
   * 
   * @example
   * 180
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The period after the previous storage tier change time.
   * 
   * @example
   * 1
   */
  daysAfterLastTierModificationGreaterThan?: number;
  static names(): { [key: string]: string } {
    return {
      daysAfterLastAccessGreaterThan: 'DaysAfterLastAccessGreaterThan',
      daysAfterLastModificationGreaterThan: 'DaysAfterLastModificationGreaterThan',
      daysAfterLastTierModificationGreaterThan: 'DaysAfterLastTierModificationGreaterThan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysAfterLastAccessGreaterThan: 'number',
      daysAfterLastModificationGreaterThan: 'number',
      daysAfterLastTierModificationGreaterThan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency extends $dara.Model {
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last access time of data. N is specified by this parameter and corresponds to `LastAccessTime` that is configured for the table or partition.
   * 
   * >  If LastAccessTime of a table or partition is left empty, the following rules are applied:
   * 
   * *   For tables or partitions that you created before October 1, 2023, 2023.10.01 00:00:00 in UTC+0 is considered as the last access time.
   * 
   * *   For tables or partitions that you created on or after October 1, 2023, if no data is accessed, the table or partition creation time is considered as the last access time.
   * 
   * @example
   * 30
   */
  daysAfterLastAccessGreaterThan?: number;
  /**
   * @remarks
   * The system triggers an automatic storage tier change N days after the last modification time of data. N is specified by this parameter and corresponds to `LastModifiedTime` that is configured for the table or partition.
   * 
   * @example
   * 30
   */
  daysAfterLastModificationGreaterThan?: number;
  /**
   * @remarks
   * The period after the previous storage tier change time.
   * 
   * @example
   * 1
   */
  daysAfterLastTierModificationGreaterThan?: number;
  static names(): { [key: string]: string } {
    return {
      daysAfterLastAccessGreaterThan: 'DaysAfterLastAccessGreaterThan',
      daysAfterLastModificationGreaterThan: 'DaysAfterLastModificationGreaterThan',
      daysAfterLastTierModificationGreaterThan: 'DaysAfterLastTierModificationGreaterThan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysAfterLastAccessGreaterThan: 'number',
      daysAfterLastModificationGreaterThan: 'number',
      daysAfterLastTierModificationGreaterThan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycleConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the long-term storage tier.
   */
  tierToLongterm?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm;
  /**
   * @remarks
   * The information about the IA storage tier.
   */
  tierToLowFrequency?: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency;
  static names(): { [key: string]: string } {
    return {
      tierToLongterm: 'TierToLongterm',
      tierToLowFrequency: 'TierToLowFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tierToLongterm: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLongterm,
      tierToLowFrequency: GetProjectResponseBodyDataPropertiesTableLifecycleConfigTierToLowFrequency,
    };
  }

  validate() {
    if(this.tierToLongterm && typeof (this.tierToLongterm as any).validate === 'function') {
      (this.tierToLongterm as any).validate();
    }
    if(this.tierToLowFrequency && typeof (this.tierToLowFrequency as any).validate === 'function') {
      (this.tierToLowFrequency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a full table scan is allowed in the project. A full table scan occupies a large number of resources, which reduces data processing efficiency. By default, the full table scan feature is disabled.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  autoMvQuotaGb?: number;
  /**
   * @remarks
   * The Tunnel parent resource group that is bound to the project. You do not need to pay attention to this group.
   * 
   * @example
   * No value
   */
  elderTunnelQuota?: string;
  enableAutoMv?: boolean;
  /**
   * @remarks
   * Indicates whether the DECIMAL type of the MaxCompute V2.0 data type edition is enabled.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Indicates whether external table caching is forcefully enabled.
   * 
   * @example
   * true
   */
  enableFdcCacheForce?: boolean;
  /**
   * @remarks
   * Indicates whether [tiered storage](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) is enabled.
   * 
   * @example
   * true
   */
  enableTieredStorage?: boolean;
  /**
   * @remarks
   * Indicates whether the routing of the Tunnel resource group is enabled.
   * 
   * *   true: The data transfer tasks that are submitted by the project by default use the Tunnel resource group that is bound to the project.
   * *   false: The data transfer tasks that are submitted by the project by default use the Tunnel shared resource group.
   * 
   * @example
   * true
   */
  enableTunnelQuotaRoute?: boolean;
  /**
   * @remarks
   * The storage encryption properties.
   */
  encryption?: GetProjectResponseBodyDataPropertiesEncryption;
  /**
   * @remarks
   * The properties of the external project.
   */
  externalProjectProperties?: GetProjectResponseBodyDataPropertiesExternalProjectProperties;
  /**
   * @remarks
   * The quota for external table caching.
   * 
   * @example
   * fdc_quota
   */
  fdcQuota?: string;
  /**
   * @remarks
   * The retention period for backup data. Unit: days. During the retention period, you can restore data of the version in use to the backup data of any version. Valid values: [0,30]. Default value: 1. The value 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum consumption threshold of a single SQL statement. Formula: Amount of scanned data (GB) × Complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The [storage tier](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage) information.
   */
  storageTierInfo?: GetProjectResponseBodyDataPropertiesStorageTierInfo;
  /**
   * @remarks
   * The table lifecycle properties.
   */
  tableLifecycle?: GetProjectResponseBodyDataPropertiesTableLifecycle;
  /**
   * @remarks
   * The [properties of tiered storage lifecycle rules](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tiered-storage#f61fc9db76nna). After you configure the properties, the system triggers automatic switching of storage tiers based on the rules.
   */
  tableLifecycleConfig?: GetProjectResponseBodyDataPropertiesTableLifecycleConfig;
  /**
   * @remarks
   * The time zone that is used by your project. The time zone is the same as the time zone specified by `odps.sql.timezone`.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The [Tunnel](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * *   Default resource group: The Tunnel shared resource group is used. You cannot use the subscription-based Tunnel resource group for the project. The default resource group is automatically used by the Tunnel service of your project, regardless of the parameter setting.
   * *   Subscription-based Tunnel resource group: You can use the subscription-based Tunnel resource group for the project.
   * 
   * @example
   * Quota
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * *   **1**: MaxCompute V1.0 data type edition
   * *   **2**: MaxCompute V2.0 data type edition
   * *   **hive**: Hive-compatible data type edition
   * 
   * For more information about the differences among the three data type editions, see [Data type editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2.0
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      autoMvQuotaGb: 'autoMvQuotaGb',
      elderTunnelQuota: 'elderTunnelQuota',
      enableAutoMv: 'enableAutoMv',
      enableDecimal2: 'enableDecimal2',
      enableDr: 'enableDr',
      enableFdcCacheForce: 'enableFdcCacheForce',
      enableTieredStorage: 'enableTieredStorage',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      externalProjectProperties: 'externalProjectProperties',
      fdcQuota: 'fdcQuota',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      storageTierInfo: 'storageTierInfo',
      tableLifecycle: 'tableLifecycle',
      tableLifecycleConfig: 'tableLifecycleConfig',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      autoMvQuotaGb: 'number',
      elderTunnelQuota: 'string',
      enableAutoMv: 'boolean',
      enableDecimal2: 'boolean',
      enableDr: 'boolean',
      enableFdcCacheForce: 'boolean',
      enableTieredStorage: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: GetProjectResponseBodyDataPropertiesEncryption,
      externalProjectProperties: GetProjectResponseBodyDataPropertiesExternalProjectProperties,
      fdcQuota: 'string',
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      storageTierInfo: GetProjectResponseBodyDataPropertiesStorageTierInfo,
      tableLifecycle: GetProjectResponseBodyDataPropertiesTableLifecycle,
      tableLifecycleConfig: GetProjectResponseBodyDataPropertiesTableLifecycleConfig,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.externalProjectProperties && typeof (this.externalProjectProperties as any).validate === 'function') {
      (this.externalProjectProperties as any).validate();
    }
    if(this.storageTierInfo && typeof (this.storageTierInfo as any).validate === 'function') {
      (this.storageTierInfo as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    if(this.tableLifecycleConfig && typeof (this.tableLifecycleConfig as any).validate === 'function') {
      (this.tableLifecycleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSaleTag extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the default computing quota.
   * 
   * @example
   * project_name
   */
  resourceId?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * project
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSecurityPropertiesProjectProtection extends $dara.Model {
  /**
   * @remarks
   * If you enable the project data protection mechanism, you can configure exception or trusted projects. This allows specified users to transfer data of a specified object to a specified project. The project data protection mechanism does not take effect in all the situations that are specified in the exception policy.
   * 
   * @example
   * {
   *     "Version": "1",
   *     "Statement":
   *     [{
   *         "Effect":"Allow",
   *         "Principal":"<Principal>",
   *         "Action":["odps:<Action1>[, <Action2>, ...]"],
   *         "Resource":"acs:odps:*:<Resource>",
   *         "Condition":{
   *             "StringEquals": {
   *                 "odps:TaskType":["<Tasktype>"]
   *             }
   *         }
   *     }]
   *     }
   */
  exceptionPolicy?: string;
  /**
   * @remarks
   * Indicates whether the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) is enabled for the project. This allows or denies data transfer across projects. By default, the data protection mechanism is disabled.
   * 
   * @example
   * true
   */
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSecurityProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the [download control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Indicates whether the [label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Indicates whether to allow the object creator to have the access permissions on the object. The default value is true, which indicates that the object creator has the access permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the object creator has the authorization permissions on the object. The default value is true, which indicates that the object creator has the authorization permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The properties of the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection).
   */
  projectProtection?: GetProjectResponseBodyDataSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Indicates whether the [ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Indicates whether the [policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: GetProjectResponseBodyDataSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  validate() {
    if(this.projectProtection && typeof (this.projectProtection as any).validate === 'function') {
      (this.projectProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * maxcompute project
   */
  comment?: string;
  /**
   * @remarks
   * The total storage usage. The storage space that is occupied by your project, which is the logical storage space after your project data is collected and compressed.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default computing quota that is used to allocate computing resources. If you do not specify a computing quota for your project, the jobs that are initiated by your project consume the computing resources in the default quota. For more information about how to use computing resources, see [Use quota groups for computing resources](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources).
   * 
   * @example
   * quota_a
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  ipWhiteList?: GetProjectResponseBodyDataIpWhiteList;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  name?: string;
  /**
   * @remarks
   * The account information of the project owner.
   * 
   * @example
   * 1565950907343451
   */
  owner?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * PayAsYouGo
   */
  productType?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: GetProjectResponseBodyDataProperties;
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
   * The instance ID and billing method of the default computing quota.
   */
  saleTag?: GetProjectResponseBodyDataSaleTag;
  /**
   * @remarks
   * The permission properties.
   */
  securityProperties?: GetProjectResponseBodyDataSecurityProperties;
  /**
   * @remarks
   * The project status. Valid values:
   * 
   * *   **AVAILABLE**
   * *   **READONLY**
   * *   **FROZEN**
   * *   **DELETING**
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of `Super_Administrator` role members of the project.
   */
  superAdmins?: string[];
  /**
   * @remarks
   * Indicates whether data storage by schema is supported. MaxCompute supports the schema feature. This feature allows you to classify objects such as tables, resources, and user-defined functions (UDFs) in a project by schema. You can create multiple schemas in a project. For more information, see [Schema-related operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * *   **managed**: internal project
   * *   **external**: external project
   * 
   * @example
   * managed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      productType: 'productType',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      superAdmins: 'superAdmins',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: GetProjectResponseBodyDataIpWhiteList,
      name: 'string',
      owner: 'string',
      productType: 'string',
      properties: GetProjectResponseBodyDataProperties,
      regionId: 'string',
      saleTag: GetProjectResponseBodyDataSaleTag,
      securityProperties: GetProjectResponseBodyDataSecurityProperties,
      status: 'string',
      superAdmins: { 'type': 'array', 'itemType': 'string' },
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.securityProperties && typeof (this.securityProperties as any).validate === 'function') {
      (this.securityProperties as any).validate();
    }
    if(Array.isArray(this.superAdmins)) {
      $dara.Model.validateArray(this.superAdmins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about the order.
   */
  billingPolicy?: GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy;
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
   * The nickname of the level-2 quota.
   * 
   * @example
   * subquotaA
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the quota.
   */
  parameter?: { [key: string]: any };
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
  saleTag?: GetQuotaResponseBodyDataSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information about the scheduling plan.
   */
  scheduleInfo?: GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo;
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
      billingPolicy: GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodyDataSubQuotaInfoListSaleTag,
      scheduleInfo: GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo,
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

export class GetQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the order.
   */
  billingPolicy?: GetQuotaResponseBodyDataBillingPolicy;
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
  saleTag?: GetQuotaResponseBodyDataSaleTag;
  /**
   * @remarks
   * The information about the scheduling plan.
   */
  scheduleInfo?: GetQuotaResponseBodyDataScheduleInfo;
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
   * The information about the level-2 quota.
   */
  subQuotaInfoList?: GetQuotaResponseBodyDataSubQuotaInfoList[];
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
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaResponseBodyDataBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodyDataSaleTag,
      scheduleInfo: GetQuotaResponseBodyDataScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaResponseBodyDataSubQuotaInfoList },
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

export class GetQuotaResponseBodySaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  parameter?: { [key: string]: any };
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
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class GetQuotaPlanResponseBodyDataQuotaBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListBillingPolicy;
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
   * 2022-09-06T02:14:44Z
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the quota plan.
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
   */
  parameter?: { [key: string]: any };
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
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo;
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
   * The ID of the tenant.
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
      billingPolicy: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo,
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
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuota extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: GetQuotaPlanResponseBodyDataQuotaBillingPolicy;
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
   * The time when the quota plan was created.
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
   * The ID of the quota.
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
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: GetQuotaPlanResponseBodyDataQuotaScheduleInfo;
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
   * The information of the level-2 quota.
   */
  subQuotaInfoList?: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoList[];
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
   * The ID of the tenant.
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
      billingPolicy: GetQuotaPlanResponseBodyDataQuotaBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: GetQuotaPlanResponseBodyDataQuotaScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoList },
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

export class GetQuotaPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 2022-05-16T06:07:45Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: GetQuotaPlanResponseBodyDataQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      quota: GetQuotaPlanResponseBodyDataQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBodyDataCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * @example
   * 2022-04-25T04:23:04Z
   */
  after?: string;
  /**
   * @remarks
   * The time when the quota plan takes effect.
   * 
   * @example
   * 0900
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'after',
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      at: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The condition value.
   */
  condition?: GetQuotaScheduleResponseBodyDataCondition;
  /**
   * @remarks
   * The ID of the quota plan.
   * 
   * @example
   * 63
   */
  id?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operator?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * @example
   * once
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      operator: 'operator',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetQuotaScheduleResponseBodyDataCondition,
      id: 'string',
      operator: 'string',
      plan: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBodyDataPlot extends $dara.Model {
  /**
   * @remarks
   * The title of the chart.
   * 
   * @example
   * request
   */
  title?: string;
  /**
   * @remarks
   * The type of the chart.
   * 
   * @example
   * request
   */
  type?: string;
  /**
   * @remarks
   * The data metric field.
   */
  yAxis?: string[];
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      type: 'type',
      yAxis: 'yAxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      type: 'string',
      yAxis: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.yAxis)) {
      $dara.Model.validateArray(this.yAxis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric results.
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The information about the chart.
   */
  plot?: GetQuotaUsageResponseBodyDataPlot[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      plot: 'plot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plot: { 'type': 'array', 'itemType': GetQuotaUsageResponseBodyDataPlot },
    };
  }

  validate() {
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(Array.isArray(this.plot)) {
      $dara.Model.validateArray(this.plot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataFunction extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the function.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * functionA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataInstance extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the instance.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instanceA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataPackage extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the package.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataProject extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the project.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * projectA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataResource extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * resourceA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataTable extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the table.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tableA
   */
  name?: string;
  /**
   * @remarks
   * The Schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The function.
   */
  function?: GetRoleAclResponseBodyDataFunction[];
  /**
   * @remarks
   * The instance.
   */
  instance?: GetRoleAclResponseBodyDataInstance[];
  /**
   * @remarks
   * The package.
   */
  package?: GetRoleAclResponseBodyDataPackage[];
  /**
   * @remarks
   * The project.
   */
  project?: GetRoleAclResponseBodyDataProject[];
  /**
   * @remarks
   * The resource.
   */
  resource?: GetRoleAclResponseBodyDataResource[];
  /**
   * @remarks
   * The table.
   */
  table?: GetRoleAclResponseBodyDataTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      instance: 'instance',
      package: 'package',
      project: 'project',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataFunction },
      instance: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataInstance },
      package: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataPackage },
      project: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataProject },
      resource: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataResource },
      table: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataTable },
    };
  }

  validate() {
    if(Array.isArray(this.function)) {
      $dara.Model.validateArray(this.function);
    }
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the object.
   */
  actions?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBodyDataRunningJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) snapshot proportion of the job.
   * 
   * @example
   * 0.45
   */
  cuSnapshot?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 2023050206371544gomgtp3ljcr4
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that submits the job.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The memory snapshot proportion of the job.
   * 
   * @example
   * 0.45
   */
  memorySnapshot?: number;
  /**
   * @remarks
   * The progress of the job.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * project_20221021123044_981b
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the quota that is used by the job.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The time when the job starts to run.
   * 
   * @example
   * 1689746864
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The time when the job is submitted.
   * 
   * @example
   * 1689746864
   */
  submittedAtTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuSnapshot: 'cuSnapshot',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      memorySnapshot: 'memorySnapshot',
      progress: 'progress',
      project: 'project',
      quotaNickname: 'quotaNickname',
      runningAtTime: 'runningAtTime',
      submittedAtTime: 'submittedAtTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuSnapshot: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      memorySnapshot: 'number',
      progress: 'number',
      project: 'string',
      quotaNickname: 'string',
      runningAtTime: 'number',
      submittedAtTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of jobs in the running state.
   */
  runningJobInfoList?: GetRunningJobsResponseBodyDataRunningJobInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      runningJobInfoList: 'runningJobInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      runningJobInfoList: { 'type': 'array', 'itemType': GetRunningJobsResponseBodyDataRunningJobInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.runningJobInfoList)) {
      $dara.Model.validateArray(this.runningJobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataClusterInfoSortCols extends $dara.Model {
  /**
   * @remarks
   * The name of the sorting field.
   * 
   * @example
   * col_2
   */
  name?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * @example
   * DESC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataClusterInfo extends $dara.Model {
  /**
   * @remarks
   * Optional. The number of buckets in the clustered table. The value 0 indicates that the number of buckets dynamically changes when a job is running.
   * 
   * @example
   * 1024
   */
  bucketNum?: number;
  /**
   * @remarks
   * The cluster keys.
   */
  clusterCols?: string[];
  /**
   * @remarks
   * The clustering type of the table. MaxCompute supports [hash clustering](https://www.alibabacloud.com/help/maxcompute/use-cases/hash-clustering) and
   * 
   * [range clustering](https://www.alibabacloud.com/help/maxcompute/use-cases/range-clustering).
   * 
   * @example
   * Hash
   */
  clusterType?: string;
  /**
   * @remarks
   * The condition by which the results are sorted.
   */
  sortCols?: GetTableInfoResponseBodyDataClusterInfoSortCols[];
  static names(): { [key: string]: string } {
    return {
      bucketNum: 'bucketNum',
      clusterCols: 'clusterCols',
      clusterType: 'clusterType',
      sortCols: 'sortCols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketNum: 'number',
      clusterCols: { 'type': 'array', 'itemType': 'string' },
      clusterType: 'string',
      sortCols: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataClusterInfoSortCols },
    };
  }

  validate() {
    if(Array.isArray(this.clusterCols)) {
      $dara.Model.validateArray(this.clusterCols);
    }
    if(Array.isArray(this.sortCols)) {
      $dara.Model.validateArray(this.sortCols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataNativeColumns extends $dara.Model {
  /**
   * @remarks
   * The column comments.
   * 
   * @example
   * The name of shop.
   */
  comment?: string;
  /**
   * @remarks
   * The sensitivity-level label of the column. For more information, see [Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  label?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * shop_name
   */
  name?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataPartitionColumns extends $dara.Model {
  /**
   * @remarks
   * The comments of the partition key column.
   * 
   * @example
   * Sale date.
   */
  comment?: string;
  /**
   * @remarks
   * The sensitivity-level label of the column. For more information, see [Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  label?: string;
  /**
   * @remarks
   * The partition name.
   * 
   * @example
   * sale_date
   */
  name?: string;
  /**
   * @remarks
   * The partition column type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the materialized view is automatically refreshed. This response parameter is returned when type is set to materializedView.
   * 
   * @example
   * false
   */
  autoRefreshEnabled?: boolean;
  /**
   * @remarks
   * The clustering attribute. This response parameter is returned when the table is a clustered table.
   */
  clusterInfo?: GetTableInfoResponseBodyDataClusterInfo;
  /**
   * @remarks
   * The comments of the table.
   * 
   * @example
   * sale_detail
   */
  comment?: string;
  /**
   * @remarks
   * DDL statement to create a table.
   * 
   * @example
   * create table if not exists sale_detail( shop_name STRING, customer_id STRING, total_price DOUBLE) partitioned by (sale_date STRING, region STRING);
   */
  createTableDDL?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-17T07:07:47Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * project_name.schema_name.table_name
   */
  displayName?: string;
  /**
   * @remarks
   * The number of file of the table.
   * 
   * @example
   * 200
   */
  fileNum?: number;
  /**
   * @remarks
   * Indicates whether the table is an external table. This response parameter is returned when type is set to external.
   * 
   * @example
   * false
   */
  isExternalTable?: boolean;
  /**
   * @remarks
   * Indicates whether data of the materialized view is invalid due to changes in the data of the source table. This response parameter is returned when type is set to materializedView.
   * 
   * @example
   * false
   */
  isOutdated?: boolean;
  /**
   * @remarks
   * The time when data of the table or view was last accessed.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The time when the data definition language (DDL) statement of the table or view was last modified.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastDDLTime?: number;
  /**
   * @remarks
   * The time when data of the table or view was last modified.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The lifecycle. Unit: days.
   * 
   * @example
   * -1
   */
  lifecycle?: string;
  /**
   * @remarks
   * The path of the external table. This response parameter is returned when type is set to external.
   * 
   * @example
   * oss://oss-cn-hangzhou-internal.aliyuncs.com/oss-mc-test/Demo1/
   */
  location?: string;
  /**
   * @remarks
   * Indicates whether the table or view is a [materialize view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations).
   * 
   * @example
   * false
   */
  materializedView?: boolean;
  /**
   * @remarks
   * The name of the table or view.
   * 
   * @example
   * sale_detail
   */
  name?: string;
  /**
   * @remarks
   * The field information.
   */
  nativeColumns?: GetTableInfoResponseBodyDataNativeColumns[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role AliyunODPSDefaultRole in Resource Access Management (RAM). This response parameter is returned when type is set to external.
   * 
   * @example
   * acs:ram::xxxxx:role/aliyunodpsdefaultrole
   */
  odpsPropertiesRolearn?: string;
  /**
   * @remarks
   * Indicates whether the table header is ignored. This response parameter is returned when type is set to external.
   * 
   * @example
   * true
   */
  odpsSqlTextOptionFlushHeader?: boolean;
  /**
   * @remarks
   * The first N rows that were ignored in the table header. This response parameter is returned when type is set to external.
   * 
   * @example
   * 1
   */
  odpsTextOptionHeaderLinesCount?: number;
  /**
   * @remarks
   * The account information of the table or view owner.
   * 
   * @example
   * 188785396123****
   */
  owner?: string;
  /**
   * @remarks
   * The information about partition key columns. This response parameter is returned only for partitioned tables.
   */
  partitionColumns?: GetTableInfoResponseBodyDataPartitionColumns[];
  /**
   * @remarks
   * The physical size of the table.
   * 
   * @example
   * 2763
   */
  physicalSize?: number;
  /**
   * @remarks
   * The name of the project to which the table or view belongs.
   * 
   * @example
   * projectA
   */
  projectName?: string;
  /**
   * @remarks
   * Indicates whether the query rewrite operation can be performed by using the materialized view. This response parameter is returned when type is set to materializedView.
   * 
   * @example
   * false
   */
  rewriteEnabled?: boolean;
  /**
   * @remarks
   * The name of the schema to which the table or the view belongs.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The data size of the non-partitioned table. If the table is a partitioned table, the system does not calculate the data size of the table. In this case, the value of this parameter is NULL. The PARTITIONS view includes the data size of each partition in a partitioned table. Unit: bytes.
   * 
   * @example
   * 5372
   */
  size?: number;
  /**
   * @remarks
   * The storage handler of the external table. This response parameter is returned when type is set to external.
   * 
   * @example
   * com.aliyun.odps.CsvStorageHandler
   */
  storageHandler?: string;
  /**
   * @remarks
   * The sensitivity-level label of the table. For more information, see [Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  tableLabel?: string;
  /**
   * @remarks
   * The name of the Tablestore table to be accessed. This response parameter is returned when type is set to external.
   * 
   * @example
   * ots_tpch_orders
   */
  tablesotreTableName?: string;
  /**
   * @remarks
   * The columns of the Tablestore table to be accessed, including the primary key column and attribute column. This response parameter is returned when type is set to external.
   * 
   * @example
   * :o_orderkey,:o_orderdate,o_custkey,o_orderstatus,o_totalprice
   */
  tablestoreColumnsMapping?: string;
  /**
   * @remarks
   * The type of the table or view. Valid values:
   * 
   * *   **internal**: internal table
   * *   **external**: external table
   * *   **view**: view
   * *   **materializedView**: [materialize view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations)
   * 
   * @example
   * internal
   */
  type?: string;
  /**
   * @remarks
   * The statement that generates the view. This response parameter is returned when type is set to view.
   * 
   * @example
   * select shop_name, sum(total_price) from sale_detail group by shop_name
   */
  viewText?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshEnabled: 'autoRefreshEnabled',
      clusterInfo: 'clusterInfo',
      comment: 'comment',
      createTableDDL: 'createTableDDL',
      creationTime: 'creationTime',
      displayName: 'displayName',
      fileNum: 'fileNum',
      isExternalTable: 'isExternalTable',
      isOutdated: 'isOutdated',
      lastAccessTime: 'lastAccessTime',
      lastDDLTime: 'lastDDLTime',
      lastModifiedTime: 'lastModifiedTime',
      lifecycle: 'lifecycle',
      location: 'location',
      materializedView: 'materializedView',
      name: 'name',
      nativeColumns: 'nativeColumns',
      odpsPropertiesRolearn: 'odpsPropertiesRolearn',
      odpsSqlTextOptionFlushHeader: 'odpsSqlTextOptionFlushHeader',
      odpsTextOptionHeaderLinesCount: 'odpsTextOptionHeaderLinesCount',
      owner: 'owner',
      partitionColumns: 'partitionColumns',
      physicalSize: 'physicalSize',
      projectName: 'projectName',
      rewriteEnabled: 'rewriteEnabled',
      schema: 'schema',
      size: 'size',
      storageHandler: 'storageHandler',
      tableLabel: 'tableLabel',
      tablesotreTableName: 'tablesotreTableName',
      tablestoreColumnsMapping: 'tablestoreColumnsMapping',
      type: 'type',
      viewText: 'viewText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshEnabled: 'boolean',
      clusterInfo: GetTableInfoResponseBodyDataClusterInfo,
      comment: 'string',
      createTableDDL: 'string',
      creationTime: 'number',
      displayName: 'string',
      fileNum: 'number',
      isExternalTable: 'boolean',
      isOutdated: 'boolean',
      lastAccessTime: 'number',
      lastDDLTime: 'number',
      lastModifiedTime: 'number',
      lifecycle: 'string',
      location: 'string',
      materializedView: 'boolean',
      name: 'string',
      nativeColumns: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataNativeColumns },
      odpsPropertiesRolearn: 'string',
      odpsSqlTextOptionFlushHeader: 'boolean',
      odpsTextOptionHeaderLinesCount: 'number',
      owner: 'string',
      partitionColumns: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataPartitionColumns },
      physicalSize: 'number',
      projectName: 'string',
      rewriteEnabled: 'boolean',
      schema: 'string',
      size: 'number',
      storageHandler: 'string',
      tableLabel: 'string',
      tablesotreTableName: 'string',
      tablestoreColumnsMapping: 'string',
      type: 'string',
      viewText: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    if(Array.isArray(this.nativeColumns)) {
      $dara.Model.validateArray(this.nativeColumns);
    }
    if(Array.isArray(this.partitionColumns)) {
      $dara.Model.validateArray(this.partitionColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * The end time of the job execution.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The job(instance) ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The owner of the job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * odps_porject
   */
  projectName?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * pqrs12345tuv
   */
  signature?: string;
  /**
   * @remarks
   * Specifications Type, specifies the resource package that you select when you purchase the MaxCompute service.
   * - OdpsStandard: the pay-as-you-go resource package.
   * 
   * - OdpsSpot: the pay-as-you-go spot resource package.
   * 
   * @example
   * OdpsStandard
   */
  specCode?: string;
  /**
   * @remarks
   * The submission time of the job.
   * 
   * @example
   * 1610432000000
   */
  submitTime?: number;
  /**
   * @remarks
   * Metering types.
   * - ComputationSql: the metering data of SQL jobs that involve internal tables.
   * 
   * - ComputationSqlOTS: the metering data of SQL jobs that involve Tablestore external tables.
   * 
   * - ComputationSqlOSS: the metering data of SQL jobs that involve OSS external tables.
   * 
   * - MapReduce: the metering data of MapReduce jobs.
   * 
   * - spark: the metering data of Spark jobs.
   * 
   * - mars: the metering data of Mars jobs.
   * 
   * @example
   * ComputationSql
   */
  type?: string;
  /**
   * @remarks
   * The unit of computing resource usage
   * 
   * @example
   * GB
   */
  unit?: string;
  /**
   * @remarks
   * The computing resource usage is calculated based on the following items:
   * 
   * - Amount of scanned data in the unit of GB. For the jobs whose metering types are ComputationSql, ComputationSqlOTS, or ComputationSqlOSS, they are billed based on the amount of scanned data. The computing resource usage of such a job is calculated by using the following formula: Amount of scanned data × Complexity. The complexity is fixed at 1 for the jobs whose metering types are ComputationSqlOTS or ComputationSqlOSS.
   * 
   * - CU-hours. For the jobs whose metering types are MapReduce, spark, or mars, they are billed based on CU-hours.
   * 
   * @example
   * 1024
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      projectName: 'projectName',
      signature: 'signature',
      specCode: 'specCode',
      submitTime: 'submitTime',
      type: 'type',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      projectName: 'string',
      signature: 'string',
      specCode: 'string',
      submitTime: 'number',
      type: 'string',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of pay-as-you-go job compute usage.
   */
  instanceComputeMetrics?: ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results returned.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceComputeMetrics: 'instanceComputeMetrics',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceComputeMetrics: { 'type': 'array', 'itemType': ListComputeMetricsByInstanceResponseBodyDataInstanceComputeMetrics },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceComputeMetrics)) {
      $dara.Model.validateArray(this.instanceComputeMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeQuotaPlanResponseBodyDataPlanListQuotaParameter extends $dara.Model {
  elasticReservedCU?: number;
  maxCU?: number;
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeQuotaPlanResponseBodyDataPlanListQuotaSubQuotaInfoListParameter extends $dara.Model {
  elasticReservedCU?: number;
  maxCU?: number;
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListComputeQuotaPlanResponseBodyDataPlanList extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 1731394621890
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: ListComputeQuotaPlanResponseBodyDataPlanListQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      quota: ListComputeQuotaPlanResponseBodyDataPlanListQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeQuotaPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of quota plan.
   */
  planList?: ListComputeQuotaPlanResponseBodyDataPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'planList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': ListComputeQuotaPlanResponseBodyDataPlanList },
    };
  }

  validate() {
    if(Array.isArray(this.planList)) {
      $dara.Model.validateArray(this.planList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyDataFunctions extends $dara.Model {
  /**
   * @remarks
   * The class in which the function was defined.
   * 
   * @example
   * abc
   */
  class?: string;
  /**
   * @remarks
   * The time when the function was created. Unit: milliseconds.
   * 
   * @example
   * 1664505167000
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name of the function.
   * 
   * @example
   * getdate
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * getdate
   */
  name?: string;
  /**
   * @remarks
   * The owner of the function.
   * 
   * @example
   * odpsowner
   */
  owner?: string;
  /**
   * @remarks
   * The name of the resource that was associated with the function.
   * 
   * @example
   * abc
   */
  resources?: string;
  /**
   * @remarks
   * The schema of the function.
   * 
   * @example
   * abc
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'class',
      creationTime: 'creationTime',
      displayName: 'displayName',
      name: 'name',
      owner: 'owner',
      resources: 'resources',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      creationTime: 'number',
      displayName: 'string',
      name: 'string',
      owner: 'string',
      resources: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about each function.
   */
  functions?: ListFunctionsResponseBodyDataFunctions[];
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      marker: 'marker',
      maxItem: 'maxItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyDataFunctions },
      marker: 'string',
      maxItem: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBodyDataJobInfoListSceneResults extends $dara.Model {
  /**
   * @remarks
   * The intelligent diagnostics result description.
   * 
   * @example
   * This job uses annual and monthly computing resources. It may be that the job is waiting for resources due to the large amount of overall job running data, many resources requested, and low job priority. Please go to Resource Consumption to view the specific situation. You can also go to Cost Optimization to see if you need to adjust resource configuration.
   */
  description?: string;
  /**
   * @remarks
   * Information about the nodes where data skew or data expansion is detected. This parameter is returned only when the diagnostics scenario is data skew or data expansion.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The intelligent diagnostics result scenario.
   * 
   * @example
   * LackResource
   */
  scene?: string;
  /**
   * @remarks
   * The intelligent diagnostics result tag.
   * 
   * @example
   * SubscriptionLackResource
   */
  sceneTag?: string;
  /**
   * @remarks
   * The intelligent diagnostics result summary.
   * 
   * @example
   * Insufficient computing resources available for the job. Click to view details.
   */
  summary?: string;
  /**
   * @remarks
   * The intelligent diagnostics result type.
   * 
   * @example
   * warning
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      params: 'params',
      scene: 'scene',
      sceneTag: 'sceneTag',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      sceneTag: 'string',
      summary: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBodyDataJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * AY20A
   */
  cluster?: string;
  /**
   * @remarks
   * The CU snapshot proportion of the job.
   * 
   * @example
   * 0.48
   */
  cuSnapshot?: number;
  /**
   * @remarks
   * The total number of used compute units (CUs).
   * 
   * @example
   * 10
   */
  cuUsage?: number;
  /**
   * @remarks
   * The time when the job stops running.
   * 
   * @example
   * 0
   */
  endAtTime?: number;
  /**
   * @remarks
   * The node ID of DataWorks.
   * 
   * @example
   * node_4
   */
  extNodeId?: string;
  /**
   * @remarks
   * The account of the node owner.
   * 
   * @example
   * duty_2
   */
  extNodeOnDuty?: string;
  /**
   * @remarks
   * The upstream platform.
   * 
   * @example
   * platform_3
   */
  extPlantFrom?: string;
  /**
   * @remarks
   * The amount of scanned data for the job. Unit: byte.
   * 
   * @example
   * 1234
   */
  inputBytes?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20230410050036549gfmsdwf60gg
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that commits the job.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * The memory snapshot proportion of the job.
   * 
   * @example
   * 0.42
   */
  memorySnapshot?: number;
  /**
   * @remarks
   * The total memory usage.
   * 
   * @example
   * 40
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * openrec_new
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the quota that is used by the job.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * @example
   * subscription
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the job starts to run.
   * 
   * @example
   * 1672112113
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The period for which the job runs.
   * 
   * @example
   * 800
   */
  runningTime?: number;
  /**
   * @remarks
   * The intelligent diagnostics results.
   */
  sceneResults?: ListJobInfosResponseBodyDataJobInfoListSceneResults[];
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * i094KijGrN3kOXZ74kbexB77XQY=
   */
  signature?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * @example
   * running
   */
  statusSnapshot?: string;
  /**
   * @remarks
   * The time when the job was committed.
   * 
   * @example
   * 1672112013
   */
  submittedAtTime?: number;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * []
   */
  tags?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 213065738244354
   */
  tenantId?: string;
  /**
   * @remarks
   * The total period for which the job runs.
   * 
   * @example
   * 900
   */
  totalTime?: number;
  /**
   * @remarks
   * The duration for which the job waits to start.
   * 
   * @example
   * 100
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      cuSnapshot: 'cuSnapshot',
      cuUsage: 'cuUsage',
      endAtTime: 'endAtTime',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      inputBytes: 'inputBytes',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobType: 'jobType',
      memorySnapshot: 'memorySnapshot',
      memoryUsage: 'memoryUsage',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      sceneResults: 'sceneResults',
      signature: 'signature',
      status: 'status',
      statusSnapshot: 'statusSnapshot',
      submittedAtTime: 'submittedAtTime',
      tags: 'tags',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      cuSnapshot: 'number',
      cuUsage: 'number',
      endAtTime: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      inputBytes: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      jobType: 'string',
      memorySnapshot: 'number',
      memoryUsage: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      sceneResults: { 'type': 'array', 'itemType': ListJobInfosResponseBodyDataJobInfoListSceneResults },
      signature: 'string',
      status: 'string',
      statusSnapshot: 'string',
      submittedAtTime: 'number',
      tags: 'string',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sceneResults)) {
      $dara.Model.validateArray(this.sceneResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the jobs.
   */
  jobInfoList?: ListJobInfosResponseBodyDataJobInfoList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'jobInfoList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobInfosResponseBodyDataJobInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfoList)) {
      $dara.Model.validateArray(this.jobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobMetricResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * Metric related information.
   */
  metric?: { [key: string]: string };
  /**
   * @remarks
   * Metric values information.
   */
  values?: number[][];
  static names(): { [key: string]: string } {
    return {
      metric: 'metric',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(this.metric) {
      $dara.Model.validateMap(this.metric);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the metrics.
   * 
   * @example
   * job
   */
  category?: string;
  /**
   * @remarks
   * Metric details.
   */
  metrics?: ListJobMetricResponseBodyDataMetrics[];
  /**
   * @remarks
   * The name of observation metric.
   * 
   * @example
   * num
   */
  name?: string;
  /**
   * @remarks
   * The monitoring statistical period.Unit:Second(s).
   * 
   * @example
   * 3600
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      metrics: 'metrics',
      name: 'name',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      metrics: { 'type': 'array', 'itemType': ListJobMetricResponseBodyDataMetrics },
      name: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosResponseBodyDataJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The CPU request amount of the job at the snapshot time point. Unit: Core.
   * 
   * @example
   * 200
   */
  cpuRequest?: number;
  /**
   * @remarks
   * CPU usage of the job at the snapshot time. Unit: Core.
   * 
   * @example
   * 100
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The CPU satisfaction ratio of the job at the snapshot time point (cpuUsage/cpuRequest).
   * 
   * @example
   * 0.5
   */
  cpuUsageToRequestRatio?: number;
  /**
   * @remarks
   * The ID of the upstream node.
   * 
   * @example
   * 76358164
   */
  extNodeId?: string;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * duty_2
   */
  extNodeOnDuty?: string;
  /**
   * @remarks
   * The upstream platform.
   * 
   * @example
   * Dataworks
   */
  extPlantFrom?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20241028****jkl
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that commits the job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * Not applicable.
   * 
   * @example
   * -1
   */
  maxCpuPct?: number;
  /**
   * @remarks
   * Not applicable.
   * 
   * @example
   * -1
   */
  maxMemoryPct?: number;
  /**
   * @remarks
   * The Memory request amount of the job at the snapshot time point. Unit: MB.
   * 
   * @example
   * 409600
   */
  memoryRequest?: number;
  /**
   * @remarks
   * Memory usage of the job at the snapshot time. Unit: MB.
   * 
   * @example
   * 409600
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The Memory satisfaction ratio of the job at the snapshot time point (memoryUsage/memoryRequest).
   * 
   * @example
   * 1
   */
  memoryUsageToRequestRatio?: number;
  /**
   * @remarks
   * The CPU usage ratio of the annual or monthly subscription job at the snapshot time (CPU usage / (reserved CPU guarantee + elastic reserved CPU)). This parameter is not available for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minCpuPct?: number;
  /**
   * @remarks
   * The memory usage ratio of the annual or monthly subscription job at the observation time (memory usage / (reserved memory guarantee + elastic reserved memory)). This parameter is not available for pay-as-you-go jobs.
   * 
   * @example
   * 0.6
   */
  minMemoryPct?: number;
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 9
   */
  priority?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * projectA
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the computing Quota used by the job.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * @example
   * subscription
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The start time of the job.
   * > The time when the job received the first batch of computing resources.
   * 
   * @example
   * 1736821805
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The running duration, which is the duration from the runningAtTime to the snapshotTime of the job.  Unit: seconds (s).
   * 
   * @example
   * 43
   */
  runningTime?: number;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * signatureabc
   */
  signature?: string;
  /**
   * @remarks
   * The snapshot time.
   * 
   * @example
   * 1736821848
   */
  snapshotTime?: number;
  /**
   * @remarks
   * The snapshot status of the job.
   * 
   * > The snapshot status is only running.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was committed.
   * 
   * @example
   * 1736821785
   */
  submittedAtTime?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 213065738244354
   */
  tenantId?: string;
  /**
   * @remarks
   * The interval from the time when the job was submitted to the snapshotTime .Unit: seconds (s).
   * 
   * @example
   * 63
   */
  totalTime?: number;
  /**
   * @remarks
   * The duration from the time the job is submitted to the time the job starts to run. Unit: seconds (s).
   * 
   * @example
   * 20
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cpuRequest: 'cpuRequest',
      cpuUsage: 'cpuUsage',
      cpuUsageToRequestRatio: 'cpuUsageToRequestRatio',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobType: 'jobType',
      maxCpuPct: 'maxCpuPct',
      maxMemoryPct: 'maxMemoryPct',
      memoryRequest: 'memoryRequest',
      memoryUsage: 'memoryUsage',
      memoryUsageToRequestRatio: 'memoryUsageToRequestRatio',
      minCpuPct: 'minCpuPct',
      minMemoryPct: 'minMemoryPct',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      signature: 'signature',
      snapshotTime: 'snapshotTime',
      status: 'status',
      submittedAtTime: 'submittedAtTime',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuRequest: 'number',
      cpuUsage: 'number',
      cpuUsageToRequestRatio: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      instanceId: 'string',
      jobOwner: 'string',
      jobType: 'string',
      maxCpuPct: 'number',
      maxMemoryPct: 'number',
      memoryRequest: 'number',
      memoryUsage: 'number',
      memoryUsageToRequestRatio: 'number',
      minCpuPct: 'number',
      minMemoryPct: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      signature: 'string',
      snapshotTime: 'number',
      status: 'string',
      submittedAtTime: 'number',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job snapshots.
   */
  jobInfoList?: ListJobSnapshotInfosResponseBodyDataJobInfoList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'jobInfoList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobSnapshotInfosResponseBodyDataJobInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfoList)) {
      $dara.Model.validateArray(this.jobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBodyDataObjectListConfig extends $dara.Model {
  desc?: string;
  enums?: string[];
  /**
   * @example
   * basic_group
   */
  group?: string;
  /**
   * @example
   * bigquery.range.partition.migrate.type
   */
  key?: string;
  name?: string;
  /**
   * @example
   * Cluster or Partition
   */
  placeHolder?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * Partition
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enums: 'enums',
      group: 'group',
      key: 'key',
      name: 'name',
      placeHolder: 'placeHolder',
      required: 'required',
      subType: 'subType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enums: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      key: 'string',
      name: 'string',
      placeHolder: 'string',
      required: 'boolean',
      subType: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * true
   */
  agentIsOnline?: boolean;
  config?: ListMmsDataSourcesResponseBodyDataObjectListConfig[];
  /**
   * @example
   * 2024-12-17 09:29:58
   */
  createTime?: string;
  /**
   * @example
   * 3
   */
  dbNum?: number;
  /**
   * @example
   * unexpected exception
   */
  errMsg?: string;
  /**
   * @example
   * 2000015
   */
  id?: number;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  lastUpdateTime?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * vpc-2zebqp6uojhdla46677tl:cn-beijing
   */
  networklink?: string;
  /**
   * @example
   * 10000000
   */
  partitionNum?: number;
  /**
   * @example
   * 2332
   */
  partitionsDoingNum?: number;
  /**
   * @example
   * 23
   */
  partitionsDoneNum?: number;
  /**
   * @example
   * 2323
   */
  partitionsFailedNum?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 1000253
   */
  scanId?: number;
  /**
   * @example
   * STARTED
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  tableNum?: number;
  /**
   * @example
   * 18
   */
  tablesDoingNum?: number;
  /**
   * @example
   * 2323
   */
  tablesDoneNum?: number;
  /**
   * @example
   * 2
   */
  tablesFailedNum?: number;
  /**
   * @example
   * 22
   */
  tablesPartDoneNum?: number;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentIsOnline: 'agentIsOnline',
      config: 'config',
      createTime: 'createTime',
      dbNum: 'dbNum',
      errMsg: 'errMsg',
      id: 'id',
      lastUpdateTime: 'lastUpdateTime',
      name: 'name',
      networklink: 'networklink',
      partitionNum: 'partitionNum',
      partitionsDoingNum: 'partitionsDoingNum',
      partitionsDoneNum: 'partitionsDoneNum',
      partitionsFailedNum: 'partitionsFailedNum',
      region: 'region',
      scanId: 'scanId',
      status: 'status',
      tableNum: 'tableNum',
      tablesDoingNum: 'tablesDoingNum',
      tablesDoneNum: 'tablesDoneNum',
      tablesFailedNum: 'tablesFailedNum',
      tablesPartDoneNum: 'tablesPartDoneNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIsOnline: 'boolean',
      config: { 'type': 'array', 'itemType': ListMmsDataSourcesResponseBodyDataObjectListConfig },
      createTime: 'string',
      dbNum: 'number',
      errMsg: 'string',
      id: 'number',
      lastUpdateTime: 'string',
      name: 'string',
      networklink: 'string',
      partitionNum: 'number',
      partitionsDoingNum: 'number',
      partitionsDoneNum: 'number',
      partitionsFailedNum: 'number',
      region: 'string',
      scanId: 'number',
      status: 'string',
      tableNum: 'number',
      tablesDoingNum: 'number',
      tablesDoneNum: 'number',
      tablesFailedNum: 'number',
      tablesPartDoneNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBodyData extends $dara.Model {
  objectList?: ListMmsDataSourcesResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsDataSourcesResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      numRows: 'numRows',
      size: 'size',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numRows: 'string',
      size: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  createTime?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * for mms test
   */
  description?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  /**
   * @example
   * 1530
   */
  id?: number;
  /**
   * @remarks
   * Last DDL Time
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * hdfs://master-1-1.c-6fc187819ed6bae0.cn-shanghai.emr.aliyuncs.com:9000/user/hive/warehouse
   */
  location?: string;
  /**
   * @example
   * mms_test
   */
  name?: string;
  /**
   * @example
   * 23232
   */
  numRows?: number;
  /**
   * @example
   * xxx@yy.com
   */
  owner?: string;
  /**
   * @example
   * 1000
   */
  partitions?: number;
  /**
   * @example
   * 400
   */
  partitionsDoing?: number;
  /**
   * @example
   * 200
   */
  partitionsDone?: number;
  /**
   * @example
   * 200
   */
  partitionsFailed?: number;
  /**
   * @example
   * 2342342
   */
  size?: number;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * 100
   */
  tables?: number;
  /**
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @example
   * 20
   */
  tablesDone?: number;
  /**
   * @example
   * 20
   */
  tablesFailed?: number;
  /**
   * @example
   * 20
   */
  tablesPartDone?: number;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  updateTime?: string;
  /**
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deleted: 'deleted',
      description: 'description',
      extra: 'extra',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tables: 'tables',
      tablesDoing: 'tablesDoing',
      tablesDone: 'tablesDone',
      tablesFailed: 'tablesFailed',
      tablesPartDone: 'tablesPartDone',
      updateTime: 'updateTime',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deleted: 'boolean',
      description: 'string',
      extra: 'string',
      id: 'number',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tables: 'number',
      tablesDoing: 'number',
      tablesDone: 'number',
      tablesFailed: 'number',
      tablesPartDone: 'number',
      updateTime: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsResponseBodyData extends $dara.Model {
  objectList?: ListMmsDbsResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 13
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsDbsResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsResponseBodyDataObjectListConfig extends $dara.Model {
  columnMapping?: { [key: string]: string };
  enableVerification?: boolean;
  increment?: boolean;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  schemaOnly?: boolean;
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
  tables?: string[];
  taskType?: string;
  tunnelQuota?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      enableVerification: 'enableVerification',
      increment: 'increment',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      schemaOnly: 'schemaOnly',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
      taskType: 'taskType',
      tunnelQuota: 'tunnelQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enableVerification: 'boolean',
      increment: 'boolean',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      schemaOnly: 'boolean',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
      tunnelQuota: 'string',
    };
  }

  validate() {
    if(this.columnMapping) {
      $dara.Model.validateMap(this.columnMapping);
    }
    if(this.others) {
      $dara.Model.validateMap(this.others);
    }
    if(this.partitionFilters) {
      $dara.Model.validateMap(this.partitionFilters);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    if(Array.isArray(this.tableBlackList)) {
      $dara.Model.validateArray(this.tableBlackList);
    }
    if(this.tableMapping) {
      $dara.Model.validateMap(this.tableMapping);
    }
    if(Array.isArray(this.tableWhiteList)) {
      $dara.Model.validateArray(this.tableWhiteList);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsResponseBodyDataObjectList extends $dara.Model {
  config?: ListMmsJobsResponseBodyDataObjectListConfig;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * test_table_1
   */
  dstSchemaName?: string;
  eta?: string;
  /**
   * @example
   * 18
   */
  id?: number;
  /**
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcSchemaName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 10
   */
  taskDone?: number;
  /**
   * @example
   * 10
   */
  taskNum?: number;
  /**
   * @example
   * Tables
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      eta: 'eta',
      id: 'id',
      name: 'name',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      status: 'status',
      stopped: 'stopped',
      taskDone: 'taskDone',
      taskNum: 'taskNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListMmsJobsResponseBodyDataObjectListConfig,
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      eta: 'string',
      id: 'number',
      name: 'string',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      status: 'string',
      stopped: 'boolean',
      taskDone: 'number',
      taskNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsResponseBodyData extends $dara.Model {
  objectList?: ListMmsJobsResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsJobsResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsShrinkRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 2
   */
  dbId?: number;
  /**
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @example
   * 2323
   */
  id?: number;
  /**
   * @remarks
   * lastDdlTime
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @example
   * 23223
   */
  size?: number;
  /**
   * @example
   * 200018
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  /**
   * @example
   * p1=1/p2=abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'dbName',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tableId: 'tableId',
      tableName: 'tableName',
      updated: 'updated',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      id: 'number',
      lastDdlTime: 'string',
      numRows: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tableId: 'number',
      tableName: 'string',
      updated: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsResponseBodyData extends $dara.Model {
  objectList?: ListMmsPartitionsResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1000
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsPartitionsResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesShrinkRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectListSchemaColumns extends $dara.Model {
  /**
   * @example
   * user id
   */
  comment?: string;
  /**
   * @example
   * ""
   */
  defaultValue?: string;
  /**
   * @example
   * user_id
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectListSchemaPartitions extends $dara.Model {
  comment?: string;
  /**
   * @example
   * abc
   */
  defaultValue?: string;
  /**
   * @example
   * p1
   */
  name?: string;
  /**
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      defaultValue: 'defaultValue',
      name: 'name',
      nullable: 'nullable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      name: 'string',
      nullable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectListSchema extends $dara.Model {
  columns?: ListMmsTablesResponseBodyDataObjectListSchemaColumns[];
  /**
   * @example
   * for mms test
   */
  comment?: string;
  /**
   * @example
   * test
   */
  name?: string;
  partitions?: ListMmsTablesResponseBodyDataObjectListSchemaPartitions[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      comment: 'comment',
      name: 'name',
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectListSchemaColumns },
      comment: 'string',
      name: 'string',
      partitions: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectListSchemaPartitions },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * demo
   */
  dbName?: string;
  /**
   * @example
   * {"mapkey.delim":":","collection.delim":",","serialization.format":"|","field.delim":"|"}
   */
  extra?: string;
  /**
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @remarks
   * table ID
   * 
   * @example
   * 1003476
   */
  id?: number;
  /**
   * @remarks
   * inputFormat
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * lastDdlTime
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * | hdfs://master-1-1.c-c127cd184bb029ea.cn-zhangjiakou.emr.aliyuncs.com:9000/user/hive/warehouse/demo
   */
  location?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 232323
   */
  numRows?: number;
  /**
   * @remarks
   * outFormat
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @example
   * Hive
   */
  owner?: string;
  /**
   * @example
   * 100
   */
  partitions?: number;
  /**
   * @example
   * 20
   */
  partitionsDoing?: number;
  /**
   * @example
   * 60
   */
  partitionsDone?: number;
  /**
   * @example
   * 40
   */
  partitionsFailed?: number;
  schema?: ListMmsTablesResponseBodyDataObjectListSchema;
  /**
   * @remarks
   * serde
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serde?: string;
  /**
   * @example
   * 2985028
   */
  size?: number;
  /**
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  /**
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'dbId',
      dbName: 'dbName',
      extra: 'extra',
      hasPartitions: 'hasPartitions',
      id: 'id',
      inputFormat: 'inputFormat',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      outputFormat: 'outputFormat',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      schema: 'schema',
      serde: 'serde',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      extra: 'string',
      hasPartitions: 'boolean',
      id: 'number',
      inputFormat: 'string',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      outputFormat: 'string',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      schema: ListMmsTablesResponseBodyDataObjectListSchema,
      serde: 'string',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      type: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBodyData extends $dara.Model {
  objectList?: ListMmsTablesResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTaskLogsResponseBodyData extends $dara.Model {
  /**
   * @example
   * create schema if not exists mms_test.default;
   */
  action?: string;
  /**
   * @example
   * 2024-12-17 15:44:00
   */
  createTime?: string;
  /**
   * @example
   * 10000
   */
  id?: number;
  /**
   * @example
   * ok
   */
  msg?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @example
   * 4023
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      createTime: 'createTime',
      id: 'id',
      msg: 'msg',
      sourceId: 'sourceId',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      id: 'number',
      msg: 'string',
      sourceId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  startTime?: string;
  /**
   * @example
   * asc
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksResponseBodyDataObjectList extends $dara.Model {
  /**
   * @example
   * 2024-10-25 04:21:01
   */
  createTime?: string;
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @example
   * table_1
   */
  dstTableName?: string;
  /**
   * @example
   * 2024-10-25 07:21:01
   */
  endTime?: string;
  /**
   * @example
   * 2323
   */
  id?: number;
  /**
   * @example
   * 87
   */
  jobId?: number;
  /**
   * @example
   * test_odps_spark
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  retriedTimes?: number;
  /**
   * @example
   * true
   */
  running?: boolean;
  /**
   * @example
   * 2000028
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * db_1
   */
  srcDbName?: string;
  /**
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @example
   * table_1
   */
  srcTableName?: string;
  /**
   * @example
   * 2024-10-25 06:21:01
   */
  startTime?: string;
  /**
   * @example
   * DATA_DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      dstTableName: 'dstTableName',
      endTime: 'endTime',
      id: 'id',
      jobId: 'jobId',
      jobName: 'jobName',
      retriedTimes: 'retriedTimes',
      running: 'running',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      srcTableName: 'srcTableName',
      startTime: 'startTime',
      status: 'status',
      stopped: 'stopped',
      tableId: 'tableId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      dstTableName: 'string',
      endTime: 'string',
      id: 'number',
      jobId: 'number',
      jobName: 'string',
      retriedTimes: 'number',
      running: 'boolean',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      srcTableName: 'string',
      startTime: 'string',
      status: 'string',
      stopped: 'boolean',
      tableId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksResponseBodyData extends $dara.Model {
  objectList?: ListMmsTasksResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsTasksResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyDataCreatedPackages extends $dara.Model {
  /**
   * @remarks
   * The time when the package was created.
   * 
   * @example
   * 2022-08-02T02:30:34Z
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyDataInstalledPackages extends $dara.Model {
  /**
   * @remarks
   * The time when the package was installed.
   * 
   * @example
   * 2022-09-02T02:30:34Z
   */
  installTime?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageB
   */
  name?: string;
  /**
   * @remarks
   * The project to which the package belongs. This parameter is required if the package is installed in the MaxCompute project.
   * 
   * @example
   * projectB
   */
  sourceProject?: string;
  /**
   * @remarks
   * The status of the package.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      installTime: 'installTime',
      name: 'name',
      sourceProject: 'sourceProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installTime: 'number',
      name: 'string',
      sourceProject: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The packages that were created.
   */
  createdPackages?: ListPackagesResponseBodyDataCreatedPackages[];
  /**
   * @remarks
   * The packages that were installed.
   */
  installedPackages?: ListPackagesResponseBodyDataInstalledPackages[];
  static names(): { [key: string]: string } {
    return {
      createdPackages: 'createdPackages',
      installedPackages: 'installedPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataCreatedPackages },
      installedPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataInstalledPackages },
    };
  }

  validate() {
    if(Array.isArray(this.createdPackages)) {
      $dara.Model.validateArray(this.createdPackages);
    }
    if(Array.isArray(this.installedPackages)) {
      $dara.Model.validateArray(this.installedPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponseBodyDataUsers extends $dara.Model {
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * userA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array that contains users.
   */
  users?: ListProjectUsersResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': ListProjectUsersResponseBodyDataUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsIpWhiteList extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services.
   * 
   * >  If you configure only the IP address whitelist for access over the Internet or the network for interconnecting with other Alibaba Cloud services, the access over the Internet or the network for interconnecting with other Alibaba Cloud services is subject to configurations, and access over a virtual private cloud (VPC) is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  ipList?: string;
  /**
   * @remarks
   * The IP address whitelist for access over a VPC.
   * 
   * >  If you configure only the IP address whitelist for access over a VPC, the access over a VPC is subject to configurations, and the access over the Internet or the network for interconnecting with other Alibaba Cloud services is not allowed.
   * 
   * @example
   * 10.88.111.3
   */
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.
   * 
   * @example
   * SHA1
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see
   * 
   * [Storage encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key that is used for data encryption. You can select MaxCompute Default Key or Bring Your Own Key (BYOK) as the key type. If you select MaxCompute Default Key, the default key that is created by MaxCompute is used.
   * 
   * @example
   * dafault
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the external project is an external project for [data lakehouse solution 2.0](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
   * 
   * @example
   * true
   */
  isExternalCatalogBound?: string;
  static names(): { [key: string]: string } {
    return {
      isExternalCatalogBound: 'isExternalCatalogBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExternalCatalogBound: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * 
   * *   **mandatory**: The lifecycle clause is required in a table creation statement.
   * *   **optional**: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
   * *   **inherit**: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The table lifecycle. Unit: days. Valid values: 1 to 37231. Default value: 37231.
   * 
   * @example
   * 37231
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a full table scan is allowed in the project. A full table scan occupies a large number of resources, which reduces data processing efficiency. By default, the full table scan feature is disabled.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  /**
   * @remarks
   * Indicates whether the DECIMAL type of the MaxCompute V2.0 data type edition is enabled.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  /**
   * @remarks
   * Indicates whether the routing of the Tunnel resource group is enabled.
   * 
   * *   true: The data transfer tasks that are submitted by the project by default use the Tunnel resource group that is bound to the project.
   * *   false: The data transfer tasks that are submitted by the project by default use the Tunnel shared resource group.
   * 
   * @example
   * true
   */
  enableTunnelQuotaRoute?: boolean;
  /**
   * @remarks
   * The storage encryption properties.
   */
  encryption?: ListProjectsResponseBodyDataProjectsPropertiesEncryption;
  /**
   * @remarks
   * The properties of the external project.
   */
  externalProjectProperties?: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties;
  /**
   * @remarks
   * The retention period for backup data. Unit: days. During the retention period, you can restore data of the version in use to the backup data of any version. Valid values: [0,30]. Default value: 1. The value 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum consumption threshold of a single SQL statement. Formula: Amount of scanned data (GB) × Complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The table lifecycle properties.
   */
  tableLifecycle?: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone that is used by your project. The time zone is the same as the time zone specified by `odps.sql.timezone`.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The [Tunnel](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * *   Default resource group: The Tunnel shared resource group is used. You cannot use the subscription-based Tunnel resource group for the project. The default resource group is automatically used by the Tunnel service of your project, regardless of the parameter setting.
   * *   Subscription-based Tunnel resource group: You can use the subscription-based Tunnel resource group for the project.
   * 
   * @example
   * quota_tunnel
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * *   **1**: MaxCompute V1.0 data type edition
   * *   **2**: MaxCompute V2.0 data type edition
   * *   **hive**: Hive-compatible data type edition
   * 
   * For more information about the differences among the three data type editions, see [Data type editions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      externalProjectProperties: 'externalProjectProperties',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      enableDecimal2: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: ListProjectsResponseBodyDataProjectsPropertiesEncryption,
      externalProjectProperties: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.externalProjectProperties && typeof (this.externalProjectProperties as any).validate === 'function') {
      (this.externalProjectProperties as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSaleTag extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the default computing quota.
   * 
   * @example
   * "aaaa-bbbb"
   */
  resourceId?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * "project"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection extends $dara.Model {
  /**
   * @remarks
   * If you enable the project data protection mechanism, you can configure exception or trusted projects. This allows specified users to transfer data of a specified object to a specified project. The project data protection mechanism does not take effect in all the situations that are specified in the exception policy.
   * 
   * @example
   * {
   *       "Version": "1",
   *       "Statement": [
   *             {
   *                   "Effect": "Allow",
   *                   "Principal": "",
   *                   "Action": [
   *                         "odps:[, , ...]"
   *                   ],
   *                   "Resource": "acs:odps:*:",
   *                   "Condition": {
   *                         "StringEquals": {
   *                               "odps:TaskType": [
   *                                     ""
   *                               ]
   *                         }
   *                   }
   *             }
   *       ]
   * }
   */
  exceptionPolicy?: string;
  /**
   * @remarks
   * Indicates whether the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection) is enabled for the project. This allows or denies data transfer across projects. By default, the data protection mechanism is disabled.
   * 
   * @example
   * true
   */
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the [download control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  enableDownloadPrivilege?: boolean;
  /**
   * @remarks
   * Indicates whether the [label-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/label-based-access-control) feature is enabled. By default, this feature is disabled.
   * 
   * @example
   * false
   */
  labelSecurity?: boolean;
  /**
   * @remarks
   * Indicates whether to allow the object creator to have the access permissions on the object. The default value is true, which indicates that the object creator has the access permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasAccessPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the object creator has the authorization permissions on the object. The default value is true, which indicates that the object creator has the authorization permissions on the object.
   * 
   * @example
   * true
   */
  objectCreatorHasGrantPermission?: boolean;
  /**
   * @remarks
   * The properties of the [data protection mechanism](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/project-data-protection).
   */
  projectProtection?: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection;
  /**
   * @remarks
   * Indicates whether the [ACL-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/acl-based-access-control) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingAcl?: boolean;
  /**
   * @remarks
   * Indicates whether the [policy-based access control](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/policy-based-access-control-1) feature is enabled. By default, this feature is enabled.
   * 
   * @example
   * true
   */
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  validate() {
    if(this.projectProtection && typeof (this.projectProtection as any).validate === 'function') {
      (this.projectProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjects extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * maxcompute projects
   */
  comment?: string;
  /**
   * @remarks
   * The total storage usage. The storage space that is occupied by your project, which is the logical storage space after your project data is collected and compressed.
   * 
   * @example
   * 16489027
   */
  costStorage?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1704380838000
   */
  createdTime?: number;
  /**
   * @remarks
   * The default computing quota that is used to allocate computing resources. If you do not specify a computing quota for your project, the jobs that are initiated by your project consume the computing resources in the default quota. For more information about how to use computing resources, see [Use quota groups for computing resources](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/use-of-computing-resources)
   * 
   * @example
   * quotaA
   */
  defaultQuota?: string;
  /**
   * @remarks
   * The information about the IP address whitelist.
   */
  ipWhiteList?: ListProjectsResponseBodyDataProjectsIpWhiteList;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * odps_project
   */
  name?: string;
  /**
   * @remarks
   * The account information of the project owner.
   * 
   * @example
   * 1139815775606813
   */
  owner?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: ListProjectsResponseBodyDataProjectsProperties;
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
   * The instance ID and billing method of the default computing quota.
   */
  saleTag?: ListProjectsResponseBodyDataProjectsSaleTag;
  /**
   * @remarks
   * The permission properties.
   */
  securityProperties?: ListProjectsResponseBodyDataProjectsSecurityProperties;
  /**
   * @remarks
   * The project status. Valid values:
   * 
   * *   **AVAILABLE**
   * *   **READONLY**
   * *   **FROZEN**
   * *   **DELETING**
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether data storage by schema is supported. MaxCompute supports the schema feature. This feature allows you to classify objects such as tables, resources, and user-defined functions (UDFs) in a project by schema. You can create multiple schemas in a project. For more information, see [Schema-related operations](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/schema-related-operations).
   * 
   * Valid values:
   * 
   * *   true: supported
   * *   false: not supported
   * 
   * @example
   * true
   */
  threeTierModel?: boolean;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * *   **managed**: internal project
   * *   **external**: external project
   * 
   * @example
   * managed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: ListProjectsResponseBodyDataProjectsIpWhiteList,
      name: 'string',
      owner: 'string',
      properties: ListProjectsResponseBodyDataProjectsProperties,
      regionId: 'string',
      saleTag: ListProjectsResponseBodyDataProjectsSaleTag,
      securityProperties: ListProjectsResponseBodyDataProjectsSecurityProperties,
      status: 'string',
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.securityProperties && typeof (this.securityProperties as any).validate === 'function') {
      (this.securityProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListProjectsResponseBodyDataProjects[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      projects: 'projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataProjects },
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * a12351qHDP6YEQMt
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy;
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
   * The nickname of the level-2 quota.
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
  parameter?: { [key: string]: any };
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
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo;
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
   * The version of the algorithm image.
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
      billingPolicy: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo,
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

export class ListQuotasResponseBodyDataQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The tags.
   */
  tags?: ListQuotasResponseBodyDataQuotaInfoListTags[];
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: ListQuotasResponseBodyDataQuotaInfoListBillingPolicy;
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
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo;
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
  subQuotaInfoList?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList[];
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
   * The version number.
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
      tags: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoListTags },
      billingPolicy: ListQuotasResponseBodyDataQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyDataQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList },
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

export class ListQuotasResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * "abcde"
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of quotas.
   */
  quotaInfoList?: ListQuotasResponseBodyDataQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.quotaInfoList)) {
      $dara.Model.validateArray(this.quotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "project"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * The quota plan that immediately takes effect. If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @remarks
   * The time zone of the project.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy;
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
  parameter?: { [key: string]: any };
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
  saleTag?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo;
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
      billingPolicy: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo,
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

export class ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota. Valid values:
   * 
   * *   subscription: a subscription quota.
   * *   payasyougo: a pay-as-you-go quota.
   * 
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @remarks
   * The specifications of the order.
   * 
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 45245678
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The quota plan that takes effect based on the scheduling plan.
   * 
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @remarks
   * The time when the current quota plan is scheduled.
   * 
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @remarks
   * The next quota plan that will take effect based on the scheduling plan.
   * 
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @remarks
   * The time when the next quota plan is scheduled.
   * 
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @remarks
   * If the quota plan that immediately takes effect is different from the current quota plan, this parameter is not empty.
   * 
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @remarks
   * The time when the quota plan immediately takes effect.
   * 
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * userA
   */
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListBillingPolicy;
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
   * The time when the quota plan was created.
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
   * The nickname of the level-2 quota.
   * 
   * @example
   * subquotaA
   */
  nickName?: string;
  /**
   * @remarks
   * The description of the quota.
   */
  parameter?: { [key: string]: any };
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
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListScheduleInfo;
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
   * The ID of the tenant.
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
      billingPolicy: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListScheduleInfo,
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
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuota extends $dara.Model {
  /**
   * @remarks
   * The information of the order.
   */
  billingPolicy?: ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy;
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
   * The time when the quota plan was created.
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
   * The ID of the quota.
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
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The information of the scheduling plan.
   */
  scheduleInfo?: ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo;
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
   * The information of the level-2 quota.
   */
  subQuotaInfoList?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList[];
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
   * The ID of the tenant.
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
      billingPolicy: ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList },
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

export class ListQuotasPlansResponseBodyDataPlanList extends $dara.Model {
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 2022-05-16T06:07:45Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The details of the quota.
   */
  quota?: ListQuotasPlansResponseBodyDataPlanListQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      quota: ListQuotasPlansResponseBodyDataPlanListQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of quota plans.
   */
  planList?: ListQuotasPlansResponseBodyDataPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'planList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': ListQuotasPlansResponseBodyDataPlanList },
    };
  }

  validate() {
    if(Array.isArray(this.planList)) {
      $dara.Model.validateArray(this.planList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyDataResources extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * file
   */
  comment?: string;
  /**
   * @remarks
   * The Base64-encoded 128-bit MD5 hash value of the HTTP request body.
   * 
   * @example
   * MACiECZtnLiNkNS1v5****=1
   */
  contentMD5?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-01-29T03:34:09Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * res_1
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the resource was modified.
   * 
   * @example
   * 2023-04-18T06:15:05Z
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The user who updated the resource.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  lastUpdator?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * res_1
   */
  name?: string;
  /**
   * @remarks
   * The owner of the resource.
   * 
   * @example
   * 1265860483008101
   */
  owner?: string;
  /**
   * @remarks
   * The schema to which the resource belongs.
   * 
   * @example
   * schemaA
   */
  schema?: string;
  /**
   * @remarks
   * The size of the resource.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   py
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   jar
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   volumefile
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   table
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      contentMD5: 'contentMD5',
      creationTime: 'creationTime',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      lastUpdator: 'lastUpdator',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentMD5: 'string',
      creationTime: 'number',
      displayName: 'string',
      lastModifiedTime: 'number',
      lastUpdator: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * ZmN0X21vbnRoX3Rhb2Jhb19pbmRleCE=
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: ListResourcesResponseBodyDataResources[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyDataResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclFunction extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the function.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * functionA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclInstance extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the instance.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instanceA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclPackage extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the package.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclProject extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the project.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * projectA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclResource extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * resourceA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclTable extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the table.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tableA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAcl extends $dara.Model {
  /**
   * @remarks
   * The function.
   */
  function?: ListRolesResponseBodyDataRolesAclFunction[];
  /**
   * @remarks
   * The instance.
   */
  instance?: ListRolesResponseBodyDataRolesAclInstance[];
  /**
   * @remarks
   * The package.
   */
  package?: ListRolesResponseBodyDataRolesAclPackage[];
  /**
   * @remarks
   * The project.
   */
  project?: ListRolesResponseBodyDataRolesAclProject[];
  /**
   * @remarks
   * The resource.
   */
  resource?: ListRolesResponseBodyDataRolesAclResource[];
  /**
   * @remarks
   * The table.
   */
  table?: ListRolesResponseBodyDataRolesAclTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      instance: 'instance',
      package: 'package',
      project: 'project',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclFunction },
      instance: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclInstance },
      package: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclPackage },
      project: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclProject },
      resource: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclResource },
      table: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclTable },
    };
  }

  validate() {
    if(Array.isArray(this.function)) {
      $dara.Model.validateArray(this.function);
    }
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRoles extends $dara.Model {
  /**
   * @remarks
   * The ACL-based permissions that are granted to the role.
   */
  acl?: ListRolesResponseBodyDataRolesAcl;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * roleA
   */
  name?: string;
  /**
   * @remarks
   * The policy that is attached to the role.
   * 
   * @example
   * {
   *       "Statement": [
   *             {
   *                   "Action": [
   *                         "odps:*"
   *                   ],
   *                   "Effect": "Allow",
   *                   "Resource": [
   *                         "acs:odps:*:projects/{projectname}/authorization/packages"
   *                   ]
   *             }
   *       ],
   *       "Version": "1"
   * }
   */
  policy?: string;
  /**
   * @remarks
   * The type of the role.
   * 
   * @example
   * admin
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      name: 'name',
      policy: 'policy',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: ListRolesResponseBodyDataRolesAcl,
      name: 'string',
      policy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The MaxCompute project-level roles.
   */
  roles?: ListRolesResponseBodyDataRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList extends $dara.Model {
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 2
   */
  fileCount?: number;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 1
   */
  fileSize?: number;
  /**
   * @remarks
   * The unit of the storage size.
   * 
   * @example
   * GB
   */
  fileSizeUnit?: string;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table. This operation returns the partition information. You do not need to take note of this parameter.
   * 
   * @example
   * false
   */
  isPartitioned?: boolean;
  /**
   * @remarks
   * The time when the partition data was last accessed.
   * 
   * >  The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the last access time cannot be collected.
   * 
   * @example
   * 1694589365
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The partition name.
   * 
   * @example
   * ds=20241201
   */
  partition?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  projectName?: string;
  /**
   * @remarks
   * The change rate of the total storage usage compared with that of the recent {$recentDays} days. No value is returned.
   * 
   * @example
   * 1%
   */
  rate?: number;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   standard
   * *   lowfrequency
   * *   longterm
   * 
   * @example
   * standard
   */
  storageType?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * bank_data
   */
  tableName?: string;
  /**
   * @remarks
   * The access frequency.
   * 
   * > 
   * 
   * *   Access behaviors include:
   * 
   * *   The table is used as the input table of an SQL task.
   * *   The table is downloaded by Tunnel.
   * *   The table is read by calling the Storage API. The partition granularity of the partitioned table is not available. Each time an access operation is performed, the access frequency is incremented by 1.
   * 
   * *   The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the access frequency cannot be collected.
   * 
   * @example
   * 10
   */
  totalFrequency?: number;
  /**
   * @remarks
   * The total amount of accessed data.
   * 
   * >  The amount of data that is read by all access behaviors.
   * 
   * @example
   * 1
   */
  totalInputAmount?: number;
  /**
   * @remarks
   * The unit of the total amount of accessed data.
   * 
   * @example
   * GB
   */
  totalInputAmountUnit?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * PARTITION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileCount: 'fileCount',
      fileSize: 'fileSize',
      fileSizeUnit: 'fileSizeUnit',
      isPartitioned: 'isPartitioned',
      lastAccessTime: 'lastAccessTime',
      partition: 'partition',
      projectName: 'projectName',
      rate: 'rate',
      schemaName: 'schemaName',
      storageType: 'storageType',
      tableName: 'tableName',
      totalFrequency: 'totalFrequency',
      totalInputAmount: 'totalInputAmount',
      totalInputAmountUnit: 'totalInputAmountUnit',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCount: 'number',
      fileSize: 'number',
      fileSizeUnit: 'string',
      isPartitioned: 'boolean',
      lastAccessTime: 'number',
      partition: 'string',
      projectName: 'string',
      rate: 'number',
      schemaName: 'string',
      storageType: 'string',
      tableName: 'string',
      totalFrequency: 'number',
      totalInputAmount: 'number',
      totalInputAmountUnit: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The date on which the statistics are collected.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The partition storage information.
   */
  storagePartitionInfoList?: ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storagePartitionInfoList: 'storagePartitionInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storagePartitionInfoList: { 'type': 'array', 'itemType': ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storagePartitionInfoList)) {
      $dara.Model.validateArray(this.storagePartitionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoResponseBodyDataStorageTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The date on which the statistics are collected. This value is not returned.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table.
   * 
   * @example
   * false
   */
  isPartitioned?: boolean;
  /**
   * @remarks
   * The time when the table was last accessed. This value is returned when the table is a non-partitioned table.
   * 
   * >  The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the last access time cannot be collected.
   * 
   * @example
   * 1694589365
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The storage usage at the long-term storage tier.
   * 
   * @example
   * 0
   */
  longTermStorage?: number;
  /**
   * @remarks
   * The number of long-term storage files.
   * 
   * @example
   * 0
   */
  longTermStorageFileCount?: number;
  /**
   * @remarks
   * The unit of the storage usage at the long-term storage tier.
   * 
   * @example
   * B
   */
  longTermStorageUnit?: string;
  /**
   * @remarks
   * The storage usage at the low-frequency tier.
   * 
   * @example
   * 0
   */
  lowFreqStorage?: number;
  /**
   * @remarks
   * The number of low-frequency storage files.
   * 
   * @example
   * 0
   */
  lowFreqStorageFileCount?: number;
  /**
   * @remarks
   * The unit of the storage usage at the low-frequency storage tier.
   * 
   * @example
   * B
   */
  lowFreqStorageUnit?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  projectName?: string;
  /**
   * @remarks
   * The change rate of the total storage usage compared with that of the recent {$recentDays} days.
   * 
   * @example
   * 0
   */
  rate?: number;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The storage usage at the standard storage tier.
   * 
   * @example
   * 600
   */
  standardStorage?: number;
  /**
   * @remarks
   * The number of standard storage files.
   * 
   * @example
   * 2
   */
  standardStorageFileCount?: number;
  /**
   * @remarks
   * The unit of the storage usage at the standard storage tier.
   * 
   * @example
   * KB
   */
  standardStorageUnit?: string;
  /**
   * @remarks
   * The table storage type.
   * 
   * *   standard
   * *   lowfrequency
   * *   longterm
   * *   unknown: This value is returned when the table is a partitioned table. You can call the ListStoragePartitionsInfo operation to query the storage type of each partition.
   * 
   * @example
   * standard
   */
  storageType?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * bank_data
   */
  tableName?: string;
  /**
   * @remarks
   * The access frequency.
   * 
   * > 
   * 
   * *   Access behaviors include:
   * 
   * *   The table is used as the input table of an SQL task.
   * *   The table is downloaded by Tunnel.
   * *   The table is read by calling the Storage API. The partition granularity of the partitioned table is not available. Each time an access operation is performed, the access frequency is incremented by 1.
   * 
   * *   The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the access frequency cannot be collected.
   * 
   * @example
   * 10
   */
  totalFrequency?: number;
  /**
   * @remarks
   * The total amount of accessed data.
   * 
   * >  The amount of data that is read by all access behaviors.
   * 
   * @example
   * 1
   */
  totalInputAmount?: number;
  /**
   * @remarks
   * The unit of the total amount of accessed data.
   * 
   * @example
   * GB
   */
  totalInputAmountUnit?: string;
  /**
   * @remarks
   * The total storage usage. For a partitioned table, this parameter indicates the sum of the storage usage of all partitions. If the storage types of partitions are different, the value is the sum of the storage usage of each storage type.
   * 
   * @example
   * 600
   */
  totalStorage?: number;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 2
   */
  totalStorageFileCount?: number;
  /**
   * @remarks
   * The unit of storage usage.
   * 
   * @example
   * KB
   */
  totalStorageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      isPartitioned: 'isPartitioned',
      lastAccessTime: 'lastAccessTime',
      longTermStorage: 'longTermStorage',
      longTermStorageFileCount: 'longTermStorageFileCount',
      longTermStorageUnit: 'longTermStorageUnit',
      lowFreqStorage: 'lowFreqStorage',
      lowFreqStorageFileCount: 'lowFreqStorageFileCount',
      lowFreqStorageUnit: 'lowFreqStorageUnit',
      projectName: 'projectName',
      rate: 'rate',
      schemaName: 'schemaName',
      standardStorage: 'standardStorage',
      standardStorageFileCount: 'standardStorageFileCount',
      standardStorageUnit: 'standardStorageUnit',
      storageType: 'storageType',
      tableName: 'tableName',
      totalFrequency: 'totalFrequency',
      totalInputAmount: 'totalInputAmount',
      totalInputAmountUnit: 'totalInputAmountUnit',
      totalStorage: 'totalStorage',
      totalStorageFileCount: 'totalStorageFileCount',
      totalStorageUnit: 'totalStorageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      isPartitioned: 'boolean',
      lastAccessTime: 'number',
      longTermStorage: 'number',
      longTermStorageFileCount: 'number',
      longTermStorageUnit: 'string',
      lowFreqStorage: 'number',
      lowFreqStorageFileCount: 'number',
      lowFreqStorageUnit: 'string',
      projectName: 'string',
      rate: 'number',
      schemaName: 'string',
      standardStorage: 'number',
      standardStorageFileCount: 'number',
      standardStorageUnit: 'string',
      storageType: 'string',
      tableName: 'string',
      totalFrequency: 'number',
      totalInputAmount: 'number',
      totalInputAmountUnit: 'string',
      totalStorage: 'number',
      totalStorageFileCount: 'number',
      totalStorageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The date on which the statistics are collected.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The table storage information.
   */
  storageTableInfoList?: ListStorageTablesInfoResponseBodyDataStorageTableInfoList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storageTableInfoList: 'storageTableInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storageTableInfoList: { 'type': 'array', 'itemType': ListStorageTablesInfoResponseBodyDataStorageTableInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storageTableInfoList)) {
      $dara.Model.validateArray(this.storageTableInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyDataTables extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 2022-01-17T07:07:47Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * sale_detail
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * dim_odps
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * 1887853961230110
   */
  owner?: string;
  /**
   * @remarks
   * The schema to which the table belongs.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'creationTime',
      displayName: 'displayName',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      displayName: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The information about tables.
   */
  tables?: ListTablesResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      tables: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The number of elastically reserved slots.
   * 
   * @example
   * 100
   */
  elasticReservedSlotNum?: number;
  /**
   * @remarks
   * The number of reserved slots.
   * 
   * @example
   * 100
   */
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedSlotNum: 'elasticReservedSlotNum',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedSlotNum: 'number',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTunnelQuotaTimerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The start time of the time-specific configuration.
   * 
   * @example
   * 00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the time-specific configuration.
   * 
   * @example
   * 08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The time zone property for the time-specific configuration.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The parameters for the time-specific configuration.
   */
  tunnelQuotaParameter?: ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      timezone: 'timezone',
      tunnelQuotaParameter: 'tunnelQuotaParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      timezone: 'string',
      tunnelQuotaParameter: ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter,
    };
  }

  validate() {
    if(this.tunnelQuotaParameter && typeof (this.tunnelQuotaParameter as any).validate === 'function') {
      (this.tunnelQuotaParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 167835629082
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * Bob@
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the account.
   * 
   * @example
   * ALIYUN
   */
  accountType?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Bob
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1567253789
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      accountType: 'accountType',
      displayName: 'displayName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountType: 'string',
      displayName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  /**
   * @remarks
   * The users.
   */
  users?: ListUsersResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponseBodyDataUsers extends $dara.Model {
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * ALIYUN${account_name}
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The users.
   */
  users?: ListUsersByRoleResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': ListUsersByRoleResponseBodyDataUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataBillingPolicy extends $dara.Model {
  /**
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @example
   * 880c0d0d-5d79-4217-b683-8e8bdd2a2523
   */
  instanceId?: string;
  /**
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @example
   * 880c0d0d-5d79-4217-b683-8e8bdd2a2523
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      instanceId: 'instanceId',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      instanceId: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataSaleTag extends $dara.Model {
  resourceIds?: string[];
  /**
   * @example
   * project
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataScheduleInfo extends $dara.Model {
  /**
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy extends $dara.Model {
  /**
   * @example
   * subscription
   */
  billingMethod?: string;
  /**
   * @example
   * 880c0d0d-5d79-4217-b683-8e8bdd2a2523
   */
  instanceId?: string;
  /**
   * @example
   * OdpsStandard
   */
  odpsSpecCode?: string;
  /**
   * @example
   * 880c0d0d-5d79-4217-b683-8e8bdd2a2523
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      instanceId: 'instanceId',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      instanceId: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataSubQuotaInfoListSaleTag extends $dara.Model {
  resourceIds?: string[];
  /**
   * @example
   * "quota"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataSubQuotaInfoListScheduleInfo extends $dara.Model {
  /**
   * @example
   * planA
   */
  currPlan?: string;
  /**
   * @example
   * 0800
   */
  currTime?: string;
  /**
   * @example
   * planB
   */
  nextPlan?: string;
  /**
   * @example
   * 1700
   */
  nextTime?: string;
  /**
   * @example
   * planC
   */
  oncePlan?: string;
  /**
   * @example
   * 1500
   */
  onceTime?: string;
  /**
   * @example
   * userA
   */
  operatorName?: string;
  /**
   * @example
   * UTC+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBodyDataSubQuotaInfoList extends $dara.Model {
  billingPolicy?: QueryQuotaResponseBodyDataSubQuotaInfoListBillingPolicy;
  /**
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @example
   * 1688653978768
   */
  createTime?: number;
  /**
   * @example
   * 672863518
   */
  creatorId?: string;
  /**
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @example
   * 1000048
   */
  id?: string;
  /**
   * @example
   * subquotaA
   */
  name?: string;
  /**
   * @example
   * subquotaA
   */
  nickName?: string;
  /**
   * @example
   * {\\"maxCU\\": 10, \\"minCU\\": 10, \\"adhocCU\\": 0, \\"schedulerType\\": \\"Fifo\\"}
   */
  parameter?: { [key: string]: any };
  /**
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  saleTag?: QueryQuotaResponseBodyDataSubQuotaInfoListSaleTag;
  scheduleInfo?: QueryQuotaResponseBodyDataSubQuotaInfoListScheduleInfo;
  /**
   * @example
   * ON
   */
  status?: string;
  /**
   * @example
   * abc
   */
  tag?: string;
  /**
   * @example
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @example
   * FUXI_ONLINE
   */
  type?: string;
  /**
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

export class QueryQuotaResponseBodyData extends $dara.Model {
  billingPolicy?: QueryQuotaResponseBodyDataBillingPolicy;
  /**
   * @example
   * AT-120N
   */
  cluster?: string;
  /**
   * @example
   * 1714356241163
   */
  createTime?: number;
  /**
   * @example
   * 1248953767546358
   */
  creatorId?: string;
  /**
   * @example
   * abc
   */
  groupName?: string;
  /**
   * @remarks
   * quota ID
   * 
   * @example
   * 2523
   */
  id?: string;
  /**
   * @example
   * quota_a
   */
  name?: string;
  /**
   * @example
   * quota_nickname
   */
  nickName?: string;
  /**
   * @example
   * {"minCU":10,	
   * "adhocCU":0,
   * "maxCU":10,
   * "schedulerType":"Fair",
   * }
   */
  parameter?: { [key: string]: any };
  /**
   * @example
   * null
   */
  parentId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  saleTag?: QueryQuotaResponseBodyDataSaleTag;
  scheduleInfo?: QueryQuotaResponseBodyDataScheduleInfo;
  /**
   * @example
   * ON
   */
  status?: string;
  subQuotaInfoList?: QueryQuotaResponseBodyDataSubQuotaInfoList[];
  /**
   * @example
   * abc
   */
  tag?: string;
  /**
   * @example
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @example
   * FUXI_OFFLINE
   */
  type?: string;
  /**
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

export class UpdateComputeQuotaPlanRequestQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs in the level-1 quota.
   * > The default value is 0. The maximum value of this parameter must be equal to the number of subscription-based reserved CUs and cannot exceed 10,000 CUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * The value of elastic Reserved CUs.
   * > The total number of elastically reserved CUs in all the level-2 quotas is equal to the number of elastically reserved CUs in the level-1 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticReservedCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * > The value of maxCU must be less than or equal to the value of maxCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * > 
   * >- The total value of minCU in all the level-2 quotas is equal to the value of minCU in the level-1 quota.
   * >- The value of minCU must be less than or equal to the value of maxCU in the level-2 quota and less than or equal to the value of minCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedCU: 'elasticReservedCU',
      maxCU: 'maxCU',
      minCU: 'minCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedCU: 'number',
      maxCU: 'number',
      minCU: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * os_ComputeQuota
   */
  nickName?: string;
  /**
   * @remarks
   * The parameters of the level-2 quota.
   */
  parameter?: UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoListParameter,
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

export class UpdateComputeQuotaPlanRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The parameters of level-1 quota.
   */
  parameter?: UpdateComputeQuotaPlanRequestQuotaParameter;
  /**
   * @remarks
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'parameter',
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdateComputeQuotaPlanRequestQuotaParameter,
      subQuotaInfoList: { 'type': 'array', 'itemType': UpdateComputeQuotaPlanRequestQuotaSubQuotaInfoList },
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

export class UpdateComputeQuotaScheduleRequestBodyCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      at: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaScheduleRequestBody extends $dara.Model {
  /**
   * @remarks
   * The value of effective condition.
   */
  condition?: UpdateComputeQuotaScheduleRequestBodyCondition;
  /**
   * @remarks
   * The name of the quota plan.
   * 
   * This parameter is required.
   * 
   * @example
   * planA
   */
  plan?: string;
  /**
   * @remarks
   * The type of the quota plan.
   * 
   * >Notice: Currently, only daily is supported.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      plan: 'plan',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: UpdateComputeQuotaScheduleRequestBodyCondition,
      plan: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSubQuotaRequestSubQuotaInfoListParameter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the priority feature.
   * 
   * @example
   * false
   */
  enablePriority?: boolean;
  /**
   * @remarks
   * Specifies whether the quota is strongly exclusive.
   * 
   * @example
   * false
   */
  forceReservedMin?: boolean;
  /**
   * @remarks
   * The value of minCU in Reserved CUs.
   * > The value of maxCU must be less than or equal to the value of maxCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  maxCU?: number;
  /**
   * @remarks
   * The value of maxCU in Reserved CUs.
   * > 
   * >- The total value of minCU in all the level-2 quotas is equal to the value of minCU in the level-1 quota.
   * >- The value of minCU must be less than or equal to the value of maxCU in the level-2 quota and less than or equal to the value of minCU in the level-1 quota that you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  minCU?: number;
  /**
   * @remarks
   * Scheduling policy of the quota.
   * 
   * @example
   * Fifo/Fair
   */
  schedulerType?: string;
  /**
   * @remarks
   * The upper limit for CUs that can be concurrently used by a job scheduled to the quota.
   * 
   * @example
   * 10
   */
  singleJobCULimit?: number;
  static names(): { [key: string]: string } {
    return {
      enablePriority: 'enablePriority',
      forceReservedMin: 'forceReservedMin',
      maxCU: 'maxCU',
      minCU: 'minCU',
      schedulerType: 'schedulerType',
      singleJobCULimit: 'singleJobCULimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePriority: 'boolean',
      forceReservedMin: 'boolean',
      maxCU: 'number',
      minCU: 'number',
      schedulerType: 'string',
      singleJobCULimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSubQuotaRequestSubQuotaInfoList extends $dara.Model {
  /**
   * @remarks
   * The nickname of the level-2 quota.
   * 
   * This parameter is required.
   * 
   * @example
   * os_ComputeQuota
   */
  nickName?: string;
  /**
   * @remarks
   * The parameters of the level-2 quota.
   */
  parameter?: UpdateComputeSubQuotaRequestSubQuotaInfoListParameter;
  /**
   * @remarks
   * The type of quota.
   * 
   * > 
   * > - FUXI_OFFLINE(default) : Quotas of this type are used to run batch jobs.
   * 
   * @example
   * FUXI_OFFLINE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'nickName',
      parameter: 'parameter',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      parameter: UpdateComputeSubQuotaRequestSubQuotaInfoListParameter,
      type: 'string',
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

export class UpdateMmsDataSourceResponseBodyData extends $dara.Model {
  asyncTaskId?: number;
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'asyncTaskId',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'number',
      sourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaRequestPropertiesEncryption extends $dara.Model {
  /**
   * @remarks
   * The data encryption algorithm that is supported by the key. Valid values: AES256, AESCTR, and RC4.
   * 
   * @example
   * AES256
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the data encryption feature needs to be enabled for the project. For more information about data encryption, see
   * <props="china">[Storage Encryption](https://help.aliyun.com/zh/maxcompute/security-and-compliance/storage-encryption)
   * <props="intl">[Storage Encryption](https://www.alibabacloud.com/help/zh/maxcompute/security-and-compliance/storage-encryption).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of key that is used for data encryption. You can select MaxCompute Default Key or Bring Your Own Key (BYOK) as the key type. If you select MaxCompute Default Key, the default key that is created by MaxCompute is used.
   * 
   * @example
   * default
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaRequestPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * - *mandatory*: The lifecycle clause is required in a table creation statement.
   * - *optional*: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
   * - *inherit*: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The table lifecycle. Unit: days. Valid values: 1 to 37231. Default value: 37231.
   * 
   * @example
   * 37231
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaRequestProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a full table scan is allowed in the project. A full table scan occupies a large number of resources, which reduces data processing efficiency. By default, the full table scan feature is disabled.
   * 
   * @example
   * false
   */
  allowFullScan?: boolean;
  /**
   * @remarks
   * Indicates whether the DECIMAL type of the MaxCompute V2.0 data type edition is enabled.
   * 
   * @example
   * true
   */
  enableDecimal2?: boolean;
  enableDr?: boolean;
  /**
   * @remarks
   * Indicates whether the routing of the Tunnel resource group is enabled.
   * 
   * - true: The data transfer tasks that are submitted by the project by default use the Tunnel resource group that is bound to the project.
   * - false: The data transfer tasks that are submitted by the project by default use the Tunnel shared resource group.
   * 
   * @example
   * true
   */
  enableTunnelQuotaRoute?: boolean;
  /**
   * @remarks
   * The storage encryption properties.
   */
  encryption?: UpdateProjectBasicMetaRequestPropertiesEncryption;
  /**
   * @remarks
   * The retention period for backup data. Unit: days. During the retention period, you can restore data of the version in use to the backup data of any version. Valid values: [0,30]. Default value: 1. The value 0 indicates that the backup feature is disabled.
   * 
   * @example
   * 1
   */
  retentionDays?: number;
  /**
   * @remarks
   * The maximum consumption threshold of a single SQL statement. Formula: Amount of scanned data (GB) × Complexity.
   * 
   * @example
   * 1500
   */
  sqlMeteringMax?: string;
  /**
   * @remarks
   * The table lifecycle properties.
   */
  tableLifecycle?: UpdateProjectBasicMetaRequestPropertiesTableLifecycle;
  /**
   * @remarks
   * The time zone that is used by your project. The time zone is the same as the time zone specified by `odps.sql.timezone` .
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The <props="china">[Data Transmission Service](https://help.aliyun.com/zh/maxcompute/user-guide/overview-of-dts)
   * <props="intl">[Data Transmission Service](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/overview-of-dts) resource group that is bound to the project.
   * 
   * - Default resource group: The Tunnel shared resource group is used. You cannot use the subscription-based Tunnel resource group for the project. The default resource group is automatically used by the Tunnel service of your project, regardless of the parameter setting.
   * - Subscription-based Tunnel resource group: You can use the subscription-based Tunnel resource group for the project.
   * 
   * @example
   * Default
   */
  tunnelQuota?: string;
  /**
   * @remarks
   * The data type edition. Valid values:
   * 
   * - *1*: MaxCompute V1.0 data type edition
   * - *2*: MaxCompute V2.0 data type edition
   * - *hive*: Hive-compatible data type edition
   * For more information about the differences among the three data type editions, see <props="china">[Data Type Versions](https://help.aliyun.com/zh/maxcompute/user-guide/data-type-editions)
   * <props="intl">[Data Type Versions](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/data-type-editions).
   * 
   * @example
   * 2.0
   */
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableDr: 'enableDr',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      enableDecimal2: 'boolean',
      enableDr: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: UpdateProjectBasicMetaRequestPropertiesEncryption,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: UpdateProjectBasicMetaRequestPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The number of elastically reserved slots.
   * 
   * @example
   * 100
   */
  elasticReservedSlotNum?: number;
  /**
   * @remarks
   * The number of reserved slots.
   * 
   * @example
   * 100
   */
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedSlotNum: 'elasticReservedSlotNum',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedSlotNum: 'number',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTunnelQuotaTimerRequestBody extends $dara.Model {
  /**
   * @remarks
   * The start time of the time-specific configuration.
   * 
   * @example
   * 00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the time-specific configuration.
   * 
   * @example
   * 08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The parameters for the time-specific configuration.
   */
  tunnelQuotaParameter?: UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      tunnelQuotaParameter: 'tunnelQuotaParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      tunnelQuotaParameter: UpdateTunnelQuotaTimerRequestBodyTunnelQuotaParameter,
    };
  }

  validate() {
    if(this.tunnelQuotaParameter && typeof (this.tunnelQuotaParameter as any).validate === 'function') {
      (this.tunnelQuotaParameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyComputeQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota plan is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7a316654730544735643e9200
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyComputeQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyComputeQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyComputeQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of quota plan.
   * 
   * This parameter is required.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The parameters of quota plan.
   */
  quota?: CreateComputeQuotaPlanRequestQuota;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quota: CreateComputeQuotaPlanRequestQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b87b7e716665825896565060e87a4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateComputeQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateComputeQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsDataSourceRequest extends $dara.Model {
  config?: { [key: string]: any };
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * vpc-uf6pc2vordian33gobzfr:cn-shanghai
   */
  networklink?: string;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      networklink: 'networklink',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      networklink: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsDataSourceResponseBody extends $dara.Model {
  data?: CreateMmsDataSourceResponseBodyData;
  /**
   * @example
   * B42CA730-8187-50F1-9FE0-6733297036DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMmsDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsDataSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMmsDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMmsDataSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsFetchMetadataJobResponseBody extends $dara.Model {
  data?: CreateMmsFetchMetadataJobResponseBodyData;
  /**
   * @example
   * CC4D05E8-0613-5A8E-9339-A0EBD097A69E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMmsFetchMetadataJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsFetchMetadataJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMmsFetchMetadataJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMmsFetchMetadataJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsJobRequest extends $dara.Model {
  columnMapping?: { [key: string]: string };
  dstDbName?: string;
  dstSchemaName?: string;
  enableVerification?: boolean;
  eta?: string;
  increment?: boolean;
  name?: string;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  schemaOnly?: boolean;
  sourceId?: number;
  sourceName?: string;
  srcDbName?: string;
  srcSchemaName?: string;
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
  tables?: string[];
  /**
   * @remarks
   * MOCK, HIVE: hive udtf task, HIVE_DATAX: hive datax task, COPY_TASK: odps Copy Task, ODPS_INSERT_OVERWRITE: odps simple insert overwrite task, MC2MC_VERIFY, OSS, HIVE_OSS
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      enableVerification: 'enableVerification',
      eta: 'eta',
      increment: 'increment',
      name: 'name',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      schemaOnly: 'schemaOnly',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dstDbName: 'string',
      dstSchemaName: 'string',
      enableVerification: 'boolean',
      eta: 'string',
      increment: 'boolean',
      name: 'string',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      schemaOnly: 'boolean',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
    };
  }

  validate() {
    if(this.columnMapping) {
      $dara.Model.validateMap(this.columnMapping);
    }
    if(this.others) {
      $dara.Model.validateMap(this.others);
    }
    if(this.partitionFilters) {
      $dara.Model.validateMap(this.partitionFilters);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    if(Array.isArray(this.tableBlackList)) {
      $dara.Model.validateArray(this.tableBlackList);
    }
    if(this.tableMapping) {
      $dara.Model.validateMap(this.tableMapping);
    }
    if(Array.isArray(this.tableWhiteList)) {
      $dara.Model.validateArray(this.tableWhiteList);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsJobResponseBody extends $dara.Model {
  data?: CreateMmsJobResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMmsJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMmsJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMmsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMmsJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * {
   * "name": "test_packege", 
   *     "resourceList": { 
   *         "table": [
   *             {
   *                 "name": "table_name",
   *                 "actions": [
   *                     "Describe",
   *                     "Select"
   *                 ]
   *             },
   *             {
   *                 "name": "table_name",
   *                 "actions": [
   *                     "Describe",
   *                     "Select"
   *                 ]
   *             }
   *         ],
   *         "resource": [
   *             {
   *                 "name": "",
   *                 "actions": []
   *             },
   *             {
   *                 "name": "",
   *                 "actions": []
   *             }
   *         ],
   *         "function": [
   *             {
   *                 "name": "",
   *                 "actions": []
   *             },
   *             {
   *                 "name": "",
   *                 "actions": []
   *             }
   *         ]
   *     }
   * }
   */
  body?: string;
  /**
   * @remarks
   * Specifies whether to install the package.
   * 
   * @example
   * false
   */
  isInstall?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      isInstall: 'isInstall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      isInstall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4ab16684833172127321e2c25
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePackageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b87b7a316654730544735643e9200
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * { "name": "planA", // The quota is a level-1 quota. You can select only the fields that are related to the quota plan. "quota": { "name": "a", "nickName": "aaa_nick", "tenantId": "10001", "regionId": "cn-hangzhou", "parentId": "0", "cluster": "AT-ODPS-TEST3", "parameter": { "minCU": 40, "maxCU": 40, "adhocCU": 0, "elasticMinCU": 40, "elasticMaxCU": 40, "enablePreemptiveScheduling": false, "forceReservedMin":true, "enablePriority":false, "singleJobCULimit":100, "adhocQuotaBeginTimeInSec": 1345, "adhocQuotaEndTimeInSec": 1234, "ignoreAdhocQuota":false }, "subQuotaInfoList": [ { "nickName": "WlmFuxiSecondaryOnlineQuotaTest", "name": "WlmFuxiSecondaryOnlineQuotaTest", "type": "FUXI_ONLINE", "tenantId": "10001", "regionId": "cn-hangzhou", "cluster": "AT-ODPS-TEST3", "parameter": { "minCU": 40, "maxCU": 40, "adhocCU": 0, "elasticMinCU": 40, "elasticMaxCU": 40, "enablePreemptiveScheduling": false, "forceReservedMin":true, "enablePriority":false, "singleJobCULimit":100, "adhocQuotaBeginTimeInSec": 1345, "adhocQuotaEndTimeInSec": 1234, "ignoreAdhocQuota":false } } ] } }
   */
  body?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 228451885265153
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4b016674434996033675e71ee
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters. For valid values, see [MaxCompute permissions](https://help.aliyun.com/document_detail/27935.html).
   * 
   * @example
   * {"name": "role_name","type": "resource/adminn","policy": "", // The document of the policy. This parameter is not required if an access-control list (ACL) is used. "acl": { // This parameter is not required if a policy is used. "table": [{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"resource":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"function":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"package":[{"name": "", "actions":["","",]}, {"name": "", "actions":[]}],"project":[{"name": "", "actions":[]}], // Only the current project is displayed in the console. "instance":[{"name": "", "actions":[]}] // The parameter name must be set to an asterisk (\\*) in the console. }}// An asterisk (\\*) can be specified for name.
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b87b7e716665825896565060e87a4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComputeQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota plan is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7a316654730544735643e9200
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComputeQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteComputeQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteComputeQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMmsDataSourceResponseBody extends $dara.Model {
  /**
   * @example
   * 2000015
   */
  data?: number;
  /**
   * @example
   * EA1320AB-7766-5EC7-B0F6-8B20E2298567
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMmsDataSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMmsDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMmsDataSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 88
   */
  data?: number;
  /**
   * @example
   * 31BE216F-AEF7-581E-B9C9-DECEB5424AC4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMmsJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMmsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMmsJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 416441016836866
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b57ff7616612271051086500ea3ce
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeEffectivePlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetComputeEffectivePlanResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetComputeEffectivePlanResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeEffectivePlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetComputeEffectivePlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComputeEffectivePlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetComputeQuotaPlanResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * QUOTA_PLAN_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA1320AB-7766-5EC7-B0F6-8B20E2298567
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetComputeQuotaPlanResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetComputeQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComputeQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * Display time zone.
   * 
   * @example
   * UTC+8
   */
  displayTimezone?: string;
  static names(): { [key: string]: string } {
    return {
      displayTimezone: 'displayTimezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayTimezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetComputeQuotaScheduleResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * QUOTA_UNKNOWN_NICKNAME
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Cannot found quota **
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B42CA730-8187-50F1-9FE0-6733297036DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetComputeQuotaScheduleResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeQuotaScheduleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetComputeQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComputeQuotaScheduleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetJobInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0bb16654558425251398e27a9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetJobInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The date that is accurate to the day part for the query. The date must be in the yyyy-MM-dd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-15
   */
  date?: string;
  /**
   * @remarks
   * The list of job executors.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of nicknames of quotas that are used by jobs.
   */
  quotaNicknameList?: string[];
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.quotaNicknameList)) {
      $dara.Model.validateArray(this.quotaNicknameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The date that is accurate to the day part for the query. The date must be in the yyyy-MM-dd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-15
   */
  date?: string;
  /**
   * @remarks
   * The list of job executors.
   */
  jobOwnerListShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of nicknames of quotas that are used by jobs.
   */
  quotaNicknameListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetJobResourceUsageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * 0A3B1E82006A23A918C70905BF08AEC7
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b57ff7616612271051086500ea3ce
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetJobResourceUsageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobResourceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsAsyncTaskResponseBody extends $dara.Model {
  data?: GetMmsAsyncTaskResponseBodyData;
  /**
   * @example
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsAsyncTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsAsyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsAsyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDataSourceRequest extends $dara.Model {
  /**
   * @example
   * en_US
   */
  lang?: string;
  /**
   * @example
   * true
   */
  withConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
      withConfig: 'withConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      withConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDataSourceResponseBody extends $dara.Model {
  data?: GetMmsDataSourceResponseBodyData;
  /**
   * @example
   * 98EC8C47-3D6D-560C-808B-84E494220A32
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDataSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsDataSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDbResponseBody extends $dara.Model {
  data?: GetMmsDbResponseBodyData;
  /**
   * @example
   * 90D64EB6-2962-5B1C-A039-BC41C8176C7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsDbResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsDbResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsDbResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsFetchMetadataJobResponseBody extends $dara.Model {
  data?: GetMmsFetchMetadataJobResponseBodyData;
  /**
   * @example
   * 5CA6292A-E301-5CD8-B4E2-AF060F99147B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsFetchMetadataJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsFetchMetadataJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsFetchMetadataJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsFetchMetadataJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsJobResponseBody extends $dara.Model {
  data?: GetMmsJobResponseBodyData;
  /**
   * @example
   * D9F872FD-5DDE-30A6-8C8A-1B8C6A81059F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsPartitionResponseBody extends $dara.Model {
  data?: GetMmsPartitionResponseBodyData;
  /**
   * @example
   * D9F872FD-5DDE-30A6-8C8A-1B8C6A81059F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsPartitionResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsPartitionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsPartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsPartitionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTableResponseBody extends $dara.Model {
  data?: GetMmsTableResponseBodyData;
  /**
   * @example
   * E7FB14F1-4ACD-5C73-A755-B302D70AB9AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsTableResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsTableResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTaskResponseBody extends $dara.Model {
  data?: GetMmsTaskResponseBodyData;
  /**
   * @example
   * 73207140-0FD5-588A-B11A-3CE093924196
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMmsTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMmsTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The project to which the package belongs. This parameter is required if the package is installed in the MaxCompute project.
   * 
   * @example
   * projectB
   */
  sourceProject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProject: 'sourceProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPackageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message.
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b57ff8316614119858417939e3e54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPackageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPackageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use additional information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetProjectResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7b316643495896551555e855b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProjectResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The trusted AccessKey pairs.
   * 
   * @example
   * null
   */
  akProven?: string;
  /**
   * @remarks
   * Specifies whether to include submodules. Valid values: -true: The request includes submodules. -false: The request does not include submodules. This is the default value.
   * 
   * @example
   * false
   */
  mock?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      akProven: 'AkProven',
      mock: 'mock',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProven: 'string',
      mock: 'boolean',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the order.
   */
  billingPolicy?: GetQuotaResponseBodyBillingPolicy;
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
   * The returned data.
   */
  data?: GetQuotaResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 0b87b7a316654730544735643e9200
   */
  requestId?: string;
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier is the same as the identifier in the sales bill of Alibaba Cloud. This parameter is used for tags.
   */
  saleTag?: GetQuotaResponseBodySaleTag;
  /**
   * @remarks
   * The information about the scheduling plan.
   */
  scheduleInfo?: GetQuotaResponseBodyScheduleInfo;
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
   * The information about the level-2 quota.
   */
  subQuotaInfoList?: GetQuotaResponseBodySubQuotaInfoList[];
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
      data: 'data',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      requestId: 'requestId',
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
      billingPolicy: GetQuotaResponseBodyBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      data: GetQuotaResponseBodyData,
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      requestId: 'string',
      saleTag: GetQuotaResponseBodySaleTag,
      scheduleInfo: GetQuotaResponseBodyScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaResponseBodySubQuotaInfoList },
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
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
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

export class GetQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 483212237127906
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetQuotaPlanResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0aa16667684362147582e038f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQuotaPlanResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * UTC+8
   */
  displayTimezone?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      displayTimezone: 'displayTimezone',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayTimezone: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetQuotaScheduleResponseBodyData[];
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * errorMsg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc059b716696296266308790e0d3e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetQuotaScheduleResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaScheduleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation algorithm. For a better page experience, up to 60 points can be displayed for each metric. If you select a time range longer than 1 hour, the chart uses the average value within the range (minutes of the selected time range/60) to aggregate data by default. You can change the aggregation algorithm based on your business requirements.
   * 
   * @example
   * max
   */
  aggMethod?: string;
  /**
   * @remarks
   * The time when the query starts. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you set the **from** and **to** parameters to the same value, the time range is invalid and an error message is returned.
   * *   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669081045
   */
  from?: number;
  /**
   * @remarks
   * The types of the charts.
   */
  plotTypes?: string[];
  /**
   * @remarks
   * The quota type. Default value: ODPS.
   * 
   * *   ODPS: computing quota
   * *   TUNNEL: Tunnel quota
   * 
   * @example
   * ODPS
   */
  productId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The alias of the level-2 quota.
   * 
   * @example
   * ot_tunnel_quota
   */
  subQuotaNickname?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose Tenants > Tenant Property from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * The time when the query ends. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you set the **from** and **to** parameters to the same value, the time range is invalid and an error message is returned.
   * *   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669360870
   */
  to?: number;
  /**
   * @remarks
   * The data metric fields.
   */
  yAxisTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'aggMethod',
      from: 'from',
      plotTypes: 'plotTypes',
      productId: 'productId',
      region: 'region',
      subQuotaNickname: 'subQuotaNickname',
      tenantId: 'tenantId',
      to: 'to',
      yAxisTypes: 'yAxisTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      from: 'number',
      plotTypes: { 'type': 'array', 'itemType': 'string' },
      productId: 'string',
      region: 'string',
      subQuotaNickname: 'string',
      tenantId: 'string',
      to: 'number',
      yAxisTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.plotTypes)) {
      $dara.Model.validateArray(this.plotTypes);
    }
    if(Array.isArray(this.yAxisTypes)) {
      $dara.Model.validateArray(this.yAxisTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation algorithm. For a better page experience, up to 60 points can be displayed for each metric. If you select a time range longer than 1 hour, the chart uses the average value within the range (minutes of the selected time range/60) to aggregate data by default. You can change the aggregation algorithm based on your business requirements.
   * 
   * @example
   * max
   */
  aggMethod?: string;
  /**
   * @remarks
   * The time when the query starts. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you set the **from** and **to** parameters to the same value, the time range is invalid and an error message is returned.
   * *   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669081045
   */
  from?: number;
  /**
   * @remarks
   * The types of the charts.
   */
  plotTypesShrink?: string;
  /**
   * @remarks
   * The quota type. Default value: ODPS.
   * 
   * *   ODPS: computing quota
   * *   TUNNEL: Tunnel quota
   * 
   * @example
   * ODPS
   */
  productId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The alias of the level-2 quota.
   * 
   * @example
   * ot_tunnel_quota
   */
  subQuotaNickname?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose Tenants > Tenant Property from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * The time when the query ends. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you set the **from** and **to** parameters to the same value, the time range is invalid and an error message is returned.
   * *   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669360870
   */
  to?: number;
  /**
   * @remarks
   * The data metric fields.
   */
  yAxisTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'aggMethod',
      from: 'from',
      plotTypesShrink: 'plotTypes',
      productId: 'productId',
      region: 'region',
      subQuotaNickname: 'subQuotaNickname',
      tenantId: 'tenantId',
      to: 'to',
      yAxisTypesShrink: 'yAxisTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      from: 'number',
      plotTypesShrink: 'string',
      productId: 'string',
      region: 'string',
      subQuotaNickname: 'string',
      tenantId: 'string',
      to: 'number',
      yAxisTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetQuotaUsageResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7a416652014358483492eea0b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQuotaUsageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRoleAclResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dc0916696898838762018e9564
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRoleAclResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoleAclResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * tableA
   */
  objectName?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'objectName',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data
   */
  data?: GetRoleAclOnObjectResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc1366d16686529650188023ef87f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRoleAclOnObjectResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleAclOnObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoleAclOnObjectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRolePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {
   *       "Statement": [
   *             {
   *                   "Action": [
   *                         "odps:*"
   *                   ],
   *                   "Effect": "Allow",
   *                   "Resource": [
   *                         "acs:odps:*:projects/{projectname}/authorization/packages"
   *                   ]
   *             }
   *       ],
   *       "Version": "1"
   * }
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc1eeed16675342848904412e08dd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRolePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRolePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRolePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the query starts. This parameter specifies the time when a job is submitted.
   * 
   * *   The time range that is specified by the **from** and **to** request parameters is a closed interval. The start time and end time are included in the range. If the value of **from** is the same as the value of **to**, the time range is invalid, and a null value is returned.
   * *   The value is a UNIX timestamp that represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1683785928
   */
  from?: number;
  /**
   * @remarks
   * The list of job executors.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of nicknames of quotas that are used by jobs.
   */
  quotaNicknameList?: string[];
  /**
   * @remarks
   * The time when the query ends. This parameter specifies the time when a job is submitted.
   * 
   * *   The time interval that is specified by the **from** and **to** request parameters is a closed interval. The start time and end time are included in the interval. If the value of **from** is the same as the value of **to**, the interval is invalid, and a null value is returned.
   * *   The value is a UNIX timestamp that represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1683612946
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.quotaNicknameList)) {
      $dara.Model.validateArray(this.quotaNicknameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the query starts. This parameter specifies the time when a job is submitted.
   * 
   * *   The time range that is specified by the **from** and **to** request parameters is a closed interval. The start time and end time are included in the range. If the value of **from** is the same as the value of **to**, the time range is invalid, and a null value is returned.
   * *   The value is a UNIX timestamp that represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1683785928
   */
  from?: number;
  /**
   * @remarks
   * The list of job executors.
   */
  jobOwnerListShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of nicknames of quotas that are used by jobs.
   */
  quotaNicknameListShrink?: string;
  /**
   * @remarks
   * The time when the query ends. This parameter specifies the time when a job is submitted.
   * 
   * *   The time interval that is specified by the **from** and **to** request parameters is a closed interval. The start time and end time are included in the interval. If the value of **from** is the same as the value of **to**, the interval is invalid, and a null value is returned.
   * *   The value is a UNIX timestamp that represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1683612946
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRunningJobsResponseBodyData;
  /**
   * @remarks
   * *   If the value of success was false, an error code was returned.
   * *   If the value of success was true, a null value was returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0A3B1FD2006A24C8D8BE65CDAC028298
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4ab16684833172127321e2c25
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRunningJobsResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRunningJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRunningJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the schema to which the table or view belongs.
   * 
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @remarks
   * The type of the table or view that you want to view. Valid values:
   * 
   * *   **internal**: internal table
   * *   **external**: external table
   * *   **view**: view
   * *   **materializedView**: [materialize view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations)
   * 
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'schemaName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetTableInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dd4516687375802853481ec9fd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTableInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrustedProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc0590416675329272834336e4387
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrustedProjectsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrustedProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrustedProjectsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * [
   *       {
   *             "instanceId": "",
   *             "projectName": ""
   *       },
   *       {
   *             "instanceId": "",
   *             "projectName": ""
   *       }
   * ]
   */
  body?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0abb7ede16814560741256732e91b6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the period.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * The job(instance) ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that is used to run the MaxCompute job.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of MaxCompute project.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * ghijkl789012
   */
  signature?: string;
  /**
   * @remarks
   * Specification types.
   */
  specCodes?: string[];
  /**
   * @remarks
   * The start time for the period.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * Metering types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectNames: 'projectNames',
      region: 'region',
      signature: 'signature',
      specCodes: 'specCodes',
      startDate: 'startDate',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      signature: 'string',
      specCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    if(Array.isArray(this.specCodes)) {
      $dara.Model.validateArray(this.specCodes);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListComputeMetricsByInstanceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc059b717363029839908920ea631
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListComputeMetricsByInstanceResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsByInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListComputeMetricsByInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListComputeMetricsByInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListComputeQuotaPlanResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc3b4ae16685836687916212e7850
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListComputeQuotaPlanResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListComputeQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListComputeQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The names of the returned resources. The names must start with the value specified by the prefix parameter. If the prefix parameter is set to a, the names of the returned resources must start with a.
   * 
   * @example
   * a
   */
  prefix?: string;
  /**
   * @remarks
   * the name of schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListFunctionsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0b716671885050924814e3623
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFunctionsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort query results in ascending or descending order.
   * 
   * @example
   * true
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The ancestor node IDs.
   */
  extNodeIdList?: string[];
  /**
   * @remarks
   * The start timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1672112000
   */
  from?: number;
  /**
   * @remarks
   * The job instance IDs.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The job owners.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The job priorities.
   */
  priorityList?: number[];
  /**
   * @remarks
   * The project names.
   */
  projectList?: string[];
  /**
   * @remarks
   * The quota nickname.
   * 
   * @example
   * quota_nickname
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The intelligent diagnostics tags.
   */
  sceneTagList?: string[];
  /**
   * @remarks
   * The job signatures.
   */
  signatureList?: string[];
  /**
   * @remarks
   * The sorting columns.
   */
  sortByList?: string[];
  /**
   * @remarks
   * The orders for the sorting columns.
   */
  sortOrderList?: string[];
  /**
   * @remarks
   * The job states.
   */
  statusList?: string[];
  /**
   * @remarks
   * The end timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1672112130
   */
  to?: number;
  /**
   * @remarks
   * The job types.
   */
  typeList?: string[];
  /**
   * @remarks
   * The column based on which you want to sort query results.
   * 
   * @example
   * cuUsage
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      extNodeIdList: 'extNodeIdList',
      from: 'from',
      instanceIdList: 'instanceIdList',
      jobOwnerList: 'jobOwnerList',
      priorityList: 'priorityList',
      projectList: 'projectList',
      quotaNickname: 'quotaNickname',
      sceneTagList: 'sceneTagList',
      signatureList: 'signatureList',
      sortByList: 'sortByList',
      sortOrderList: 'sortOrderList',
      statusList: 'statusList',
      to: 'to',
      typeList: 'typeList',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      extNodeIdList: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      priorityList: { 'type': 'array', 'itemType': 'number' },
      projectList: { 'type': 'array', 'itemType': 'string' },
      quotaNickname: 'string',
      sceneTagList: { 'type': 'array', 'itemType': 'string' },
      signatureList: { 'type': 'array', 'itemType': 'string' },
      sortByList: { 'type': 'array', 'itemType': 'string' },
      sortOrderList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
      typeList: { 'type': 'array', 'itemType': 'string' },
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extNodeIdList)) {
      $dara.Model.validateArray(this.extNodeIdList);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    if(Array.isArray(this.sceneTagList)) {
      $dara.Model.validateArray(this.sceneTagList);
    }
    if(Array.isArray(this.signatureList)) {
      $dara.Model.validateArray(this.signatureList);
    }
    if(Array.isArray(this.sortByList)) {
      $dara.Model.validateArray(this.sortByList);
    }
    if(Array.isArray(this.sortOrderList)) {
      $dara.Model.validateArray(this.sortOrderList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListJobInfosResponseBodyData;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc13a9516807484336515320e38f5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobInfosResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobInfosResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobMetricRequest extends $dara.Model {
  /**
   * @remarks
   * Grouping basis.
   * 
   * > Available values: project, quota, type, status. Meanings:
   * >- project: Group and aggregate by project;
   * >- quota: Group and aggregate by quota;
   * >- type: Group and aggregate by job type;
   * >- status: Group and aggregate by job status.
   * 
   * @example
   * project
   */
  group?: string;
  /**
   * @remarks
   * The name of observation metric.
   * 
   * @example
   * num
   */
  metric?: string;
  /**
   * @remarks
   * The monitoring statistical period.Unit:Second(s).
   * 
   * @example
   * 3600
   */
  period?: number;
  /**
   * @remarks
   * The name of MaxCompute projects (for filtering).
   */
  project?: string[];
  /**
   * @remarks
   * The nickname of computing Quota nickname used by the job (for filtering).
   */
  quota?: string[];
  /**
   * @remarks
   * The type of observation metric.
   * 
   * @example
   * total
   */
  type?: string;
  /**
   * @remarks
   * The end time for the observation interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start time for the observation interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      metric: 'metric',
      period: 'period',
      project: 'project',
      quota: 'quota',
      type: 'type',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      metric: 'string',
      period: 'number',
      project: { 'type': 'array', 'itemType': 'string' },
      quota: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    if(Array.isArray(this.quota)) {
      $dara.Model.validateArray(this.quota);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListJobMetricResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * HTTP status code.
   * - 1xx: Informational response - Request received, processing continues.
   * - 2xx: Success - The request has been successfully received, understood, and accepted by the server.
   * - 3xx: Redirection - Further action must be taken to complete the request.
   * - 4xx: Client error - The request contains bad syntax or cannot be fulfilled.
   * - 5xx: Server error - The server failed to fulfill an apparently valid request.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0aa16667684362147582e038f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobMetricResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobMetricResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobMetricResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * true
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The ID of the upstream node.
   */
  extNodeIdList?: string[];
  /**
   * @remarks
   * Start timestamp.
   * > This parameter is invalid. The end timestamp should be the time point for the snapshot you want to view.
   * 
   * @example
   * 1706840714
   */
  from?: number;
  /**
   * @remarks
   * The instance ID.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The account that commits the job.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The priority of the job.
   */
  priorityList?: number[];
  /**
   * @remarks
   * The name of project.
   */
  projectList?: string[];
  /**
   * @remarks
   * The nickname of the compute Quota used by the job.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The signature of the SQL job.
   */
  signatureList?: string[];
  /**
   * @remarks
   * The sorting columns.
   */
  sortByList?: string[];
  /**
   * @remarks
   * The orders for the sorting columns.
   */
  sortOrderList?: string[];
  /**
   * @remarks
   * The status of jobs.
   */
  statusList?: string[];
  /**
   * @remarks
   * End timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1706840714
   */
  to?: number;
  /**
   * @remarks
   * The type of the job.
   */
  typeList?: string[];
  /**
   * @remarks
   * The sorting column.
   * 
   * @example
   * cpuUsage
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose Tenants > Tenant Property from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      extNodeIdList: 'extNodeIdList',
      from: 'from',
      instanceIdList: 'instanceIdList',
      jobOwnerList: 'jobOwnerList',
      priorityList: 'priorityList',
      projectList: 'projectList',
      quotaNickname: 'quotaNickname',
      signatureList: 'signatureList',
      sortByList: 'sortByList',
      sortOrderList: 'sortOrderList',
      statusList: 'statusList',
      to: 'to',
      typeList: 'typeList',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      extNodeIdList: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      priorityList: { 'type': 'array', 'itemType': 'number' },
      projectList: { 'type': 'array', 'itemType': 'string' },
      quotaNickname: 'string',
      signatureList: { 'type': 'array', 'itemType': 'string' },
      sortByList: { 'type': 'array', 'itemType': 'string' },
      sortOrderList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
      typeList: { 'type': 'array', 'itemType': 'string' },
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extNodeIdList)) {
      $dara.Model.validateArray(this.extNodeIdList);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    if(Array.isArray(this.signatureList)) {
      $dara.Model.validateArray(this.signatureList);
    }
    if(Array.isArray(this.sortByList)) {
      $dara.Model.validateArray(this.sortByList);
    }
    if(Array.isArray(this.sortOrderList)) {
      $dara.Model.validateArray(this.sortOrderList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListJobSnapshotInfosResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7e716665825896565060e87a4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobSnapshotInfosResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobSnapshotInfosResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobSnapshotInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobSnapshotInfosResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      region: 'region',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBody extends $dara.Model {
  data?: ListMmsDataSourcesResponseBodyData;
  /**
   * @example
   * C1F7715F-D316-5AB6-BD02-5241083F4003
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsDataSourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsDataSourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  sorter?: ListMmsDbsRequestSorter;
  /**
   * @example
   * STARTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sorter: 'sorter',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sorter: ListMmsDbsRequestSorter,
      status: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsShrinkRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  sorterShrink?: string;
  /**
   * @example
   * STARTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sorterShrink: 'sorter',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      sorterShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsResponseBody extends $dara.Model {
  data?: ListMmsDbsResponseBodyData;
  /**
   * @example
   * CF3F9978-260F-5204-94BE-30A4E6B54443
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsDbsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsDbsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsRequest extends $dara.Model {
  sorter?: ListMmsJobsRequestSorter;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * test_table_1
   */
  dstTableName?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcTableName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: number;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dstDbName: 'dstDbName',
      dstTableName: 'dstTableName',
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      srcDbName: 'srcDbName',
      srcTableName: 'srcTableName',
      status: 'status',
      stopped: 'stopped',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsJobsRequestSorter,
      dstDbName: 'string',
      dstTableName: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      srcDbName: 'string',
      srcTableName: 'string',
      status: 'string',
      stopped: 'number',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsResponseBody extends $dara.Model {
  data?: ListMmsJobsResponseBodyData;
  /**
   * @example
   * 1112E7C7-C65F-57A2-A7C7-3B178AA257B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsJobsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsRequest extends $dara.Model {
  sorter?: ListMmsPartitionsRequestSorter;
  /**
   * @example
   * 2
   */
  dbId?: number;
  /**
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @example
   * 2024-12-17 19:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  status?: string[];
  /**
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  /**
   * @example
   * p1=1/p2=abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      status: 'status',
      tableName: 'tableName',
      updated: 'updated',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsPartitionsRequestSorter,
      dbId: 'number',
      dbName: 'string',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
      updated: 'boolean',
      value: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsShrinkRequest extends $dara.Model {
  sorter?: ListMmsPartitionsShrinkRequestSorter;
  /**
   * @example
   * 2
   */
  dbId?: number;
  /**
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @example
   * 2024-12-17 19:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  statusShrink?: string;
  /**
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  /**
   * @example
   * p1=1/p2=abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      statusShrink: 'status',
      tableName: 'tableName',
      updated: 'updated',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsPartitionsShrinkRequestSorter,
      dbId: 'number',
      dbName: 'string',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statusShrink: 'string',
      tableName: 'string',
      updated: 'boolean',
      value: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsResponseBody extends $dara.Model {
  data?: ListMmsPartitionsResponseBodyData;
  /**
   * @example
   * D9F872FD-5DDE-30A6-8C8A-1B8C6A81059F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsPartitionsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsPartitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsPartitionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesRequest extends $dara.Model {
  sorter?: ListMmsTablesRequestSorter;
  /**
   * @example
   * 197
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dbName?: string;
  /**
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @example
   * 2024-12-19 15:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * false
   */
  onlyName?: boolean;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string[];
  /**
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      hasPartitions: 'hasPartitions',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      name: 'name',
      onlyName: 'onlyName',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsTablesRequestSorter,
      dbId: 'number',
      dbName: 'string',
      hasPartitions: 'boolean',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      name: 'string',
      onlyName: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesShrinkRequest extends $dara.Model {
  sorter?: ListMmsTablesShrinkRequestSorter;
  /**
   * @example
   * 197
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dbName?: string;
  /**
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @example
   * 2024-12-19 15:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * false
   */
  onlyName?: boolean;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusShrink?: string;
  /**
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      hasPartitions: 'hasPartitions',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      name: 'name',
      onlyName: 'onlyName',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      statusShrink: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsTablesShrinkRequestSorter,
      dbId: 'number',
      dbName: 'string',
      hasPartitions: 'boolean',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      name: 'string',
      onlyName: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      statusShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponseBody extends $dara.Model {
  data?: ListMmsTablesResponseBodyData;
  /**
   * @example
   * E7FB14F1-4ACD-5C73-A755-B302D70AB9AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsTablesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsTablesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTaskLogsResponseBody extends $dara.Model {
  data?: ListMmsTaskLogsResponseBodyData[];
  /**
   * @example
   * A3AE5649-EF90-54BD-86D0-C632FA950988
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMmsTaskLogsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTaskLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsTaskLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsTaskLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksRequest extends $dara.Model {
  sorter?: ListMmsTasksRequestSorter;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * test_table_1
   */
  dstTableName?: string;
  /**
   * @example
   * 10
   */
  jobId?: number;
  /**
   * @example
   * test1
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * p1=1/p2=abc
   */
  partition?: string;
  /**
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcTableName?: string;
  /**
   * @example
   * DATA_DOING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dstDbName: 'dstDbName',
      dstTableName: 'dstTableName',
      jobId: 'jobId',
      jobName: 'jobName',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      partition: 'partition',
      srcDbName: 'srcDbName',
      srcTableName: 'srcTableName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsTasksRequestSorter,
      dstDbName: 'string',
      dstTableName: 'string',
      jobId: 'number',
      jobName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      partition: 'string',
      srcDbName: 'string',
      srcTableName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksResponseBody extends $dara.Model {
  data?: ListMmsTasksResponseBodyData;
  /**
   * @example
   * 373A5CB2-8570-53BE-A98F-729B11D7A8B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsTasksResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMmsTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMmsTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListPackagesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4aa16677927210252786e4cb6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPackagesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPackagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListProjectUsersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7b316643495896551555e855b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectUsersResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to list the built-in **SYSTEM_CATALOG** projects that are used to provide data such as project metadata and historical usage data. For more information, see [Tenant-level Information Schema](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/tenant-level-information-schema).
   * 
   * Valid values:
   * 
   * *   true: The built-in SYSTEM_CATALOG projects are listed.
   * *   false: The built-in SYSTEM_CATALOG projects are not listed.
   * 
   * @example
   * true
   */
  listSystemCatalog?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * a
   */
  prefix?: string;
  /**
   * @remarks
   * The quota name that is automatically generated. You can log on to the [MaxCompute console](https://maxcompute.console.aliyun.com), choose **Workspace** > **Quotas** from the left-side navigation pane, and then view the quota name on the **Quotas** page.
   * 
   * @example
   * "hsajkdgbkaubh"
   */
  quotaName?: string;
  /**
   * @remarks
   * The quota nickname. You can log on to the [MaxCompute console](https://maxcompute.console.aliyun.com), choose **Workspace** > **Quotas** from the left-side navigation pane, and then view the quota nickname on the **Quotas** page.
   * 
   * @example
   * quotaA
   */
  quotaNickName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The instance ID and billing method of the default computing quota.
   * 
   * @example
   * "aaaa-bbbb"
   */
  saleTags?: string;
  /**
   * @remarks
   * The tenant ID. You can log on to the [MaxCompute console](https://maxcompute.console.aliyun.com), and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 549532154333697
   */
  tenantId?: string;
  /**
   * @remarks
   * The project type. Valid values:
   * 
   * *   **managed**: internal project
   * *   **external**: external project
   * 
   * @example
   * "managed"
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      listSystemCatalog: 'listSystemCatalog',
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      quotaName: 'quotaName',
      quotaNickName: 'quotaNickName',
      region: 'region',
      saleTags: 'saleTags',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listSystemCatalog: 'boolean',
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      quotaName: 'string',
      quotaNickName: 'string',
      region: 'string',
      saleTags: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListProjectsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b16399216671970335563173e2340
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the quota.
   * 
   * @example
   * subscription
   */
  billingType?: string;
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 100
   */
  maxItem?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * ODPS
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The cost tag. You can filter out quota objects based on the cost tag. The cost tag is created when you tag a service.
   * 
   * @example
   * {"tag":"this_is_tag_demo"}
   */
  saleTags?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 280747109771520
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      marker: 'marker',
      maxItem: 'maxItem',
      productId: 'productId',
      region: 'region',
      saleTags: 'saleTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      marker: 'string',
      maxItem: 'number',
      productId: 'string',
      region: 'string',
      saleTags: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2w6Olxc+cMPjUtUMo/CvPe4IK7f7kIQFrIZjyc
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQuotasResponseBodyData;
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of quotas.
   */
  quotaInfoList?: ListQuotasResponseBodyQuotaInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc12e6f16677875480593081d2956
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      data: 'data',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      data: ListQuotasResponseBodyData,
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.quotaInfoList)) {
      $dara.Model.validateArray(this.quotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQuotasPlansResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0bd16661643917136451ebf55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQuotasPlansResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotasPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotasPlansResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * res
   */
  name?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      name: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListResourcesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4ae16685836687916212e7850
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRolesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dfe716686526652451361e80ae
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRolesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The date on which the statistics are collected, in days. Set this parameter to a value in the YYYYMMdd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The sorting column.
   * 
   * @example
   * totalFrequency
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the partition that you want to use for fuzzy match.
   * 
   * @example
   * 20241201
   */
  partitionPrefix?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema
   */
  schema?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 40713753659****
   */
  tenantId?: string;
  /**
   * @remarks
   * The storage types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      partitionPrefix: 'partitionPrefix',
      region: 'region',
      schema: 'schema',
      tenantId: 'tenantId',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionPrefix: 'string',
      region: 'string',
      schema: 'string',
      tenantId: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The date on which the statistics are collected, in days. Set this parameter to a value in the YYYYMMdd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The sorting column.
   * 
   * @example
   * totalFrequency
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the partition that you want to use for fuzzy match.
   * 
   * @example
   * 20241201
   */
  partitionPrefix?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema
   */
  schema?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 40713753659****
   */
  tenantId?: string;
  /**
   * @remarks
   * The storage types.
   */
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      partitionPrefix: 'partitionPrefix',
      region: 'region',
      schema: 'schema',
      tenantId: 'tenantId',
      typesShrink: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionPrefix: 'string',
      region: 'string',
      schema: 'string',
      tenantId: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListStoragePartitionsInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0bd16661643917136451ebf55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListStoragePartitionsInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStoragePartitionsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListStoragePartitionsInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The date on which the statistics are collected, in days. Set this parameter to a value in the `YYYYMMdd` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The sorting column.
   * 
   * @example
   * totalFrequency
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of recent days for comparison.
   * 
   * @example
   * 1
   */
  recentDays?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema
   */
  schema?: string;
  /**
   * @remarks
   * The name of the table that you want to use for fuzzy match.
   * 
   * @example
   * bank
   */
  tablePrefix?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 28074710977****
   */
  tenantId?: string;
  /**
   * @remarks
   * The storage types.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      recentDays: 'recentDays',
      region: 'region',
      schema: 'schema',
      tablePrefix: 'tablePrefix',
      tenantId: 'tenantId',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recentDays: 'number',
      region: 'string',
      schema: 'string',
      tablePrefix: 'string',
      tenantId: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort data in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The date on which the statistics are collected, in days. Set this parameter to a value in the `YYYYMMdd` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The sorting column.
   * 
   * @example
   * totalFrequency
   */
  orderColumn?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of recent days for comparison.
   * 
   * @example
   * 1
   */
  recentDays?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema
   */
  schema?: string;
  /**
   * @remarks
   * The name of the table that you want to use for fuzzy match.
   * 
   * @example
   * bank
   */
  tablePrefix?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose **Tenants** > **Tenant Property** from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 28074710977****
   */
  tenantId?: string;
  /**
   * @remarks
   * The storage types.
   */
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      date: 'date',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      recentDays: 'recentDays',
      region: 'region',
      schema: 'schema',
      tablePrefix: 'tablePrefix',
      tenantId: 'tenantId',
      typesShrink: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      date: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recentDays: 'number',
      region: 'string',
      schema: 'string',
      tablePrefix: 'string',
      tenantId: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListStorageTablesInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc12e6a16679892465424670db3eb
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListStorageTablesInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageTablesInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStorageTablesInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListStorageTablesInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the marker after which the returned list begins.
   * 
   * @example
   * Y29tbWlzc2lvbl9leHRlcm5hbF91cmdlXzFfd3Ih
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The names of the returned resources. The names must start with the value specified by the prefix parameter. If the prefix parameter is set to a, the names of the returned resources must start with a.
   * 
   * @example
   * a
   */
  prefix?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      schemaName: 'schemaName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      schemaName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTablesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dd4516687375802853481ec9fd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTablesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTablesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTunnelQuotaTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListTunnelQuotaTimerResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0b716671885050924814e3623
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTunnelQuotaTimerResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTunnelQuotaTimerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTunnelQuotaTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTunnelQuotaTimerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUsersResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dd4816687424611405643e3730
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUsersResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUsersByRoleResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0bb16654558425251398e27a9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUsersByRoleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersByRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersByRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaRequest extends $dara.Model {
  /**
   * @example
   * null
   */
  akProven?: string;
  /**
   * @example
   * false
   */
  mock?: boolean;
  /**
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @example
   * 483212237127906
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      akProven: 'AkProven',
      mock: 'mock',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProven: 'string',
      mock: 'boolean',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponseBody extends $dara.Model {
  data?: QueryQuotaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0bc1eeed16675342848904412e08dd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryQuotaResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 78
   */
  data?: number;
  /**
   * @example
   * 7F5DAD1C-9EC2-5FE5-97CF-BCE21B4ABA29
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryMmsJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryMmsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryMmsJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 88
   */
  data?: number;
  /**
   * @example
   * 5CA6292A-E301-5CD8-B4E2-AF060F99147B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMmsJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartMmsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartMmsJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 88
   */
  data?: number;
  /**
   * @example
   * 8023D058-62B7-5C49-8EB6-AD9BA7942BC5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMmsJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMmsJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopMmsJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of quota plan.
   * 
   * This parameter is required.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * The parameters of quota plan.
   */
  quota?: UpdateComputeQuotaPlanRequestQuota;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quota: UpdateComputeQuotaPlanRequestQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * QUOTA_PLAN_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0aa16667684362147582e038f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateComputeQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateComputeQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: UpdateComputeQuotaScheduleRequestBody[];
  scheduleTimezone?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      scheduleTimezone: 'scheduleTimezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateComputeQuotaScheduleRequestBody },
      scheduleTimezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * QUOTA_PLAN_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * HTTP status code.
   * - 1xx: Informational - The request has been received and is being processed.
   * - 2xx: Success - The request action was successfully received, understood, and accepted by the server.
   * - 3xx: Redirection - Further action must be taken to complete the request.
   * - 4xx: Client Error - The request contains an error in the request parameters, syntax, or specific request conditions cannot be met.
   * - 5xx: Server Error - The server could not fulfill the request due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0aa16667684362147582e038f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeQuotaScheduleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateComputeQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateComputeQuotaScheduleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSubQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The list of level-2 quotas.
   */
  subQuotaInfoList?: UpdateComputeSubQuotaRequestSubQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      subQuotaInfoList: 'subQuotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subQuotaInfoList: { 'type': 'array', 'itemType': UpdateComputeSubQuotaRequestSubQuotaInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.subQuotaInfoList)) {
      $dara.Model.validateArray(this.subQuotaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSubQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * this quota is not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * - 4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b57ff7616612271051086500ea3ce
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSubQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateComputeSubQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateComputeSubQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmsDataSourceRequest extends $dara.Model {
  action?: string;
  config?: { [key: string]: any };
  name?: string;
  test?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      config: 'config',
      name: 'name',
      test: 'test',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      test: 'boolean',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmsDataSourceResponseBody extends $dara.Model {
  data?: UpdateMmsDataSourceResponseBodyData;
  /**
   * @example
   * 76CE80C8-7392-5591-BCC8-610AFBF78ADF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateMmsDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmsDataSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMmsDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMmsDataSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * {
   *     "add": {
   *         "allowedProjectList": [
   *             {
   *                 "label": "2",
   *                 "project": "project_name"
   *             }
   *         ],
   *         "resourceList": {
   *             "table": [
   *                 {
   *                     "name": "table_name",
   *                     "actions": [
   *                         "Describe",
   *                         "Select"
   *                     ]
   *                 },
   *                 {
   *                     "name": "table_name",
   *                     "actions": [
   *                         "Describe",
   *                         "Select"
   *                     ]
   *                 }
   *             ],
   *             "resource": [
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 },
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 }
   *             ],
   *             "function": [
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 },
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 }
   *             ]
   *         }
   *     },
   *     "remove": {
   *         "allowedProjectList": [
   *             {
   *                 "project": "project_name"
   *             },
   *             {
   *                 "project": "project_2"
   *             }
   *         ],
   *         "resourceList": {
   *             "table": [
   *                 {
   *                     "name": "table_name"
   *                 },
   *                 {
   *                     "name": "table_name"
   *                 }
   *             ],
   *             "resource": [
   *                 {
   *                     "name": ""
   *                 },
   *                 {
   *                     "name": ""
   *                 }
   *             ],
   *             "function": [
   *                 {
   *                     "name": ""
   *                 },
   *                 {
   *                     "name": ""
   *                 }
   *             ]
   *         }
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc1ec4016697018733156991e0888
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePackageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * BI_Analysis
   */
  comment?: string;
  /**
   * @remarks
   * The basic properties of the project.
   */
  properties?: UpdateProjectBasicMetaRequestProperties;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      properties: UpdateProjectBasicMetaRequestProperties,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0b87b7e216652820458545253e8b0a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectBasicMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectBasicMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectBasicMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectDefaultQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The default computing quota that is used to allocate computing resources, the jobs that are initiated by this project consume the computing resources in the default quota.
   * 
   * @example
   * os_PayAsYouGoQuota
   */
  quota?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectDefaultQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dfe716674588654372173ec0da
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectDefaultQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectDefaultQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectDefaultQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * json {"ipWhiteList":{"ipList": "", // The IP address whitelists are of the STRING data type. Separate multiple IP address whitelists with commas (,). "vpcIpList": "", //} }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectIpWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc12e4316675560945192024e1044
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectIpWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectIpWhiteListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * { "name": "planA", // The quota is a level-1 quota. You can select only the fields that are related to the quota plan. "quota": { "name": "a", "nickName": "aaa_nick", "tenantId": "10001", "regionId": "cn-hangzhou", "parentId": "0", "cluster": "AT-ODPS-TEST3", "parameter": { "minCU": 40, "maxCU": 40, "adhocCU": 0, "elasticMinCU": 40, "elasticMaxCU": 40, "enablePreemptiveScheduling": false, "forceReservedMin":true, "enablePriority":false, "singleJobCULimit":100, "adhocQuotaBeginTimeInSec": 1345, "adhocQuotaEndTimeInSec": 1234, "ignoreAdhocQuota":false }, "subQuotaInfoList": [ { "nickName": "WlmFuxiSecondaryOnlineQuotaTest", "name": "WlmFuxiSecondaryOnlineQuotaTest", "type": "FUXI_ONLINE", "tenantId": "10001", "regionId": "cn-hangzhou", "cluster": "AT-ODPS-TEST3", "parameter": { "minCU": 40, "maxCU": 40, "adhocCU": 0, "elasticMinCU": 40, "elasticMaxCU": 40, "enablePreemptiveScheduling": false, "forceReservedMin":true, "enablePriority":false, "singleJobCULimit":100, "adhocQuotaBeginTimeInSec": 1345, "adhocQuotaEndTimeInSec": 1234, "ignoreAdhocQuota":false } } ] } }
   */
  body?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dfe516688379832875789e2c65
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaPlanResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * \\# The quota plan immediately takes effect. [ { "type": "once", "plan": "planA", "operator":"userA" } ] # The quota plan is scheduled on a regular basis. [ { "id": "etl_time", "type": "daily", "condition": { "at": "0800", "after": "2022-04-25T04:23:04Z" // optional }, "plan": "planA" }, { "id": "bi", "type": "daily", "condition": { "at": "0900", "after": "2022-04-25T04:23:04Z" // optional }, "plan": "planB" }, ]
   */
  body?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dfe516691014920015940e1c9d
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaScheduleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaScheduleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTunnelQuotaTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateTunnelQuotaTimerRequestBody[];
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateTunnelQuotaTimerRequestBody },
      timezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTunnelQuotaTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters or syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc12e4316675560945192024e1044
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTunnelQuotaTimerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTunnelQuotaTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTunnelQuotaTimerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "maxcompute.aliyuncs.com",
      'ap-northeast-2-pop': "maxcompute.aliyuncs.com",
      'ap-south-1': "maxcompute.aliyuncs.com",
      'ap-southeast-1': "maxcompute.aliyuncs.com",
      'ap-southeast-2': "maxcompute.aliyuncs.com",
      'ap-southeast-3': "maxcompute.aliyuncs.com",
      'ap-southeast-5': "maxcompute.aliyuncs.com",
      'cn-beijing': "maxcompute.aliyuncs.com",
      'cn-beijing-finance-1': "maxcompute.aliyuncs.com",
      'cn-beijing-finance-pop': "maxcompute.aliyuncs.com",
      'cn-beijing-gov-1': "maxcompute.aliyuncs.com",
      'cn-beijing-nu16-b01': "maxcompute.aliyuncs.com",
      'cn-chengdu': "maxcompute.aliyuncs.com",
      'cn-edge-1': "maxcompute.aliyuncs.com",
      'cn-fujian': "maxcompute.aliyuncs.com",
      'cn-haidian-cm12-c01': "maxcompute.aliyuncs.com",
      'cn-hangzhou': "maxcompute.aliyuncs.com",
      'cn-hangzhou-bj-b01': "maxcompute.aliyuncs.com",
      'cn-hangzhou-finance': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "maxcompute.aliyuncs.com",
      'cn-hangzhou-test-306': "maxcompute.aliyuncs.com",
      'cn-hongkong': "maxcompute.aliyuncs.com",
      'cn-hongkong-finance-pop': "maxcompute.aliyuncs.com",
      'cn-huhehaote': "maxcompute.aliyuncs.com",
      'cn-north-2-gov-1': "maxcompute.aliyuncs.com",
      'cn-qingdao': "maxcompute.aliyuncs.com",
      'cn-qingdao-nebula': "maxcompute.aliyuncs.com",
      'cn-shanghai': "maxcompute.aliyuncs.com",
      'cn-shanghai-et15-b01': "maxcompute.aliyuncs.com",
      'cn-shanghai-et2-b01': "maxcompute.aliyuncs.com",
      'cn-shanghai-finance-1': "maxcompute.aliyuncs.com",
      'cn-shanghai-inner': "maxcompute.aliyuncs.com",
      'cn-shanghai-internal-test-1': "maxcompute.aliyuncs.com",
      'cn-shenzhen': "maxcompute.aliyuncs.com",
      'cn-shenzhen-finance-1': "maxcompute.aliyuncs.com",
      'cn-shenzhen-inner': "maxcompute.aliyuncs.com",
      'cn-shenzhen-st4-d01': "maxcompute.aliyuncs.com",
      'cn-shenzhen-su18-b01': "maxcompute.aliyuncs.com",
      'cn-wuhan': "maxcompute.aliyuncs.com",
      'cn-yushanfang': "maxcompute.aliyuncs.com",
      'cn-zhangbei-na61-b01': "maxcompute.aliyuncs.com",
      'cn-zhangjiakou': "maxcompute.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "maxcompute.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "maxcompute.aliyuncs.com",
      'eu-central-1': "maxcompute.aliyuncs.com",
      'eu-west-1': "maxcompute.aliyuncs.com",
      'eu-west-1-oxs': "maxcompute.aliyuncs.com",
      'me-east-1': "maxcompute.aliyuncs.com",
      'rus-west-1-pop': "maxcompute.aliyuncs.com",
      'us-east-1': "maxcompute.aliyuncs.com",
      'us-west-1': "maxcompute.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("maxcompute", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Activate a Quota Plan Immediately.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyComputeQuotaPlanResponse
   */
  async applyComputeQuotaPlanWithOptions(nickname: string, planName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ApplyComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan/${$dara.URL.percentEncode(planName)}/apply`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new ApplyComputeQuotaPlanResponse({}));
    } else {
      return $dara.cast<ApplyComputeQuotaPlanResponse>(await this.execute(params, req, runtime), new ApplyComputeQuotaPlanResponse({}));
    }

  }

  /**
   * Activate a Quota Plan Immediately.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * @returns ApplyComputeQuotaPlanResponse
   */
  async applyComputeQuotaPlan(nickname: string, planName: string): Promise<ApplyComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * Create MaxCompute ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - CreateComputeQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeQuotaPlanResponse
   */
  async createComputeQuotaPlanWithOptions(nickname: string, request: CreateComputeQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateComputeQuotaPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new CreateComputeQuotaPlanResponse({}));
    } else {
      return $dara.cast<CreateComputeQuotaPlanResponse>(await this.execute(params, req, runtime), new CreateComputeQuotaPlanResponse({}));
    }

  }

  /**
   * Create MaxCompute ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - CreateComputeQuotaPlanRequest
   * @returns CreateComputeQuotaPlanResponse
   */
  async createComputeQuotaPlan(nickname: string, request: CreateComputeQuotaPlanRequest): Promise<CreateComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param request - CreateMmsDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsDataSourceResponse
   */
  async createMmsDataSourceWithOptions(request: CreateMmsDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateMmsDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networklink)) {
      body["networklink"] = request.networklink;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMmsDataSourceResponse>(await this.callApi(params, req, runtime), new CreateMmsDataSourceResponse({}));
    } else {
      return $dara.cast<CreateMmsDataSourceResponse>(await this.execute(params, req, runtime), new CreateMmsDataSourceResponse({}));
    }

  }

  /**
   * @param request - CreateMmsDataSourceRequest
   * @returns CreateMmsDataSourceResponse
   */
  async createMmsDataSource(request: CreateMmsDataSourceRequest): Promise<CreateMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsDataSourceWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据源的更新元数据操作
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsFetchMetadataJobResponse
   */
  async createMmsFetchMetadataJobWithOptions(sourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateMmsFetchMetadataJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmsFetchMetadataJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/scans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMmsFetchMetadataJobResponse>(await this.callApi(params, req, runtime), new CreateMmsFetchMetadataJobResponse({}));
    } else {
      return $dara.cast<CreateMmsFetchMetadataJobResponse>(await this.execute(params, req, runtime), new CreateMmsFetchMetadataJobResponse({}));
    }

  }

  /**
   * 创建数据源的更新元数据操作
   * @returns CreateMmsFetchMetadataJobResponse
   */
  async createMmsFetchMetadataJob(sourceId: string): Promise<CreateMmsFetchMetadataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsFetchMetadataJobWithOptions(sourceId, headers, runtime);
  }

  /**
   * 创建迁移任务
   * 
   * @param request - CreateMmsJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsJobResponse
   */
  async createMmsJobWithOptions(sourceId: string, request: CreateMmsJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateMmsJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columnMapping)) {
      body["columnMapping"] = request.columnMapping;
    }

    if (!$dara.isNull(request.dstDbName)) {
      body["dstDbName"] = request.dstDbName;
    }

    if (!$dara.isNull(request.dstSchemaName)) {
      body["dstSchemaName"] = request.dstSchemaName;
    }

    if (!$dara.isNull(request.enableVerification)) {
      body["enableVerification"] = request.enableVerification;
    }

    if (!$dara.isNull(request.eta)) {
      body["eta"] = request.eta;
    }

    if (!$dara.isNull(request.increment)) {
      body["increment"] = request.increment;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.others)) {
      body["others"] = request.others;
    }

    if (!$dara.isNull(request.partitionFilters)) {
      body["partitionFilters"] = request.partitionFilters;
    }

    if (!$dara.isNull(request.partitions)) {
      body["partitions"] = request.partitions;
    }

    if (!$dara.isNull(request.schemaOnly)) {
      body["schemaOnly"] = request.schemaOnly;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceName)) {
      body["sourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.srcDbName)) {
      body["srcDbName"] = request.srcDbName;
    }

    if (!$dara.isNull(request.srcSchemaName)) {
      body["srcSchemaName"] = request.srcSchemaName;
    }

    if (!$dara.isNull(request.tableBlackList)) {
      body["tableBlackList"] = request.tableBlackList;
    }

    if (!$dara.isNull(request.tableMapping)) {
      body["tableMapping"] = request.tableMapping;
    }

    if (!$dara.isNull(request.tableWhiteList)) {
      body["tableWhiteList"] = request.tableWhiteList;
    }

    if (!$dara.isNull(request.tables)) {
      body["tables"] = request.tables;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMmsJobResponse>(await this.callApi(params, req, runtime), new CreateMmsJobResponse({}));
    } else {
      return $dara.cast<CreateMmsJobResponse>(await this.execute(params, req, runtime), new CreateMmsJobResponse({}));
    }

  }

  /**
   * 创建迁移任务
   * 
   * @param request - CreateMmsJobRequest
   * @returns CreateMmsJobResponse
   */
  async createMmsJob(sourceId: string, request: CreateMmsJobRequest): Promise<CreateMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsJobWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Creates a package.
   * 
   * @param request - CreatePackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePackageResponse
   */
  async createPackageWithOptions(projectName: string, request: CreatePackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePackageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isInstall)) {
      query["isInstall"] = request.isInstall;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePackageResponse>(await this.callApi(params, req, runtime), new CreatePackageResponse({}));
    } else {
      return $dara.cast<CreatePackageResponse>(await this.execute(params, req, runtime), new CreatePackageResponse({}));
    }

  }

  /**
   * Creates a package.
   * 
   * @param request - CreatePackageRequest
   * @returns CreatePackageResponse
   */
  async createPackage(projectName: string, request: CreatePackageRequest): Promise<CreatePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPackageWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Creates a MaxCompute project.
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
    } else {
      return $dara.cast<CreateProjectResponse>(await this.execute(params, req, runtime), new CreateProjectResponse({}));
    }

  }

  /**
   * Creates a MaxCompute project.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * Creates a quota plan.
   * 
   * @param request - CreateQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaPlanResponse
   */
  async createQuotaPlanWithOptions(nickname: string, request: CreateQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateQuotaPlanResponse>(await this.callApi(params, req, runtime), new CreateQuotaPlanResponse({}));
    } else {
      return $dara.cast<CreateQuotaPlanResponse>(await this.execute(params, req, runtime), new CreateQuotaPlanResponse({}));
    }

  }

  /**
   * Creates a quota plan.
   * 
   * @param request - CreateQuotaPlanRequest
   * @returns CreateQuotaPlanResponse
   */
  async createQuotaPlan(nickname: string, request: CreateQuotaPlanRequest): Promise<CreateQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Creates a role at the MaxCompute project level.
   * 
   * @param request - CreateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(projectName: string, request: CreateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRoleResponse>(await this.callApi(params, req, runtime), new CreateRoleResponse({}));
    } else {
      return $dara.cast<CreateRoleResponse>(await this.execute(params, req, runtime), new CreateRoleResponse({}));
    }

  }

  /**
   * Creates a role at the MaxCompute project level.
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(projectName: string, request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Delete MaxCompute compute quota plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComputeQuotaPlanResponse
   */
  async deleteComputeQuotaPlanWithOptions(nickname: string, planName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan/${$dara.URL.percentEncode(planName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new DeleteComputeQuotaPlanResponse({}));
    } else {
      return $dara.cast<DeleteComputeQuotaPlanResponse>(await this.execute(params, req, runtime), new DeleteComputeQuotaPlanResponse({}));
    }

  }

  /**
   * Delete MaxCompute compute quota plan.
   * @returns DeleteComputeQuotaPlanResponse
   */
  async deleteComputeQuotaPlan(nickname: string, planName: string): Promise<DeleteComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * 删除数据源
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMmsDataSourceResponse
   */
  async deleteMmsDataSourceWithOptions(sourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteMmsDataSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMmsDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteMmsDataSourceResponse({}));
    } else {
      return $dara.cast<DeleteMmsDataSourceResponse>(await this.execute(params, req, runtime), new DeleteMmsDataSourceResponse({}));
    }

  }

  /**
   * 删除数据源
   * @returns DeleteMmsDataSourceResponse
   */
  async deleteMmsDataSource(sourceId: string): Promise<DeleteMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMmsDataSourceWithOptions(sourceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMmsJobResponse
   */
  async deleteMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMmsJobResponse>(await this.callApi(params, req, runtime), new DeleteMmsJobResponse({}));
    } else {
      return $dara.cast<DeleteMmsJobResponse>(await this.execute(params, req, runtime), new DeleteMmsJobResponse({}));
    }

  }

  /**
   * @returns DeleteMmsJobResponse
   */
  async deleteMmsJob(sourceId: string, jobId: string): Promise<DeleteMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Deletes a quota plan.
   * 
   * @param request - DeleteQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaPlanResponse
   */
  async deleteQuotaPlanWithOptions(nickname: string, planName: string, request: DeleteQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans/${$dara.URL.percentEncode(planName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteQuotaPlanResponse>(await this.callApi(params, req, runtime), new DeleteQuotaPlanResponse({}));
    } else {
      return $dara.cast<DeleteQuotaPlanResponse>(await this.execute(params, req, runtime), new DeleteQuotaPlanResponse({}));
    }

  }

  /**
   * Deletes a quota plan.
   * 
   * @param request - DeleteQuotaPlanRequest
   * @returns DeleteQuotaPlanResponse
   */
  async deleteQuotaPlan(nickname: string, planName: string, request: DeleteQuotaPlanRequest): Promise<DeleteQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * GetComputeEffectivePlan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeEffectivePlanResponse
   */
  async getComputeEffectivePlanWithOptions(nickname: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetComputeEffectivePlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeEffectivePlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeEffectivePlan/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetComputeEffectivePlanResponse>(await this.callApi(params, req, runtime), new GetComputeEffectivePlanResponse({}));
    } else {
      return $dara.cast<GetComputeEffectivePlanResponse>(await this.execute(params, req, runtime), new GetComputeEffectivePlanResponse({}));
    }

  }

  /**
   * GetComputeEffectivePlan.
   * @returns GetComputeEffectivePlanResponse
   */
  async getComputeEffectivePlan(nickname: string): Promise<GetComputeEffectivePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeEffectivePlanWithOptions(nickname, headers, runtime);
  }

  /**
   * Get detailed information of a single compute quota plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeQuotaPlanResponse
   */
  async getComputeQuotaPlanWithOptions(nickname: string, planName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan/${$dara.URL.percentEncode(planName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new GetComputeQuotaPlanResponse({}));
    } else {
      return $dara.cast<GetComputeQuotaPlanResponse>(await this.execute(params, req, runtime), new GetComputeQuotaPlanResponse({}));
    }

  }

  /**
   * Get detailed information of a single compute quota plan.
   * @returns GetComputeQuotaPlanResponse
   */
  async getComputeQuotaPlan(nickname: string, planName: string): Promise<GetComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * Displays the time-specific configuration of compute quota.
   * 
   * @param request - GetComputeQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeQuotaScheduleResponse
   */
  async getComputeQuotaScheduleWithOptions(nickname: string, request: GetComputeQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetComputeQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayTimezone)) {
      query["displayTimezone"] = request.displayTimezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaSchedule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetComputeQuotaScheduleResponse>(await this.callApi(params, req, runtime), new GetComputeQuotaScheduleResponse({}));
    } else {
      return $dara.cast<GetComputeQuotaScheduleResponse>(await this.execute(params, req, runtime), new GetComputeQuotaScheduleResponse({}));
    }

  }

  /**
   * Displays the time-specific configuration of compute quota.
   * 
   * @param request - GetComputeQuotaScheduleRequest
   * @returns GetComputeQuotaScheduleResponse
   */
  async getComputeQuotaSchedule(nickname: string, request: GetComputeQuotaScheduleRequest): Promise<GetComputeQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Get basic information about a single job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInfoResponse
   */
  async getJobInfoWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(instanceId)}/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobInfoResponse>(await this.callApi(params, req, runtime), new GetJobInfoResponse({}));
    } else {
      return $dara.cast<GetJobInfoResponse>(await this.execute(params, req, runtime), new GetJobInfoResponse({}));
    }

  }

  /**
   * Get basic information about a single job.
   * @returns GetJobInfoResponse
   */
  async getJobInfo(instanceId: string): Promise<GetJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * Performs statistics on all jobs that are complete on a specified day and obtains the total resource usage of each job executor on a daily basis.
   * 
   * @param tmpReq - GetJobResourceUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResourceUsageResponse
   */
  async getJobResourceUsageWithOptions(tmpReq: GetJobResourceUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetJobResourceUsageResponse> {
    tmpReq.validate();
    let request = new GetJobResourceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobOwnerList)) {
      request.jobOwnerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobOwnerList, "jobOwnerList", "simple");
    }

    if (!$dara.isNull(tmpReq.quotaNicknameList)) {
      request.quotaNicknameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.quotaNicknameList, "quotaNicknameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.jobOwnerListShrink)) {
      query["jobOwnerList"] = request.jobOwnerListShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.quotaNicknameListShrink)) {
      query["quotaNicknameList"] = request.quotaNicknameListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobResourceUsage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/resourceUsage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetJobResourceUsageResponse>(await this.callApi(params, req, runtime), new GetJobResourceUsageResponse({}));
    } else {
      return $dara.cast<GetJobResourceUsageResponse>(await this.execute(params, req, runtime), new GetJobResourceUsageResponse({}));
    }

  }

  /**
   * Performs statistics on all jobs that are complete on a specified day and obtains the total resource usage of each job executor on a daily basis.
   * 
   * @param request - GetJobResourceUsageRequest
   * @returns GetJobResourceUsageResponse
   */
  async getJobResourceUsage(request: GetJobResourceUsageRequest): Promise<GetJobResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobResourceUsageWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsAsyncTaskResponse
   */
  async getMmsAsyncTaskWithOptions(sourceId: string, asyncTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsAsyncTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsAsyncTask",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/asyncTasks/${$dara.URL.percentEncode(asyncTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsAsyncTaskResponse>(await this.callApi(params, req, runtime), new GetMmsAsyncTaskResponse({}));
    } else {
      return $dara.cast<GetMmsAsyncTaskResponse>(await this.execute(params, req, runtime), new GetMmsAsyncTaskResponse({}));
    }

  }

  /**
   * @returns GetMmsAsyncTaskResponse
   */
  async getMmsAsyncTask(sourceId: string, asyncTaskId: string): Promise<GetMmsAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsAsyncTaskWithOptions(sourceId, asyncTaskId, headers, runtime);
  }

  /**
   * @param request - GetMmsDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsDataSourceResponse
   */
  async getMmsDataSourceWithOptions(sourceId: string, request: GetMmsDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsDataSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!$dara.isNull(request.withConfig)) {
      query["withConfig"] = request.withConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsDataSourceResponse>(await this.callApi(params, req, runtime), new GetMmsDataSourceResponse({}));
    } else {
      return $dara.cast<GetMmsDataSourceResponse>(await this.execute(params, req, runtime), new GetMmsDataSourceResponse({}));
    }

  }

  /**
   * @param request - GetMmsDataSourceRequest
   * @returns GetMmsDataSourceResponse
   */
  async getMmsDataSource(sourceId: string, request: GetMmsDataSourceRequest): Promise<GetMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsDataSourceWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsDbResponse
   */
  async getMmsDbWithOptions(sourceId: string, dbId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsDbResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsDb",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/dbs/${$dara.URL.percentEncode(dbId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsDbResponse>(await this.callApi(params, req, runtime), new GetMmsDbResponse({}));
    } else {
      return $dara.cast<GetMmsDbResponse>(await this.execute(params, req, runtime), new GetMmsDbResponse({}));
    }

  }

  /**
   * @returns GetMmsDbResponse
   */
  async getMmsDb(sourceId: string, dbId: string): Promise<GetMmsDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsDbWithOptions(sourceId, dbId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsFetchMetadataJobResponse
   */
  async getMmsFetchMetadataJobWithOptions(sourceId: string, scanId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsFetchMetadataJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsFetchMetadataJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/scans/${$dara.URL.percentEncode(scanId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsFetchMetadataJobResponse>(await this.callApi(params, req, runtime), new GetMmsFetchMetadataJobResponse({}));
    } else {
      return $dara.cast<GetMmsFetchMetadataJobResponse>(await this.execute(params, req, runtime), new GetMmsFetchMetadataJobResponse({}));
    }

  }

  /**
   * @returns GetMmsFetchMetadataJobResponse
   */
  async getMmsFetchMetadataJob(sourceId: string, scanId: string): Promise<GetMmsFetchMetadataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsFetchMetadataJobWithOptions(sourceId, scanId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsJobResponse
   */
  async getMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsJobResponse>(await this.callApi(params, req, runtime), new GetMmsJobResponse({}));
    } else {
      return $dara.cast<GetMmsJobResponse>(await this.execute(params, req, runtime), new GetMmsJobResponse({}));
    }

  }

  /**
   * @returns GetMmsJobResponse
   */
  async getMmsJob(sourceId: string, jobId: string): Promise<GetMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsPartitionResponse
   */
  async getMmsPartitionWithOptions(sourceId: string, partitionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsPartitionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsPartition",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/partitions/${$dara.URL.percentEncode(partitionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsPartitionResponse>(await this.callApi(params, req, runtime), new GetMmsPartitionResponse({}));
    } else {
      return $dara.cast<GetMmsPartitionResponse>(await this.execute(params, req, runtime), new GetMmsPartitionResponse({}));
    }

  }

  /**
   * @returns GetMmsPartitionResponse
   */
  async getMmsPartition(sourceId: string, partitionId: string): Promise<GetMmsPartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsPartitionWithOptions(sourceId, partitionId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsTableResponse
   */
  async getMmsTableWithOptions(sourceId: string, tableId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsTable",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tables/${$dara.URL.percentEncode(tableId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsTableResponse>(await this.callApi(params, req, runtime), new GetMmsTableResponse({}));
    } else {
      return $dara.cast<GetMmsTableResponse>(await this.execute(params, req, runtime), new GetMmsTableResponse({}));
    }

  }

  /**
   * @returns GetMmsTableResponse
   */
  async getMmsTable(sourceId: string, tableId: string): Promise<GetMmsTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsTableWithOptions(sourceId, tableId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsTaskResponse
   */
  async getMmsTaskWithOptions(sourceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMmsTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsTask",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMmsTaskResponse>(await this.callApi(params, req, runtime), new GetMmsTaskResponse({}));
    } else {
      return $dara.cast<GetMmsTaskResponse>(await this.execute(params, req, runtime), new GetMmsTaskResponse({}));
    }

  }

  /**
   * @returns GetMmsTaskResponse
   */
  async getMmsTask(sourceId: string, taskId: string): Promise<GetMmsTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsTaskWithOptions(sourceId, taskId, headers, runtime);
  }

  /**
   * Obtains the information about a package.
   * 
   * @param request - GetPackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPackageResponse
   */
  async getPackageWithOptions(projectName: string, packageName: string, request: GetPackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPackageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceProject)) {
      query["sourceProject"] = request.sourceProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages/${$dara.URL.percentEncode(packageName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPackageResponse>(await this.callApi(params, req, runtime), new GetPackageResponse({}));
    } else {
      return $dara.cast<GetPackageResponse>(await this.execute(params, req, runtime), new GetPackageResponse({}));
    }

  }

  /**
   * Obtains the information about a package.
   * 
   * @param request - GetPackageRequest
   * @returns GetPackageResponse
   */
  async getPackage(projectName: string, packageName: string, request: GetPackageRequest): Promise<GetPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  /**
   * Queries the information about a MaxCompute project.
   * 
   * @param request - GetProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(projectName: string, request: GetProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
    } else {
      return $dara.cast<GetProjectResponse>(await this.execute(params, req, runtime), new GetProjectResponse({}));
    }

  }

  /**
   * Queries the information about a MaxCompute project.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(projectName: string, request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Obtains the information about a specified level-1 quota.
   * 
   * @param request - GetQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaResponse
   */
  async getQuotaWithOptions(nickname: string, request: GetQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akProven)) {
      query["AkProven"] = request.akProven;
    }

    if (!$dara.isNull(request.mock)) {
      query["mock"] = request.mock;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQuotaResponse>(await this.callApi(params, req, runtime), new GetQuotaResponse({}));
    } else {
      return $dara.cast<GetQuotaResponse>(await this.execute(params, req, runtime), new GetQuotaResponse({}));
    }

  }

  /**
   * Obtains the information about a specified level-1 quota.
   * 
   * @param request - GetQuotaRequest
   * @returns GetQuotaResponse
   */
  async getQuota(nickname: string, request: GetQuotaRequest): Promise<GetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Obtains the information of a quota plan.
   * 
   * @param request - GetQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaPlanResponse
   */
  async getQuotaPlanWithOptions(nickname: string, planName: string, request: GetQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans/${$dara.URL.percentEncode(planName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQuotaPlanResponse>(await this.callApi(params, req, runtime), new GetQuotaPlanResponse({}));
    } else {
      return $dara.cast<GetQuotaPlanResponse>(await this.execute(params, req, runtime), new GetQuotaPlanResponse({}));
    }

  }

  /**
   * Obtains the information of a quota plan.
   * 
   * @param request - GetQuotaPlanRequest
   * @returns GetQuotaPlanResponse
   */
  async getQuotaPlan(nickname: string, planName: string, request: GetQuotaPlanRequest): Promise<GetQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * Obtains the scheduling plan for a quota plan.
   * 
   * @param request - GetQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaScheduleResponse
   */
  async getQuotaScheduleWithOptions(nickname: string, request: GetQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayTimezone)) {
      query["displayTimezone"] = request.displayTimezone;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/schedule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQuotaScheduleResponse>(await this.callApi(params, req, runtime), new GetQuotaScheduleResponse({}));
    } else {
      return $dara.cast<GetQuotaScheduleResponse>(await this.execute(params, req, runtime), new GetQuotaScheduleResponse({}));
    }

  }

  /**
   * Obtains the scheduling plan for a quota plan.
   * 
   * @param request - GetQuotaScheduleRequest
   * @returns GetQuotaScheduleResponse
   */
  async getQuotaSchedule(nickname: string, request: GetQuotaScheduleRequest): Promise<GetQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Queries quota resource consumption information.
   * 
   * @param tmpReq - GetQuotaUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaUsageResponse
   */
  async getQuotaUsageWithOptions(nickname: string, tmpReq: GetQuotaUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQuotaUsageResponse> {
    tmpReq.validate();
    let request = new GetQuotaUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.plotTypes)) {
      request.plotTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.plotTypes, "plotTypes", "simple");
    }

    if (!$dara.isNull(tmpReq.yAxisTypes)) {
      request.yAxisTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.yAxisTypes, "yAxisTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggMethod)) {
      query["aggMethod"] = request.aggMethod;
    }

    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.plotTypesShrink)) {
      query["plotTypes"] = request.plotTypesShrink;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.subQuotaNickname)) {
      query["subQuotaNickname"] = request.subQuotaNickname;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    if (!$dara.isNull(request.yAxisTypesShrink)) {
      query["yAxisTypes"] = request.yAxisTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaUsage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/usage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQuotaUsageResponse>(await this.callApi(params, req, runtime), new GetQuotaUsageResponse({}));
    } else {
      return $dara.cast<GetQuotaUsageResponse>(await this.execute(params, req, runtime), new GetQuotaUsageResponse({}));
    }

  }

  /**
   * Queries quota resource consumption information.
   * 
   * @param request - GetQuotaUsageRequest
   * @returns GetQuotaUsageResponse
   */
  async getQuotaUsage(nickname: string, request: GetQuotaUsageRequest): Promise<GetQuotaUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaUsageWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Obtains the ACL-based permissions that is granted to a project-level role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleAclResponse
   */
  async getRoleAclWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRoleAclResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoleAcl",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/roleAcl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRoleAclResponse>(await this.callApi(params, req, runtime), new GetRoleAclResponse({}));
    } else {
      return $dara.cast<GetRoleAclResponse>(await this.execute(params, req, runtime), new GetRoleAclResponse({}));
    }

  }

  /**
   * Obtains the ACL-based permissions that is granted to a project-level role.
   * @returns GetRoleAclResponse
   */
  async getRoleAcl(projectName: string, roleName: string): Promise<GetRoleAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * Obtains ACL-based permissions on an object that are granted to a project-level role.
   * 
   * @param request - GetRoleAclOnObjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleAclOnObjectResponse
   */
  async getRoleAclOnObjectWithOptions(projectName: string, roleName: string, request: GetRoleAclOnObjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRoleAclOnObjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectName)) {
      query["objectName"] = request.objectName;
    }

    if (!$dara.isNull(request.objectType)) {
      query["objectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoleAclOnObject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRoleAclOnObjectResponse>(await this.callApi(params, req, runtime), new GetRoleAclOnObjectResponse({}));
    } else {
      return $dara.cast<GetRoleAclOnObjectResponse>(await this.execute(params, req, runtime), new GetRoleAclOnObjectResponse({}));
    }

  }

  /**
   * Obtains ACL-based permissions on an object that are granted to a project-level role.
   * 
   * @param request - GetRoleAclOnObjectRequest
   * @returns GetRoleAclOnObjectResponse
   */
  async getRoleAclOnObject(projectName: string, roleName: string, request: GetRoleAclOnObjectRequest): Promise<GetRoleAclOnObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclOnObjectWithOptions(projectName, roleName, request, headers, runtime);
  }

  /**
   * Obtains the policy that is attached to a project-level role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRolePolicyResponse
   */
  async getRolePolicyWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRolePolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRolePolicy",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRolePolicyResponse>(await this.callApi(params, req, runtime), new GetRolePolicyResponse({}));
    } else {
      return $dara.cast<GetRolePolicyResponse>(await this.execute(params, req, runtime), new GetRolePolicyResponse({}));
    }

  }

  /**
   * Obtains the policy that is attached to a project-level role.
   * @returns GetRolePolicyResponse
   */
  async getRolePolicy(projectName: string, roleName: string): Promise<GetRolePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRolePolicyWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * Obtains the running state data of jobs that are in the running state in a specified period of time.
   * 
   * @param tmpReq - GetRunningJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunningJobsResponse
   */
  async getRunningJobsWithOptions(tmpReq: GetRunningJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRunningJobsResponse> {
    tmpReq.validate();
    let request = new GetRunningJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobOwnerList)) {
      request.jobOwnerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobOwnerList, "jobOwnerList", "simple");
    }

    if (!$dara.isNull(tmpReq.quotaNicknameList)) {
      request.quotaNicknameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.quotaNicknameList, "quotaNicknameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.jobOwnerListShrink)) {
      query["jobOwnerList"] = request.jobOwnerListShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.quotaNicknameListShrink)) {
      query["quotaNicknameList"] = request.quotaNicknameListShrink;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRunningJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/runningJobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRunningJobsResponse>(await this.callApi(params, req, runtime), new GetRunningJobsResponse({}));
    } else {
      return $dara.cast<GetRunningJobsResponse>(await this.execute(params, req, runtime), new GetRunningJobsResponse({}));
    }

  }

  /**
   * Obtains the running state data of jobs that are in the running state in a specified period of time.
   * 
   * @param request - GetRunningJobsRequest
   * @returns GetRunningJobsResponse
   */
  async getRunningJobs(request: GetRunningJobsRequest): Promise<GetRunningJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunningJobsWithOptions(request, headers, runtime);
  }

  /**
   * Views the information about MaxCompute internal tables, views, external tables, clustered tables, or transactional tables.
   * 
   * @param request - GetTableInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableInfoResponse
   */
  async getTableInfoWithOptions(projectName: string, tableName: string, request: GetTableInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTableInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTableInfoResponse>(await this.callApi(params, req, runtime), new GetTableInfoResponse({}));
    } else {
      return $dara.cast<GetTableInfoResponse>(await this.execute(params, req, runtime), new GetTableInfoResponse({}));
    }

  }

  /**
   * Views the information about MaxCompute internal tables, views, external tables, clustered tables, or transactional tables.
   * 
   * @param request - GetTableInfoRequest
   * @returns GetTableInfoResponse
   */
  async getTableInfo(projectName: string, tableName: string, request: GetTableInfoRequest): Promise<GetTableInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableInfoWithOptions(projectName, tableName, request, headers, runtime);
  }

  /**
   * Obtains the trusted projects of the current project.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrustedProjectsResponse
   */
  async getTrustedProjectsWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrustedProjectsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrustedProjects",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/trustedProjects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTrustedProjectsResponse>(await this.callApi(params, req, runtime), new GetTrustedProjectsResponse({}));
    } else {
      return $dara.cast<GetTrustedProjectsResponse>(await this.execute(params, req, runtime), new GetTrustedProjectsResponse({}));
    }

  }

  /**
   * Obtains the trusted projects of the current project.
   * @returns GetTrustedProjectsResponse
   */
  async getTrustedProjects(projectName: string): Promise<GetTrustedProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrustedProjectsWithOptions(projectName, headers, runtime);
  }

  /**
   * Terminates a running job.
   * 
   * @param request - KillJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillJobsResponse
   */
  async killJobsWithOptions(request: KillJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<KillJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "KillJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/kill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<KillJobsResponse>(await this.callApi(params, req, runtime), new KillJobsResponse({}));
    } else {
      return $dara.cast<KillJobsResponse>(await this.execute(params, req, runtime), new KillJobsResponse({}));
    }

  }

  /**
   * Terminates a running job.
   * 
   * @param request - KillJobsRequest
   * @returns KillJobsResponse
   */
  async killJobs(request: KillJobsRequest): Promise<KillJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.killJobsWithOptions(request, headers, runtime);
  }

  /**
   * Get compute usage of pay-as-you-go jobs.
   * 
   * @param request - ListComputeMetricsByInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeMetricsByInstanceResponse
   */
  async listComputeMetricsByInstanceWithOptions(request: ListComputeMetricsByInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListComputeMetricsByInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobOwner)) {
      body["jobOwner"] = request.jobOwner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectNames)) {
      body["projectNames"] = request.projectNames;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.signature)) {
      body["signature"] = request.signature;
    }

    if (!$dara.isNull(request.specCodes)) {
      body["specCodes"] = request.specCodes;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.types)) {
      body["types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeMetricsByInstance",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/computeMetrics/listByInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListComputeMetricsByInstanceResponse>(await this.callApi(params, req, runtime), new ListComputeMetricsByInstanceResponse({}));
    } else {
      return $dara.cast<ListComputeMetricsByInstanceResponse>(await this.execute(params, req, runtime), new ListComputeMetricsByInstanceResponse({}));
    }

  }

  /**
   * Get compute usage of pay-as-you-go jobs.
   * 
   * @param request - ListComputeMetricsByInstanceRequest
   * @returns ListComputeMetricsByInstanceResponse
   */
  async listComputeMetricsByInstance(request: ListComputeMetricsByInstanceRequest): Promise<ListComputeMetricsByInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeMetricsByInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Get computeQuotaPlan list.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeQuotaPlanResponse
   */
  async listComputeQuotaPlanWithOptions(nickname: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new ListComputeQuotaPlanResponse({}));
    } else {
      return $dara.cast<ListComputeQuotaPlanResponse>(await this.execute(params, req, runtime), new ListComputeQuotaPlanResponse({}));
    }

  }

  /**
   * Get computeQuotaPlan list.
   * @returns ListComputeQuotaPlanResponse
   */
  async listComputeQuotaPlan(nickname: string): Promise<ListComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeQuotaPlanWithOptions(nickname, headers, runtime);
  }

  /**
   * Obtains functions in a MaxCompute project.
   * 
   * @param request - ListFunctionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(projectName: string, request: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFunctionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctions",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
    } else {
      return $dara.cast<ListFunctionsResponse>(await this.execute(params, req, runtime), new ListFunctionsResponse({}));
    }

  }

  /**
   * Obtains functions in a MaxCompute project.
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(projectName: string, request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Views a list of jobs.
   * 
   * @param request - ListJobInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobInfosResponse
   */
  async listJobInfosWithOptions(request: ListJobInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListJobInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extNodeIdList)) {
      body["extNodeIdList"] = request.extNodeIdList;
    }

    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["instanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.jobOwnerList)) {
      body["jobOwnerList"] = request.jobOwnerList;
    }

    if (!$dara.isNull(request.priorityList)) {
      body["priorityList"] = request.priorityList;
    }

    if (!$dara.isNull(request.projectList)) {
      body["projectList"] = request.projectList;
    }

    if (!$dara.isNull(request.quotaNickname)) {
      body["quotaNickname"] = request.quotaNickname;
    }

    if (!$dara.isNull(request.sceneTagList)) {
      body["sceneTagList"] = request.sceneTagList;
    }

    if (!$dara.isNull(request.signatureList)) {
      body["signatureList"] = request.signatureList;
    }

    if (!$dara.isNull(request.sortByList)) {
      body["sortByList"] = request.sortByList;
    }

    if (!$dara.isNull(request.sortOrderList)) {
      body["sortOrderList"] = request.sortOrderList;
    }

    if (!$dara.isNull(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobInfos",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobInfosResponse>(await this.callApi(params, req, runtime), new ListJobInfosResponse({}));
    } else {
      return $dara.cast<ListJobInfosResponse>(await this.execute(params, req, runtime), new ListJobInfosResponse({}));
    }

  }

  /**
   * Views a list of jobs.
   * 
   * @param request - ListJobInfosRequest
   * @returns ListJobInfosResponse
   */
  async listJobInfos(request: ListJobInfosRequest): Promise<ListJobInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobInfosWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve performance metrics for completed jobs.
   * 
   * @param request - ListJobMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobMetricResponse
   */
  async listJobMetricWithOptions(request: ListJobMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListJobMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.group)) {
      body["group"] = request.group;
    }

    if (!$dara.isNull(request.metric)) {
      body["metric"] = request.metric;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.project)) {
      body["project"] = request.project;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobMetric",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/metric`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobMetricResponse>(await this.callApi(params, req, runtime), new ListJobMetricResponse({}));
    } else {
      return $dara.cast<ListJobMetricResponse>(await this.execute(params, req, runtime), new ListJobMetricResponse({}));
    }

  }

  /**
   * Retrieve performance metrics for completed jobs.
   * 
   * @param request - ListJobMetricRequest
   * @returns ListJobMetricResponse
   */
  async listJobMetric(request: ListJobMetricRequest): Promise<ListJobMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobMetricWithOptions(request, headers, runtime);
  }

  /**
   * Views a list of job snapshot data at a specific point in time.
   * 
   * @param request - ListJobSnapshotInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobSnapshotInfosResponse
   */
  async listJobSnapshotInfosWithOptions(request: ListJobSnapshotInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListJobSnapshotInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extNodeIdList)) {
      body["extNodeIdList"] = request.extNodeIdList;
    }

    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["instanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.jobOwnerList)) {
      body["jobOwnerList"] = request.jobOwnerList;
    }

    if (!$dara.isNull(request.priorityList)) {
      body["priorityList"] = request.priorityList;
    }

    if (!$dara.isNull(request.projectList)) {
      body["projectList"] = request.projectList;
    }

    if (!$dara.isNull(request.quotaNickname)) {
      body["quotaNickname"] = request.quotaNickname;
    }

    if (!$dara.isNull(request.signatureList)) {
      body["signatureList"] = request.signatureList;
    }

    if (!$dara.isNull(request.sortByList)) {
      body["sortByList"] = request.sortByList;
    }

    if (!$dara.isNull(request.sortOrderList)) {
      body["sortOrderList"] = request.sortOrderList;
    }

    if (!$dara.isNull(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobSnapshotInfos",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/snapshot`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListJobSnapshotInfosResponse>(await this.callApi(params, req, runtime), new ListJobSnapshotInfosResponse({}));
    } else {
      return $dara.cast<ListJobSnapshotInfosResponse>(await this.execute(params, req, runtime), new ListJobSnapshotInfosResponse({}));
    }

  }

  /**
   * Views a list of job snapshot data at a specific point in time.
   * 
   * @param request - ListJobSnapshotInfosRequest
   * @returns ListJobSnapshotInfosResponse
   */
  async listJobSnapshotInfos(request: ListJobSnapshotInfosRequest): Promise<ListJobSnapshotInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobSnapshotInfosWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListMmsDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsDataSourcesResponse
   */
  async listMmsDataSourcesWithOptions(request: ListMmsDataSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsDataSourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsDataSources",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsDataSourcesResponse>(await this.callApi(params, req, runtime), new ListMmsDataSourcesResponse({}));
    } else {
      return $dara.cast<ListMmsDataSourcesResponse>(await this.execute(params, req, runtime), new ListMmsDataSourcesResponse({}));
    }

  }

  /**
   * @param request - ListMmsDataSourcesRequest
   * @returns ListMmsDataSourcesResponse
   */
  async listMmsDataSources(request: ListMmsDataSourcesRequest): Promise<ListMmsDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsDataSourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取一个数据源内“库”列表
   * 
   * @param tmpReq - ListMmsDbsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsDbsResponse
   */
  async listMmsDbsWithOptions(sourceId: string, tmpReq: ListMmsDbsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsDbsResponse> {
    tmpReq.validate();
    let request = new ListMmsDbsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sorter)) {
      request.sorterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sorter, "sorter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sorterShrink)) {
      query["sorter"] = request.sorterShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsDbs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/dbs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsDbsResponse>(await this.callApi(params, req, runtime), new ListMmsDbsResponse({}));
    } else {
      return $dara.cast<ListMmsDbsResponse>(await this.execute(params, req, runtime), new ListMmsDbsResponse({}));
    }

  }

  /**
   * 获取一个数据源内“库”列表
   * 
   * @param request - ListMmsDbsRequest
   * @returns ListMmsDbsResponse
   */
  async listMmsDbs(sourceId: string, request: ListMmsDbsRequest): Promise<ListMmsDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsDbsWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param request - ListMmsJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsJobsResponse
   */
  async listMmsJobsWithOptions(sourceId: string, request: ListMmsJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dstDbName)) {
      query["dstDbName"] = request.dstDbName;
    }

    if (!$dara.isNull(request.dstTableName)) {
      query["dstTableName"] = request.dstTableName;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srcDbName)) {
      query["srcDbName"] = request.srcDbName;
    }

    if (!$dara.isNull(request.srcTableName)) {
      query["srcTableName"] = request.srcTableName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.stopped)) {
      query["stopped"] = request.stopped;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsJobsResponse>(await this.callApi(params, req, runtime), new ListMmsJobsResponse({}));
    } else {
      return $dara.cast<ListMmsJobsResponse>(await this.execute(params, req, runtime), new ListMmsJobsResponse({}));
    }

  }

  /**
   * @param request - ListMmsJobsRequest
   * @returns ListMmsJobsResponse
   */
  async listMmsJobs(sourceId: string, request: ListMmsJobsRequest): Promise<ListMmsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsJobsWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param tmpReq - ListMmsPartitionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsPartitionsResponse
   */
  async listMmsPartitionsWithOptions(sourceId: string, tmpReq: ListMmsPartitionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsPartitionsResponse> {
    tmpReq.validate();
    let request = new ListMmsPartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "status", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbId)) {
      query["dbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["dbName"] = request.dbName;
    }

    if (!$dara.isNull(request.lastDdlTimeEnd)) {
      query["lastDdlTimeEnd"] = request.lastDdlTimeEnd;
    }

    if (!$dara.isNull(request.lastDdlTimeStart)) {
      query["lastDdlTimeStart"] = request.lastDdlTimeStart;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["status"] = request.statusShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    if (!$dara.isNull(request.updated)) {
      query["updated"] = request.updated;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsPartitions",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/partitions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsPartitionsResponse>(await this.callApi(params, req, runtime), new ListMmsPartitionsResponse({}));
    } else {
      return $dara.cast<ListMmsPartitionsResponse>(await this.execute(params, req, runtime), new ListMmsPartitionsResponse({}));
    }

  }

  /**
   * @param request - ListMmsPartitionsRequest
   * @returns ListMmsPartitionsResponse
   */
  async listMmsPartitions(sourceId: string, request: ListMmsPartitionsRequest): Promise<ListMmsPartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsPartitionsWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param tmpReq - ListMmsTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsTablesResponse
   */
  async listMmsTablesWithOptions(sourceId: string, tmpReq: ListMmsTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsTablesResponse> {
    tmpReq.validate();
    let request = new ListMmsTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "status", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbId)) {
      query["dbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["dbName"] = request.dbName;
    }

    if (!$dara.isNull(request.hasPartitions)) {
      query["hasPartitions"] = request.hasPartitions;
    }

    if (!$dara.isNull(request.lastDdlTimeEnd)) {
      query["lastDdlTimeEnd"] = request.lastDdlTimeEnd;
    }

    if (!$dara.isNull(request.lastDdlTimeStart)) {
      query["lastDdlTimeStart"] = request.lastDdlTimeStart;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.onlyName)) {
      query["onlyName"] = request.onlyName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["status"] = request.statusShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsTables",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsTablesResponse>(await this.callApi(params, req, runtime), new ListMmsTablesResponse({}));
    } else {
      return $dara.cast<ListMmsTablesResponse>(await this.execute(params, req, runtime), new ListMmsTablesResponse({}));
    }

  }

  /**
   * @param request - ListMmsTablesRequest
   * @returns ListMmsTablesResponse
   */
  async listMmsTables(sourceId: string, request: ListMmsTablesRequest): Promise<ListMmsTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTablesWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsTaskLogsResponse
   */
  async listMmsTaskLogsWithOptions(sourceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsTaskLogsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsTaskLogs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tasks/${$dara.URL.percentEncode(taskId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsTaskLogsResponse>(await this.callApi(params, req, runtime), new ListMmsTaskLogsResponse({}));
    } else {
      return $dara.cast<ListMmsTaskLogsResponse>(await this.execute(params, req, runtime), new ListMmsTaskLogsResponse({}));
    }

  }

  /**
   * @returns ListMmsTaskLogsResponse
   */
  async listMmsTaskLogs(sourceId: string, taskId: string): Promise<ListMmsTaskLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTaskLogsWithOptions(sourceId, taskId, headers, runtime);
  }

  /**
   * @param request - ListMmsTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsTasksResponse
   */
  async listMmsTasksWithOptions(sourceId: string, request: ListMmsTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMmsTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dstDbName)) {
      query["dstDbName"] = request.dstDbName;
    }

    if (!$dara.isNull(request.dstTableName)) {
      query["dstTableName"] = request.dstTableName;
    }

    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["jobName"] = request.jobName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.partition)) {
      query["partition"] = request.partition;
    }

    if (!$dara.isNull(request.srcDbName)) {
      query["srcDbName"] = request.srcDbName;
    }

    if (!$dara.isNull(request.srcTableName)) {
      query["srcTableName"] = request.srcTableName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsTasks",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMmsTasksResponse>(await this.callApi(params, req, runtime), new ListMmsTasksResponse({}));
    } else {
      return $dara.cast<ListMmsTasksResponse>(await this.execute(params, req, runtime), new ListMmsTasksResponse({}));
    }

  }

  /**
   * @param request - ListMmsTasksRequest
   * @returns ListMmsTasksResponse
   */
  async listMmsTasks(sourceId: string, request: ListMmsTasksRequest): Promise<ListMmsTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTasksWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Queries the packages in a MaxCompute project.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPackagesResponse
   */
  async listPackagesWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPackagesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPackages",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPackagesResponse>(await this.callApi(params, req, runtime), new ListPackagesResponse({}));
    } else {
      return $dara.cast<ListPackagesResponse>(await this.execute(params, req, runtime), new ListPackagesResponse({}));
    }

  }

  /**
   * Queries the packages in a MaxCompute project.
   * @returns ListPackagesResponse
   */
  async listPackages(projectName: string): Promise<ListPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPackagesWithOptions(projectName, headers, runtime);
  }

  /**
   * Queries a list of users in a project.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectUsersResponse
   */
  async listProjectUsersWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProjectUsersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectUsers",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProjectUsersResponse>(await this.callApi(params, req, runtime), new ListProjectUsersResponse({}));
    } else {
      return $dara.cast<ListProjectUsersResponse>(await this.execute(params, req, runtime), new ListProjectUsersResponse({}));
    }

  }

  /**
   * Queries a list of users in a project.
   * @returns ListProjectUsersResponse
   */
  async listProjectUsers(projectName: string): Promise<ListProjectUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectUsersWithOptions(projectName, headers, runtime);
  }

  /**
   * Queries a list of MaxCompute projects.
   * 
   * @param request - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(request: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProjectsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listSystemCatalog)) {
      query["listSystemCatalog"] = request.listSystemCatalog;
    }

    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.quotaName)) {
      query["quotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.quotaNickName)) {
      query["quotaNickName"] = request.quotaNickName;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.saleTags)) {
      query["saleTags"] = request.saleTags;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
    } else {
      return $dara.cast<ListProjectsResponse>(await this.execute(params, req, runtime), new ListProjectsResponse({}));
    }

  }

  /**
   * Queries a list of MaxCompute projects.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * Queries quotas.
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListQuotasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingType)) {
      query["billingType"] = request.billingType;
    }

    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.saleTags)) {
      query["saleTags"] = request.saleTags;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotas",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
    } else {
      return $dara.cast<ListQuotasResponse>(await this.execute(params, req, runtime), new ListQuotasResponse({}));
    }

  }

  /**
   * Queries quotas.
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * Obtains quota plans.
   * 
   * @param request - ListQuotasPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasPlansResponse
   */
  async listQuotasPlansWithOptions(nickname: string, request: ListQuotasPlansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListQuotasPlansResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotasPlans",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListQuotasPlansResponse>(await this.callApi(params, req, runtime), new ListQuotasPlansResponse({}));
    } else {
      return $dara.cast<ListQuotasPlansResponse>(await this.execute(params, req, runtime), new ListQuotasPlansResponse({}));
    }

  }

  /**
   * Obtains quota plans.
   * 
   * @param request - ListQuotasPlansRequest
   * @returns ListQuotasPlansResponse
   */
  async listQuotasPlans(nickname: string, request: ListQuotasPlansRequest): Promise<ListQuotasPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasPlansWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Obtains resources in a MaxCompute project.
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(projectName: string, request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
    } else {
      return $dara.cast<ListResourcesResponse>(await this.execute(params, req, runtime), new ListResourcesResponse({}));
    }

  }

  /**
   * Obtains resources in a MaxCompute project.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(projectName: string, request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Obtains MaxCompute project-level roles.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRolesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
    } else {
      return $dara.cast<ListRolesResponse>(await this.execute(params, req, runtime), new ListRolesResponse({}));
    }

  }

  /**
   * Obtains MaxCompute project-level roles.
   * @returns ListRolesResponse
   */
  async listRoles(projectName: string): Promise<ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(projectName, headers, runtime);
  }

  /**
   * Queries the storage details of a specific partition in a partitioned table in a MaxCompute project.
   * 
   * @param tmpReq - ListStoragePartitionsInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStoragePartitionsInfoResponse
   */
  async listStoragePartitionsInfoWithOptions(project: string, table: string, tmpReq: ListStoragePartitionsInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListStoragePartitionsInfoResponse> {
    tmpReq.validate();
    let request = new ListStoragePartitionsInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "types", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.partitionPrefix)) {
      query["partitionPrefix"] = request.partitionPrefix;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.schema)) {
      query["schema"] = request.schema;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStoragePartitionsInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/projects/${$dara.URL.percentEncode(project)}/tables/${$dara.URL.percentEncode(table)}/partitionsInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListStoragePartitionsInfoResponse>(await this.callApi(params, req, runtime), new ListStoragePartitionsInfoResponse({}));
    } else {
      return $dara.cast<ListStoragePartitionsInfoResponse>(await this.execute(params, req, runtime), new ListStoragePartitionsInfoResponse({}));
    }

  }

  /**
   * Queries the storage details of a specific partition in a partitioned table in a MaxCompute project.
   * 
   * @param request - ListStoragePartitionsInfoRequest
   * @returns ListStoragePartitionsInfoResponse
   */
  async listStoragePartitionsInfo(project: string, table: string, request: ListStoragePartitionsInfoRequest): Promise<ListStoragePartitionsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStoragePartitionsInfoWithOptions(project, table, request, headers, runtime);
  }

  /**
   * Queries the table storage details of a MaxCompute project.
   * 
   * @param tmpReq - ListStorageTablesInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStorageTablesInfoResponse
   */
  async listStorageTablesInfoWithOptions(project: string, tmpReq: ListStorageTablesInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListStorageTablesInfoResponse> {
    tmpReq.validate();
    let request = new ListStorageTablesInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "types", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recentDays)) {
      query["recentDays"] = request.recentDays;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.schema)) {
      query["schema"] = request.schema;
    }

    if (!$dara.isNull(request.tablePrefix)) {
      query["tablePrefix"] = request.tablePrefix;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStorageTablesInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/projects/${$dara.URL.percentEncode(project)}/tablesInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListStorageTablesInfoResponse>(await this.callApi(params, req, runtime), new ListStorageTablesInfoResponse({}));
    } else {
      return $dara.cast<ListStorageTablesInfoResponse>(await this.execute(params, req, runtime), new ListStorageTablesInfoResponse({}));
    }

  }

  /**
   * Queries the table storage details of a MaxCompute project.
   * 
   * @param request - ListStorageTablesInfoRequest
   * @returns ListStorageTablesInfoResponse
   */
  async listStorageTablesInfo(project: string, request: ListStorageTablesInfoRequest): Promise<ListStorageTablesInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStorageTablesInfoWithOptions(project, request, headers, runtime);
  }

  /**
   * Obtains tables in a MaxCompute project.
   * 
   * @param request - ListTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(projectName: string, request: ListTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
    } else {
      return $dara.cast<ListTablesResponse>(await this.execute(params, req, runtime), new ListTablesResponse({}));
    }

  }

  /**
   * Obtains tables in a MaxCompute project.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(projectName: string, request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Displays the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTunnelQuotaTimerResponse
   */
  async listTunnelQuotaTimerWithOptions(nickname: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTunnelQuotaTimerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTunnelQuotaTimer",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/tunnel/${$dara.URL.percentEncode(nickname)}/timers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTunnelQuotaTimerResponse>(await this.callApi(params, req, runtime), new ListTunnelQuotaTimerResponse({}));
    } else {
      return $dara.cast<ListTunnelQuotaTimerResponse>(await this.execute(params, req, runtime), new ListTunnelQuotaTimerResponse({}));
    }

  }

  /**
   * Displays the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * @returns ListTunnelQuotaTimerResponse
   */
  async listTunnelQuotaTimer(nickname: string): Promise<ListTunnelQuotaTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTunnelQuotaTimerWithOptions(nickname, headers, runtime);
  }

  /**
   * Queries a list of all users under a tenant.
   * 
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
    } else {
      return $dara.cast<ListUsersResponse>(await this.execute(params, req, runtime), new ListUsersResponse({}));
    }

  }

  /**
   * Queries a list of all users under a tenant.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  /**
   * Obtains information about the users who are assigned a project-level role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersByRoleResponse
   */
  async listUsersByRoleWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListUsersByRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersByRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUsersByRoleResponse>(await this.callApi(params, req, runtime), new ListUsersByRoleResponse({}));
    } else {
      return $dara.cast<ListUsersByRoleResponse>(await this.execute(params, req, runtime), new ListUsersByRoleResponse({}));
    }

  }

  /**
   * Obtains information about the users who are assigned a project-level role.
   * @returns ListUsersByRoleResponse
   */
  async listUsersByRole(projectName: string, roleName: string): Promise<ListUsersByRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersByRoleWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * @param request - QueryQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryQuotaResponse
   */
  async queryQuotaWithOptions(nickname: string, request: QueryQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akProven)) {
      query["AkProven"] = request.akProven;
    }

    if (!$dara.isNull(request.mock)) {
      query["mock"] = request.mock;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryQuotaResponse>(await this.callApi(params, req, runtime), new QueryQuotaResponse({}));
    } else {
      return $dara.cast<QueryQuotaResponse>(await this.execute(params, req, runtime), new QueryQuotaResponse({}));
    }

  }

  /**
   * @param request - QueryQuotaRequest
   * @returns QueryQuotaResponse
   */
  async queryQuota(nickname: string, request: QueryQuotaRequest): Promise<QueryQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryMmsJobResponse
   */
  async retryMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RetryMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}/retry`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RetryMmsJobResponse>(await this.callApi(params, req, runtime), new RetryMmsJobResponse({}));
    } else {
      return $dara.cast<RetryMmsJobResponse>(await this.execute(params, req, runtime), new RetryMmsJobResponse({}));
    }

  }

  /**
   * @returns RetryMmsJobResponse
   */
  async retryMmsJob(sourceId: string, jobId: string): Promise<RetryMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMmsJobResponse
   */
  async startMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartMmsJobResponse>(await this.callApi(params, req, runtime), new StartMmsJobResponse({}));
    } else {
      return $dara.cast<StartMmsJobResponse>(await this.execute(params, req, runtime), new StartMmsJobResponse({}));
    }

  }

  /**
   * @returns StartMmsJobResponse
   */
  async startMmsJob(sourceId: string, jobId: string): Promise<StartMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMmsJobResponse
   */
  async stopMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopMmsJobResponse>(await this.callApi(params, req, runtime), new StopMmsJobResponse({}));
    } else {
      return $dara.cast<StopMmsJobResponse>(await this.execute(params, req, runtime), new StopMmsJobResponse({}));
    }

  }

  /**
   * @returns StopMmsJobResponse
   */
  async stopMmsJob(sourceId: string, jobId: string): Promise<StopMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Update the ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - UpdateComputeQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeQuotaPlanResponse
   */
  async updateComputeQuotaPlanWithOptions(nickname: string, request: UpdateComputeQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateComputeQuotaPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new UpdateComputeQuotaPlanResponse({}));
    } else {
      return $dara.cast<UpdateComputeQuotaPlanResponse>(await this.execute(params, req, runtime), new UpdateComputeQuotaPlanResponse({}));
    }

  }

  /**
   * Update the ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - UpdateComputeQuotaPlanRequest
   * @returns UpdateComputeQuotaPlanResponse
   */
  async updateComputeQuotaPlan(nickname: string, request: UpdateComputeQuotaPlanRequest): Promise<UpdateComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Update the time-based plan for computing quota.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the<props="china">[Pricing and Billing](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Billing](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - UpdateComputeQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeQuotaScheduleResponse
   */
  async updateComputeQuotaScheduleWithOptions(nickname: string, request: UpdateComputeQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateComputeQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scheduleTimezone)) {
      query["scheduleTimezone"] = request.scheduleTimezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaSchedule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateComputeQuotaScheduleResponse>(await this.callApi(params, req, runtime), new UpdateComputeQuotaScheduleResponse({}));
    } else {
      return $dara.cast<UpdateComputeQuotaScheduleResponse>(await this.execute(params, req, runtime), new UpdateComputeQuotaScheduleResponse({}));
    }

  }

  /**
   * Update the time-based plan for computing quota.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the<props="china">[Pricing and Billing](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Billing](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - UpdateComputeQuotaScheduleRequest
   * @returns UpdateComputeQuotaScheduleResponse
   */
  async updateComputeQuotaSchedule(nickname: string, request: UpdateComputeQuotaScheduleRequest): Promise<UpdateComputeQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Update the basic configuration of the calculation quota, including adding or deleting the sub quota, modifying the basic properties of the secondary quota, and the CU configuration of the effective quota plan.
   * 
   * @param request - UpdateComputeSubQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeSubQuotaResponse
   */
  async updateComputeSubQuotaWithOptions(nickname: string, request: UpdateComputeSubQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateComputeSubQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subQuotaInfoList)) {
      body["subQuotaInfoList"] = request.subQuotaInfoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeSubQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeSubQuota`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateComputeSubQuotaResponse>(await this.callApi(params, req, runtime), new UpdateComputeSubQuotaResponse({}));
    } else {
      return $dara.cast<UpdateComputeSubQuotaResponse>(await this.execute(params, req, runtime), new UpdateComputeSubQuotaResponse({}));
    }

  }

  /**
   * Update the basic configuration of the calculation quota, including adding or deleting the sub quota, modifying the basic properties of the secondary quota, and the CU configuration of the effective quota plan.
   * 
   * @param request - UpdateComputeSubQuotaRequest
   * @returns UpdateComputeSubQuotaResponse
   */
  async updateComputeSubQuota(nickname: string, request: UpdateComputeSubQuotaRequest): Promise<UpdateComputeSubQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeSubQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * 更新数据源配置、名称，启/停数据源实例
   * 
   * @param request - UpdateMmsDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMmsDataSourceResponse
   */
  async updateMmsDataSourceWithOptions(sourceId: string, request: UpdateMmsDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateMmsDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.test)) {
      body["test"] = request.test;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateMmsDataSourceResponse>(await this.callApi(params, req, runtime), new UpdateMmsDataSourceResponse({}));
    } else {
      return $dara.cast<UpdateMmsDataSourceResponse>(await this.execute(params, req, runtime), new UpdateMmsDataSourceResponse({}));
    }

  }

  /**
   * 更新数据源配置、名称，启/停数据源实例
   * 
   * @param request - UpdateMmsDataSourceRequest
   * @returns UpdateMmsDataSourceResponse
   */
  async updateMmsDataSource(sourceId: string, request: UpdateMmsDataSourceRequest): Promise<UpdateMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMmsDataSourceWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Updates the objects in a package and projects in which the package can be installed.
   * 
   * @param request - UpdatePackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePackageResponse
   */
  async updatePackageWithOptions(projectName: string, packageName: string, request: UpdatePackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdatePackageResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages/${$dara.URL.percentEncode(packageName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePackageResponse>(await this.callApi(params, req, runtime), new UpdatePackageResponse({}));
    } else {
      return $dara.cast<UpdatePackageResponse>(await this.execute(params, req, runtime), new UpdatePackageResponse({}));
    }

  }

  /**
   * Updates the objects in a package and projects in which the package can be installed.
   * 
   * @param request - UpdatePackageRequest
   * @returns UpdatePackageResponse
   */
  async updatePackage(projectName: string, packageName: string, request: UpdatePackageRequest): Promise<UpdatePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  /**
   * Update Project Basic Information
   * 
   * @param request - UpdateProjectBasicMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectBasicMetaResponse
   */
  async updateProjectBasicMetaWithOptions(projectName: string, request: UpdateProjectBasicMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateProjectBasicMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.properties)) {
      body["properties"] = request.properties;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectBasicMeta",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/meta`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateProjectBasicMetaResponse>(await this.callApi(params, req, runtime), new UpdateProjectBasicMetaResponse({}));
    } else {
      return $dara.cast<UpdateProjectBasicMetaResponse>(await this.execute(params, req, runtime), new UpdateProjectBasicMetaResponse({}));
    }

  }

  /**
   * Update Project Basic Information
   * 
   * @param request - UpdateProjectBasicMetaRequest
   * @returns UpdateProjectBasicMetaResponse
   */
  async updateProjectBasicMeta(projectName: string, request: UpdateProjectBasicMetaRequest): Promise<UpdateProjectBasicMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectBasicMetaWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Modify Default Project Compute Quota
   * 
   * @param request - UpdateProjectDefaultQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectDefaultQuotaResponse
   */
  async updateProjectDefaultQuotaWithOptions(projectName: string, request: UpdateProjectDefaultQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateProjectDefaultQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectDefaultQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/quota`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateProjectDefaultQuotaResponse>(await this.callApi(params, req, runtime), new UpdateProjectDefaultQuotaResponse({}));
    } else {
      return $dara.cast<UpdateProjectDefaultQuotaResponse>(await this.execute(params, req, runtime), new UpdateProjectDefaultQuotaResponse({}));
    }

  }

  /**
   * Modify Default Project Compute Quota
   * 
   * @param request - UpdateProjectDefaultQuotaRequest
   * @returns UpdateProjectDefaultQuotaResponse
   */
  async updateProjectDefaultQuota(projectName: string, request: UpdateProjectDefaultQuotaRequest): Promise<UpdateProjectDefaultQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectDefaultQuotaWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Modifies the IP address whitelist of a MaxCompute project.
   * 
   * @param request - UpdateProjectIpWhiteListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectIpWhiteListResponse
   */
  async updateProjectIpWhiteListWithOptions(projectName: string, request: UpdateProjectIpWhiteListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateProjectIpWhiteListResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectIpWhiteList",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/ipWhiteList`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateProjectIpWhiteListResponse>(await this.callApi(params, req, runtime), new UpdateProjectIpWhiteListResponse({}));
    } else {
      return $dara.cast<UpdateProjectIpWhiteListResponse>(await this.execute(params, req, runtime), new UpdateProjectIpWhiteListResponse({}));
    }

  }

  /**
   * Modifies the IP address whitelist of a MaxCompute project.
   * 
   * @param request - UpdateProjectIpWhiteListRequest
   * @returns UpdateProjectIpWhiteListResponse
   */
  async updateProjectIpWhiteList(projectName: string, request: UpdateProjectIpWhiteListRequest): Promise<UpdateProjectIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectIpWhiteListWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Updates a quota plan.
   * 
   * @param request - UpdateQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaPlanResponse
   */
  async updateQuotaPlanWithOptions(nickname: string, planName: string, request: UpdateQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans/${$dara.URL.percentEncode(planName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateQuotaPlanResponse>(await this.callApi(params, req, runtime), new UpdateQuotaPlanResponse({}));
    } else {
      return $dara.cast<UpdateQuotaPlanResponse>(await this.execute(params, req, runtime), new UpdateQuotaPlanResponse({}));
    }

  }

  /**
   * Updates a quota plan.
   * 
   * @param request - UpdateQuotaPlanRequest
   * @returns UpdateQuotaPlanResponse
   */
  async updateQuotaPlan(nickname: string, planName: string, request: UpdateQuotaPlanRequest): Promise<UpdateQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * Updates the scheduling plan for a quota plan.
   * 
   * @param request - UpdateQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaScheduleResponse
   */
  async updateQuotaScheduleWithOptions(nickname: string, request: UpdateQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/schedule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateQuotaScheduleResponse>(await this.callApi(params, req, runtime), new UpdateQuotaScheduleResponse({}));
    } else {
      return $dara.cast<UpdateQuotaScheduleResponse>(await this.execute(params, req, runtime), new UpdateQuotaScheduleResponse({}));
    }

  }

  /**
   * Updates the scheduling plan for a quota plan.
   * 
   * @param request - UpdateQuotaScheduleRequest
   * @returns UpdateQuotaScheduleResponse
   */
  async updateQuotaSchedule(nickname: string, request: UpdateQuotaScheduleRequest): Promise<UpdateQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Updates the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing and prices](https://www.alibabacloud.com/help/maxcompute/product-overview/data-transfer-fees-hourly-billing) of Tunnel quotas and elastically reserved computing resources.
   * 
   * @param request - UpdateTunnelQuotaTimerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTunnelQuotaTimerResponse
   */
  async updateTunnelQuotaTimerWithOptions(nickname: string, request: UpdateTunnelQuotaTimerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTunnelQuotaTimerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timezone)) {
      query["timezone"] = request.timezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTunnelQuotaTimer",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/tunnel/${$dara.URL.percentEncode(nickname)}/timers`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTunnelQuotaTimerResponse>(await this.callApi(params, req, runtime), new UpdateTunnelQuotaTimerResponse({}));
    } else {
      return $dara.cast<UpdateTunnelQuotaTimerResponse>(await this.execute(params, req, runtime), new UpdateTunnelQuotaTimerResponse({}));
    }

  }

  /**
   * Updates the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing and prices](https://www.alibabacloud.com/help/maxcompute/product-overview/data-transfer-fees-hourly-billing) of Tunnel quotas and elastically reserved computing resources.
   * 
   * @param request - UpdateTunnelQuotaTimerRequest
   * @returns UpdateTunnelQuotaTimerResponse
   */
  async updateTunnelQuotaTimer(nickname: string, request: UpdateTunnelQuotaTimerRequest): Promise<UpdateTunnelQuotaTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTunnelQuotaTimerWithOptions(nickname, request, headers, runtime);
  }

}
