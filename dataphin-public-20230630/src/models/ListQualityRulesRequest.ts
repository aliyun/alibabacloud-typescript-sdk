// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesRequestListQuery extends $dara.Model {
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
  statusList?: string[];
  templateIdList?: number[];
  testRunTaskStatusList?: string[];
  testRunTaskValidateResultList?: string[];
  /**
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogList: 'CatalogList',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      ruleStrengthList: 'RuleStrengthList',
      statusList: 'StatusList',
      templateIdList: 'TemplateIdList',
      testRunTaskStatusList: 'TestRunTaskStatusList',
      testRunTaskValidateResultList: 'TestRunTaskValidateResultList',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      ruleStrengthList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      templateIdList: { 'type': 'array', 'itemType': 'number' },
      testRunTaskStatusList: { 'type': 'array', 'itemType': 'string' },
      testRunTaskValidateResultList: { 'type': 'array', 'itemType': 'string' },
      watchId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogList)) {
      $dara.Model.validateArray(this.catalogList);
    }
    if(Array.isArray(this.ruleStrengthList)) {
      $dara.Model.validateArray(this.ruleStrengthList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.templateIdList)) {
      $dara.Model.validateArray(this.templateIdList);
    }
    if(Array.isArray(this.testRunTaskStatusList)) {
      $dara.Model.validateArray(this.testRunTaskStatusList);
    }
    if(Array.isArray(this.testRunTaskValidateResultList)) {
      $dara.Model.validateArray(this.testRunTaskValidateResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesRequest extends $dara.Model {
  listQuery?: ListQualityRulesRequestListQuery;
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
      listQuery: ListQualityRulesRequestListQuery,
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

