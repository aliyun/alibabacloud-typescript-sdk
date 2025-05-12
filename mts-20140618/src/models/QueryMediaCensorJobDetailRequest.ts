// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the content moderation job. You can obtain the job ID from the response parameters of the [SubmitMediaCensorJob](https://help.aliyun.com/document_detail/91774.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * *   Default value: **30**.
   * *   Valid values: **1 to 300**.
   * 
   * @example
   * 30
   */
  maximumPageSize?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. The token of the next page is returned after you call this operation to query the results of a content moderation job for the first time.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      maximumPageSize: 'MaximumPageSize',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      maximumPageSize: 'number',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

