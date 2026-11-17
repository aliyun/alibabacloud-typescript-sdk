// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID of the scheduled task execution.
   * 
   * @example
   * ccg-****
   */
  batchId?: string;
  /**
   * @remarks
   * The list of cloud desktop IDs.
   * 
   * @example
   * SUCCEED
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The display name of the result.
   * 
   * @example
   * FAILED
   */
  displayResultName?: string;
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-0cvfvf6u1enx1****
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions supported by Elastic Desktop Service.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource types. If this parameter is left empty, all resource types are queried.
   * 
   * @example
   * true
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * Filters the results by execution result.
   * 
   * @example
   * SUCCEED
   */
  resultCategory?: string;
  /**
   * @remarks
   * Specifies whether the task can be retried.
   * 
   * @example
   * true
   */
  retryable?: boolean;
  /**
   * @remarks
   * The search region ID. This parameter is used to filter cloud desktop information in a specified region.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The execution result of the scheduled task.
   * 
   * @example
   * RUNNING
   */
  timerResult?: string;
  /**
   * @remarks
   * The list of scheduled task types.
   * 
   * @example
   * cn-shanghai
   */
  timerTypes?: string[];
  /**
   * @remarks
   * The list of Wuying server IDs.
   * 
   * @example
   * FAILED
   */
  wuyingServerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      desktopIds: 'DesktopIds',
      displayResultName: 'DisplayResultName',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTypes: 'ResourceTypes',
      resultCategory: 'ResultCategory',
      retryable: 'Retryable',
      searchRegionId: 'SearchRegionId',
      timerResult: 'TimerResult',
      timerTypes: 'TimerTypes',
      wuyingServerIds: 'WuyingServerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      displayResultName: 'string',
      groupId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      resultCategory: 'string',
      retryable: 'boolean',
      searchRegionId: 'string',
      timerResult: 'string',
      timerTypes: { 'type': 'array', 'itemType': 'string' },
      wuyingServerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    if(Array.isArray(this.timerTypes)) {
      $dara.Model.validateArray(this.timerTypes);
    }
    if(Array.isArray(this.wuyingServerIds)) {
      $dara.Model.validateArray(this.wuyingServerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

