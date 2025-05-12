// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpDBDeleteJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the jobs of clearing or deleting a media fingerprint library. You can obtain the job IDs from the response parameters of the [SubmitFpDBDeleteJob](https://help.aliyun.com/document_detail/209341.html) operation. Separate multiple job IDs with commas (,). If you leave this parameter empty, the system returns the latest 20 jobs that are submitted.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****,78dc866518b843259669df58ed30****
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

