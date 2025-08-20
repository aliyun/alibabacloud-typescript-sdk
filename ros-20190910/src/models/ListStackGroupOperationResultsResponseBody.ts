// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupOperationResultsResponseBodyStackGroupOperationResults extends $dara.Model {
  /**
   * @remarks
   * The ID of the account to which the stack instance belongs.
   * 
   * *   If the stack group has self-managed permissions, the stack instance belongs to an Alibaba Cloud account.
   * *   If the stack group has service-managed permissions, the stack instance belongs to a member account in the resource directory.
   * 
   * >  For more information about the account, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * 175458090349****
   */
  accountId?: string;
  /**
   * @remarks
   * The folder ID of the resource directory.
   * 
   * >  This parameter is returned only when the stack group is granted service-managed permissions.
   * 
   * @example
   * "fd-4PvlVLOL8v"
   */
  rdFolderId?: string;
  /**
   * @remarks
   * The region ID of the stack instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the operation.
   * 
   * Valid values:
   * 
   * *   RUNNING: The operation is being performed.
   * *   SUCCEEDED: The operation succeeded.
   * *   FAILED: The operation failed.
   * *   STOPPING: The operation is being stopped.
   * *   STOPPED: The operation is stopped.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  /**
   * @remarks
   * The reason why the operation is in a specific state.
   * 
   * >  This parameter is returned only when stack instances are in the OUTDATED state.
   * 
   * @example
   * User initiated operation
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      rdFolderId: 'string',
      regionId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the results of the operation.
   */
  stackGroupOperationResults?: ListStackGroupOperationResultsResponseBodyStackGroupOperationResults[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperationResults: 'StackGroupOperationResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperationResults: { 'type': 'array', 'itemType': ListStackGroupOperationResultsResponseBodyStackGroupOperationResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackGroupOperationResults)) {
      $dara.Model.validateArray(this.stackGroupOperationResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

