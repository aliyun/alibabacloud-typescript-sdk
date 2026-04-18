// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryMetricDistributionRequestRanges extends $dara.Model {
  /**
   * @example
   * false
   */
  includeMax?: boolean;
  /**
   * @example
   * true
   */
  includeMin?: boolean;
  /**
   * @example
   * label-02\\"
   */
  label?: string;
  /**
   * @example
   * 20
   */
  max?: number;
  /**
   * @example
   * 0
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      includeMax: 'IncludeMax',
      includeMin: 'IncludeMin',
      label: 'Label',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMax: 'boolean',
      includeMin: 'boolean',
      label: 'string',
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryMetricDistributionRequest extends $dara.Model {
  /**
   * @example
   * 2026-04-01
   */
  endDate?: string;
  /**
   * @example
   * LOAD_SCORE
   */
  metricName?: string;
  ranges?: QueryHistoryMetricDistributionRequestRanges[];
  /**
   * @example
   * 2026-04-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      metricName: 'MetricName',
      ranges: 'Ranges',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      metricName: 'string',
      ranges: { 'type': 'array', 'itemType': QueryHistoryMetricDistributionRequestRanges },
      startDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ranges)) {
      $dara.Model.validateArray(this.ranges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

