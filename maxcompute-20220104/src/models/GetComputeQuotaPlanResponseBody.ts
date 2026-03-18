// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeQuotaPlanResponseBodyDataQuotaParameter extends $dara.Model {
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

export class GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter extends $dara.Model {
  elasticReservedCU?: number;
  enablePriority?: boolean;
  forceReservedMin?: boolean;
  maxCU?: number;
  minCU?: number;
  schedulerType?: string;
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
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoListParameter;
  regionId?: string;
  status?: string;
  tenantId?: string;
  type?: string;
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
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: GetComputeQuotaPlanResponseBodyDataQuotaParameter;
  regionId?: string;
  status?: string;
  subQuotaInfoList?: GetComputeQuotaPlanResponseBodyDataQuotaSubQuotaInfoList[];
  tenantId?: string;
  type?: string;
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
  createTime?: string;
  isEffective?: boolean;
  name?: string;
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

export class GetComputeQuotaPlanResponseBody extends $dara.Model {
  data?: GetComputeQuotaPlanResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
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

