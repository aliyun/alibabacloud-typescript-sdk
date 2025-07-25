// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAlertLogsResponseBodyLogsLog extends $dara.Model {
  /**
   * @remarks
   * Alert type:
   * - ALERT
   * - RESUME
   * 
   * @example
   * ALERT
   */
  actionType?: string;
  /**
   * @remarks
   * The alert content.
   * 
   * @example
   * The alert content.
   */
  content?: string;
  /**
   * @remarks
   * Alarm object types:
   * - GTM_ADDRESS: Address
   * - GTM_ADDRESS_POOL: Address Pool
   * - GTM_INSTANCE: Instance
   * - GTM_MONITOR_TEMPLATE: Health Check Template
   * 
   * @example
   * GTM_ADDRESS
   */
  entityType?: string;
  /**
   * @remarks
   * Alert log time (timestamp).
   * 
   * @example
   * 1711328826977
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      content: 'Content',
      entityType: 'EntityType',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      content: 'string',
      entityType: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAlertLogsResponseBodyLogs extends $dara.Model {
  log?: ListCloudGtmAlertLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': ListCloudGtmAlertLogsResponseBodyLogsLog },
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

export class ListCloudGtmAlertLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert logs.
   */
  logs?: ListCloudGtmAlertLogsResponseBodyLogs;
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of alarm log entries.
   * 
   * @example
   * 15
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages.
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
      logs: ListCloudGtmAlertLogsResponseBodyLogs,
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

