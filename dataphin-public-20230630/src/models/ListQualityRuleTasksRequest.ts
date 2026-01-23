// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRuleTasksRequestListQuery extends $dara.Model {
  /**
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  catalogList?: string[];
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
  ruleStrengthList?: string[];
  ruleTagList?: string[];
  statusList?: string[];
  validateResultList?: string[];
  /**
   * @example
   * 1
   */
  watchTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      catalogList: 'CatalogList',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      ruleStrengthList: 'RuleStrengthList',
      ruleTagList: 'RuleTagList',
      statusList: 'StatusList',
      validateResultList: 'ValidateResultList',
      watchTaskId: 'WatchTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      catalogList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      ruleStrengthList: { 'type': 'array', 'itemType': 'string' },
      ruleTagList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      validateResultList: { 'type': 'array', 'itemType': 'string' },
      watchTaskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogList)) {
      $dara.Model.validateArray(this.catalogList);
    }
    if(Array.isArray(this.ruleStrengthList)) {
      $dara.Model.validateArray(this.ruleStrengthList);
    }
    if(Array.isArray(this.ruleTagList)) {
      $dara.Model.validateArray(this.ruleTagList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.validateResultList)) {
      $dara.Model.validateArray(this.validateResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRuleTasksRequest extends $dara.Model {
  listQuery?: ListQualityRuleTasksRequestListQuery;
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
      listQuery: ListQualityRuleTasksRequestListQuery,
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

