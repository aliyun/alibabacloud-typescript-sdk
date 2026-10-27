// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * Administrator
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * testName
   */
  desktopName?: string;
  desktopScenario?: string;
  /**
   * @remarks
   * The end time of the snapshot creation. The time is displayed in UTC and follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-mm-ddthh:mm:ssz` format.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries to return per page in a paging query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken parameter value returned by the previous API call.
   * 
   * @example
   * 8051af8d01b5479bec9f5ddf02e4a8fbd0ab6e7e43f8****
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-2ze81owrnv9pity4****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The display name of the snapshot. The name must be 2 to 127 characters in length. It must start with a letter or a Chinese character, and can contain digits, underscores (_), and hyphens (-). To prevent name conflicts with automatic snapshots, the name cannot start with `auto`.
   * 
   * @example
   * Test data disk
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type.
   * 
   * @example
   * user
   */
  snapshotType?: string;
  /**
   * @remarks
   * The type of the disk for which you want to create a snapshot.
   * 
   * > The values are not case-sensitive.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The start time of the snapshot creation. The time is displayed in UTC and follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-mm-ddthh:mm:ssz` format.
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
      desktopScenario: 'DesktopScenario',
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
      desktopScenario: 'string',
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

