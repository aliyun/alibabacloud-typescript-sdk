// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The rule type. Valid values: CONSISTENT (Consistency), EFFECTIVE (Effectiveness), TIMELINESE (Timeliness), ACCURATE (Accuracy), UNIQUENESS (Uniqueness), COMPLETENESS (Completeness), STABILITY (Stability), and CUSTOM (Custom).
   */
  catalogList?: string[];
  /**
   * @remarks
   * The search keyword. Supports searching by rule name and validation object.
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
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule strength. Valid values: STRONG (Strong) and WEAK (Weak).
   */
  ruleStrengthList?: string[];
  /**
   * @remarks
   * The effective status of the rule. Valid values: ENABLE (Enabled) and DISABLE (Disabled).
   */
  statusList?: string[];
  /**
   * @remarks
   * The rule template.
   */
  templateIdList?: number[];
  /**
   * @remarks
   * The task status. Valid values: NOT_RUN (Not run), WAITING (Waiting), RUNNING (Running), SUCCESS (Succeeded), FAILED (Failed), CANCEL (Canceled), TIMEOUT (Timed out), and OFFLINE (Offline).
   */
  testRunTaskStatusList?: string[];
  /**
   * @remarks
   * The validation result of the rule test run. Valid values: NOT_RUN (Not run), WAITING (Waiting), RUNNING (Running), PASS (Passed), NOT_PASS (Not passed), FAILED (Failed), OFFLINE (Offline, requires restart), CANCEL (Canceled), and TIMEOUT (Timed out).
   */
  testRunTaskValidateResultList?: string[];
  /**
   * @remarks
   * The monitoring ID.
   * 
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
  /**
   * @remarks
   * The paged query conditions, including paging parameters.
   */
  listQuery?: ListQualityRulesRequestListQuery;
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
   * The operator ID.
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
      listQuery: ListQualityRulesRequestListQuery,
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

