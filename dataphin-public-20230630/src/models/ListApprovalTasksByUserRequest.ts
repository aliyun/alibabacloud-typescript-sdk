// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalTasksByUserRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The approval task type. Valid values:
   * - APPROVE: Permission approval.
   * - MANAGE: Management.
   * - OTHERS: Others.
   * - ATOMIC: Atomic metric approval.
   * - BIZ_OBJECT: Business object approval.
   * - BIZ_PROCESS: Business process approval.
   * - PUBLISH_APPROVE: Publish approval.
   * - BASELINE_APPROVE: Baseline approval.
   * - CODE_REVIEW: Asset approval.
   * - OBJECT_CODE_REVIEW: Code review.
   * - STANDARD_APPROVAL: Standard online approval.
   * - BATCH_STANDARD_APPROVAL: Batch standard online approval.
   * - STANDARD_OFFLINE_APPROVAL: Standard offline approval.
   * - BATCH_STANDARD_OFFLINE_APPROVAL: Batch standard offline approval.
   * - PRIVILEGE_TRANSFER_APPROVAL: Permission transfer approval.
   * - QD_FEATURE_ONLINE: Label listing.
   * - QD_FEATURE_OFFLINE: Label delisting.
   * - QD_CLUSTER_ONLINE: Group online.
   * - QD_CLUSTER_OFFLINE: Group offline.
   * - QD_MEMBER_ADD_APP: Add member to application.
   * - QD_FEATURE_ADD_APP: Add label to application.
   * - QD_CLUSTER_ADD_APP: Add group to application.
   * - QD_FEATURE_ADD_PROJECT: Add label to project.
   * - QD_CLUSTER_ADD_PROJECT: Add group to project.
   * - TASK_DATA_DOWNLOAD: Data download.
   * - CUSTOM_OPERATE: Custom operation.
   * - PRIVACY_COMPUTING: Privacy-preserving computation.
   * - MDC_TOPIC_DIR_PUBLISH: Asset topic directory publish.
   * - ASSET_PUBLISH: Asset listing approval.
   * - ASSET_UN_PUBLISH: Asset delisting approval.
   * - APPLICATION_CREATE: Application creation approval.
   * 
   * @example
   * DATA_SOURCE
   */
  approvalType?: string;
  /**
   * @remarks
   * The keyword for fuzzy match on the task name.
   * 
   * @example
   * datasource
   */
  keyword?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 20. Maximum value: 100. Values greater than 100 are automatically adjusted to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The relationship type between the current user and the approval task. This parameter is required. Valid values:
   * - SUBMITTED: Submitted by me.
   * - PENDING_APPROVAL: Pending my approval.
   * - PROCESSED: Processed by me.
   * 
   * This parameter is required.
   * 
   * @example
   * SUBMITTED
   */
  relationType?: string;
  /**
   * @remarks
   * The approval status filter. Status filtering is not supported in the pending scenario. Valid values:
   * - APPROVING: Approving.
   * - APPROVED: Approved.
   * - REJECTED: Rejected.
   * - REVOKED: Revoked.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The start of the submission time range, in the format yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  submittedFrom?: string;
  /**
   * @remarks
   * The end of the submission time range, in the format yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-12-31 23:59:59
   */
  submittedTo?: string;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
      relationType: 'RelationType',
      status: 'Status',
      submittedFrom: 'SubmittedFrom',
      submittedTo: 'SubmittedTo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      relationType: 'string',
      status: 'string',
      submittedFrom: 'string',
      submittedTo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalTasksByUserRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListApprovalTasksByUserRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListApprovalTasksByUserRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

