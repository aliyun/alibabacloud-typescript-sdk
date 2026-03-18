// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList extends $dara.Model {
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
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
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  regionId?: string;
  status?: string;
  subQuotaInfoList?: GetComputeEffectivePlanResponseBodyDataQuotaSubQuotaInfoList[];
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
  createTime?: string;
  isEffective?: boolean;
  name?: string;
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

export class GetComputeEffectivePlanResponseBody extends $dara.Model {
  data?: GetComputeEffectivePlanResponseBodyData;
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

