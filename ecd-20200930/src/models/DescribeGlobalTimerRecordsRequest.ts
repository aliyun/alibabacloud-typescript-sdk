// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch in which the scheduled task is executed.
   * 
   * @example
   * ccg-****
   */
  batchId?: string;
  /**
   * @remarks
   * The cloud computer IDs.
   */
  desktopIds?: string[];
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
   * The number of entries per page.
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the execution result. You can specify this parameter to filter the execution results.
   * 
   * Valid values:
   * 
   * *   FAILED: The execution is successful.
   * *   FAILED: The execution failed.
   * *   RUNNING: The execution is in progress.
   * *   SKIPPED: The execution is skipped.
   * 
   * @example
   * SUCCEED
   */
  resultCategory?: string;
  /**
   * @remarks
   * The ID of the searched region. You can specify this parameter to filter cloud computers in specific regions.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The execution result of the scheduled task.
   * 
   * Valid values:
   * 
   * *   CONNECTED_NOT_RUN: The cloud computer is connected, but the scheduled task is not executed.
   * *   PAUSED: The scheduled task is suspended.
   * *   COMPLETED: The scheduled task is executed.
   * *   FAILED: The scheduled task failed to be executed.
   * *   RUNNING: The scheduled task is being executed.
   * *   TERMINATED: The scheduled task is stopped.
   * 
   * @example
   * RUNNING
   */
  timerResult?: string;
  /**
   * @remarks
   * The scheduled tasks.
   */
  timerTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      desktopIds: 'DesktopIds',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resultCategory: 'ResultCategory',
      searchRegionId: 'SearchRegionId',
      timerResult: 'TimerResult',
      timerTypes: 'TimerTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      resultCategory: 'string',
      searchRegionId: 'string',
      timerResult: 'string',
      timerTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    if(Array.isArray(this.timerTypes)) {
      $dara.Model.validateArray(this.timerTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

