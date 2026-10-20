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
   * Specifies whether auto-renewal is enabled for the resource. Valid values:
   * - true: Auto-renewal is enabled. The resource is automatically renewed upon expiration.
   * - false: Auto-renewal is disabled. The resource is stopped upon expiration.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The time when the resource quota was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1745683200000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the resource quota. The value is a UNIX timestamp in milliseconds.
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
   * The maximum amount of resources that can be used.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  maxResource?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 23464687565
   */
  orderId?: string;
  /**
   * @remarks
   * The payment status of the current resource. Valid values:
   * - NORMAL: Valid.
   * - WAIT_FOR_EXPIRE: Expiring.
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
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The number of CPU cores.
   */
  cpuCoreCount?: string;
  /**
   * @remarks
   * The time when the GPU subscription quota was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1782292672000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the GPU subscription quota. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1782292772000
   */
  expireTime?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  gpuAmount?: number;
  /**
   * @remarks
   * The number of GPU machines.
   * 
   * @example
   * 4
   */
  gpuMachineNum?: number;
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 0
   */
  gpuMemorySize?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * ecs.gn7i-c8g1.2xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * w-xxxxxxxxx-gpu-quota-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance family.
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The instance type ID.
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The memory size.
   */
  memorySize?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2534863936
   */
  orderId?: string;
  /**
   * @remarks
   * The order status.
   * 
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
  /**
   * @remarks
   * The tag key.
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   */
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
   * Specifies whether to enable auto-renewal. This parameter is required for subscription resources.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required for subscription resources.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The auto-renewal epoch. This parameter is required for subscription resources.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * The time when the workspace was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * The DLF catalog information.
   * 
   * @example
   * default
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * The type of the associated DLF.
   * 
   * @example
   * 1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The duration of the subscription. This parameter is required for subscription resources.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The time when the workspace was released. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1687103999999
   */
  endTime?: number;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * out of stock
   */
  failReason?: string;
  /**
   * @remarks
   * The list of GPU models.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The IP whitelist of the workspace.
   */
  ipWhiteList?: string[];
  /**
   * @remarks
   * The unit of the subscription period. This parameter is required for subscription resources.
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
   * The billing method.
   * 
   * @example
   * PayAsYouGo or Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The information about the subscription resource quota.
   */
  prePaidQuota?: ListWorkspacesResponseBodyWorkspacesPrePaidQuota;
  /**
   * @remarks
   * The list of GPU subscription quotas.
   */
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
   * @remarks
   * The resource group ID.
   * 
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
   * The information about the workspace status change.
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
  /**
   * @remarks
   * The list of workspace tags.
   */
  tags?: ListWorkspacesResponseBodyWorkspacesTags[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-******
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * spark-batch-job-workspace-1
   */
  workspaceName?: string;
  /**
   * @remarks
   * The status of the workspace.
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
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
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

