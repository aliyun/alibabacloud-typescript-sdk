// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyResultsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Business unit names.
   */
  bizUnitNameList?: string[];
  /**
   * @remarks
   * Data classification ID.
   * 
   * @example
   * 1
   */
  classifyId?: number;
  /**
   * @remarks
   * Data source names.
   */
  datasourceNameList?: string[];
  /**
   * @remarks
   * Environment identifier of the data source, project, or business unit.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Whether it is locked.
   */
  isLocked?: boolean;
  /**
   * @remarks
   * Keyword filter. Supports matching by table catalog, table name, table display name, and field name.
   * 
   * @example
   * test
   */
  keyword?: string;
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
  /**
   * @remarks
   * Project names.
   */
  projectNameList?: string[];
  /**
   * @remarks
   * Effective status filter: ENABLE or DISABLE.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitNameList: 'BizUnitNameList',
      classifyId: 'ClassifyId',
      datasourceNameList: 'DatasourceNameList',
      env: 'Env',
      isLocked: 'IsLocked',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectNameList: 'ProjectNameList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitNameList: { 'type': 'array', 'itemType': 'string' },
      classifyId: 'number',
      datasourceNameList: { 'type': 'array', 'itemType': 'string' },
      env: 'string',
      isLocked: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectNameList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitNameList)) {
      $dara.Model.validateArray(this.bizUnitNameList);
    }
    if(Array.isArray(this.datasourceNameList)) {
      $dara.Model.validateArray(this.datasourceNameList);
    }
    if(Array.isArray(this.projectNameList)) {
      $dara.Model.validateArray(this.projectNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityIdentifyResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Query conditions.
   */
  listQuery?: ListSecurityIdentifyResultsRequestListQuery;
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
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListSecurityIdentifyResultsRequestListQuery,
      opTenantId: 'number',
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

