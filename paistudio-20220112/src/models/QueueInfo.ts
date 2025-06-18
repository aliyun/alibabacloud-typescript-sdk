// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QueueInfo extends $dara.Model {
  /**
   * @example
   * roleMaximumResource
   */
  code?: string;
  /**
   * @example
   * ConfigRule
   */
  codeType?: string;
  gmtCreatedTime?: string;
  /**
   * @example
   * "2023-06-22T00:00:00Z"
   */
  gmtDequeuedTime?: string;
  /**
   * @example
   * “2023-06-22T00:00:00Z”
   */
  gmtEnqueuedTime?: string;
  /**
   * @example
   * "2023-06-22T00:00:00Z"
   */
  gmtPositionModifiedTime?: string;
  /**
   * @example
   * test-label-79f5498dd-9qrzs
   */
  name?: string;
  /**
   * @example
   * 10
   */
  position?: number;
  /**
   * @example
   * 2
   */
  priority?: number;
  /**
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @example
   * “quotamtl37ge7gkvdz”
   */
  quotaId?: string;
  /**
   * @example
   * Current GPU Limit is 5, limited by Role PAI.AlgoDeveloper
   */
  reason?: string;
  resource?: ResourceAmount;
  /**
   * @example
   * Enqueued
   */
  status?: string;
  useOversoldResource?: boolean;
  userId?: string;
  userName?: string;
  /**
   * @example
   * dlcxxxx
   */
  workloadId?: string;
  workloadName?: string;
  /**
   * @example
   * PreAllocation
   */
  workloadStatus?: string;
  /**
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @example
   * “432524”
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeType: 'CodeType',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtDequeuedTime: 'GmtDequeuedTime',
      gmtEnqueuedTime: 'GmtEnqueuedTime',
      gmtPositionModifiedTime: 'GmtPositionModifiedTime',
      name: 'Name',
      position: 'Position',
      priority: 'Priority',
      queueStrategy: 'QueueStrategy',
      quotaId: 'QuotaId',
      reason: 'Reason',
      resource: 'Resource',
      status: 'Status',
      useOversoldResource: 'UseOversoldResource',
      userId: 'UserId',
      userName: 'UserName',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadStatus: 'WorkloadStatus',
      workloadType: 'WorkloadType',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeType: 'string',
      gmtCreatedTime: 'string',
      gmtDequeuedTime: 'string',
      gmtEnqueuedTime: 'string',
      gmtPositionModifiedTime: 'string',
      name: 'string',
      position: 'number',
      priority: 'number',
      queueStrategy: 'string',
      quotaId: 'string',
      reason: 'string',
      resource: ResourceAmount,
      status: 'string',
      useOversoldResource: 'boolean',
      userId: 'string',
      userName: 'string',
      workloadId: 'string',
      workloadName: 'string',
      workloadStatus: 'string',
      workloadType: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

