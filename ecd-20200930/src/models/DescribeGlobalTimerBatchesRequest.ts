// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerBatchesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that there are no more results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * - Shanghai
   * - Singapore
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceTypes?: string[];
  /**
   * @remarks
   * The region ID used for searching. Filters cloud desktop information for the specified region.
   * 
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The type of task to query. Only scheduled tasks have batch information available.
   * 
   * - TimerBoot: scheduled startup
   * - TimerShutdown: scheduled shutdown
   * - TimerReboot: scheduled restart
   * - TimerReset: scheduled reset
   * - TimerMaintenance: scheduled maintenance
   * - TimerHibernate: scheduled hibernation
   * 
   * @example
   * 1
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTypes: 'ResourceTypes',
      searchRegionId: 'SearchRegionId',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      searchRegionId: 'string',
      timerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

