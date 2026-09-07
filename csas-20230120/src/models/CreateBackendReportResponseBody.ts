// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackendReportResponseBodyItemsTarget extends $dara.Model {
  /**
   * @remarks
   * The SASE user ID.
   * 
   * @example
   * su_1b91e674235a25e4117faf5c36a8ad4e69a14303247fb7d9f2046ce8b372****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendReportResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The approval instance ID generated after a successful creation. This parameter is not returned if the creation fails.
   * 
   * @example
   * approval-6b5188a28634****
   */
  approvalId?: string;
  /**
   * @remarks
   * The error code returned when the current combination fails to be created. This parameter is not returned if the creation succeeds.
   * 
   * @example
   * TargetNotFound
   */
  code?: string;
  /**
   * @remarks
   * The filing effective status. Enabled is returned when the creation succeeds, which indicates that the filing is valid.
   * 
   * @example
   * Enabled
   */
  effectStatus?: string;
  /**
   * @remarks
   * The error message returned when the current combination fails to be created. This parameter is not returned if the creation succeeds.
   * 
   * @example
   * target user is not found
   */
  message?: string;
  /**
   * @remarks
   * The filing object corresponding to the current combination. The fields vary based on the PolicyType value.
   * 
   * @example
   * [{"ApplicationId":"pa-application-92b60359213a****"}]
   */
  reportObject?: any;
  /**
   * @remarks
   * The filing type. BackendReport is always returned when the creation succeeds, which indicates a backend filing.
   * 
   * @example
   * BackendReport
   */
  reportType?: string;
  /**
   * @remarks
   * The approval status. Approved is returned when the creation succeeds, which indicates that the filing is approved.
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the current combination is created.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The filing user corresponding to the current combination.
   */
  target?: CreateBackendReportResponseBodyItemsTarget;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      code: 'Code',
      effectStatus: 'EffectStatus',
      message: 'Message',
      reportObject: 'ReportObject',
      reportType: 'ReportType',
      status: 'Status',
      success: 'Success',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      code: 'string',
      effectStatus: 'string',
      message: 'string',
      reportObject: 'any',
      reportType: 'string',
      status: 'string',
      success: 'boolean',
      target: CreateBackendReportResponseBodyItemsTarget,
    };
  }

  validate() {
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackendReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of user-object combinations that failed to be created.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The processing results for each user-object combination. If some combinations fail, the operation still returns results for all combinations.
   */
  items?: CreateBackendReportResponseBodyItems[];
  /**
   * @remarks
   * The number of deduplicated filing objects.
   * 
   * @example
   * 1
   */
  objectCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E8****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of user-object combinations that are created.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * The number of deduplicated filing users.
   * 
   * @example
   * 1
   */
  targetCount?: number;
  /**
   * @remarks
   * The total number of expanded user-object combinations.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      items: 'Items',
      objectCount: 'ObjectCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      targetCount: 'TargetCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      items: { 'type': 'array', 'itemType': CreateBackendReportResponseBodyItems },
      objectCount: 'number',
      requestId: 'string',
      successCount: 'number',
      targetCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

