// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetABMetricResponseBody extends $dara.Model {
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
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  resultResourceId?: string;
  /**
   * @example
   * 3
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
   * 2
   */
  tableMetaId?: string;
  /**
   * @example
   * Single
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      leftMetricId: 'LeftMetricId',
      name: 'Name',
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
      definition: 'string',
      description: 'string',
      leftMetricId: 'string',
      name: 'string',
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

