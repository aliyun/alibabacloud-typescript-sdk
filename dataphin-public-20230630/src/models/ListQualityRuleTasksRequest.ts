// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRuleTasksRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The business date. Format: YYYY-MM-DD.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The rule types. Valid values: CONSISTENT (Consistency), EFFECTIVE (Effectiveness), TIMELINESE (Timeliness), ACCURATE (Accuracy), UNIQUENESS (Uniqueness), COMPLETENESS (Completeness), STABILITY (Stability), and CUSTOM (Custom).
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
   * The rule strengths. Valid values: STRONG (Strong) and WEAK (Weak).
   */
  ruleStrengthList?: string[];
  /**
   * @remarks
   * The rule labels. Valid values: DEFAULT (Default label), DATA_STANDARD_MANUAL (Manually created standard rule), DATA_STANDARD_AUTO (Standard quality rule of automatic creation), PIPELINE (Rule created by pipeline), and DATA_MODELING (Data modeling).
   */
  ruleTagList?: string[];
  /**
   * @remarks
   * The task statuses. Valid values: NOT_RUN (Not run), WAITING (Waiting), RUNNING (Running), SUCCESS (Successful), FAILED (Failed), CANCEL (Canceled), TIMEOUT (Timed out), and OFFLINE (Offline).
   */
  statusList?: string[];
  /**
   * @remarks
   * The validation results. Valid values: NOT_RUN (Not run), WAITING (Waiting), RUNNING (Running), PASS (Passed), NOT_PASS (Not passed), FAILED (Failed), OFFLINE (Offline, requires restart), CANCEL (Canceled), and TIMEOUT (Timed out).
   */
  validateResultList?: string[];
  /**
   * @remarks
   * The watchtask ID.
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
   * The paging conditions for the paged query.
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

