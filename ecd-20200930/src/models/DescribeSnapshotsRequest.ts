// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The user who creates the snapshot.
   * 
   * @example
   * Administrator
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * testName
   */
  desktopName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 8051af8d01b5479bec9f5ddf02e4a8fbd0ab6e7e43f8****
   */
  nextToken?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-2ze81owrnv9pity4****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 127 characters in length. The name must start with a letter. The name can contain letters, digits, underscores (_), and hyphens (-). The name cannot start with `auto` because snapshots whose names start with auto are recognized as automatic snapshots.
   * 
   * @example
   * test_data_disk
   */
  snapshotName?: string;
  /**
   * @remarks
   * The category of the snapshots.
   * 
   * Default value: all. Valid values:
   * 
   * *   all: all snapshot categories
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   auto: automatic snapshots
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   user: manual snapshots
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * user
   */
  snapshotType?: string;
  /**
   * @remarks
   * The disk for which you want to create a snapshot.
   * 
   * >  The value of this parameter is not case-sensitive.
   * 
   * Valid values:
   * 
   * *   Data: the data disk.
   * *   System: the system disk.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2020-11-30T06:32:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osType: 'OsType',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskType: 'SourceDiskType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      osType: 'string',
      regionId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

