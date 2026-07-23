// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABMetricRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to aggregate by user dimension when calculating significance. Two aggregation methods are supported: by user and by sample.
   * 
   * @example
   * True
   */
  aggregationByUser?: boolean;
  /**
   * @remarks
   * The metric definition.
   * 
   * This parameter is required.
   * 
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  /**
   * @remarks
   * The denominator used in significance calculation.
   * 
   * @example
   * pv
   */
  denominator?: string;
  /**
   * @remarks
   * The metric description.
   * 
   * This parameter is required.
   * 
   * @example
   * pv 指标
   */
  description?: string;
  /**
   * @remarks
   * The instance ID. You can obtain it by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the current metric follows a binomial distribution when the metric type is a derived metric. If set to true, the mean and variance of the metric are calculated based on the binomial distribution.
   * 
   * @example
   * False
   */
  isBinomialDistribution?: boolean;
  /**
   * @remarks
   * The left metric ID of the derived metric.
   * 
   * @example
   * 2
   */
  leftMetricId?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * This parameter is required.
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
   * True
   */
  needSignificance?: boolean;
  /**
   * @remarks
   * The numerator used in significance calculation.
   * 
   * @example
   * click
   */
  numerator?: string;
  /**
   * @remarks
   * The operator for derived metric calculation. Valid values:
   * 
   * - Plus: addition
   * 
   * - Minus: subtraction
   * 
   * - Multiplication: multiplication
   * 
   * - Division: division
   * 
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the metric is a real-time metric. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The ID of the data source for the write-back data table. You can obtain it by calling the ListInstanceResources operation.
   * 
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The right metric ID of the derived metric.
   * 
   * @example
   * 3
   */
  rightMetricId?: string;
  /**
   * @remarks
   * The scene ID. You can obtain it by calling the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
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
   * The data table ID. You can obtain it by calling the ListTableMetas operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - Single: single metric.
   * 
   * - Derived: derived metric.
   * 
   * This parameter is required.
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
      instanceId: 'InstanceId',
      isBinomialDistribution: 'IsBinomialDistribution',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
      needSignificance: 'NeedSignificance',
      numerator: 'Numerator',
      operator: 'Operator',
      realtime: 'Realtime',
      resultResourceId: 'ResultResourceId',
      rightMetricId: 'RightMetricId',
      sceneId: 'SceneId',
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
      instanceId: 'string',
      isBinomialDistribution: 'boolean',
      leftMetricId: 'string',
      name: 'string',
      needSignificance: 'boolean',
      numerator: 'string',
      operator: 'string',
      realtime: 'boolean',
      resultResourceId: 'string',
      rightMetricId: 'string',
      sceneId: 'string',
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

