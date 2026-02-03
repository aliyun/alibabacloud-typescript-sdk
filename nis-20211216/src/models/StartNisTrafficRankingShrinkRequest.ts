// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartNisTrafficRankingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1638239092000
   */
  beginTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Out
   */
  direction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1684373700099
   */
  endTime?: number;
  filterShrink?: string;
  groupByShrink?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bytes
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @example
   * Desc
   */
  sort?: string;
  /**
   * @example
   * 10
   */
  storageInterval?: number;
  /**
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nta-262****ca07f
   */
  trafficAnalyzerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VpcFlowLogAll
   */
  trafficScenario?: string;
  /**
   * @example
   * Tuple1
   */
  tupleDimension?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      direction: 'Direction',
      endTime: 'EndTime',
      filterShrink: 'Filter',
      groupByShrink: 'GroupBy',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      regionNo: 'RegionNo',
      sort: 'Sort',
      storageInterval: 'StorageInterval',
      topN: 'TopN',
      trafficAnalyzerId: 'TrafficAnalyzerId',
      trafficScenario: 'TrafficScenario',
      tupleDimension: 'TupleDimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      direction: 'string',
      endTime: 'number',
      filterShrink: 'string',
      groupByShrink: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      regionNo: 'string',
      sort: 'string',
      storageInterval: 'number',
      topN: 'number',
      trafficAnalyzerId: 'string',
      trafficScenario: 'string',
      tupleDimension: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

