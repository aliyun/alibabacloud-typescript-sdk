// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallStatisticsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The end time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-30 20:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The column by which to sort the results. Valid values:
   * - CALL_COUNT: the number of calls.
   * - ERROR_COUNT: the number of exceptions.
   * - ERROR_RATE: the error rate.
   * - AVG_RESPONSE_TIME: the average response time.
   * - OFFLINE_RATE: the offline percentage.
   * Default value: CALL_COUNT.
   * 
   * @example
   * CALL_COUNT
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - 1: ascending order.
   * - 2: descending order.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-dd HH:mm:ss.
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
   * The search conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataServiceApiCallStatisticsRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The data service project ID.
   * 
   * > If this parameter is not specified:
   * > - Super administrators can query data of all service projects.
   * > - Users other than super administrators can query data of service projects where they have the service project administrator or O&M user permissions.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListDataServiceApiCallStatisticsRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

