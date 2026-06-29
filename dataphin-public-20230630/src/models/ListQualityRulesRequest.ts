// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The rule type. Valid values:
   * - CONSISTENT: consistency.
   * - EFFECTIVE: validity.
   * - TIMELINESE: timeliness.
   * - ACCURATE: accuracy.
   * - UNIQUENESS: uniqueness.
   * - COMPLETENESS: completeness.
   * - STABILITY: stability.
   * - CUSTOM: custom.
   */
  catalogList?: string[];
  /**
   * @remarks
   * The search keyword for filtering. Supports searching by rule name and validation object.
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
   * The rule strength. Valid values:
   * - STRONG: strong.
   * - WEAK: weak.
   */
  ruleStrengthList?: string[];
  /**
   * @remarks
   * The rule effective status. Valid values:
   * - ENABLE: enabled.
   * - DISABLE: disabled.
   */
  statusList?: string[];
  /**
   * @remarks
   * The rule template.
   */
  templateIdList?: number[];
  /**
   * @remarks
   * The task status. Valid values:
   * - NOT_RUN: not executed.
   * - WAITING: waiting.
   * - RUNNING: executing.
   * - SUCCESS: execution succeeded.
   * - FAILED: execution failed.
   * - CANCEL: canceled.
   * - TIMEOUT: timed out.
   * - OFFLINE: offline.
   */
  testRunTaskStatusList?: string[];
  /**
   * @remarks
   * The trial run validation result. Valid values:
   * - NOT_RUN: not executed.
   * - WAITING: waiting for execution.
   * - RUNNING: executing.
   * - PASS: passed.
   * - NOT_PASS: not passed.
   * - FAILED: execution failed.
   * - OFFLINE: offline. The task needs to be restarted.
   * - CANCEL: task canceled.
   * - TIMEOUT: task timed out.
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
   * The paged query conditions.
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

