// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskInstanceOperationLogsResponseBodyPagingInfoOperationLogs } from "./ListTaskInstanceOperationLogsResponseBodyPagingInfoOperationLogs";


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

