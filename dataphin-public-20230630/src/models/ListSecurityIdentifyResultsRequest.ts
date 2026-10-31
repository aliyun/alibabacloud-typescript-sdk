// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyResultsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The names of the business units.
   */
  bizUnitNameList?: string[];
  /**
   * @remarks
   * The data classification ID.
   * 
   * @example
   * 1
   */
  classifyId?: number;
  /**
   * @remarks
   * The names of the data sources.
   */
  datasourceNameList?: string[];
  /**
   * @remarks
   * The environment identifier of the associated data source, project, or business unit.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Specifies whether the item is locked.
   */
  isLocked?: boolean;
  /**
   * @remarks
   * The keyword filter. Supports matching by table catalog, table name, Chinese table name, or field name.
   * 
   * @example
   * test
   */
  keyword?: string;
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
   * The names of the projects.
   */
  projectNameList?: string[];
  /**
   * @remarks
   * The filter for the effective status. Valid values:
   * - ENABLE: Enabled.
   * - DISABLE: Disabled.
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
   * The search criteria.
   */
  listQuery?: ListSecurityIdentifyResultsRequestListQuery;
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
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListSecurityIdentifyResultsRequestListQuery,
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

