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

export class QueryApprovalInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of approval flow information.
   */
  data?: QueryApprovalInfoResponseBodyResultData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records requested per page.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The starting position of the current page.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryApprovalInfoResponseBodyResultData },
      page: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApprovalInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Return the result of the interface execution.
   */
  result?: QueryApprovalInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the API call was successful. Possible values are:
   * - true: success
   * - false: failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryApprovalInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

