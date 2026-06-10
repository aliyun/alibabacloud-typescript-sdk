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
  /**
   * @remarks
   * The end time to query for snapshots. The time follows the [ISO 8601](t10049.xdita#) standard and is in UTC. The format is `yyyy-mm-ddthh:mm:ssz`.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * - Maximum value: 100.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. This is the NextToken value from the previous API call.
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
   * The ID of the region. Call [](t2167755.xdita#)to get a list of regions that support Elastic Desktop Service (EDS).
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
   * The display name of the snapshot. The name must be 2 to 127 characters long. It must start with a letter. It can contain digits, underscores (_), and hyphens (-). The name cannot start with `auto` to avoid naming conflicts with automatic snapshots.
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
   * The disk from which to create the snapshot.
   * 
   * > The value is case-insensitive.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The start time to query for snapshots. The time follows the [ISO 8601](t10049.xdita#) standard and is in UTC. The format is `yyyy-mm-ddthh:mm:ssz`.
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

