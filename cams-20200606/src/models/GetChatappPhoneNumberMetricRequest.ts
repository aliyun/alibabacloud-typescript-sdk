// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappPhoneNumberMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID or instance ID of the ISV sub-customer. This is the channel ID. View the channel ID on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-************
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1758902399000
   */
  end?: number;
  /**
   * @remarks
   * The granularity of the metrics. Valid values:
   * 
   * - DAILY: Metrics are collected by day.
   * 
   * - HALF_HOUR: Metrics are collected every half an hour.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikd****
   */
  isvCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The business phone number. This is the phone number used to send messages. You can view the phone number in the ChatApp console by choosing <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Phone Number Management**.
   * 
   * @example
   * 861380000****
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp in milliseconds.
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

