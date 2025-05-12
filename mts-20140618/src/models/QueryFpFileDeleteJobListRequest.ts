// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpFileDeleteJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the jobs of deleting media files from a media fingerprint library. You can obtain the job IDs from the response parameters of the [SubmitFpFileDeleteJob](https://help.aliyun.com/document_detail/209274.html) operation. Separate multiple job IDs with commas (,). If you leave this parameter empty, the system returns the latest 20 jobs that are submitted.
   * 
   * @example
   * d98459323c024947a104f6a50cbf****,c2dc694696f1441591c5012a73c1****
   */
  jobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
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

