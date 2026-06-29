// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * API name.
   * 
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * 102113
   */
  groupId?: number;
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
   * Number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      groupId: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisRequest extends $dara.Model {
  /**
   * @remarks
   * Search conditions.
   */
  listQuery?: ListDataServicePublishedApisRequestListQuery;
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
      listQuery: ListDataServicePublishedApisRequestListQuery,
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

