// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDomainDkimRecordRequest extends $dara.Model {
  dkimRsaLength?: number;
  domain?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dkimRsaLength: 'DkimRsaLength',
      domain: 'Domain',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dkimRsaLength: 'number',
      domain: 'string',
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

