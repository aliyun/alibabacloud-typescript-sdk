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
   * The end time of snapshot creation. Specify the time in the `yyyy-mm-ddthh:mm:ssz` format based on the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard. The time must be in UTC.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page for a paging query.    
   * 
   * - Maximum value: 100.    
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call.
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
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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
   * The display name of the snapshot. The name must be 2 to 127 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character. To prevent name conflicts with automatic snapshots, the name cannot start with `auto`.
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
   * The disk for which the snapshot is created.
   * 
   * > The values are case-insensitive.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The start time of snapshot creation. Specify the time in the `yyyy-mm-ddthh:mm:ssz` format based on the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard. The time must be in UTC.
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

