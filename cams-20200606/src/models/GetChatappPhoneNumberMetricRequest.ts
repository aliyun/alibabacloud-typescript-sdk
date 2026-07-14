// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappPhoneNumberMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId or instance ID of the ISV sub-customer. This is the channel ID, which can be viewed on the <props="china">[Channels Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channels Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-************
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The query end time. This value is a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1758902399000
   */
  end?: number;
  /**
   * @remarks
   * The metric granularity. Valid values:
   * - DAILY: collects metrics on a daily basis.
   * - HALF_HOUR: collects metrics every half hour.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The ISV verification code, which is used to verify whether the RAM user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikd****
   */
  isvCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The business phone number. This is the number used to send messages, which can be viewed on the <props="china">[**Channels Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channels Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Phone Number Management** page.
   * 
   * @example
   * 861380000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The query start time. This value is a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1756742399000
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      end: 'End',
      granularity: 'Granularity',
      isvCode: 'IsvCode',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      end: 'number',
      granularity: 'string',
      isvCode: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

