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
   * The rule type. Valid values:
   * - CONSISTENT: consistency
   * - EFFECTIVE: validity
   * - TIMELINESE: timeliness
   * - ACCURATE: accuracy
   * - UNIQUENESS: uniqueness
   * - COMPLETENESS: completeness
   * - STABILITY: stability
   * - CUSTOM: custom.
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
   * The rule strength. Valid values:
   * - STRONG: strong
   * - WEAK: weak.
   */
  ruleStrengthList?: string[];
  /**
   * @remarks
   * The rule label. Valid values:
   * - DEFAULT: default label
   * - DATA_STANDARD_MANUAL: standard rule manually created
   * - DATA_STANDARD_AUTO: quality rule created by automatic creation from a standard
   * - PIPELINE: rule created by a pipeline
   * - DATA_MODELING: data modeling diagnostics.
   */
  ruleTagList?: string[];
  /**
   * @remarks
   * The task status. Valid values:
   * - NOT_RUN: not executed
   * - WAITING: waiting
   * - RUNNING: running
   * - SUCCESS: succeeded
   * - FAILED: failed
   * - CANCEL: canceled
   * - TIMEOUT: timed out
   * - OFFLINE: offline.
   */
  statusList?: string[];
  /**
   * @remarks
   * The validation result. Valid values:
   * - NOT_RUN: not executed
   * - WAITING: waiting for execution
   * - RUNNING: running
   * - PASS: passed
   * - NOT_PASS: not passed
   * - FAILED: execution failed
   * - OFFLINE: offline and needs to be restarted
   * - CANCEL: task canceled
   * - TIMEOUT: task timed out.
   */
  validateResultList?: string[];
  /**
   * @remarks
   * The ID of the quality watchtask.
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
   * The paged query conditions.
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

