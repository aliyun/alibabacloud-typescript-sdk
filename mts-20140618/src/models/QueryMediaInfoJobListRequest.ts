// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaInfoJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media information analysis jobs.
   * 
   * *   You can query up to 10 jobs at a time. Separate multiple IDs with commas (,).
   * *   You can obtain the details from the response parameters of the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/602827.html) operation.
   * 
   * >  If you do not specify the JobIds parameter, the **InvalidParameter** error code is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 23ca1d184c0e4341e5b665e2a12****
   */
  mediaInfoJobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJobIds: 'MediaInfoJobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJobIds: 'string',
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

