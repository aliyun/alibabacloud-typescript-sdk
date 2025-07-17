// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskInstanceOperationLogsResponseBodyPagingInfoOperationLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the operation log was generated.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
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
   * The serial number of the operation.
   * 
   * @example
   * 1111
   */
  operationSeq?: number;
  /**
   * @remarks
   * The ID of the instance on which the operation was performed.
   * 
   * @example
   * 1234
   */
  taskInstanceId?: number;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 1000
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      operationContent: 'OperationContent',
      operationSeq: 'OperationSeq',
      taskInstanceId: 'TaskInstanceId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      operationContent: 'string',
      operationSeq: 'number',
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

export class ListTaskInstanceOperationLogsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The operation logs.
   */
  operationLogs?: ListTaskInstanceOperationLogsResponseBodyPagingInfoOperationLogs[];
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
   * The total number of entries returned.
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
      operationLogs: { 'type': 'array', 'itemType': ListTaskInstanceOperationLogsResponseBodyPagingInfoOperationLogs },
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

export class ListTaskInstanceOperationLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListTaskInstanceOperationLogsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
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
      pagingInfo: ListTaskInstanceOperationLogsResponseBodyPagingInfo,
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

