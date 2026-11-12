// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * a9a6474b935d41bcb531250bb5d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the simple application server. Valid values:
   * 
   * - Pending
   * 
   * - Starting
   * 
   * - Running
   * 
   * - Stopping
   * 
   * - Stopped
   * 
   * - Resetting
   * 
   * - Upgrading
   * 
   * - Disabled
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   */
  instanceStatuses?: ListInstanceStatusResponseBodyInstanceStatuses[];
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
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 54
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceStatuses: 'InstanceStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatuses: { 'type': 'array', 'itemType': ListInstanceStatusResponseBodyInstanceStatuses },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatuses)) {
      $dara.Model.validateArray(this.instanceStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

