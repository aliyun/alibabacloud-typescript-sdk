// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspacesPrePaidQuota extends $dara.Model {
  /**
   * @remarks
   * The amount of resources currently allocated.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  allocatedResource?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the resource. Valid values:
   * 
   * - true: Auto-renewal is enabled. The resource is automatically renewed upon expiration.
   * - false: Auto-renewal is not enabled. The resource stops being available upon expiration.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The time when the resource quota was created.
   * 
   * @example
   * 1745683200000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the resource quota expires.
   * 
   * @example
   * 1740537153000
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID of the resource associated with the quota.
   * 
   * @example
   * i-abc12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of resources available.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  maxResource?: string;
  /**
   * @example
   * 23464687565
   */
  orderId?: string;
  /**
   * @remarks
   * The payment status of the current resource. Valid values:
   * - NORMAL: Active.
   * - WAIT_FOR_EXPIRE: About to expire.
   * - EXPIRED: Expired.
   * 
   * @example
   * NORMAL
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The amount of resources currently used.
   * 
   * @example
   * {\\"cpu\\":\\"0\\",\\"memory\\":\\"0Gi\\",\\"cu\\":\\"0\\"}
   */
  usedResource?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'allocatedResource',
      autoRenewal: 'autoRenewal',
      createTime: 'createTime',
      expireTime: 'expireTime',
      instanceId: 'instanceId',
      maxResource: 'maxResource',
      orderId: 'orderId',
      paymentStatus: 'paymentStatus',
      usedResource: 'usedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: 'string',
      autoRenewal: 'boolean',
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      maxResource: 'string',
      orderId: 'string',
      paymentStatus: 'string',
      usedResource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspacesPrePaidQuotaGpu extends $dara.Model {
  autoRenewal?: boolean;
  cpuCoreCount?: string;
  /**
   * @example
   * 1782292672000
   */
  createTime?: number;
  /**
   * @example
   * 1782292772000
   */
  expireTime?: number;
  gpuAmount?: number;
  /**
   * @example
   * 4
   */
  gpuMachineNum?: number;
  gpuMemorySize?: number;
  /**
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @example
   * ecs.gn7i-c8g1.2xlarge
   */
  gpuSpec?: string;
  /**
   * @example
   * w-xxxxxxxxx-gpu-quota-xxxx
   */
  instanceId?: string;
  instanceTypeFamily?: string;
  instanceTypeId?: string;
  memorySize?: string;
  /**
   * @example
   * 2534863936
   */
  orderId?: string;
  /**
   * @example
   * NORMAL
   */
  paymentStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'autoRenewal',
      cpuCoreCount: 'cpuCoreCount',
      createTime: 'createTime',
      expireTime: 'expireTime',
      gpuAmount: 'gpuAmount',
      gpuMachineNum: 'gpuMachineNum',
      gpuMemorySize: 'gpuMemorySize',
      gpuNum: 'gpuNum',
      gpuSpec: 'gpuSpec',
      instanceId: 'instanceId',
      instanceTypeFamily: 'instanceTypeFamily',
      instanceTypeId: 'instanceTypeId',
      memorySize: 'memorySize',
      orderId: 'orderId',
      paymentStatus: 'paymentStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      cpuCoreCount: 'string',
      createTime: 'number',
      expireTime: 'number',
      gpuAmount: 'number',
      gpuMachineNum: 'number',
      gpuMemorySize: 'number',
      gpuNum: 'number',
      gpuSpec: 'string',
      instanceId: 'string',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
      memorySize: 'string',
      orderId: 'string',
      paymentStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspacesStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspacesTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
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

export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. This parameter is required for the prepaid type.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required for the prepaid type.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The auto-renewal epoch unit. This parameter is required for the prepaid type.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * The DLF Catalog information.
   * 
   * @example
   * default
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * The DLF binding type.
   * 
   * @example
   * 1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The subscription period quantity. This parameter is required for the prepaid type.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The time when the workspace was released.
   * 
   * @example
   * 1687103999999
   */
  endTime?: number;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * out of stock
   */
  failReason?: string;
  gpuSpec?: string[];
  ipWhiteList?: string[];
  /**
   * @remarks
   * The subscription period unit. This parameter is required for the prepaid type.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The payment status.
   * 
   * @example
   * PAID/UNPAID
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * PayAsYouGo or Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The prepaid resource quota information.
   */
  prePaidQuota?: ListWorkspacesResponseBodyWorkspacesPrePaidQuota;
  prePaidQuotaGpu?: ListWorkspacesResponseBodyWorkspacesPrePaidQuotaGpu[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The reason why the workspace was released.
   * 
   * @example
   * SERVICE_RELEASE
   */
  releaseType?: string;
  /**
   * @example
   * rg-xxxxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specification.
   * 
   * @example
   * 100cu
   */
  resourceSpec?: string;
  /**
   * @remarks
   * The state change information of the workspace.
   */
  stateChangeReason?: ListWorkspacesResponseBodyWorkspacesStateChangeReason;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * spark-result
   */
  storage?: string;
  tags?: ListWorkspacesResponseBodyWorkspacesTags[];
  /**
   * @remarks
   * Workspace ID。
   * 
   * @example
   * w-******
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Spark batch workspace-1
   */
  workspaceName?: string;
  /**
   * @remarks
   * The workspace status.
   * 
   * @example
   * STARTING,RUNNING,TERMINATED
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      autoRenewPeriodUnit: 'autoRenewPeriodUnit',
      createTime: 'createTime',
      dlfCatalogId: 'dlfCatalogId',
      dlfType: 'dlfType',
      duration: 'duration',
      endTime: 'endTime',
      failReason: 'failReason',
      gpuSpec: 'gpuSpec',
      ipWhiteList: 'ipWhiteList',
      paymentDurationUnit: 'paymentDurationUnit',
      paymentStatus: 'paymentStatus',
      paymentType: 'paymentType',
      prePaidQuota: 'prePaidQuota',
      prePaidQuotaGpu: 'prePaidQuotaGpu',
      regionId: 'regionId',
      releaseType: 'releaseType',
      resourceGroupId: 'resourceGroupId',
      resourceSpec: 'resourceSpec',
      stateChangeReason: 'stateChangeReason',
      storage: 'storage',
      tags: 'tags',
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
      workspaceStatus: 'workspaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      autoRenewPeriodUnit: 'string',
      createTime: 'number',
      dlfCatalogId: 'string',
      dlfType: 'string',
      duration: 'number',
      endTime: 'number',
      failReason: 'string',
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      ipWhiteList: { 'type': 'array', 'itemType': 'string' },
      paymentDurationUnit: 'string',
      paymentStatus: 'string',
      paymentType: 'string',
      prePaidQuota: ListWorkspacesResponseBodyWorkspacesPrePaidQuota,
      prePaidQuotaGpu: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspacesPrePaidQuotaGpu },
      regionId: 'string',
      releaseType: 'string',
      resourceGroupId: 'string',
      resourceSpec: 'string',
      stateChangeReason: ListWorkspacesResponseBodyWorkspacesStateChangeReason,
      storage: 'string',
      tags: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspacesTags },
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gpuSpec)) {
      $dara.Model.validateArray(this.gpuSpec);
    }
    if(Array.isArray(this.ipWhiteList)) {
      $dara.Model.validateArray(this.ipWhiteList);
    }
    if(this.prePaidQuota && typeof (this.prePaidQuota as any).validate === 'function') {
      (this.prePaidQuota as any).validate();
    }
    if(Array.isArray(this.prePaidQuotaGpu)) {
      $dara.Model.validateArray(this.prePaidQuotaGpu);
    }
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to retrieve in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workspaces.
   */
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
    };
  }

  validate() {
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

