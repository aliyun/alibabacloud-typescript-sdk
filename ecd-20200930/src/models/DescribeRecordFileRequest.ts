// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordFileRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Desktop ID.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The end time of the query. Format: yyyyMMddHHmmss.
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
   * The field used for sorting. If this parameter is not specified, the results are sorted by recording start time in descending order. Valid values:
   * 
   * - startTime: recording start time.
   * 
   * @example
   * startTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - asc: ascending order.
   * - desc: descending order.
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
   * The maximum number of rows per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the screen recording file. Valid values:
   * 
   * - alltime: full-time recording.
   * - period: interval recording.
   * - event: event-based recording.
   * - session: session recording.
   * 
   * @example
   * alltime
   */
  recordType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the query. Format: yyyyMMddHHmmss.
   * 
   * @example
   * 20251218175715
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the screen recording file. Valid values:
   * 
   * - 0: uploaded.
   * - 1: uploading.
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

