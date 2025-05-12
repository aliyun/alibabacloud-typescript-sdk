// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range within which the jobs to be queried were created. 
   * 
   * *   Specify the time in the ISO 8601 standard in the
   * *   YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-02-14T02:16:07Z
   */
  endOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The ID of the media fingerprint analysis job that you want to query. To view the job ID, log on to the [ApsaraVideo Media Processing (MPS) console](https://mps.console.aliyun.com/overview), click **Tasks** in the left-side navigation pane, and then click the **Video DNA** tab on the Tasks page. You can query up to 10 media fingerprint analysis jobs at a time. Separate multiple job IDs with commas (,).
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  jobIds?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. 
   * 
   * *   Default value: **10**.
   * *   Valid values: **1 to 100**.
   * 
   * @example
   * 10
   */
  maximumPageSize?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. You do not need to specify this parameter in the first request. The response to the first request contains this parameter, which you add to the next request.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue. To view the ID of the MPS queue, log on to the [MPS console](https://mps.console.aliyun.com/overview) and choose **Global Settings** > **Pipelines** in the left-side navigation pane.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range within which the jobs to be queried were created. 
   * 
   * *   Specify the time in the ISO 8601 standard in the
   * *   YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-22T03:48:05Z
   */
  startOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The status of the jobs to be queried. Valid values:
   * 
   * *   **All**: all jobs.
   * *   **Queuing**: the jobs that are being queued.
   * *   **Analysing**: the jobs that are in progress.
   * *   **Fail**: failed jobs.
   * *   **Success**: successful jobs.
   * 
   * @example
   * All
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endOfJobCreatedTimeRange: 'EndOfJobCreatedTimeRange',
      jobIds: 'JobIds',
      maximumPageSize: 'MaximumPageSize',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startOfJobCreatedTimeRange: 'StartOfJobCreatedTimeRange',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfJobCreatedTimeRange: 'string',
      jobIds: 'string',
      maximumPageSize: 'number',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

