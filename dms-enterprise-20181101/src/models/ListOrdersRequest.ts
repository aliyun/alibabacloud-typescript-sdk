// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2022-04-09 11:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The scope of the tickets that you want to query. Valid values:
   * 
   * *   **AS_ADMIN**: all tickets.
   * *   **AS_COMMITTER**: the tickets that are submitted by the current user.
   * *   **AS_HANDLER**: the tickets to be processed by the current user.
   * *   **AS_OWNER**: the tickets that are processed by the current user.
   * *   **AS_Related**: the tickets that are related to the current user.
   * 
   * @example
   * AS_ADMIN
   */
  orderResultType?: string;
  /**
   * @remarks
   * The status of the tickets that you want to query. Valid values:
   * 
   * *   **ALL**: queries the tickets of all statuses.
   * *   **FINISHED**: queries the tickets that are completed.
   * *   **RUNNING**: queries the tickets that are being processed.
   * 
   * @example
   * ALL
   */
  orderStatus?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the tickets that you want to query. For more information, see [PluginType parameter](https://help.aliyun.com/document_detail/429109.html).
   * 
   * @example
   * DC_COMMON
   */
  pluginType?: string;
  /**
   * @remarks
   * The keyword that is used to query tickets.
   * 
   * @example
   * test
   */
  searchContent?: string;
  /**
   * @remarks
   * The time condition based on which you want to query tickets. Valid values:
   * 
   * *   **CREATE_TIME**: the time when a ticket was created.
   * *   **MODIFY_TIME**: the time when a ticket was last modified.
   * 
   * @example
   * CREATE_TIME
   */
  searchDateType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2022-04-08 11:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3000
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderResultType: 'OrderResultType',
      orderStatus: 'OrderStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pluginType: 'PluginType',
      searchContent: 'SearchContent',
      searchDateType: 'SearchDateType',
      startTime: 'StartTime',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      orderResultType: 'string',
      orderStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pluginType: 'string',
      searchContent: 'string',
      searchDateType: 'string',
      startTime: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

