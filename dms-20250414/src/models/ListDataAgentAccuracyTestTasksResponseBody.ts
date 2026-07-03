// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentAccuracyTestTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the accuracy test to which the task belongs.
   * 
   * @example
   * at-106n4rg17gv9fxxxxxxxxxx
   */
  accuracyTestInsId?: string;
  /**
   * @remarks
   * The accuracy test task ID.
   * 
   * @example
   * 692abb8f-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  accuracyTestTaskId?: string;
  /**
   * @remarks
   * The number of completed test subtasks.
   * 
   * @example
   * 16
   */
  finishedTaskNumber?: number;
  /**
   * @remarks
   * The time when the document was created.
   * 
   * @example
   * 2026-06-30T08:03:30.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the document was last modified.
   * 
   * @example
   * 2026-06-30T08:03:30.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The maximum number of concurrent sessions during the test.
   * 
   * @example
   * 5
   */
  maxConcurrent?: number;
  /**
   * @remarks
   * Specifies whether sessions are displayed after analysis. This feature is not supported.
   * 
   * @example
   * true
   */
  needDelete?: boolean;
  /**
   * @remarks
   * The status of the custom agent.
   * 
   * @example
   * 0 PENDING,1 RUNNING,2 COMPLETED,3 STOPPED,4 FAILED
   */
  status?: number;
  /**
   * @remarks
   * The total number of subtasks in the accuracy test task.
   * 
   * @example
   * 20
   */
  totalTaskNumber?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
      accuracyTestTaskId: 'AccuracyTestTaskId',
      finishedTaskNumber: 'FinishedTaskNumber',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      maxConcurrent: 'MaxConcurrent',
      needDelete: 'NeedDelete',
      status: 'Status',
      totalTaskNumber: 'TotalTaskNumber',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
      accuracyTestTaskId: 'string',
      finishedTaskNumber: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      maxConcurrent: 'number',
      needDelete: 'boolean',
      status: 'number',
      totalTaskNumber: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentAccuracyTestTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentAccuracyTestTasksResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * NesLo****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-xxx-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataAgentAccuracyTestTasksResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

