// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspacesPrePaidQuota extends $dara.Model {
  /**
   * @remarks
   * The amount of resources that are currently allocated.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  allocatedResource?: string;
  /**
   * @remarks
   * Whether auto-renewal is enabled for the resource.
   * 
   * - true: Enables auto-renewal. The resource is automatically renewed after it expires.
   * 
   * - false: Auto-renewal is disabled. The resource is stopped upon expiration.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The creation time of the resource quota.
   * 
   * @example
   * 1745683200000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the resource quota.
   * 
   * @example
   * 1740537153000
   */
  expireTime?: number;
  /**
   * @remarks
   * The resource instance ID that is associated with the quota.
   * 
   * @example
   * i-abc12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of resources.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  maxResource?: string;
  /**
   * @remarks
   * The order ID.
   */
  orderId?: string;
  /**
   * @remarks
   * The payment status of the current resource. The possible values are as follows:
   * 
   * - NORMAL: Active.
   * 
   * - WAIT_FOR_EXPIRE: Will expire.
   * 
   * - EXPIRED: The item has expired.
   * 
   * @example
   * NORMAL
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The amount of resources currently in use.
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

export class ListWorkspacesResponseBodyWorkspacesStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Error message.
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
   * Specifies whether to enable auto-renewal (required for the prepaid billing method).
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Auto-renewal duration (Required for the prepaid billing method).
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * Auto-renewal period (Required for the prepaid billing method).
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * Workspace creation time.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * DLF Catalog information.
   * 
   * @example
   * default
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * Bind a dlf type.
   * 
   * @example
   * 1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The subscription period quantity is required for the prepaid billing method.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Workspace release time.
   * 
   * @example
   * 1687103999999
   */
  endTime?: number;
  /**
   * @remarks
   * Failure reason.
   * 
   * @example
   * out of stock
   */
  failReason?: string;
  /**
   * @remarks
   * The GPU specifications.
   */
  gpuSpec?: string[];
  ipWhiteList?: string[];
  /**
   * @remarks
   * Subscription period (Required for the prepaid billing method).
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * Payment status.
   * 
   * @example
   * PAID/UNPAID
   */
  paymentStatus?: string;
  /**
   * @remarks
   * Billing method.
   * 
   * @example
   * PayAsYouGo or Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * Information about prepaid resource quotas.
   */
  prePaidQuota?: ListWorkspacesResponseBodyWorkspacesPrePaidQuota;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Workspace release reason.
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
   * Resource specification.
   * 
   * @example
   * 100cu
   */
  resourceSpec?: string;
  /**
   * @remarks
   * Information about changes to the workspace status.
   */
  stateChangeReason?: ListWorkspacesResponseBodyWorkspacesStateChangeReason;
  /**
   * @remarks
   * OSS path.
   * 
   * @example
   * spark-result
   */
  storage?: string;
  /**
   * @remarks
   * The tags of the workspace.
   */
  tags?: ListWorkspacesResponseBodyWorkspacesTags[];
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * w-******
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace name.
   * 
   * @example
   * Spark batch workspace-1
   */
  workspaceName?: string;
  /**
   * @remarks
   * Workspace status.
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
   * The maximum number of records to retrieve at one time.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Next page token.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  /**
   * @remarks
   * Workspace list.
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

