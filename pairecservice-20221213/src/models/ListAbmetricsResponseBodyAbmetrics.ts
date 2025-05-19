// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricsResponseBodyABMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  description?: string;
  /**
   * @example
   * 3
   */
  leftMetricId?: string;
  /**
   * @example
   * pv
   */
  name?: string;
  /**
   * @example
   * Division
   */
  operator?: string;
  /**
   * @example
   * false
   */
  realtime?: string;
  /**
   * @example
   * 3
   */
  resultResourceId?: string;
  /**
   * @example
   * 2
   */
  resultTableMetaId?: string;
  /**
   * @example
   * 2
   */
  rightMetricId?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @example
   * home_feed
   */
  sceneName?: string;
  /**
   * @example
   * 1
   */
  statisticsCycle?: number;
  /**
   * @example
   * 1
   */
  tableMetaId?: string;
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      definition: 'Definition',
      description: 'Description',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
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
      definition: 'string',
      description: 'string',
      leftMetricId: 'string',
      name: 'string',
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

