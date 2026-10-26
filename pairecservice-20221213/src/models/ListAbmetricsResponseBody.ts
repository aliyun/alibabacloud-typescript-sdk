// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricsResponseBodyABMetrics extends $dara.Model {
  /**
   * @remarks
   * The ID of the AB test metric.
   * 
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @remarks
   * Specifies whether to calculate significance based on the user dimension. The calculation can be based on users or samples.
   * 
   * @example
   * true
   */
  aggregationByUser?: boolean;
  /**
   * @remarks
   * The metric definition.
   * 
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  /**
   * @remarks
   * The denominator used for significance calculation.
   * 
   * @example
   * pv
   */
  denominator?: string;
  /**
   * @remarks
   * The metric description.
   * 
   * @example
   * PV metric
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the current metric conforms to a binomial distribution when the metric type is a derived metric. If yes, the mean and variance of the metric are calculated based on the binomial distribution.
   * 
   * @example
   * true
   */
  isBinomialDistribution?: boolean;
  /**
   * @remarks
   * The ID of the left metric for the derived metric.
   * 
   * @example
   * 3
   */
  leftMetricId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * pv
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to calculate significance.
   * 
   * @example
   * true
   */
  needSignificance?: boolean;
  /**
   * @remarks
   * The numerator used for significance calculation.
   * 
   * @example
   * click
   */
  numerator?: string;
  /**
   * @remarks
   * The operator used to calculate the derived metric. Valid values:
   * 
   * - Plus: Addition.
   * 
   * - Minus: Subtraction.
   * 
   * - Multiplication: Multiplication.
   * 
   * - Division: Division.
   * 
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the metric is a real-time metric. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  realtime?: string;
  /**
   * @remarks
   * The ID of the data source for the write-back data table.
   * 
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The ID of the data table to which data is written back.
   * 
   * @example
   * 2
   */
  resultTableMetaId?: string;
  /**
   * @remarks
   * The ID of the right metric for the derived metric.
   * 
   * @example
   * 2
   */
  rightMetricId?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * home_feed
   */
  sceneName?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * 1
   */
  statisticsCycle?: number;
  /**
   * @remarks
   * The ID of the data table.
   * 
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - Single: Single metric.
   * 
   * - Derived: Derived metric.
   * 
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      aggregationByUser: 'AggregationByUser',
      definition: 'Definition',
      denominator: 'Denominator',
      description: 'Description',
      isBinomialDistribution: 'IsBinomialDistribution',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
      needSignificance: 'NeedSignificance',
      numerator: 'Numerator',
      operator: 'Operator',
      realtime: 'Realtime',
      resultResourceId: 'ResultResourceId',
      resultTableMetaId: 'ResultTableMetaId',
      rightMetricId: 'RightMetricId',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      statisticsCycle: 'StatisticsCycle',
      tableMetaId: 'TableMetaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricId: 'string',
      aggregationByUser: 'boolean',
      definition: 'string',
      denominator: 'string',
      description: 'string',
      isBinomialDistribution: 'boolean',
      leftMetricId: 'string',
      name: 'string',
      needSignificance: 'boolean',
      numerator: 'string',
      operator: 'string',
      realtime: 'string',
      resultResourceId: 'string',
      resultTableMetaId: 'string',
      rightMetricId: 'string',
      sceneId: 'string',
      sceneName: 'string',
      statisticsCycle: 'number',
      tableMetaId: 'string',
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

export class ListABMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of AB test metrics.
   */
  ABMetrics?: ListABMetricsResponseBodyABMetrics[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ABMetrics: 'ABMetrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetrics: { 'type': 'array', 'itemType': ListABMetricsResponseBodyABMetrics },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ABMetrics)) {
      $dara.Model.validateArray(this.ABMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

