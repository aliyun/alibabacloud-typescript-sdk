// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricsResponseBodyABMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  aggregationByUser?: boolean;
  /**
   * @example
   * sum(click_cnt)
   */
  definition?: string;
  /**
   * @example
   * pv
   */
  denominator?: string;
  description?: string;
  isBinomialDistribution?: boolean;
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
  ABMetrics?: ListABMetricsResponseBodyABMetrics[];
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
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

