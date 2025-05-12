// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range within which the jobs to be queried were created.
   * 
   * *   Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * *   The time must be in UTC.
   * 
   * @example
   * 2022-02-14T02:16:07Z
   */
  endOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The ID of the content moderation job. You can call the [SubmitMediaCensorJob](https://help.aliyun.com/document_detail/91779.html) operation to query the ID of the content moderation job. Separate multiple IDs with commas (,).
   * 
   * @example
   * fa9c34be3bcf42919ac4d1775239****,78dc866518b843259669df58ed30****
   */
  jobIds?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * *   Default value: **30**.
   * *   Valid values: **1 to 300**.
   * 
   * @example
   * 20
   */
  maximumPageSize?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. The returned value of NextPageToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 79aff3eee82242e092899db5f669****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue that is used to run the job. To obtain the ID of the MPS queue, perform the following steps: Log on to the [**MPS console**](https://mps.console.aliyun.com/overview). In the left-side navigation pane, choose **Global Settings** > **Pipelines**.
   * 
   * @example
   * c5b30b7c0d0e4a0abde1d5f9e751****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range within which the jobs to be queried were created.
   * 
   * *   Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * *   The time must be in UTC.
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

