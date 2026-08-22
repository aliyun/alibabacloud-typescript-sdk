// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchInstancesResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * PRIORITY
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInstancesResponseBodyDataInstances extends $dara.Model {
  /**
   * @example
   * t1222576965886205
   */
  availabilityZone?: string;
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @example
   * 4000
   */
  cpu?: number;
  /**
   * @example
   * 2026-06-08T07:19:05.000+0000
   */
  createTime?: string;
  /**
   * @example
   * 3
   */
  dataNodeCount?: number;
  /**
   * @example
   * 我的 Supabase 项目
   */
  description?: string;
  /**
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @example
   * pxc-shrdb7a2t8w3c1
   */
  instanceId?: string;
  /**
   * @example
   * 16
   */
  memoryGB?: number;
  /**
   * @example
   * 1
   */
  netType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 8 核 32 GB
   */
  specDisplay?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 500
   */
  storageSizeGB?: number;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dataNodeCount: 'DataNodeCount',
      description: 'Description',
      engineVersion: 'EngineVersion',
      instanceId: 'InstanceId',
      memoryGB: 'MemoryGB',
      netType: 'NetType',
      regionId: 'RegionId',
      specDisplay: 'SpecDisplay',
      status: 'Status',
      storageSizeGB: 'StorageSizeGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      chargeType: 'string',
      cpu: 'number',
      createTime: 'string',
      dataNodeCount: 'number',
      description: 'string',
      engineVersion: 'string',
      instanceId: 'string',
      memoryGB: 'number',
      netType: 'string',
      regionId: 'string',
      specDisplay: 'string',
      status: 'string',
      storageSizeGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInstancesResponseBodyData extends $dara.Model {
  instances?: DescribeOpenSearchInstancesResponseBodyDataInstances[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmMV9kamx92yNWehxph5Fw
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 130
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeOpenSearchInstancesResponseBodyDataInstances },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchInstancesResponseBody extends $dara.Model {
  accessDeniedDetail?: DescribeOpenSearchInstancesResponseBodyAccessDeniedDetail;
  data?: DescribeOpenSearchInstancesResponseBodyData;
  /**
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeOpenSearchInstancesResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchInstancesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

