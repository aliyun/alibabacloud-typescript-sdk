// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleQueryQueriesApmFilters } from "./AlertRuleQueryQueriesApmFilters";


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

