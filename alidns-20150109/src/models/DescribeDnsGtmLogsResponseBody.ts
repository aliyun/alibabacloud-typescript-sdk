// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmLogsResponseBodyLogsLog extends $dara.Model {
  /**
   * @remarks
   * The formatted message content.
   * 
   * @example
   * addtest-pool-1
   */
  content?: string;
  /**
   * @remarks
   * The ID of the object on which the operation was performed.
   * 
   * @example
   * 121212
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the object on which the operation was performed.
   * 
   * @example
   * test-pool-1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the object on which the operation was performed.
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 6726
   */
  id?: number;
  /**
   * @remarks
   * The operation performed.
   */
  operAction?: string;
  /**
   * @remarks
   * The time when the operation was performed.
   * 
   * @example
   * 2018-01-24T07:35Z
   */
  operTime?: string;
  /**
   * @remarks
   * The timestamp of the operation.
   * 
   * @example
   * 1516779348000
   */
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      id: 'Id',
      operAction: 'OperAction',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      entityId: 'string',
      entityName: 'string',
      entityType: 'string',
      id: 'number',
      operAction: 'string',
      operTime: 'string',
      operTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBodyLogs extends $dara.Model {
  log?: DescribeDnsGtmLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': DescribeDnsGtmLogsResponseBodyLogsLog },
    };
  }

  validate() {
    if(Array.isArray(this.log)) {
      $dara.Model.validateArray(this.log);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned logs.
   */
  logs?: DescribeDnsGtmLogsResponseBodyLogs;
  /**
   * @remarks
   * The number of the returned page.
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
   * 50C60A29-2E93-425A-ABA8-068686E28873
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: DescribeDnsGtmLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.logs && typeof (this.logs as any).validate === 'function') {
      (this.logs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

