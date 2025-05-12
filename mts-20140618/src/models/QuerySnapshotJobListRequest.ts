// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot configuration.
   * 
   * @example
   * 2014-01-12T12:00:00Z
   */
  endOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the snapshot jobs that you want to query are submitted. To obtain the ID, you can log on to the **MPS console** and choose **Global Settings** > **Pipelines** in the left-side navigation pane.
   * 
   * @example
   * 30
   */
  maximumPageSize?: number;
  /**
   * @remarks
   * The end of the time range within which the creation time of snapshot jobs to be queried is.
   * 
   * *   Specify the time in the ISO 8601 standard in the
   * *   YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * cc6cbef8e8d5481ca536f5d2a466****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time for taking snapshots. Unit: milliseconds.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range within which the creation time of snapshot jobs to be queried is.
   * 
   * *   Specify the time in the ISO 8601 standard in the
   * *   YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 72dfa5e679ab4be9a3ed9974c736****
   */
  snapshotJobIds?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  startOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The information about the snapshot jobs.
   * 
   * @example
   * Snapshoting
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endOfJobCreatedTimeRange: 'EndOfJobCreatedTimeRange',
      maximumPageSize: 'MaximumPageSize',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotJobIds: 'SnapshotJobIds',
      startOfJobCreatedTimeRange: 'StartOfJobCreatedTimeRange',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfJobCreatedTimeRange: 'string',
      maximumPageSize: 'number',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotJobIds: 'string',
      startOfJobCreatedTimeRange: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

