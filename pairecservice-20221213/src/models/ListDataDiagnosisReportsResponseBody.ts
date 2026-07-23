// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisReportsResponseBodyExceptionRate extends $dara.Model {
  /**
   * @remarks
   * The exception group.
   * 
   * @example
   * add
   */
  group?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * change_rate 大于 0.2，请确认是否正常
   */
  message?: string;
  /**
   * @remarks
   * The type or level of the exception.
   * 
   * @example
   * WARN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      message: 'Message',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      message: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisReportsResponseBodyReportsOfAbnormalBehavior extends $dara.Model {
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 20250114
   */
  ds?: string;
  /**
   * @remarks
   * The rank.
   * 
   * @example
   * 1
   */
  rankId?: string;
  /**
   * @remarks
   * The conversion rate from upstream behavior to downstream behavior.
   * 
   * @example
   * 1.0
   */
  conversionRate?: string;
  /**
   * @remarks
   * The ID corresponding to the statistical granularity.
   * 
   * @example
   * 100010050+259203779
   */
  conversionRateIds?: string;
  /**
   * @remarks
   * The count of downstream behaviors.
   * 
   * @example
   * 2.0
   */
  downStreamCount?: string;
  /**
   * @remarks
   * The ID corresponding to the granularity of the downstream behavior.
   * 
   * @example
   * 189814043+272292277
   */
  downStreamCountIds?: string;
  /**
   * @remarks
   * The statistical granularity.
   * 
   * @example
   * pair
   */
  granularity?: string;
  /**
   * @remarks
   * The count of upstream behaviors.
   * 
   * @example
   * 2.0
   */
  upStreamCount?: string;
  /**
   * @remarks
   * The ID corresponding to the granularity of the upstream behavior.
   * 
   * @example
   * 104684044+249445882
   */
  upStreamCountIds?: string;
  /**
   * @remarks
   * The feature distribution.
   * 
   * @example
   * {678.8225: 91, 5270.4675: 95}
   */
  distribution?: string;
  /**
   * @remarks
   * The indicator name.
   * 
   * @example
   * conversion_rate
   */
  indicatorName?: string;
  /**
   * @remarks
   * The exception rate.
   * 
   * @example
   * 0.0
   */
  exceptionRate?: string;
  static names(): { [key: string]: string } {
    return {
      ds: 'Ds',
      rankId: 'RankId',
      conversionRate: 'ConversionRate',
      conversionRateIds: 'ConversionRateIds',
      downStreamCount: 'DownStreamCount',
      downStreamCountIds: 'DownStreamCountIds',
      granularity: 'Granularity',
      upStreamCount: 'UpStreamCount',
      upStreamCountIds: 'UpStreamCountIds',
      distribution: 'Distribution',
      indicatorName: 'IndicatorName',
      exceptionRate: 'ExceptionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ds: 'string',
      rankId: 'string',
      conversionRate: 'string',
      conversionRateIds: 'string',
      downStreamCount: 'string',
      downStreamCountIds: 'string',
      granularity: 'string',
      upStreamCount: 'string',
      upStreamCountIds: 'string',
      distribution: 'string',
      indicatorName: 'string',
      exceptionRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisReportsResponseBodyReportsOfBaseStatistics extends $dara.Model {
  /**
   * @remarks
   * The equivalent null count. This refers to the count of specific characters, such as `\\N`, that are treated as null values.
   * 
   * @example
   * \\\\N
   */
  defaultNullCount?: string;
  /**
   * @remarks
   * The equivalent null rate.
   * 
   * @example
   * \\\\N
   */
  defaultNullRate?: string;
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * register_time
   */
  featureName?: string;
  /**
   * @remarks
   * The feature type.
   * 
   * @example
   * string
   */
  featureType?: string;
  /**
   * @remarks
   * The null count.
   * 
   * @example
   * 55095
   */
  nullCount?: string;
  /**
   * @remarks
   * The null rate.
   * 
   * @example
   * 0.5580879448141732
   */
  nullRate?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 98721
   */
  totalCount?: string;
  /**
   * @remarks
   * The number of unique values.
   * 
   * @example
   * 29
   */
  uniqueCount?: string;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 52.0
   */
  valueMax?: string;
  /**
   * @remarks
   * The median value.
   * 
   * @example
   * 35.0
   */
  valueMedian?: string;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 18.0
   */
  valueMin?: string;
  /**
   * @remarks
   * The 1st percentile value.
   * 
   * @example
   * 18.0
   */
  valueQuantile1?: string;
  /**
   * @remarks
   * The 5th percentile value.
   * 
   * @example
   * 18.0
   */
  valueQuantile5?: string;
  /**
   * @remarks
   * The 25th percentile value.
   * 
   * @example
   * 18.0
   */
  valueQuantile25?: string;
  /**
   * @remarks
   * The 75th percentile value.
   * 
   * @example
   * 18.0
   */
  valueQuantile75?: string;
  /**
   * @remarks
   * The 95th percentile value.
   * 
   * @example
   * 18.0
   */
  valueQuantile95?: string;
  /**
   * @remarks
   * The 99th percentile value.
   * 
   * @example
   * 18.0
   */
  valueQuantile99?: string;
  /**
   * @remarks
   * The rank.
   * 
   * @example
   * 3
   */
  rn?: string;
  /**
   * @remarks
   * The maximum frequency.
   * 
   * @example
   * 91149.0
   */
  frequencyMax?: string;
  /**
   * @remarks
   * The median frequency.
   * 
   * @example
   * 1349.0
   */
  frequencyMedian?: string;
  /**
   * @remarks
   * The minimum frequency.
   * 
   * @example
   * 289.0
   */
  frequencyMin?: string;
  /**
   * @remarks
   * The 1st frequency percentile.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile1?: string;
  /**
   * @remarks
   * The 5th frequency percentile.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile5?: string;
  /**
   * @remarks
   * The 25th frequency percentile.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile25?: string;
  /**
   * @remarks
   * The 75th frequency percentile.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile75?: string;
  /**
   * @remarks
   * The 95th frequency percentile.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile95?: string;
  /**
   * @remarks
   * The 99th frequency percentile.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile99?: string;
  /**
   * @remarks
   * The feature distribution.
   * 
   * @example
   * {678.8225: 91, 5270.4675: 95}
   */
  distribution?: string;
  /**
   * @remarks
   * The rank of the statistical indicator.
   * 
   * @example
   * 1
   */
  rankId?: string;
  /**
   * @remarks
   * The feature value.
   * 
   * @example
   * 1683562246
   */
  featureValue?: string;
  /**
   * @remarks
   * The value count.
   * 
   * @example
   * 1
   */
  valueCount?: string;
  /**
   * @remarks
   * The value percentage.
   * 
   * @example
   * 0.000019996000799840032
   */
  valuePercent?: string;
  /**
   * @remarks
   * The value quantile.
   * 
   * @example
   * 0.7261657444926671
   */
  valueQuantile?: string;
  /**
   * @remarks
   * The frequency of the feature value.
   * 
   * @example
   * 427
   */
  featureFrequency?: string;
  /**
   * @remarks
   * The number of feature values with this frequency.
   * 
   * @example
   * 1
   */
  frequencyCount?: string;
  /**
   * @remarks
   * The percentage of feature values with this frequency.
   * 
   * @example
   * 0.5
   */
  frequencyPercent?: string;
  /**
   * @remarks
   * The percentile of the frequency of field values.
   * 
   * @example
   * 5
   */
  frequencyQuantile?: string;
  static names(): { [key: string]: string } {
    return {
      defaultNullCount: 'DefaultNullCount',
      defaultNullRate: 'DefaultNullRate',
      ds: 'Ds',
      featureName: 'FeatureName',
      featureType: 'FeatureType',
      nullCount: 'NullCount',
      nullRate: 'NullRate',
      totalCount: 'TotalCount',
      uniqueCount: 'UniqueCount',
      valueMax: 'ValueMax',
      valueMedian: 'ValueMedian',
      valueMin: 'ValueMin',
      valueQuantile1: 'ValueQuantile1',
      valueQuantile5: 'ValueQuantile5',
      valueQuantile25: 'ValueQuantile25',
      valueQuantile75: 'ValueQuantile75',
      valueQuantile95: 'ValueQuantile95',
      valueQuantile99: 'ValueQuantile99',
      rn: 'Rn',
      frequencyMax: 'FrequencyMax',
      frequencyMedian: 'FrequencyMedian',
      frequencyMin: 'FrequencyMin',
      frequencyQuantile1: 'FrequencyQuantile1',
      frequencyQuantile5: 'FrequencyQuantile5',
      frequencyQuantile25: 'FrequencyQuantile25',
      frequencyQuantile75: 'FrequencyQuantile75',
      frequencyQuantile95: 'FrequencyQuantile95',
      frequencyQuantile99: 'FrequencyQuantile99',
      distribution: 'Distribution',
      rankId: 'RankId',
      featureValue: 'FeatureValue',
      valueCount: 'ValueCount',
      valuePercent: 'ValuePercent',
      valueQuantile: 'ValueQuantile',
      featureFrequency: 'FeatureFrequency',
      frequencyCount: 'FrequencyCount',
      frequencyPercent: 'FrequencyPercent',
      frequencyQuantile: 'FrequencyQuantile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultNullCount: 'string',
      defaultNullRate: 'string',
      ds: 'string',
      featureName: 'string',
      featureType: 'string',
      nullCount: 'string',
      nullRate: 'string',
      totalCount: 'string',
      uniqueCount: 'string',
      valueMax: 'string',
      valueMedian: 'string',
      valueMin: 'string',
      valueQuantile1: 'string',
      valueQuantile5: 'string',
      valueQuantile25: 'string',
      valueQuantile75: 'string',
      valueQuantile95: 'string',
      valueQuantile99: 'string',
      rn: 'string',
      frequencyMax: 'string',
      frequencyMedian: 'string',
      frequencyMin: 'string',
      frequencyQuantile1: 'string',
      frequencyQuantile5: 'string',
      frequencyQuantile25: 'string',
      frequencyQuantile75: 'string',
      frequencyQuantile95: 'string',
      frequencyQuantile99: 'string',
      distribution: 'string',
      rankId: 'string',
      featureValue: 'string',
      valueCount: 'string',
      valuePercent: 'string',
      valueQuantile: 'string',
      featureFrequency: 'string',
      frequencyCount: 'string',
      frequencyPercent: 'string',
      frequencyQuantile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisReportsResponseBodyReportsOfChangeRateData extends $dara.Model {
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @remarks
   * A flag that indicates the type of change.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The item/user change count.
   * 
   * @example
   * 1231
   */
  changeCount?: string;
  /**
   * @remarks
   * The item/user change rate.
   * 
   * @example
   * 0.1231
   */
  changeRate?: string;
  static names(): { [key: string]: string } {
    return {
      ds: 'Ds',
      flag: 'Flag',
      changeCount: 'ChangeCount',
      changeRate: 'ChangeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ds: 'string',
      flag: 'string',
      changeCount: 'string',
      changeRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisReportsResponseBodyReportsOfJoinTables extends $dara.Model {
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @remarks
   * The join field.
   * 
   * @example
   * user_id
   */
  joinField?: string;
  /**
   * @remarks
   * The left table join exception rate.
   * 
   * @example
   * 0.53
   */
  leftExceptRate?: string;
  /**
   * @remarks
   * The right table join exception rate.
   * 
   * @example
   * 0.0
   */
  rightExceptRate?: string;
  /**
   * @remarks
   * A flag that indicates the type of change.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * register_time
   */
  featureName?: string;
  /**
   * @remarks
   * The feature value.
   * 
   * @example
   * 1683562246
   */
  featureValue?: string;
  /**
   * @remarks
   * The feature percentage.
   * 
   * @example
   * 1
   */
  percent?: string;
  /**
   * @remarks
   * The quantile.
   * 
   * @example
   * 1
   */
  quantile?: string;
  /**
   * @remarks
   * The value count.
   * 
   * @example
   * 1
   */
  valueCount?: string;
  /**
   * @remarks
   * The value percentage.
   * 
   * @example
   * 0.019996000799
   */
  valuePercent?: string;
  /**
   * @remarks
   * The value quantile.
   * 
   * @example
   * 0.72616
   */
  valueQuantile?: string;
  static names(): { [key: string]: string } {
    return {
      ds: 'Ds',
      joinField: 'JoinField',
      leftExceptRate: 'LeftExceptRate',
      rightExceptRate: 'RightExceptRate',
      flag: 'Flag',
      featureName: 'FeatureName',
      featureValue: 'FeatureValue',
      percent: 'Percent',
      quantile: 'Quantile',
      valueCount: 'ValueCount',
      valuePercent: 'ValuePercent',
      valueQuantile: 'ValueQuantile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ds: 'string',
      joinField: 'string',
      leftExceptRate: 'string',
      rightExceptRate: 'string',
      flag: 'string',
      featureName: 'string',
      featureValue: 'string',
      percent: 'string',
      quantile: 'string',
      valueCount: 'string',
      valuePercent: 'string',
      valueQuantile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisReportsResponseBodyReportsOfPreferenceStatisticsCycle extends $dara.Model {
  /**
   * @remarks
   * The periodic user retention rate.
   * 
   * @example
   * 0.73
   */
  cycleRemainRate?: string;
  /**
   * @remarks
   * The daily user retention rate.
   * 
   * @example
   * 0.52
   */
  singleRemainRate?: string;
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @remarks
   * The value of k for the k-day retention rate or k-day ever-appeared rate.
   * 
   * @example
   * 7
   */
  days?: string;
  /**
   * @remarks
   * The k-day ever-appeared rate.
   * 
   * @example
   * 0.67
   */
  everAppearedRate?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * week
   */
  period?: string;
  /**
   * @remarks
   * The periodic retention rate.
   * 
   * @example
   * 0.33
   */
  periodRemainRate?: string;
  /**
   * @remarks
   * The periodic retention count.
   * 
   * @example
   * 1
   */
  periodRemainCount?: number;
  /**
   * @remarks
   * The number of period intervals.
   * 
   * @example
   * 1
   */
  periodInternal?: number;
  static names(): { [key: string]: string } {
    return {
      cycleRemainRate: 'CycleRemainRate',
      singleRemainRate: 'SingleRemainRate',
      ds: 'Ds',
      days: 'Days',
      everAppearedRate: 'EverAppearedRate',
      period: 'Period',
      periodRemainRate: 'PeriodRemainRate',
      periodRemainCount: 'PeriodRemainCount',
      periodInternal: 'PeriodInternal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleRemainRate: 'string',
      singleRemainRate: 'string',
      ds: 'string',
      days: 'string',
      everAppearedRate: 'string',
      period: 'string',
      periodRemainRate: 'string',
      periodRemainCount: 'number',
      periodInternal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDiagnosisReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The exception report list.
   */
  exceptionRate?: ListDataDiagnosisReportsResponseBodyExceptionRate[];
  /**
   * @remarks
   * Reports for the abnormal behavior analysis task.
   */
  reportsOfAbnormalBehavior?: ListDataDiagnosisReportsResponseBodyReportsOfAbnormalBehavior[][];
  /**
   * @remarks
   * Reports for the basic statistical analysis task.
   */
  reportsOfBaseStatistics?: ListDataDiagnosisReportsResponseBodyReportsOfBaseStatistics[][];
  /**
   * @remarks
   * Reports for the item/user change rate analysis task.
   */
  reportsOfChangeRateData?: ListDataDiagnosisReportsResponseBodyReportsOfChangeRateData[][];
  /**
   * @remarks
   * Reports for the table join analysis task.
   */
  reportsOfJoinTables?: ListDataDiagnosisReportsResponseBodyReportsOfJoinTables[][];
  /**
   * @remarks
   * Reports for the user preference statistics cycle analysis task.
   */
  reportsOfPreferenceStatisticsCycle?: ListDataDiagnosisReportsResponseBodyReportsOfPreferenceStatisticsCycle[][];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The data diagnosis task type. Valid values:
   * 
   * - `ChangeRate`: item/user change rate analysis.
   * 
   * - `PreferenceStatisticsCycle`: user preference statistics cycle analysis.
   * 
   * - `JoinTables`: table join analysis.
   * 
   * - `BaseStatistics`: basic statistical analysis.
   * 
   * - `AbnormalBehavior`: abnormal behavior analysis.
   * 
   * @example
   * ChangeRate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionRate: 'ExceptionRate',
      reportsOfAbnormalBehavior: 'ReportsOfAbnormalBehavior',
      reportsOfBaseStatistics: 'ReportsOfBaseStatistics',
      reportsOfChangeRateData: 'ReportsOfChangeRateData',
      reportsOfJoinTables: 'ReportsOfJoinTables',
      reportsOfPreferenceStatisticsCycle: 'ReportsOfPreferenceStatisticsCycle',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionRate: { 'type': 'array', 'itemType': ListDataDiagnosisReportsResponseBodyExceptionRate },
      reportsOfAbnormalBehavior: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListDataDiagnosisReportsResponseBodyReportsOfAbnormalBehavior } },
      reportsOfBaseStatistics: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListDataDiagnosisReportsResponseBodyReportsOfBaseStatistics } },
      reportsOfChangeRateData: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListDataDiagnosisReportsResponseBodyReportsOfChangeRateData } },
      reportsOfJoinTables: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListDataDiagnosisReportsResponseBodyReportsOfJoinTables } },
      reportsOfPreferenceStatisticsCycle: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': ListDataDiagnosisReportsResponseBodyReportsOfPreferenceStatisticsCycle } },
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceptionRate)) {
      $dara.Model.validateArray(this.exceptionRate);
    }
    if(Array.isArray(this.reportsOfAbnormalBehavior)) {
      $dara.Model.validateArray(this.reportsOfAbnormalBehavior);
    }
    if(Array.isArray(this.reportsOfBaseStatistics)) {
      $dara.Model.validateArray(this.reportsOfBaseStatistics);
    }
    if(Array.isArray(this.reportsOfChangeRateData)) {
      $dara.Model.validateArray(this.reportsOfChangeRateData);
    }
    if(Array.isArray(this.reportsOfJoinTables)) {
      $dara.Model.validateArray(this.reportsOfJoinTables);
    }
    if(Array.isArray(this.reportsOfPreferenceStatisticsCycle)) {
      $dara.Model.validateArray(this.reportsOfPreferenceStatisticsCycle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

