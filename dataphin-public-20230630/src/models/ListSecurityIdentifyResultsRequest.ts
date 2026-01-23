// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyResultsRequestListQuery extends $dara.Model {
  bizUnitNameList?: string[];
  /**
   * @example
   * 1
   */
  classifyId?: number;
  datasourceNameList?: string[];
  /**
   * @example
   * DEV
   */
  env?: string;
  isLocked?: boolean;
  /**
   * @example
   * test
   */
  keyword?: string;
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
  projectNameList?: string[];
  /**
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
  listQuery?: ListSecurityIdentifyResultsRequestListQuery;
  /**
   * @remarks
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

