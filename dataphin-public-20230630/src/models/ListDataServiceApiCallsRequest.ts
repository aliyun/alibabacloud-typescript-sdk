// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallsRequestListQuery extends $dara.Model {
  /**
   * @example
   * 20122
   */
  apiId?: number;
  /**
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * appKey
   * 
   * @example
   * 1021
   */
  appKey?: number;
  /**
   * @example
   * 192.168.1.1
   */
  clientIp?: string;
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
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appKey: 'AppKey',
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
   * This parameter is required.
   */
  listQuery?: ListDataServiceApiCallsRequestListQuery;
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

