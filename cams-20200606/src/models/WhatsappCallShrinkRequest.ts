// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhatsappCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86138***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The call action.
   * 
   * This parameter is required.
   * 
   * @example
   * connect
   */
  callAction?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * wamid-xx**
   */
  callId?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer. This is the channel ID, which can be viewed on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-xx**
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The call negotiation information.
   */
  sessionShrink?: string;
  /**
   * @remarks
   * The user phone number.
   * 
   * @example
   * 86131***
   */
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      callAction: 'CallAction',
      callId: 'CallId',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionShrink: 'Session',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      callAction: 'string',
      callId: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionShrink: 'string',
      userNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

