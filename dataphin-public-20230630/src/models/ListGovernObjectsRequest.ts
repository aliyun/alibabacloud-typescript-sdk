// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGovernObjectsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The governance item type. Valid values:
   * 
   * - TABLE
   * - DATASOURCE_TABLE
   * - DATASOURCE
   * - INDEX
   * - REALTIME_LOGICAL_TABLE
   * - QD_FEATURE
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  governItemType?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * user123
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The list of project names used to filter results.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The list of governance object statuses. Valid values:
   * 
   * - NEW
   * - VERIFY
   * - FINISHED
   * - IGNORE
   */
  statusList?: string[];
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - ALL
   * - OWNER
   * - PROJECT
   * 
   * @example
   * ALL
   */
  viewType?: string;
  static names(): { [key: string]: string } {
    return {
      governItemType: 'GovernItemType',
      keyword: 'Keyword',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectNames: 'ProjectNames',
      statusList: 'StatusList',
      viewType: 'ViewType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governItemType: 'string',
      keyword: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      viewType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGovernObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListGovernObjectsRequestListQuery;
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
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListGovernObjectsRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

