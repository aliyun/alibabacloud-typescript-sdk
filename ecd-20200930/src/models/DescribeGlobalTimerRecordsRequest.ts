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
   * The list of cloud computer IDs.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The display result name.
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
   * The number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Wuying Workspace.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceTypes?: string[];
  /**
   * @remarks
   * Filters results by execution result.
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
   * The region ID used to filter cloud computer information for a specified region.
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
   * The list of scheduled tasks.
   */
  timerTypes?: string[];
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

