// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyWorkspacePrePaidQuota extends $dara.Model {
  /**
   * @remarks
   * The amount of resources currently allocated.
   * 
   * @example
   * {"cu": 100}
   */
  allocatedResource?: string;
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled for the resource.
   * 
   * - true: Auto-renewal is enabled. The resource is automatically renewed upon expiration.
   * - false: Auto-renewal is disabled. The resource is stopped upon expiration.
   * 
   * @example
   * False
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The time when the workspace was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1791802817000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the GPU subscription quota. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1779768979586
   */
  expireTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ray-df0tghlhat1776wy-klbifz8l
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of resources that can be used.
   * 
   * @example
   * {"cu": 100}
   */
  maxResource?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 298581757170384
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
  /**
   * @remarks
   * The amount of resources currently used.
   * 
   * @example
   * {"cu": 50}
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

export class GetWorkspaceResponseBodyWorkspacePrePaidQuotaGpu extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled.
   * 
   * @example
   * False
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cpuCoreCount?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1782292672000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time.
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
   * 1
   */
  gpuAmount?: number;
  /**
   * @remarks
   * The number of GPU instances.
   * 
   * @example
   * 1
   */
  gpuMachineNum?: number;
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 4096
   */
  gpuMemorySize?: number;
  /**
   * @remarks
   * The number of GPU instances.
   * 
   * @example
   * 8
   */
  gpuNum?: number;
  /**
   * @remarks
   * The GPU instance type.
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
   * w-xxxxxx-quota-gpu-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecs.g5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The instance type ID.
   * 
   * @example
   * ecs.g5.small
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 4096
   */
  memorySize?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2345634254
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

export class GetWorkspaceResponseBodyWorkspaceStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1000000
   */
  code?: string;
  /**
   * @remarks
   * The status information of the node pod.
   * 
   * @example
   * ok
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

export class GetWorkspaceResponseBodyWorkspaceTags extends $dara.Model {
  /**
   * @remarks
   * The tag keys.
   * 
   * @example
   * [\\"COST\\"]
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 3d775731-9ec1-4fe2-a00d-061d51fce677
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

export class GetWorkspaceResponseBodyWorkspace extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled. This parameter is required for subscription workspaces.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required for subscription workspaces.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The auto-renewal cycle. This parameter is required for subscription workspaces.
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
   * 1776824869000
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
   * The bound DLF type.
   * 
   * @example
   * DLF-NEXT
   */
  dlfType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required for subscription workspaces.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The time when the workspace is released.
   * 
   * @example
   * 1786586477000
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
   * The list of GPU instance types.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The IP whitelist of the workspace.
   */
  ipWhiteList?: string[];
  /**
   * @remarks
   * The unit of the subscription period. This parameter is required for subscription workspaces.
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
  prePaidQuota?: GetWorkspaceResponseBodyWorkspacePrePaidQuota;
  /**
   * @remarks
   * The list of GPU subscription quotas.
   */
  prePaidQuotaGpu?: GetWorkspaceResponseBodyWorkspacePrePaidQuotaGpu[];
  /**
   * @remarks
   * The name of the RAM role used to execute Spark jobs.
   * 
   * @example
   * Aliyun
   */
  ramRoleName?: string;
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
   * The reason why the workspace is released.
   * 
   * @example
   * stable
   */
  releaseType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek4f7uj74wdthi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The UID of the user who created the workspace.
   * 
   * @example
   * 13*************
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * {"cu": 100}
   */
  resourceSpec?: string;
  /**
   * @remarks
   * The information about the workspace status change.
   */
  stateChangeReason?: GetWorkspaceResponseBodyWorkspaceStateChangeReason;
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
   * The tag keys.
   */
  tags?: GetWorkspaceResponseBodyWorkspaceTags[];
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
   * The workspace name.
   * 
   * @example
   * Spark batch job workspace-1
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
      ramRoleName: 'ramRoleName',
      regionId: 'regionId',
      releaseType: 'releaseType',
      resourceGroupId: 'resourceGroupId',
      resourceOwnerId: 'resourceOwnerId',
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
      prePaidQuota: GetWorkspaceResponseBodyWorkspacePrePaidQuota,
      prePaidQuotaGpu: { 'type': 'array', 'itemType': GetWorkspaceResponseBodyWorkspacePrePaidQuotaGpu },
      ramRoleName: 'string',
      regionId: 'string',
      releaseType: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'string',
      resourceSpec: 'string',
      stateChangeReason: GetWorkspaceResponseBodyWorkspaceStateChangeReason,
      storage: 'string',
      tags: { 'type': 'array', 'itemType': GetWorkspaceResponseBodyWorkspaceTags },
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

export class GetWorkspaceResponseBody extends $dara.Model {
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
   * The workspace object.
   */
  workspace?: GetWorkspaceResponseBodyWorkspace;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspace: GetWorkspaceResponseBodyWorkspace,
    };
  }

  validate() {
    if(this.workspace && typeof (this.workspace as any).validate === 'function') {
      (this.workspace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

