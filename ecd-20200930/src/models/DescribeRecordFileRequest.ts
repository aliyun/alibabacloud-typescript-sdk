// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 20251218205715
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * Alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The name of the recording file.
   * 
   * @example
   * Task7
   */
  fileName?: string;
  /**
   * @remarks
   * The sorting basis. If you do not specify this parameter, the results are sorted by screen recording start time in descending order. Valid value:
   * 
   * - `startTime`: the start time of a screen recording.
   * 
   * @example
   * startTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - `asc`: ascending
   * 
   * - `desc`: descending
   * 
   * @example
   * asc
   */
  orderSort?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the screen recording. Valid values:
   * 
   * - `alltime`: full-time recording
   * 
   * - `period`: recording at intervals
   * 
   * - `event`: event-triggered recording
   * 
   * - `session`: session-based recording
   * 
   * @example
   * alltime
   */
  recordType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions that are supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 20251218175715
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the screen recording file. Valid values:
   * 
   * - `0`: The file is uploaded.
   * 
   * - `1`: The file is being uploaded.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      fileName: 'FileName',
      orderBy: 'OrderBy',
      orderSort: 'OrderSort',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordType: 'RecordType',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endTime: 'string',
      endUserId: 'string',
      fileName: 'string',
      orderBy: 'string',
      orderSort: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordType: 'string',
      regionId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

