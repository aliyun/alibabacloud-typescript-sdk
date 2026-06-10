// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalTimerRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID for a scheduled task execution.
   * 
   * @example
   * ccg-****
   */
  batchId?: string;
  /**
   * @remarks
   * A list of cloud desktop IDs.
   */
  desktopIds?: string[];
  /**
   * @example
   * FAILED
   */
  displayResultName?: string;
  /**
   * @remarks
   * The scheduled task group ID.
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
   * The token used to start the next query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to list the regions available in Elastic Desktop Service.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceTypes?: string[];
  /**
   * @remarks
   * Filters the results by execution status. Valid values:
   * 
   * @example
   * SUCCEED
   */
  resultCategory?: string;
  /**
   * @example
   * true
   */
  retryable?: boolean;
  /**
   * @remarks
   * The ID of the region to filter by. Only records for cloud desktops in this region are returned.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The execution result of the scheduled task. Valid values:
   * 
   * @example
   * RUNNING
   */
  timerResult?: string;
  /**
   * @remarks
   * The types of scheduled tasks.
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

