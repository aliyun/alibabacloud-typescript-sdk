// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelFilters } from "./LabelFilters";


export class Queries extends $dara.Model {
  /**
   * @remarks
   * The end offset of the time range for SLS_MULTI_QUERY. This parameter is mutually exclusive with window.
   * 
   * @example
   * 100
   */
  end?: number;
  /**
   * @remarks
   * The query expression. For PROMETHEUS_MULTI_QUERY, this is a PromQL expression. For SLS_MULTI_QUERY, this is an SPL expression.
   * 
   * @example
   * SampleValue
   */
  expr?: string;
  /**
   * @remarks
   * The label filter conditions for UMODEL_METRICSET_MULTI_QUERY. This parameter is optional and independent for each query.
   */
  labelFilters?: LabelFilters[];
  /**
   * @remarks
   * The metric name for UMODEL_METRICSET_MULTI_QUERY.
   * 
   * @example
   * SampleName
   */
  metric?: string;
  /**
   * @remarks
   * The metric set name for UMODEL_METRICSET_MULTI_QUERY.
   * 
   * @example
   * SampleName
   */
  metricSet?: string;
  /**
   * @remarks
   * The query name used by PROMETHEUS_MULTI_QUERY and UMODEL_METRICSET_MULTI_QUERY, such as $A or $B, which can be referenced by condition triggers.
   * 
   * @example
   * SampleName
   */
  name?: string;
  /**
   * @remarks
   * The start offset of the time range for SLS_MULTI_QUERY. This parameter is mutually exclusive with window.
   * 
   * @example
   * 100
   */
  start?: number;
  /**
   * @remarks
   * The time unit for SLS_MULTI_QUERY. Valid values: day, hour, minute, and second.
   * 
   * @example
   * second
   */
  timeUnit?: string;
  /**
   * @remarks
   * The snap window size for SLS_MULTI_QUERY. This parameter is mutually exclusive with start and end.
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

