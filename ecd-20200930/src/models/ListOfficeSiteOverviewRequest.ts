// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfficeSiteOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to refresh the cache.
   * 
   * @example
   * false
   */
  forceRefresh?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 100
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this is your first query or no next query is to be sent, skip this parameter. If a next query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network IDs. You can specify IDs of 1 to 100 office networks.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string[];
  /**
   * @remarks
   * The query scope. Cloud computers in a cloud computer pool are pooled cloud computers.
   * 
   * Default values:
   * 
   * *   1 (default): queries non-pooled cloud computers in the office network.
   * *   2: queries pooled cloud computers in the office network.
   * *   3: queries all cloud computers in the office network.
   * 
   * @example
   * 1
   */
  queryRange?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      forceRefresh: 'ForceRefresh',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      queryRange: 'QueryRange',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceRefresh: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      queryRange: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteId)) {
      $dara.Model.validateArray(this.officeSiteId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

