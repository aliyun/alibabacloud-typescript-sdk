// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiImpactsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The ID of the called API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
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
   * The column used for sorting. Valid values: CALL_COUNT: the number of calls. ERROR_COUNT: the number of errors. ERROR_RATE: the error rate. Default value: CALL_COUNT.
   * 
   * @example
   * CALL_COUNT
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values: 1: ascending order. 2: descending order. Default value: 1.
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
   * The number of records per page. Default value: 20.
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
      apiId: 'ApiId',
      appName: 'AppName',
      endTime: 'EndTime',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      appName: 'string',
      endTime: 'string',
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

export class ListDataServiceApiImpactsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataServiceApiImpactsRequestListQuery;
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
   * The ID of the data service project.
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
      listQuery: ListDataServiceApiImpactsRequestListQuery,
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

