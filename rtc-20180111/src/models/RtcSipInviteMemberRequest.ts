// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcSipInviteMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The meeting token. For code generation, refer to https://help.aliyun.com/document_detail/2689025.html.
   * 
   * @example
   * 000qaaasas……b
   */
  appToken?: string;
  /**
   * @remarks
   * The custom line number in PSTN scenarios.
   * 
   * @example
   * 055112345678
   */
  callNumber?: string;
  /**
   * @remarks
   * The channel ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * $rtc_channelid
   */
  channelId?: string;
  /**
   * @remarks
   * The type of the device used to call the third-party SIP endpoint. Valid values:
   * - sip_device
   * - mcu
   * - phone
   * 
   * Note: Currently, only the phone type is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * phone
   */
  deviceType?: string;
  /**
   * @remarks
   * Specifies whether the third-party meeting system requires registration for inbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  registered?: boolean;
  /**
   * @remarks
   * 1. The IP address of the nearest RTC SIP server.
   * 2. You can resolve the domain name rtcsip.dingtalk.com locally to obtain the nearest access address.
   * For example, run dig rtcsip.dingtalk.com to obtain the address.
   * 
   * @example
   * 39.101.232.13
   */
  serverAddress?: string;
  /**
   * @remarks
   * The username displayed on the third-party system.
   * 
   * This parameter is required.
   * 
   * @example
   * testdevice
   */
  sipDisplayName?: string;
  /**
   * @remarks
   * 1. When the device is mcu, it indicates the channel number of the third-party meeting system to be called.
   * 2. When the device is sip_device, it indicates the registration number of the registered device to be invited.
   * 3. When the device is phone, it indicates the called phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 18512514528
   */
  sipRoomId?: string;
  /**
   * @remarks
   * 1. When the device is mcu, it indicates the address information of the third-party meeting system in the format of ip:port;transport=tcp/udp/tls.
   * Example: "30.240.160.66:5060;transport=tcp"
   * 2. When the device is sip_device, it indicates the registration address of the registered device to be invited.
   * Example: 39.101.232.13
   * 3. When the device is phone, it indicates the address information of the telephone gateway.
   * Example: "30.240.160.66:5060;transport=tcp"
   * 
   * @example
   * 30.240.160.66:5060;transport=tcp
   */
  sipUri?: string;
  /**
   * @remarks
   * The brand and model of the third-party SIP endpoint being called, such as polycom, cisco, tencent, zoom, or pstn.
   * 
   * @example
   * pstn
   */
  sipUserAgent?: string;
  /**
   * @remarks
   * 1. When DeviceType is mcu, it represents the third-party meeting system.
   * 2. When DeviceType is sip_device, it represents the registered device.
   * 3. If the third-party meeting system requires registration for inbound calls, it is the account provided by the third-party system to create an account.
   * 4. If registration is not required, it is the SIP username or RTC user ID for calling the third-party system.
   * 
   * This parameter is required.
   * 
   * @example
   * $reg_userid
   */
  sipUserId?: string;
  /**
   * @remarks
   * The registration password that matches the SipUserId if the third-party system requires registration for inbound calls.
   * 
   * @example
   * 654321
   */
  sipUserPassword?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * taskId
   */
  taskId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * $rtc_userid
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appToken: 'AppToken',
      callNumber: 'CallNumber',
      channelId: 'ChannelId',
      deviceType: 'DeviceType',
      registered: 'Registered',
      serverAddress: 'ServerAddress',
      sipDisplayName: 'SipDisplayName',
      sipRoomId: 'SipRoomId',
      sipUri: 'SipUri',
      sipUserAgent: 'SipUserAgent',
      sipUserId: 'SipUserId',
      sipUserPassword: 'SipUserPassword',
      taskId: 'TaskId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appToken: 'string',
      callNumber: 'string',
      channelId: 'string',
      deviceType: 'string',
      registered: 'boolean',
      serverAddress: 'string',
      sipDisplayName: 'string',
      sipRoomId: 'string',
      sipUri: 'string',
      sipUserAgent: 'string',
      sipUserId: 'string',
      sipUserPassword: 'string',
      taskId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

