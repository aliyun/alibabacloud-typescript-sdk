// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllMediaBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of media buckets to return. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  maximumPageSize?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. The response to the first request contains this parameter, which is added to the next request.
   * 
   * @example
   * P2Zqo1PLGhZdygo-ajSsjUX5zrBHCgXy6j4hEvv****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

