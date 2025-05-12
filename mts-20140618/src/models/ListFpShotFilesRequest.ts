// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The media files to be returned must be stored before the specified end time. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > This parameter is available only in the China (Beijing), China (Hangzhou), and China (Shanghai) regions.
   * 
   * @example
   * 2022-09-08T23:32:56Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library whose files you want to query. You can obtain the library ID from the response parameters of the [CreateFpShotDB](https://help.aliyun.com/document_detail/170149.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  nextPageToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The media files to be returned must be stored after the specified start time. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > This parameter is available only in the China (Beijing), China (Hangzhou), and China (Shanghai) regions.
   * 
   * @example
   * 2022-09-01T00:00:28Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fpDBId: 'FpDBId',
      nextPageToken: 'NextPageToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fpDBId: 'string',
      nextPageToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

