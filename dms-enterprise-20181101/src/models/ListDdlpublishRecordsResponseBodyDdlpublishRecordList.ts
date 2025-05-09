// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList } from "./ListDdlpublishRecordsResponseBodyDdlpublishRecordListPublishTaskInfoList";


export class ListDDLPublishRecordsResponseBodyDDLPublishRecordList extends $dara.Model {
  /**
   * @remarks
   * The time when the approval expires.
   * 
   * @example
   * 2020-12-14 20:52:38
   */
  auditExpireTime?: string;
  /**
   * @remarks
   * The approval state of the ticket. Valid values:
   * 
   * *   **EXEMPT_PASS**: The ticket passes without approval.
   * *   **TO_AUDIT**: The ticket is pending for approval.
   * *   **CANCEL**: The ticket is canceled.
   * *   **SUCCESS**: The ticket is approved.
   * *   **FAIL**: The ticket fails to pass the approval.
   * 
   * @example
   * CANCEL
   */
  auditStatus?: string;
  /**
   * @remarks
   * Release remarks.
   * 
   * @example
   * Release remarks
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the user who creates the ticket. You can obtain the user ID by calling the [GetUser](https://help.aliyun.com/document_detail/147098.html) operation and querying the value of the UserId parameter. The value is not the unique ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 1423
   */
  creatorId?: number;
  /**
   * @remarks
   * Indicates whether the approval is terminated. Valid values:
   * 
   * *   **true**: The approval is terminated.
   * *   **false**: The approval is not terminated.
   * 
   * > Multiple reasons can terminate the approval. For example, you withdraw the application or your ticket is not approved before the specified time.
   * 
   * @example
   * true
   */
  finality?: boolean;
  /**
   * @remarks
   * The reason for the termination.
   * 
   * @example
   * CANCEL
   */
  finalityReason?: string;
  /**
   * @remarks
   * The publishing state of the ticket. Valid values:
   * 
   * *   **START**: The ticket is created.
   * *   **ANALYZE**: The ticket is under analysis.
   * *   **AUDIT**: The ticket is under approval.
   * *   **DISPATCH**: A task is generated for the ticket.
   * *   **SUCCESS**: The task is successful.
   * 
   * @example
   * AUDIT
   */
  publishStatus?: string;
  /**
   * @remarks
   * The list of publishing tasks.
   */
  publishTaskInfoList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList[];
  /**
   * @remarks
   * The risk level of the operation. Valid values:
   * 
   * *   **NONE_RISK**: The operation does not have risks.
   * *   **LOW_RISK**: The operation is at low risk.
   * *   **MIDDLE_RISK**: The operation is at medium risk.
   * *   **HIGH_RISK**: The operation is at high risk.
   * 
   * @example
   * LOW_RISK
   */
  riskLevel?: string;
  /**
   * @remarks
   * The description of the publishing state.
   * 
   * @example
   * CANCEL
   */
  statusDesc?: string;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * 432153
   */
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      auditExpireTime: 'AuditExpireTime',
      auditStatus: 'AuditStatus',
      comment: 'Comment',
      creatorId: 'CreatorId',
      finality: 'Finality',
      finalityReason: 'FinalityReason',
      publishStatus: 'PublishStatus',
      publishTaskInfoList: 'PublishTaskInfoList',
      riskLevel: 'RiskLevel',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditExpireTime: 'string',
      auditStatus: 'string',
      comment: 'string',
      creatorId: 'number',
      finality: 'boolean',
      finalityReason: 'string',
      publishStatus: 'string',
      publishTaskInfoList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList },
      riskLevel: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publishTaskInfoList)) {
      $dara.Model.validateArray(this.publishTaskInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

