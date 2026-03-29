// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisReportsResponseBodyExceptionRate extends $dara.Model {
  /**
   * @example
   * add
   */
  group?: string;
  message?: string;
  /**
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
   * @example
   * 20250114
   */
  ds?: string;
  /**
   * @example
   * 1
   */
  rankId?: string;
  /**
   * @example
   * 1.0
   */
  conversionRate?: string;
  /**
   * @example
   * 100010050+259203779
   */
  conversionRateIds?: string;
  /**
   * @example
   * 2.0
   */
  downStreamCount?: string;
  /**
   * @example
   * 189814043+272292277
   */
  downStreamCountIds?: string;
  /**
   * @example
   * pair
   */
  granularity?: string;
  /**
   * @example
   * 2.0
   */
  upStreamCount?: string;
  /**
   * @example
   * 104684044+249445882
   */
  upStreamCountIds?: string;
  /**
   * @example
   * {678.8225: 91, 5270.4675: 95}
   */
  distribution?: string;
  /**
   * @example
   * conversion_rate
   */
  indicatorName?: string;
  /**
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
   * @example
   * \\\\N
   */
  defaultNullCount?: string;
  /**
   * @example
   * \\\\N
   */
  defaultNullRate?: string;
  /**
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @example
   * register_time
   */
  featureName?: string;
  /**
   * @example
   * string
   */
  featureType?: string;
  /**
   * @example
   * 55095
   */
  nullCount?: string;
  /**
   * @example
   * 0.5580879448141732
   */
  nullRate?: string;
  /**
   * @example
   * 98721
   */
  totalCount?: string;
  /**
   * @example
   * 29
   */
  uniqueCount?: string;
  /**
   * @example
   * 52.0
   */
  valueMax?: string;
  /**
   * @example
   * 35.0
   */
  valueMedian?: string;
  /**
   * @example
   * 18.0
   */
  valueMin?: string;
  /**
   * @example
   * 18.0
   */
  valueQuantile1?: string;
  /**
   * @example
   * 18.0
   */
  valueQuantile5?: string;
  /**
   * @example
   * 18.0
   */
  valueQuantile25?: string;
  /**
   * @example
   * 18.0
   */
  valueQuantile75?: string;
  /**
   * @example
   * 18.0
   */
  valueQuantile95?: string;
  /**
   * @example
   * 18.0
   */
  valueQuantile99?: string;
  /**
   * @example
   * 3
   */
  rn?: string;
  /**
   * @example
   * 91149.0
   */
  frequencyMax?: string;
  /**
   * @example
   * 1349.0
   */
  frequencyMedian?: string;
  /**
   * @example
   * 289.0
   */
  frequencyMin?: string;
  /**
   * @example
   * 289.0
   */
  frequencyQuantile1?: string;
  /**
   * @example
   * 289.0
   */
  frequencyQuantile5?: string;
  /**
   * @example
   * 289.0
   */
  frequencyQuantile25?: string;
  /**
   * @example
   * 289.0
   */
  frequencyQuantile75?: string;
  /**
   * @example
   * 289.0
   */
  frequencyQuantile95?: string;
  /**
   * @example
   * 289.0
   */
  frequencyQuantile99?: string;
  /**
   * @example
   * {678.8225: 91, 5270.4675: 95}
   */
  distribution?: string;
  /**
   * @example
   * 1
   */
  rankId?: string;
  /**
   * @example
   * 1683562246
   */
  featureValue?: string;
  /**
   * @example
   * 1
   */
  valueCount?: string;
  /**
   * @example
   * 0.000019996000799840032
   */
  valuePercent?: string;
  /**
   * @example
   * 0.7261657444926671
   */
  valueQuantile?: string;
  /**
   * @example
   * 427
   */
  featureFrequency?: string;
  /**
   * @example
   * 1
   */
  frequencyCount?: string;
  /**
   * @example
   * 0.5
   */
  frequencyPercent?: string;
  /**
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
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @example
   * add
   */
  flag?: string;
  /**
   * @example
   * 1231
   */
  changeCount?: string;
  /**
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
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @example
   * user_id
   */
  joinField?: string;
  /**
   * @example
   * 0.53
   */
  leftExceptRate?: string;
  /**
   * @example
   * 0.0
   */
  rightExceptRate?: string;
  /**
   * @example
   * add
   */
  flag?: string;
  /**
   * @example
   * register_time
   */
  featureName?: string;
  /**
   * @example
   * 1683562246
   */
  featureValue?: string;
  /**
   * @example
   * 1
   */
  percent?: string;
  /**
   * @example
   * 1
   */
  quantile?: string;
  /**
   * @example
   * 1
   */
  valueCount?: string;
  /**
   * @example
   * 0.019996000799
   */
  valuePercent?: string;
  /**
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
   * @example
   * 0.73
   */
  cycleRemainRate?: string;
  /**
   * @example
   * 0.52
   */
  singleRemainRate?: string;
  /**
   * @example
   * 20230509
   */
  ds?: string;
  /**
   * @example
   * 7
   */
  days?: string;
  /**
   * @example
   * 0.67
   */
  everAppearedRate?: string;
  /**
   * @example
   * week
   */
  period?: string;
  /**
   * @example
   * 0.33
   */
  periodRemainRate?: string;
  /**
   * @example
   * 1
   */
  periodRemainCount?: number;
  /**
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
  exceptionRate?: ListDataDiagnosisReportsResponseBodyExceptionRate[];
  reportsOfAbnormalBehavior?: ListDataDiagnosisReportsResponseBodyReportsOfAbnormalBehavior[][];
  reportsOfBaseStatistics?: ListDataDiagnosisReportsResponseBodyReportsOfBaseStatistics[][];
  reportsOfChangeRateData?: ListDataDiagnosisReportsResponseBodyReportsOfChangeRateData[][];
  reportsOfJoinTables?: ListDataDiagnosisReportsResponseBodyReportsOfJoinTables[][];
  reportsOfPreferenceStatisticsCycle?: ListDataDiagnosisReportsResponseBodyReportsOfPreferenceStatisticsCycle[][];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
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

