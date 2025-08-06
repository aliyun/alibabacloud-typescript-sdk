// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditResultRequest extends $dara.Model {
  mediaId?: string;
  mediaType?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaType: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

