// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDNAJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the DNA jobs to query. You can query up to 10 job IDs at a time. Separate multiple IDs with commas (,).
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

