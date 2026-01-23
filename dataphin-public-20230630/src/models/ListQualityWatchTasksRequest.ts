// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityWatchTasksRequestListQuery extends $dara.Model {
  /**
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  bizUnitNameList?: string[];
  currentUserOwned?: boolean;
  dataSourceIdList?: string[];
  dataSourceOwnerList?: string[];
  dataSourceScopeList?: string[];
  dataSourceTypeList?: string[];
  errorRuleStrengthList?: string[];
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
  qualityOwnerList?: string[];
  statusList?: string[];
  tableOwnerList?: string[];
  tableTypeList?: string[];
  watchTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      bizUnitNameList: 'BizUnitNameList',
      currentUserOwned: 'CurrentUserOwned',
      dataSourceIdList: 'DataSourceIdList',
      dataSourceOwnerList: 'DataSourceOwnerList',
      dataSourceScopeList: 'DataSourceScopeList',
      dataSourceTypeList: 'DataSourceTypeList',
      errorRuleStrengthList: 'ErrorRuleStrengthList',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectNameList: 'ProjectNameList',
      qualityOwnerList: 'QualityOwnerList',
      statusList: 'StatusList',
      tableOwnerList: 'TableOwnerList',
      tableTypeList: 'TableTypeList',
      watchTypeList: 'WatchTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      bizUnitNameList: { 'type': 'array', 'itemType': 'string' },
      currentUserOwned: 'boolean',
      dataSourceIdList: { 'type': 'array', 'itemType': 'string' },
      dataSourceOwnerList: { 'type': 'array', 'itemType': 'string' },
      dataSourceScopeList: { 'type': 'array', 'itemType': 'string' },
      dataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      errorRuleStrengthList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectNameList: { 'type': 'array', 'itemType': 'string' },
      qualityOwnerList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      tableOwnerList: { 'type': 'array', 'itemType': 'string' },
      tableTypeList: { 'type': 'array', 'itemType': 'string' },
      watchTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitNameList)) {
      $dara.Model.validateArray(this.bizUnitNameList);
    }
    if(Array.isArray(this.dataSourceIdList)) {
      $dara.Model.validateArray(this.dataSourceIdList);
    }
    if(Array.isArray(this.dataSourceOwnerList)) {
      $dara.Model.validateArray(this.dataSourceOwnerList);
    }
    if(Array.isArray(this.dataSourceScopeList)) {
      $dara.Model.validateArray(this.dataSourceScopeList);
    }
    if(Array.isArray(this.dataSourceTypeList)) {
      $dara.Model.validateArray(this.dataSourceTypeList);
    }
    if(Array.isArray(this.errorRuleStrengthList)) {
      $dara.Model.validateArray(this.errorRuleStrengthList);
    }
    if(Array.isArray(this.projectNameList)) {
      $dara.Model.validateArray(this.projectNameList);
    }
    if(Array.isArray(this.qualityOwnerList)) {
      $dara.Model.validateArray(this.qualityOwnerList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.tableOwnerList)) {
      $dara.Model.validateArray(this.tableOwnerList);
    }
    if(Array.isArray(this.tableTypeList)) {
      $dara.Model.validateArray(this.tableTypeList);
    }
    if(Array.isArray(this.watchTypeList)) {
      $dara.Model.validateArray(this.watchTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksRequest extends $dara.Model {
  listQuery?: ListQualityWatchTasksRequestListQuery;
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
      listQuery: ListQualityWatchTasksRequestListQuery,
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

