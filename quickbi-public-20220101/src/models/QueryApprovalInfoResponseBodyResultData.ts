// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApprovalInfoResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Applicant\\"s user ID, qbi user ID.
   * 
   * @example
   * 1359508
   */
  applicantId?: string;
  /**
   * @remarks
   * Applicant\\"s nickname.
   * 
   * @example
   * Li Fei
   */
  applicantName?: string;
  /**
   * @remarks
   * Application ID.
   * 
   * @example
   * 64813ef6da58e80eef8ed2f9
   */
  applicationId?: string;
  /**
   * @remarks
   * Application reason.
   * 
   * @example
   * Development needs
   */
  applyReason?: string;
  /**
   * @remarks
   * Approver\\"s user ID, qbi user ID.
   * 
   * @example
   * sdasascasxasd
   */
  approverId?: string;
  /**
   * @remarks
   * Approver\\"s nickname.
   * 
   * @example
   * data_fusion_002
   */
  approverName?: string;
  /**
   * @remarks
   * Whether the resource has been deleted:
   * - true: Deleted
   * - false: Not deleted
   * 
   * @example
   * true
   */
  deleteFlag?: boolean;
  /**
   * @remarks
   * Permission expiration date, timestamp.
   * 
   * @example
   * 1708568097135
   */
  expireDate?: number;
  /**
   * @remarks
   * Permission approval status:
   * - 0: Under review, corresponding to 0 in the request parameters
   * - 1: Approved, corresponding to 1 in the request parameters
   * - 2: Rejected, corresponding to 1 in the request parameters
   * 
   * @example
   * 0
   */
  flagStatus?: number;
  /**
   * @remarks
   * Application creation time, timestamp.
   * 
   * @example
   * 1687315758
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Application modification time, timestamp.
   * 
   * @example
   * 1640595729000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Handling reason.
   * 
   * @example
   * Development needs
   */
  handleReason?: string;
  /**
   * @remarks
   * The ID of the resource for which permission is requested.
   * 
   * @example
   * acl-ct4t2e4u2x4ej1bzur
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource for which permission is requested (e.g., report name, space name...).
   * 
   * @example
   * Test Resources
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * DASHBOARD
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * Test Workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      applicationId: 'ApplicationId',
      applyReason: 'ApplyReason',
      approverId: 'ApproverId',
      approverName: 'ApproverName',
      deleteFlag: 'DeleteFlag',
      expireDate: 'ExpireDate',
      flagStatus: 'FlagStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      handleReason: 'HandleReason',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicantId: 'string',
      applicantName: 'string',
      applicationId: 'string',
      applyReason: 'string',
      approverId: 'string',
      approverName: 'string',
      deleteFlag: 'boolean',
      expireDate: 'number',
      flagStatus: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      handleReason: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

