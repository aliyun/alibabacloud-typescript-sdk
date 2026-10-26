// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetABMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to calculate significance by user dimension. Two aggregation logics are available: by user and by sample.
   * 
   * @example
   * true
   */
  aggregationByUser?: boolean;
  /**
   * @remarks
   * The definition of the metric.
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
   * The description of the metric.
   * 
   * @example
   * Page views
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the metric follows a binomial distribution when the metric type is derived. If yes, the mean and variance of the metric are calculated based on the binomial distribution.
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
   * The name of the metric.
   * 
   * @example
   * pv
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether to calculate significance.
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
   * - Plus: addition
   * - Minus: subtraction
   * - Multiplication: multiplication
   * - Division: division
   * 
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the metric is a real-time metric. Valid values:
   * - true: yes
   * - false: no
   * 
   * @example
   * false
   */
  realtime?: string;
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
   * The ID of the data source for the write-back data table.
   * 
   * @example
   * 5
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The ID of the data table to which data is written back.
   * 
   * @example
   * 3
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
   * The scenario ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The name of the scenario.
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
   * The ID of the source data table.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * - Single: single metric
   * - Derived: derived metric
   * 
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

