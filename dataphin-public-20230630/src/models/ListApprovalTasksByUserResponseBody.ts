// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalTasksByUserResponseBodyPageResultTaskList extends $dara.Model {
  /**
   * @remarks
   * The applicant ID.
   * 
   * @example
   * user001
   */
  applicantId?: string;
  /**
   * @remarks
   * The applicant name.
   * 
   * @example
   * John
   */
  applicantName?: string;
  /**
   * @remarks
   * The approval type.
   * 
   * @example
   * DATA_SOURCE
   */
  approvalType?: string;
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
   * The relationship between the current user and the approval task.
   * 
   * @example
   * SUBMITTED
   */
  relationType?: string;
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
   * The approval status.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The submission time.
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
   * Datasource application
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      applicantId: 'ApplicantId',
      applicantName: 'ApplicantName',
      approvalType: 'ApprovalType',
      id: 'Id',
      relationType: 'RelationType',
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
      id: 'number',
      relationType: 'string',
      sourceSystem: 'string',
      status: 'string',
      submittedAt: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalTasksByUserResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of approval tasks.
   */
  taskList?: ListApprovalTasksByUserResponseBodyPageResultTaskList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': ListApprovalTasksByUserResponseBodyPageResultTaskList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalTasksByUserResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend error details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListApprovalTasksByUserResponseBodyPageResult;
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListApprovalTasksByUserResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

