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
   * The token used to retrieve the next page of results. Set this parameter to the `NextToken` value from a previous response.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * - China (Shanghai)
   * 
   * - Singapore (Singapore)
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceTypes?: string[];
  /**
   * @remarks
   * The ID of the region where the cloud computers are located. This parameter filters the results to include only cloud computers in the specified region.
   * 
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The type of the scheduled task. This operation returns batch information for timer-based scheduled tasks only.
   * 
   * - `TimerBoot`: scheduled startup
   * 
   * - `TimerShutdown`: scheduled shutdown
   * 
   * - `TimerReboot`: scheduled reboot
   * 
   * - `TimerReset`: scheduled reset
   * 
   * - `TimerMaintenance`: scheduled maintenance
   * 
   * - `TimerHibernate`: scheduled hibernation
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

