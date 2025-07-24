// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspacesPrePaidQuota extends $dara.Model {
  /**
   * @remarks
   * The amount of resources that are allocated by a subscription quota.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  allocatedResource?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the subscription quota.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The creation time of the subscription quota.
   * 
   * @example
   * 1745683200000
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the subscription quota.
   * 
   * @example
   * 1740537153000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the instance that is generated when you purchase the subscription quota.
   * 
   * @example
   * i-abc12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum amount of resources that can be used in a subscription quota.
   * 
   * @example
   * {\\"cpu\\":\\"1\\",\\"memory\\":\\"4Gi\\",\\"cu\\":\\"1\\"}
   */
  maxResource?: string;
  orderId?: string;
  /**
   * @remarks
   * The status of the subscription quota. Valid values:
   * 
   * *   NORMAL
   * *   WAIT_FOR_EXPIRE
   * *   EXPIRED
   * 
   * @example
   * NORMAL
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The amount of resources that are used.
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
   * Specifies whether to enable auto-renewal. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The unit of the auto-renewal duration. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  autoRenewPeriodUnit?: string;
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * The information of the Data Lake Formation (DLF) catalog.
   * 
   * @example
   * default
   */
  dlfCatalogId?: string;
  /**
   * @remarks
   * The version of DLF.
   * 
   * @example
   * 1.0
   */
  dlfType?: string;
  /**
   * @remarks
   * The subscription period. This parameter is required only if the paymentType parameter is set to Pre.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The end of the end time range.
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
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * YEAR, MONTH, WEEK, DAY, HOUR, MINUTE
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The status of the payment.
   * 
   * @example
   * PAID/UNPAID
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PayAsYouGo
   * - Pre
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The information about the subscription quota.
   */
  prePaidQuota?: ListWorkspacesResponseBodyWorkspacesPrePaidQuota;
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
   * The reason why the workspace is released.
   * 
   * @example
   * SERVICE_RELEASE
   */
  releaseType?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 100cu
   */
  resourceSpec?: string;
  /**
   * @remarks
   * The reason of the job status change.
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
   * spark-1
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
      paymentDurationUnit: 'paymentDurationUnit',
      paymentStatus: 'paymentStatus',
      paymentType: 'paymentType',
      prePaidQuota: 'prePaidQuota',
      regionId: 'regionId',
      releaseType: 'releaseType',
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
      paymentDurationUnit: 'string',
      paymentStatus: 'string',
      paymentType: 'string',
      prePaidQuota: ListWorkspacesResponseBodyWorkspacesPrePaidQuota,
      regionId: 'string',
      releaseType: 'string',
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
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  /**
   * @remarks
   * The queried workspaces.
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

