// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSlsQueryJoin } from "./AlertRuleSlsQueryJoin";


export class AlertRuleQueryQueriesApmFilters extends $dara.Model {
  dim?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryQueries extends $dara.Model {
  apmAlertMetricId?: string;
  apmFilters?: AlertRuleQueryQueriesApmFilters[];
  apmGroupBy?: string[];
  duration?: number;
  /**
   * @remarks
   * 时间偏移结束时间(相对)，如果指定了start、end，则不指定window。
   */
  end?: number;
  /**
   * @remarks
   * 查询表达式
   */
  expr?: string;
  /**
   * @remarks
   * sls查询的时间偏移开始时间(相对)，如果指定了start、end，则不指定window。  例如：start=15， timeUnit=minute，表示15分钟前
   */
  start?: number;
  /**
   * @remarks
   * start和end、window的时间单位： day/hour/minute/second
   */
  timeUnit?: string;
  /**
   * @remarks
   * 整点时间查询区间。  如果指定了window则不指定start、end
   */
  window?: number;
  static names(): { [key: string]: string } {
    return {
      apmAlertMetricId: 'apmAlertMetricId',
      apmFilters: 'apmFilters',
      apmGroupBy: 'apmGroupBy',
      duration: 'duration',
      end: 'end',
      expr: 'expr',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apmAlertMetricId: 'string',
      apmFilters: { 'type': 'array', 'itemType': AlertRuleQueryQueriesApmFilters },
      apmGroupBy: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      end: 'number',
      expr: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apmFilters)) {
      $dara.Model.validateArray(this.apmFilters);
    }
    if(Array.isArray(this.apmGroupBy)) {
      $dara.Model.validateArray(this.apmGroupBy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQuery extends $dara.Model {
  checkAfterDataComplete?: boolean;
  dimensions?: { [key: string]: string }[];
  duration?: number;
  expr?: string;
  firstJoin?: AlertRuleSlsQueryJoin;
  groupFieldList?: string[];
  groupId?: string;
  groupType?: string;
  namespace?: string;
  queries?: AlertRuleQueryQueries[];
  relationType?: string;
  secondJoin?: AlertRuleSlsQueryJoin;
  serviceIds?: string[];
  /**
   * @remarks
   * 查询类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkAfterDataComplete: 'checkAfterDataComplete',
      dimensions: 'dimensions',
      duration: 'duration',
      expr: 'expr',
      firstJoin: 'firstJoin',
      groupFieldList: 'groupFieldList',
      groupId: 'groupId',
      groupType: 'groupType',
      namespace: 'namespace',
      queries: 'queries',
      relationType: 'relationType',
      secondJoin: 'secondJoin',
      serviceIds: 'serviceIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAfterDataComplete: 'boolean',
      dimensions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      duration: 'number',
      expr: 'string',
      firstJoin: AlertRuleSlsQueryJoin,
      groupFieldList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      groupType: 'string',
      namespace: 'string',
      queries: { 'type': 'array', 'itemType': AlertRuleQueryQueries },
      relationType: 'string',
      secondJoin: AlertRuleSlsQueryJoin,
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(this.firstJoin && typeof (this.firstJoin as any).validate === 'function') {
      (this.firstJoin as any).validate();
    }
    if(Array.isArray(this.groupFieldList)) {
      $dara.Model.validateArray(this.groupFieldList);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(this.secondJoin && typeof (this.secondJoin as any).validate === 'function') {
      (this.secondJoin as any).validate();
    }
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

