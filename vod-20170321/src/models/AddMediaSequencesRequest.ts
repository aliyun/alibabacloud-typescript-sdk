// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaSequencesRequest extends $dara.Model {
  mediaId?: string;
  mediaSequences?: string;
  mediaType?: string;
  mediaURL?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaSequences: 'MediaSequences',
      mediaType: 'MediaType',
      mediaURL: 'MediaURL',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaSequences: 'string',
      mediaType: 'string',
      mediaURL: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

