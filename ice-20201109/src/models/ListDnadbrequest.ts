// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDNADBRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media fingerprint libraries. We recommend that you query at most 10 libraries at a time. Separate multiple library IDs with commas (,).
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****,78dc866518b843259669df58ed30****
   */
  DBIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBIds: 'DBIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBIds: 'string',
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

