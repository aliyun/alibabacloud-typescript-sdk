// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableWhatsappROIMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID or instance ID of the ISV sub-customer. This is the channel ID. View this ID on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-************
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The verification code of the Independent Software Vendor (ISV). This code verifies that the user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikd****
   */
  isvCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
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

