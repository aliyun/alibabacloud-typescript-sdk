// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelFilters } from "./LabelFilters";


export class Queries extends $dara.Model {
  /**
   * @remarks
   * The end offset of the time range for SLS_MULTI_QUERY (mutually exclusive with window).
   * 
   * @example
   * 100
   */
  end?: number;
  /**
   * @remarks
   * The query expression (PromQL for PROMETHEUS_MULTI_QUERY and SPL for SLS_MULTI_QUERY).
   * 
   * @example
   * 示例值
   */
  expr?: string;
  /**
   * @remarks
   * The label filter conditions for UMODEL_METRICSET_MULTI_QUERY (optional and independent per query).
   * 
   * @example
   * [{"name":"env","operator":"=","value":"prod"}]
   */
  labelFilters?: LabelFilters[];
  /**
   * @remarks
   * The metric name for UMODEL_METRICSET_MULTI_QUERY.
   * 
   * @example
   * 示例名称
   */
  metric?: string;
  /**
   * @remarks
   * The metric set name for UMODEL_METRICSET_MULTI_QUERY.
   * 
   * @example
   * 示例名称
   */
  metricSet?: string;
  /**
   * @remarks
   * The query name for PROMETHEUS_MULTI_QUERY or UMODEL_METRICSET_MULTI_QUERY (such as $A or $B, referenced by condition triggers).
   * 
   * @example
   * 示例名称
   */
  name?: string;
  /**
   * @remarks
   * The start offset of the time range for SLS_MULTI_QUERY (mutually exclusive with window).
   * 
   * @example
   * 100
   */
  start?: number;
  /**
   * @remarks
   * The time unit for SLS_MULTI_QUERY (day, hour, minute, or second).
   * 
   * @example
   * second
   */
  timeUnit?: string;
  /**
   * @remarks
   * The alignment window size for SLS_MULTI_QUERY (mutually exclusive with start and end).
   * 
   * @example
   * 100
   */
  window?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      expr: 'expr',
      labelFilters: 'labelFilters',
      metric: 'metric',
      metricSet: 'metricSet',
      name: 'name',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      expr: 'string',
      labelFilters: { 'type': 'array', 'itemType': LabelFilters },
      metric: 'string',
      metricSet: 'string',
      name: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

