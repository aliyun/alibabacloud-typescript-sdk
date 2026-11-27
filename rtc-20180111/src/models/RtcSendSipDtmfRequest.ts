// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcSendSipDtmfRequest extends $dara.Model {
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
   * The ID of an existing channel. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The user ID (sipUserId) in the target OneRTC SIP call.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  channelUserId?: string;
  /**
   * @remarks
   * The device type of the third-party Session Initiation Protocol (SIP) device. Valid values:
   * - sip_device
   * - mcu
   * - phone
   * 
   * This parameter is required.
   * 
   * @example
   * mcu
   */
  deviceType?: string;
  /**
   * @remarks
   * The keys to be sent. Supported keys include 0-9, A-D, a-d, *, #, W or w (wait), and F or f (flash). The keys are sent in the original order and case.
   * 
   * This parameter is required.
   * 
   * @example
   * 12#W3f
   */
  digits?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      channelUserId: 'ChannelUserId',
      deviceType: 'DeviceType',
      digits: 'Digits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      channelUserId: 'string',
      deviceType: 'string',
      digits: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

