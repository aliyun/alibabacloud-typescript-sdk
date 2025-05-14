// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDNAJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media fingerprint analysis jobs that you want to query. We recommend that you query at most 10 jobs at a time. Separate multiple job IDs with commas (,).
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
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

