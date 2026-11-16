// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPledgeTemplateAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId or instance ID of the ISV sub-customer. This is the channel ID, which you can view on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The industry type.
   * 
   * @example
   * it
   */
  industryType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      industryType: 'IndustryType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      industryType: 'string',
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

