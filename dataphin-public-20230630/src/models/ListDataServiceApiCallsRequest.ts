// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 20122
   */
  apiId?: number;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * The application key.
   * >Notice: This parameter is deprecated. Use AppKeyStr instead.
   * 
   * @example
   * 12345
   * 
   * @deprecated
   */
  appKey?: number;
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * app12345
   */
  appKeyStr?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.1.1
   */
  clientIp?: string;
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
  /**
   * @remarks
   * Indicates whether the call was successful.
   */
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appKey: 'AppKey',
      appKeyStr: 'AppKeyStr',
      clientIp: 'ClientIp',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      appKey: 'number',
      appKeyStr: 'string',
      clientIp: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
      successful: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiCallsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListDataServiceApiCallsRequestListQuery;
  /**
   * @remarks
   * The ID of the tenant.
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
      listQuery: ListDataServiceApiCallsRequestListQuery,
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

