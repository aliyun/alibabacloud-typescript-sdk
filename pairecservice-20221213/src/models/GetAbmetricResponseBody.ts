// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetABMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to aggregate metrics by user.
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
   * The denominator of the derived metric formula.
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
   * 页面访问次数
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the metric follows a binomial distribution. This affects how significance is calculated.
   */
  isBinomialDistribution?: boolean;
  /**
   * @remarks
   * The ID of the left operand metric for a derived metric.
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
   * Specifies whether significance testing is required for this metric.
   */
  needSignificance?: boolean;
  /**
   * @remarks
   * The numerator of the derived metric formula.
   * 
   * @example
   * click
   */
  numerator?: string;
  /**
   * @remarks
   * The operator for the derived metric. Valid values:
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
   * Specifies whether the metric is real-time. Valid values:
   * 
   * - `true`: The metric is real-time.
   * 
   * - `false`: The metric is not real-time.
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
   * The ID of the data source for the results table.
   * 
   * @example
   * 5
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The ID of the results table.
   * 
   * @example
   * 3
   */
  resultTableMetaId?: string;
  /**
   * @remarks
   * The ID of the right operand metric for a derived metric.
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
   * The statistics cycle.
   * 
   * @example
   * 1
   */
  statisticsCycle?: number;
  /**
   * @remarks
   * The ID of the source table.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
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

