// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricsResponseBodyABMetrics extends $dara.Model {
  /**
   * @remarks
   * The AB metric ID.
   * 
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @remarks
   * Indicates whether to aggregate data by user.
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
   * The denominator of the derived metric.
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
   * pv指标
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the metric follows a binomial distribution.
   */
  isBinomialDistribution?: boolean;
  /**
   * @remarks
   * The ID of the left-hand metric in the formula for the derived metric.
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
   * Indicates whether significance calculation is required.
   */
  needSignificance?: boolean;
  /**
   * @remarks
   * The numerator of the derived metric.
   * 
   * @example
   * click
   */
  numerator?: string;
  /**
   * @remarks
   * The operator used to calculate the derived metric. Valid values:
   * 
   * - `Plus`: addition
   * 
   * - `Minus`: subtraction
   * 
   * - `Multiplication`: multiplication
   * 
   * - `Division`: division
   * 
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the metric is a real-time metric.
   * 
   * - `true`: The metric is calculated in real time.
   * 
   * - `false`: The metric is not calculated in real time.
   * 
   * @example
   * false
   */
  realtime?: string;
  /**
   * @remarks
   * The ID of the data source for the data table to which the results are written.
   * 
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The ID of the data table to which the results are written.
   * 
   * @example
   * 2
   */
  resultTableMetaId?: string;
  /**
   * @remarks
   * The ID of the right-hand metric in the formula for the derived metric.
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
   * The data table ID.
   * 
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - `Single`: a single metric.
   * 
   * - `Derived`: a derived metric.
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
   * The list of AB metrics.
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
   * The total number of AB metrics returned.
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

