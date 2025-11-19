// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcSipInviteMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * 000qaaasas……b
   */
  appToken?: string;
  /**
   * @example
   * 055112345678
   */
  callNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mcu
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  registered?: boolean;
  /**
   * @example
   * 47.116.80.180
   */
  serverAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ceo
   */
  sipDisplayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sipRoomId?: string;
  /**
   * @example
   * 30.240.160.66:5060;transport=tcp
   */
  sipUri?: string;
  /**
   * @example
   * pstn
   */
  sipUserAgent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sipUserId?: string;
  /**
   * @example
   * 123
   */
  sipUserPassword?: string;
  /**
   * @example
   * taskId
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
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

