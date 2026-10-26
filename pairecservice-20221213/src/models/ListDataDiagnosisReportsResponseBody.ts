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
   * change_rate is greater than 0.2. Verify that this is expected
   */
  message?: string;
  /**
   * @remarks
   * The exception type or severity level.
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
   * The rank of the statistical metric.
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
   * The ID corresponding to the statistical granularity of the conversion rate.
   * 
   * @example
   * 100010050+259203779
   */
  conversionRateIds?: string;
  /**
   * @remarks
   * The downstream behavior count.
   * 
   * @example
   * 2.0
   */
  downStreamCount?: string;
  /**
   * @remarks
   * The ID corresponding to the statistical granularity of the downstream behavior.
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
   * The upstream behavior count.
   * 
   * @example
   * 2.0
   */
  upStreamCount?: string;
  /**
   * @remarks
   * The ID corresponding to the statistical granularity of the upstream behavior.
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
   * The name of the statistical metric.
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
   * The equivalent null value count.
   * 
   * @example
   * \\\\N
   */
  defaultNullCount?: string;
  /**
   * @remarks
   * The equivalent null value rate.
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
   * The null value count.
   * 
   * @example
   * 55095
   */
  nullCount?: string;
  /**
   * @remarks
   * The null value rate.
   * 
   * @example
   * 0.5580879448141732
   */
  nullRate?: string;
  /**
   * @remarks
   * The total number of data records.
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
   * The maximum value of the field.
   * 
   * @example
   * 52.0
   */
  valueMax?: string;
  /**
   * @remarks
   * The median value of the field.
   * 
   * @example
   * 35.0
   */
  valueMedian?: string;
  /**
   * @remarks
   * The minimum value of the field.
   * 
   * @example
   * 18.0
   */
  valueMin?: string;
  /**
   * @remarks
   * The 1st percentile of the field values.
   * 
   * @example
   * 18.0
   */
  valueQuantile1?: string;
  /**
   * @remarks
   * The 5th percentile of the field values.
   * 
   * @example
   * 18.0
   */
  valueQuantile5?: string;
  /**
   * @remarks
   * The 25th percentile of the field values.
   * 
   * @example
   * 18.0
   */
  valueQuantile25?: string;
  /**
   * @remarks
   * The 75th percentile of the field values.
   * 
   * @example
   * 18.0
   */
  valueQuantile75?: string;
  /**
   * @remarks
   * The 95th percentile of the field values.
   * 
   * @example
   * 18.0
   */
  valueQuantile95?: string;
  /**
   * @remarks
   * The 99th percentile of the field values.
   * 
   * @example
   * 18.0
   */
  valueQuantile99?: string;
  /**
   * @remarks
   * The rank position.
   * 
   * @example
   * 3
   */
  rn?: string;
  /**
   * @remarks
   * The maximum frequency of the field values.
   * 
   * @example
   * 91149.0
   */
  frequencyMax?: string;
  /**
   * @remarks
   * The median frequency of the field values.
   * 
   * @example
   * 1349.0
   */
  frequencyMedian?: string;
  /**
   * @remarks
   * The minimum frequency of the field values.
   * 
   * @example
   * 289.0
   */
  frequencyMin?: string;
  /**
   * @remarks
   * The 1st percentile of the field value frequencies.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile1?: string;
  /**
   * @remarks
   * The 5th percentile of the field value frequencies.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile5?: string;
  /**
   * @remarks
   * The 25th percentile of the field value frequencies.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile25?: string;
  /**
   * @remarks
   * The 75th percentile of the field value frequencies.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile75?: string;
  /**
   * @remarks
   * The 95th percentile of the field value frequencies.
   * 
   * @example
   * 289.0
   */
  frequencyQuantile95?: string;
  /**
   * @remarks
   * The 99th percentile of the field value frequencies.
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
   * The rank of the statistical metric.
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
   * The frequency of feature values.
   * 
   * @example
   * 427
   */
  featureFrequency?: string;
  /**
   * @remarks
   * The count of feature value frequencies.
   * 
   * @example
   * 1
   */
  frequencyCount?: string;
  /**
   * @remarks
   * The percentage of feature value frequencies.
   * 
   * @example
   * 0.5
   */
  frequencyPercent?: string;
  /**
   * @remarks
   * The quantile of the field value frequencies.
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
   * The report flag.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The number of changed items or users.
   * 
   * @example
   * 1231
   */
  changeCount?: string;
  /**
   * @remarks
   * The change rate of items or users.
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
   * The join exception rate of the left table.
   * 
   * @example
   * 0.53
   */
  leftExceptRate?: string;
  /**
   * @remarks
   * The join exception rate of the right table.
   * 
   * @example
   * 0.0
   */
  rightExceptRate?: string;
  /**
   * @remarks
   * The report flag.
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
   * The percentage of the feature.
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
   * The cycle retention rate of users.
   * 
   * @example
   * 0.73
   */
  cycleRemainRate?: string;
  /**
   * @remarks
   * The single-day retention rate of users.
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
   * The statistical period for the cycle retention rate.
   * 
   * @example
   * week
   */
  period?: string;
  /**
   * @remarks
   * The cycle retention rate.
   * 
   * @example
   * 0.33
   */
  periodRemainRate?: string;
  /**
   * @remarks
   * The number of users retained within the cycle.
   * 
   * @example
   * 1
   */
  periodRemainCount?: number;
  /**
   * @remarks
   * The number of cycle intervals.
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
   * The list of exception reports.
   */
  exceptionRate?: ListDataDiagnosisReportsResponseBodyExceptionRate[];
  /**
   * @remarks
   * The list of diagnostic reports for abnormal behavior analysis diagnosis nodes.
   */
  reportsOfAbnormalBehavior?: ListDataDiagnosisReportsResponseBodyReportsOfAbnormalBehavior[][];
  /**
   * @remarks
   * The list of diagnostic reports for basic statistics analysis diagnosis nodes.
   */
  reportsOfBaseStatistics?: ListDataDiagnosisReportsResponseBodyReportsOfBaseStatistics[][];
  /**
   * @remarks
   * The list of diagnostic reports for item/user change rate analysis diagnosis nodes.
   */
  reportsOfChangeRateData?: ListDataDiagnosisReportsResponseBodyReportsOfChangeRateData[][];
  /**
   * @remarks
   * The list of diagnostic reports for join table associate analysis diagnosis nodes.
   */
  reportsOfJoinTables?: ListDataDiagnosisReportsResponseBodyReportsOfJoinTables[][];
  /**
   * @remarks
   * The list of diagnostic reports for user preference statistical period analysis diagnosis nodes.
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
   * The data diagnosis node type.
   * 
   * - ChangeRate: item/user change rate analysis.
   * 
   * - PreferenceStatisticsCycle: user preference statistical period analysis.
   * 
   * - JoinTables: join table associate analysis.
   * 
   * - BaseStatistics: basic statistics analysis.
   * 
   * - AbnormalBehavior: abnormal behavior analysis.
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

