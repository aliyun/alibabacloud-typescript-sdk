// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateABMetricRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to aggregate by user dimension when calculating significance. Two aggregation methods are available: by user and by sample.
   */
  aggregationByUser?: boolean;
  /**
   * @remarks
   * The definition of the metric.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * PV metric
   */
  description?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the current metric follows a binomial distribution when the metric type is a derived metric. If yes, the mean and variance of the metric are calculated based on the binomial distribution.
   */
  isBinomialDistribution?: boolean;
  /**
   * @remarks
   * The ID of the left metric for a derived metric.
   * 
   * @example
   * 2
   */
  leftMetricId?: string;
  /**
   * @remarks
   * The name of the metric.
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
   * The operator used to calculate a derived metric. Valid values:
   * - Plus: addition.
   * - Minus: subtraction.
   * - Multiplication: multiplication.
   * - Division: division.
   * 
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the metric is a real-time metric. Valid values:
   * - true: yes.
   * - false: no.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The ID of the data source to which the data table is written back. You can call the ListInstanceResources operation to obtain the ID.
   * 
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The ID of the right metric for a derived metric.
   * 
   * @example
   * 3
   */
  rightMetricId?: string;
  /**
   * @remarks
   * The ID of the scene. You can call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain the ID.
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
   * The ID of the data table. You can call the ListTableMetas operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * - Single: single metric.
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

