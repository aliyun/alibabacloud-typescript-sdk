// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABMetricRequest extends $dara.Model {
  aggregationByUser?: boolean;
  /**
   * @remarks
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
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  isBinomialDistribution?: boolean;
  /**
   * @example
   * 2
   */
  leftMetricId?: string;
  /**
   * @remarks
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
   * @example
   * Division
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @example
   * 3
   */
  rightMetricId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * 1
   */
  statisticsCycle?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  tableMetaId?: string;
  /**
   * @remarks
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

