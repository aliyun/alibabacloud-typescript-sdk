// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspacesResponseBodyWorkspacesPrePaidQuota } from "./ListWorkspacesResponseBodyWorkspacesPrePaidQuota";
import { ListWorkspacesResponseBodyWorkspacesStateChangeReason } from "./ListWorkspacesResponseBodyWorkspacesStateChangeReason";
import { ListWorkspacesResponseBodyWorkspacesTags } from "./ListWorkspacesResponseBodyWorkspacesTags";


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

