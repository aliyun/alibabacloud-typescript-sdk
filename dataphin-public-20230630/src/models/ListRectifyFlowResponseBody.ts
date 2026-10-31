// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRectifyFlowResponseBodyPageResultData extends $dara.Model {
  /**
   * @remarks
   * The completion time. The value is a UNIX timestamp in milliseconds. If the process is not completed, this parameter is empty.
   * 
   * @example
   * 648218233037
   */
  finishTime?: number;
  /**
   * @remarks
   * The total number of issues in the current process.
   * 
   * @example
   * 264461775547
   */
  problemCount?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 474448887101
   */
  rectifyId?: number;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * test
   */
  rectifyName?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  rectifyPriority?: string;
  /**
   * @remarks
   * The rectifier ID.
   * 
   * @example
   * 3001
   */
  rectifyUser?: string;
  /**
   * @remarks
   * The rectifier name.
   * 
   * @example
   * test
   */
  rectifyUserName?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 356278124692
   */
  startTime?: number;
  /**
   * @remarks
   * The process status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The initiator ID.
   * 
   * @example
   * 3001
   */
  submitUser?: string;
  /**
   * @remarks
   * The initiator name.
   * 
   * @example
   * test
   */
  submitUserName?: string;
  /**
   * @remarks
   * The verifier ID.
   * 
   * @example
   * 3001
   */
  verifyUser?: string;
  /**
   * @remarks
   * The verifier name.
   * 
   * @example
   * test
   */
  verifyUserName?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      problemCount: 'ProblemCount',
      rectifyId: 'RectifyId',
      rectifyName: 'RectifyName',
      rectifyPriority: 'RectifyPriority',
      rectifyUser: 'RectifyUser',
      rectifyUserName: 'RectifyUserName',
      startTime: 'StartTime',
      status: 'Status',
      submitUser: 'SubmitUser',
      submitUserName: 'SubmitUserName',
      verifyUser: 'VerifyUser',
      verifyUserName: 'VerifyUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'number',
      problemCount: 'number',
      rectifyId: 'number',
      rectifyName: 'string',
      rectifyPriority: 'string',
      rectifyUser: 'string',
      rectifyUserName: 'string',
      startTime: 'number',
      status: 'string',
      submitUser: 'string',
      submitUserName: 'string',
      verifyUser: 'string',
      verifyUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRectifyFlowResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The processes on the current page.
   */
  data?: ListRectifyFlowResponseBodyPageResultData[];
  /**
   * @remarks
   * The total number of processes.
   * 
   * @example
   * 699386170553
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRectifyFlowResponseBodyPageResultData },
      totalCount: 'number',
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

export class ListRectifyFlowResponseBody extends $dara.Model {
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The pagination result.
   */
  pageResult?: ListRectifyFlowResponseBodyPageResult;
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
      pageResult: ListRectifyFlowResponseBodyPageResult,
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

