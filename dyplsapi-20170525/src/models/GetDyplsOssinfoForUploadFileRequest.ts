// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDyplsOSSInfoForUploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Default Value: phone_card.
   * 
   * This parameter is required.
   * 
   * @example
   * phone_card
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
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

