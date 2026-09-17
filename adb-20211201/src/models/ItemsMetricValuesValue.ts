// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ItemsMetricValuesValueTime2 extends $dara.Model {
  /**
   * @remarks
   * The sum of metric values across active query minute buckets for Time 2. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 180
   */
  sumValue?: number;
  /**
   * @remarks
   * The display string of the total sum for Time 2, with the unit included.
   * 
   * @example
   * 180s
   */
  sumDisplayValue?: string;
  /**
   * @remarks
   * The average value across active query minute buckets for Time 2, calculated as the total sum divided by the number of minute buckets that contain queries for this Pattern. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 3
   */
  avgValue?: number;
  /**
   * @remarks
   * The display string of the average value across active query minute buckets for Time 2, with the unit included.
   * 
   * @example
   * 3s
   */
  avgDisplayValue?: string;
  /**
   * @remarks
   * The maximum metric value in a single minute bucket for Time 2. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 9
   */
  maxValue?: number;
  /**
   * @remarks
   * The display string of the peak value in a single minute bucket for Time 2, with the unit included.
   * 
   * @example
   * 9s
   */
  maxDisplayValue?: string;
  /**
   * @remarks
   * The percentage of this Pattern\\"s Time 2 total sum relative to the total sum of all results before dimension filtering in the current report. A value of 10 indicates 10%.
   * 
   * @example
   * 10
   */
  sumRatioPercent?: number;
  /**
   * @remarks
   * The percentage of this Pattern\\"s Time 2 average value relative to the sum of average values across all Patterns before dimension filtering in the current report. A value of 10 indicates 10%.
   * 
   * @example
   * 10
   */
  avgRatioPercent?: number;
  static names(): { [key: string]: string } {
    return {
      sumValue: 'SumValue',
      sumDisplayValue: 'SumDisplayValue',
      avgValue: 'AvgValue',
      avgDisplayValue: 'AvgDisplayValue',
      maxValue: 'MaxValue',
      maxDisplayValue: 'MaxDisplayValue',
      sumRatioPercent: 'SumRatioPercent',
      avgRatioPercent: 'AvgRatioPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sumValue: 'number',
      sumDisplayValue: 'string',
      avgValue: 'number',
      avgDisplayValue: 'string',
      maxValue: 'number',
      maxDisplayValue: 'string',
      sumRatioPercent: 'number',
      avgRatioPercent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemsMetricValuesValueAvg extends $dara.Model {
  /**
   * @remarks
   * The change rate of the average value across active query minute buckets, calculated as (Time 2 value − Time 1 value) / Time 1 value × 100. A value of 200 indicates a 200% increase. When the Time 1 value is 0, a finite change rate cannot be calculated. This field may not be returned and must not be treated as 0%.
   * 
   * @example
   * 200
   */
  changeRatePercent?: number;
  /**
   * @remarks
   * The average value across active query minute buckets for Time 1. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 1
   */
  time1Value?: number;
  /**
   * @remarks
   * The display string of the average value across active query minute buckets for Time 1, with the unit included.
   * 
   * @example
   * 1s
   */
  time1DisplayValue?: string;
  /**
   * @remarks
   * The percentage of this Pattern\\"s Time 1 average value across active query minute buckets relative to the sum of the corresponding statistics for all results before dimension filtering in the current report. A value of 10 indicates 10%.
   * 
   * @example
   * 10
   */
  time1RatioPercent?: number;
  /**
   * @remarks
   * The average value across active query minute buckets for Time 2. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 3
   */
  time2Value?: number;
  /**
   * @remarks
   * The display string of the average value across active query minute buckets for Time 2, with the unit included.
   * 
   * @example
   * 3s
   */
  time2DisplayValue?: string;
  /**
   * @remarks
   * The percentage of this Pattern\\"s Time 2 average value across active query minute buckets relative to the sum of the corresponding statistics for all results before dimension filtering in the current report. A value of 10 indicates 10%.
   * 
   * @example
   * 10
   */
  time2RatioPercent?: number;
  static names(): { [key: string]: string } {
    return {
      changeRatePercent: 'ChangeRatePercent',
      time1Value: 'Time1Value',
      time1DisplayValue: 'Time1DisplayValue',
      time1RatioPercent: 'Time1RatioPercent',
      time2Value: 'Time2Value',
      time2DisplayValue: 'Time2DisplayValue',
      time2RatioPercent: 'Time2RatioPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRatePercent: 'number',
      time1Value: 'number',
      time1DisplayValue: 'string',
      time1RatioPercent: 'number',
      time2Value: 'number',
      time2DisplayValue: 'string',
      time2RatioPercent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemsMetricValuesValueSum extends $dara.Model {
  /**
   * @remarks
   * The change rate of the sum of metric values across active query minute buckets, calculated as (Time 2 value − Time 1 value) / Time 1 value × 100. A value of 200 indicates a 200% increase. When the Time 1 value is 0, a finite change rate cannot be calculated. This field may not be returned and must not be treated as 0%.
   * 
   * @example
   * 200
   */
  changeRatePercent?: number;
  /**
   * @remarks
   * The sum of metric values across active query minute buckets for Time 1. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 60
   */
  time1Value?: number;
  /**
   * @remarks
   * The display string of the sum of metric values across active query minute buckets for Time 1, with the unit included.
   * 
   * @example
   * 60s
   */
  time1DisplayValue?: string;
  /**
   * @remarks
   * The percentage of this Pattern\\"s Time 1 sum of metric values across active query minute buckets relative to the sum of the corresponding statistics for all results before dimension filtering in the current report. A value of 10 indicates 10%.
   * 
   * @example
   * 10
   */
  time1RatioPercent?: number;
  /**
   * @remarks
   * The sum of metric values across active query minute buckets for Time 2. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 180
   */
  time2Value?: number;
  /**
   * @remarks
   * The display string of the sum of metric values across active query minute buckets for Time 2, with the unit included.
   * 
   * @example
   * 180s
   */
  time2DisplayValue?: string;
  /**
   * @remarks
   * The percentage of this Pattern\\"s Time 2 sum of metric values across active query minute buckets relative to the sum of the corresponding statistics for all results before dimension filtering in the current report. A value of 10 indicates 10%.
   * 
   * @example
   * 10
   */
  time2RatioPercent?: number;
  static names(): { [key: string]: string } {
    return {
      changeRatePercent: 'ChangeRatePercent',
      time1Value: 'Time1Value',
      time1DisplayValue: 'Time1DisplayValue',
      time1RatioPercent: 'Time1RatioPercent',
      time2Value: 'Time2Value',
      time2DisplayValue: 'Time2DisplayValue',
      time2RatioPercent: 'Time2RatioPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRatePercent: 'number',
      time1Value: 'number',
      time1DisplayValue: 'string',
      time1RatioPercent: 'number',
      time2Value: 'number',
      time2DisplayValue: 'string',
      time2RatioPercent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemsMetricValuesValueMax extends $dara.Model {
  /**
   * @remarks
   * The change rate of the peak value in a single minute bucket, calculated as (Time 2 value − Time 1 value) / Time 1 value × 100. A value of 200 indicates a 200% increase. When the Time 1 value is 0, a finite change rate cannot be calculated. This field may not be returned and must not be treated as 0%.
   * 
   * @example
   * 200
   */
  changeRatePercent?: number;
  /**
   * @remarks
   * The peak value in a single minute bucket for Time 1. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 3
   */
  time1Value?: number;
  /**
   * @remarks
   * The display string of the peak value in a single minute bucket for Time 1, with the unit included.
   * 
   * @example
   * 3s
   */
  time1DisplayValue?: string;
  /**
   * @remarks
   * The peak value in a single minute bucket for Time 2. The unit depends on MetricCode: count for QUERY_COUNT, seconds for CPU_COST, and GB (1 GB = 1024³ bytes) for SHUFFLE_SIZE, PEAK_MEMORY, and SCAN_SIZE.
   * 
   * @example
   * 9
   */
  time2Value?: number;
  /**
   * @remarks
   * The display string of the peak value in a single minute bucket for Time 2, with the unit included.
   * 
   * @example
   * 9s
   */
  time2DisplayValue?: string;
  static names(): { [key: string]: string } {
    return {
      changeRatePercent: 'ChangeRatePercent',
      time1Value: 'Time1Value',
      time1DisplayValue: 'Time1DisplayValue',
      time2Value: 'Time2Value',
      time2DisplayValue: 'Time2DisplayValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRatePercent: 'number',
      time1Value: 'number',
      time1DisplayValue: 'string',
      time2Value: 'number',
      time2DisplayValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ItemsMetricValuesValue extends $dara.Model {
  /**
   * @remarks
   * The primary metric code, which matches the key in `MetricValues` and the `MetricType` request parameter. Valid values:
   * 
   * - `QUERY_COUNT`: the number of query executions.
   * - `CPU_COST`: the CPU consumption.
   * - `SHUFFLE_SIZE`: the shuffle data volume.
   * - `PEAK_MEMORY`: the peak memory consumption.
   * - `SCAN_SIZE`: the scan data volume.
   * 
   * @example
   * CPU_COST
   */
  metricCode?: string;
  /**
   * @remarks
   * The primary metric name. The mapping is as follows:
   * 
   * - `QUERY_COUNT`: `QueryCount`.
   * - `CPU_COST`: `OperatorCost`.
   * - `SHUFFLE_SIZE`: `ShuffleSize`.
   * - `PEAK_MEMORY`: `PeakMemory`.
   * - `SCAN_SIZE`: `ScanSize`.
   * 
   * @example
   * OperatorCost
   */
  metricName?: string;
  /**
   * @remarks
   * Indicates whether this is the primary metric for the current analysis dimension. The current value is true.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The aggregated result for Time 2 in the NEW report. This field is returned only for NEW reports.
   */
  time2?: ItemsMetricValuesValueTime2;
  /**
   * @remarks
   * The dual-window comparison of the average value across active query minute buckets for the CHANGED report. This field is returned only for CHANGED reports.
   */
  avg?: ItemsMetricValuesValueAvg;
  /**
   * @remarks
   * The dual-window comparison of the sum of metric values across active query minute buckets for the CHANGED report. This field is returned only for CHANGED reports.
   */
  sum?: ItemsMetricValuesValueSum;
  /**
   * @remarks
   * The dual-window comparison of the peak value in a single minute bucket for the CHANGED report. This field is returned only for CHANGED reports.
   */
  max?: ItemsMetricValuesValueMax;
  static names(): { [key: string]: string } {
    return {
      metricCode: 'MetricCode',
      metricName: 'MetricName',
      primary: 'Primary',
      time2: 'Time2',
      avg: 'Avg',
      sum: 'Sum',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricCode: 'string',
      metricName: 'string',
      primary: 'boolean',
      time2: ItemsMetricValuesValueTime2,
      avg: ItemsMetricValuesValueAvg,
      sum: ItemsMetricValuesValueSum,
      max: ItemsMetricValuesValueMax,
    };
  }

  validate() {
    if(this.time2 && typeof (this.time2 as any).validate === 'function') {
      (this.time2 as any).validate();
    }
    if(this.avg && typeof (this.avg as any).validate === 'function') {
      (this.avg as any).validate();
    }
    if(this.sum && typeof (this.sum as any).validate === 'function') {
      (this.sum as any).validate();
    }
    if(this.max && typeof (this.max as any).validate === 'function') {
      (this.max as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

