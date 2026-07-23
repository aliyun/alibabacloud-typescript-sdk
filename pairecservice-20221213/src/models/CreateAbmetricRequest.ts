// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateABMetricRequest extends $dara.Model {
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
   * pv指标
   */
  description?: string;
  /**
   * @remarks
   * The instance ID. Call the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  isBinomialDistribution?: boolean;
  /**
   * @remarks
   * The ID of the left metric used to calculate the derived metric.
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
  needSignificance?: boolean;
  /**
   * @example
   * click
   */
  numerator?: string;
  /**
   * @remarks
   * The operator used to calculate the derived metric. Valid values:
   * 
   * - `Plus`: Addition
   * 
   * - `Minus`: Subtraction
   * 
   * - `Multiplication`: Multiplication
   * 
   * - `Division`: Division
   * 
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * Specifies whether the metric is a real-time metric. Valid values:
   * 
   * - `true`: The metric is real-time.
   * 
   * - `false`: The metric is not real-time.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The data source ID to which the results are written back. Call the ListInstanceResources operation to obtain this ID.
   * 
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @remarks
   * The ID of the right metric used to calculate the derived metric.
   * 
   * @example
   * 3
   */
  rightMetricId?: string;
  /**
   * @remarks
   * The scene ID. Call the [ListScenes](https://help.aliyun.com/document_detail/2402581.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
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
   * The data table ID. Call the ListTableMetas operation to obtain this ID.
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
   * - `Single`: A single metric.
   * 
   * - `Derived`: A derived metric.
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

