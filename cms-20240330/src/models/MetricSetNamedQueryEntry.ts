// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelFilters } from "./LabelFilters";


export class MetricSetNamedQueryEntry extends $dara.Model {
  /**
   * @remarks
   * The optional label filter conditions, which are independent for each query.
   * 
   * @example
   * [{"name":"env","operator":"=","value":"prod"}]
   */
  labelFilters?: LabelFilters[];
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * cpuUsage
   */
  metric?: string;
  /**
   * @remarks
   * The metric set name.
   * 
   * @example
   * ecs_metrics
   */
  metricSet?: string;
  /**
   * @remarks
   * The query name, such as $A or $B, referenced by the condition trigger.
   * 
   * @example
   * cpuQuery
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labelFilters: 'labelFilters',
      metric: 'metric',
      metricSet: 'metricSet',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelFilters: { 'type': 'array', 'itemType': LabelFilters },
      metric: 'string',
      metricSet: 'string',
      name: 'string',
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

