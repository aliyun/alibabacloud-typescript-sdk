// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallStatisticsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * End time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-30 20:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Search keyword.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * Sort column. Valid values: CALL_COUNT (call count), ERROR_COUNT (error count), ERROR_RATE (error rate), AVG_RESPONSE_TIME (average response time), and OFFLINE_RATE (offline percentage). Default value: CALL_COUNT.
   * 
   * @example
   * CALL_COUNT
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sort order. Valid values: 1 (ascending) and 2 (descending). Default value: 1.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * Page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      keyword: 'Keyword',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      keyword: 'string',
      orderColumn: 'string',
      orderType: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiCallStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Search conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataServiceApiCallStatisticsRequestListQuery;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Data service project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListDataServiceApiCallStatisticsRequestListQuery,
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

