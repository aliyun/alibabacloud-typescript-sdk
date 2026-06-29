// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubtaskDetail } from "./SubtaskDetail";


export class ListSubtasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. The default value is 0, indicating normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Response message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page number of the returned subtask list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of subtasks displayed per page in the response.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * List of subtasks.
   */
  subtasks?: SubtaskDetail[];
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of subtasks.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subtasks: 'Subtasks',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subtasks: { 'type': 'array', 'itemType': SubtaskDetail },
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subtasks)) {
      $dara.Model.validateArray(this.subtasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

