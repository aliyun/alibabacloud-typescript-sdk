// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2014-01-11T12:00:00Z
   */
  endOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The number of entries per page.
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
   * The token that is used to retrieve the next page of the query results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextPageToken.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the MPS queue to which the job is submitted. To obtain the ID of an MPS queue, you can log on to the [MPS console](https://mps.console.aliyun.com/overview) and choose **Global Settings** > **MPS Queue and Callback** in the left-side navigation pane.
   * 
   * @example
   * 88c6ca184c0e424d5w5b665e2a12****
   */
  pipelineId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  startOfJobCreatedTimeRange?: string;
  /**
   * @remarks
   * The state of the transcoding job. Default value: **All**. Valid values:
   * 
   * *   **All**
   * *   **Submitted**
   * *   **Transcoding**
   * *   **TranscodeSuccess**
   * *   **TranscodeFail**
   * *   **TranscodeCancelled**
   * 
   * @example
   * All
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

