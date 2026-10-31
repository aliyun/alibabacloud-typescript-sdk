// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalTaskDetailResponseBodyDetailInfoApproveProcessSteps extends $dara.Model {
  /**
   * @remarks
   * The list of candidate approver IDs.
   * 
   * @example
   * user001,user002
   */
  approveUserIds?: string;
  /**
   * @remarks
   * The list of candidate approver names.
   * 
   * @example
   * Zhang San, Li Si
   */
  approveUserNames?: string;
  /**
   * @remarks
   * The operation time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-07-30 11:00:00
   */
  operateTime?: string;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * user001
   */
  operateUserId?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * Zhang San
   */
  operateUserName?: string;
  /**
   * @remarks
   * The operation.
   * 
   * @example
   * SUBMIT
   */
  operation?: string;
  /**
   * @remarks
   * The step name.
   * 
   * @example
   * Submit application
   */
  processStepName?: string;
  /**
   * @remarks
   * The approval comment.
   * 
   * @example
   * Approved
   */
  reason?: string;
  /**
   * @remarks
   * The approval result.
   * 
   * @example
   * APPROVED
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      approveUserIds: 'ApproveUserIds',
      approveUserNames: 'ApproveUserNames',
      operateTime: 'OperateTime',
      operateUserId: 'OperateUserId',
      operateUserName: 'OperateUserName',
      operation: 'Operation',
      processStepName: 'ProcessStepName',
      reason: 'Reason',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveUserIds: 'string',
      approveUserNames: 'string',
      operateTime: 'string',
      operateUserId: 'string',
      operateUserName: 'string',
      operation: 'string',
      processStepName: 'string',
      reason: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalTaskDetailResponseBodyDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the applicant.
   * 
   * @example
   * user001
   */
  applicantId?: string;
  /**
   * @remarks
   * The name of the applicant.
   * 
   * @example
   * Zhang San
   */
  applicantName?: string;
  /**
   * @remarks
   * The approval type. Valid values:
   * - APPROVE: Permission approval.
   * - MANAGE: Management.
   * - OTHERS: Others.
   * - ATOMIC: Atomic metric approval.
   * - BIZ_OBJECT: Business object approval.
   * - BIZ_PROCESS: Business activity approval.
   * - PUBLISH_APPROVE: Publish approval.
   * - BASELINE_APPROVE: Baseline approval.
   * - CODE_REVIEW: Asset approval.
   * - OBJECT_CODE_REVIEW: Code review.
   * - STANDARD_APPROVAL: Standard online approval.
   * - BATCH_STANDARD_APPROVAL: Batch standard online approval.
   * - STANDARD_OFFLINE_APPROVAL: Standard offline approval.
   * - BATCH_STANDARD_OFFLINE_APPROVAL: Batch standard offline approval.
   * - PRIVILEGE_TRANSFER_APPROVAL: Privilege transfer approval.
   * - QD_FEATURE_ONLINE: Tag listing.
   * - QD_FEATURE_OFFLINE: Tag delisting.
   * - QD_CLUSTER_ONLINE: Group online.
   * - QD_CLUSTER_OFFLINE: Group offline.
   * - QD_MEMBER_ADD_APP: Member added to application.
   * - QD_FEATURE_ADD_APP: Tag added to application.
   * - QD_CLUSTER_ADD_APP: Group added to application.
   * - QD_FEATURE_ADD_PROJECT: Tag added to project.
   * - QD_CLUSTER_ADD_PROJECT: Group added to project.
   * - TASK_DATA_DOWNLOAD: Data download.
   * - CUSTOM_OPERATE: Custom operation.
   * - PRIVACY_COMPUTING: Privacy-preserving computation.
   * - MDC_TOPIC_DIR_PUBLISH: Asset topic directory publishing.
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
   * The list of approval process steps.
   */
  approveProcessSteps?: GetApprovalTaskDetailResponseBodyDetailInfoApproveProcessSteps[];
  /**
   * @remarks
   * The JSON string of the task details.
   * 
   * @example
   * {}
   */
  bizContent?: string;
  /**
   * @remarks
   * The completion time. Format: yyyy-MM-dd HH:mm:ss. This field is empty if the task is not completed.
   * 
   * @example
   * 2025-07-30 12:00:00
   */
  finishedAt?: string;
  /**
   * @remarks
   * The approval flow ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The source system.
   * 
   * @example
   * Dataphin
   */
  sourceSystem?: string;
  /**
   * @remarks
   * The approval status. Valid values:
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
   * The submission time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-07-30 10:00:00
   */
  submittedAt?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Data source application
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      approvalType: 'ApprovalType',
      approveProcessSteps: 'ApproveProcessSteps',
      bizContent: 'BizContent',
      finishedAt: 'FinishedAt',
      id: 'Id',
      sourceSystem: 'SourceSystem',
      status: 'Status',
      submittedAt: 'SubmittedAt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'string',
      applicantName: 'string',
      approvalType: 'string',
      approveProcessSteps: { 'type': 'array', 'itemType': GetApprovalTaskDetailResponseBodyDetailInfoApproveProcessSteps },
      bizContent: 'string',
      finishedAt: 'string',
      id: 'number',
      sourceSystem: 'string',
      status: 'string',
      submittedAt: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approveProcessSteps)) {
      $dara.Model.validateArray(this.approveProcessSteps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The approval task details.
   */
  detailInfo?: GetApprovalTaskDetailResponseBodyDetailInfo;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend response exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detailInfo: 'DetailInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detailInfo: GetApprovalTaskDetailResponseBodyDetailInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.detailInfo && typeof (this.detailInfo as any).validate === 'function') {
      (this.detailInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

