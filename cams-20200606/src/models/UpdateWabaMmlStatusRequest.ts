// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWabaMmlStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta embedded authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  code?: string;
  /**
   * @remarks
   * The SpaceId or instance ID of the ISV sub-customer. This is the channel ID, which can be viewed on the [Channels Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The WABA ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

