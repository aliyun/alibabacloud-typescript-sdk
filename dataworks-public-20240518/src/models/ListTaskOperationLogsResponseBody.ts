// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskOperationLogsResponseBodyPagingInfoOperationLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the operation logs are generated.
   * 
   * The format is a 13-digit number, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The object type. Valid values:
   * - Task: node
   * - TaskInstance: node instance
   * 
   * @example
   * TaskInstance
   */
  objectType?: string;
  /**
   * @remarks
   * The operation content.
   * 
   * @example
   * Freeze tasks
   */
  operationContent?: string;
  /**
   * @remarks
   * The operation sequence number.
   * 
   * @example
   * 1111
   */
  operationSeq?: number;
  /**
   * @remarks
   * The ID of the node on which the operation was performed.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The ID of the node instance on which the operation was performed.
   * 
   * @example
   * 1234
   */
  taskInstanceId?: number;
  /**
   * @remarks
   * The account ID of the user who performed the operation.
   * 
   * @example
   * 1000
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      objectType: 'ObjectType',
      operationContent: 'OperationContent',
      operationSeq: 'OperationSeq',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      objectType: 'string',
      operationContent: 'string',
      operationSeq: 'number',
      taskId: 'number',
      taskInstanceId: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskOperationLogsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of operation logs.
   */
  operationLogs?: ListTaskOperationLogsResponseBodyPagingInfoOperationLogs[];
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
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      operationLogs: 'OperationLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLogs: { 'type': 'array', 'itemType': ListTaskOperationLogsResponseBodyPagingInfoOperationLogs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operationLogs)) {
      $dara.Model.validateArray(this.operationLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskOperationLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListTaskOperationLogsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListTaskOperationLogsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

