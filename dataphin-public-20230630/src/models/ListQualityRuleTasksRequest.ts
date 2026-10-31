// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRuleTasksRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The rule types. Valid values: CONSISTENT (consistency), EFFECTIVE (effectiveness), TIMELINESE (timeliness), ACCURATE (accuracy), UNIQUENESS (uniqueness), COMPLETENESS (completeness), STABILITY (stability), and CUSTOM (custom).
   */
  catalogList?: string[];
  /**
   * @remarks
   * The search keyword. You can search by field name or rule name.
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
   * The rule strengths. Valid values: STRONG (strong) and WEAK (weak).
   */
  ruleStrengthList?: string[];
  /**
   * @remarks
   * The rule labels. Valid values: DEFAULT (default label), DATA_STANDARD_MANUAL (manually created standard rules), DATA_STANDARD_AUTO (standard quality rules created by automatic creation), PIPELINE (rules created by pipelines), and DATA_MODELING (data modeling).
   */
  ruleTagList?: string[];
  /**
   * @remarks
   * The task statuses. Valid values: NOT_RUN (not run), WAITING (waiting), RUNNING (running), SUCCESS (successful), FAILED (failed), CANCEL (canceled), TIMEOUT (timed out), and OFFLINE (offline).
   */
  statusList?: string[];
  /**
   * @remarks
   * The validation results. Valid values: NOT_RUN (not run), WAITING (waiting), RUNNING (running), PASS (passed), NOT_PASS (not passed), FAILED (failed), OFFLINE (offline and requires restart), CANCEL (canceled), and TIMEOUT (timed out).
   */
  validateResultList?: string[];
  /**
   * @remarks
   * The quality watchtask ID.
   * 
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
  /**
   * @remarks
   * The paging query conditions.
   */
  listQuery?: ListQualityRuleTasksRequestListQuery;
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
   * The operator user ID.
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
      listQuery: ListQualityRuleTasksRequestListQuery,
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

