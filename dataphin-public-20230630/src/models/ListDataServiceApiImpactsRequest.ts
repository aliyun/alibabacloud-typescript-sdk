// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiImpactsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-30 20:00:00
   */
  endTime?: string;
  /**
   * @example
   * CALL_COUNT
   */
  orderColumn?: string;
  /**
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
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
   * This parameter is required.
   */
  listQuery?: ListDataServiceApiImpactsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

