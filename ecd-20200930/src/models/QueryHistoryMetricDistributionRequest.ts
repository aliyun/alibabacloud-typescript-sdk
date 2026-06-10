// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryMetricDistributionRequestRanges extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the maximum value in the range. The default value is `false`.
   * 
   * @example
   * false
   */
  includeMax?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value in the range. The default value is `true`.
   * 
   * @example
   * true
   */
  includeMin?: boolean;
  /**
   * @remarks
   * The label for the value range. This label is returned in the response.
   * 
   * @example
   * label-02\\"
   */
  label?: string;
  /**
   * @remarks
   * The maximum value of the value range.
   * 
   * @example
   * 20
   */
  max?: number;
  /**
   * @remarks
   * The minimum value of the value range.
   * 
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
   * @remarks
   * The end date of the query period. The date must be in the `YYYY-MM-DD` format. The default value is T-1.
   * 
   * @example
   * 2026-04-01
   */
  endDate?: string;
  /**
   * @remarks
   * The name of the metric to query.
   * 
   * @example
   * LOAD_SCORE
   */
  metricName?: string;
  /**
   * @remarks
   * An array of custom value ranges.
   */
  ranges?: QueryHistoryMetricDistributionRequestRanges[];
  /**
   * @remarks
   * The start date of the query period. The date must be in the `YYYY-MM-DD` format. The default value is T-1.
   * 
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

