// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhatsappCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86138***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The action to perform on the call.
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
   * The Space ID of the ISV sub-customer, or the instance ID of the direct customer. View the Space ID on the
   * 
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
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
   * The user\\"s number.
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

