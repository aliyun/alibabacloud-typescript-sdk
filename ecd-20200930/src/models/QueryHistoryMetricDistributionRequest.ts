// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryMetricDistributionRequestRanges extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the maximum value. Default value: false.
   * 
   * @example
   * false
   */
  includeMax?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value. Default value: true.
   * 
   * @example
   * true
   */
  includeMin?: boolean;
  /**
   * @remarks
   * The range label, which is used in the response.
   * 
   * @example
   * label-02\\"
   */
  label?: string;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 20
   */
  max?: number;
  /**
   * @remarks
   * The minimum value.
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
   * The end date for statistics. Format: "YYYY-MM-DD". Default value: T-1.
   * 
   * @example
   * 2026-04-01
   */
  endDate?: string;
  /**
   * @remarks
   * The monitoring metrics type.
   * 
   * @example
   * LOAD_SCORE
   */
  metricName?: string;
  /**
   * @remarks
   * The custom value ranges.
   */
  ranges?: QueryHistoryMetricDistributionRequestRanges[];
  /**
   * @remarks
   * The start date for statistics. Format: "YYYY-MM-DD". Default value: T-1.
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

