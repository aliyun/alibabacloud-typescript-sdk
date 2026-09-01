// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchInstancesResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authentication principal.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of the permission denial.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
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
   * @remarks
   * The zone.
   * 
   * @example
   * t1222576965886205
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: subscription.
   * * **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 4000
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-08T07:19:05.000+0000
   */
  createTime?: string;
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * 3
   */
  dataNodeCount?: number;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * My Supabase project
   */
  description?: string;
  /**
   * @remarks
   * The DPI engine version. Default value: 2.0.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-shrdb7a2t8w3c1
   */
  instanceId?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 16
   */
  memoryGB?: number;
  /**
   * @remarks
   * The network type of the connection string. Valid values:
   * * **Public**: public endpoint.
   * * **Private**: private endpoint.
   * * **Inner**: private endpoint (classic network).
   * 
   * @example
   * 1
   */
  netType?: string;
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
   * The display name of the instance specifications.
   * 
   * @example
   * 8 cores 32 GB
   */
  specDisplay?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The storage size of a single data node. Unit: GB.
   * 
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
  /**
   * @remarks
   * The cluster ID.
   */
  instances?: DescribeOpenSearchInstancesResponseBodyDataInstances[];
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. Maximum value: 100. Default value: If you do not specify a value or the value is less than 10, the default value is 10. If the value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmMV9kamx92yNWehxph5Fw
   */
  nextToken?: string;
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
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchInstancesResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The operation result.
   */
  data?: DescribeOpenSearchInstancesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
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

