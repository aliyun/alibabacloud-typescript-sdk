// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * If an agent has already signed in to some skill groups, setting this parameter to true allows the agent to sign in to additional skill groups.
   * 
   * @example
   * false
   */
  additivity?: boolean;
  /**
   * @remarks
   * Chat device ID.
   * 
   * @example
   * 4c51c9116c36537cb850dc1081d745df
   */
  chatDeviceId?: string;
  /**
   * @remarks
   * Voice device ID. When multiple voice devices are active, use this parameter to specify one of them, such as a browser Web Real-Time Communication (WebRTC) endpoint or a SIP phone.
   * 
   * This parameter is required.
   * 
   * @example
   * CCC-xx.xx.xx.xx-chrome119-bse1b618bff3xxxxd
   */
  deviceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * List of skill group IDs to sign in to, formatted as a JSON array string, where each array element is a skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  signedSkillGroupIdList?: string;
  /**
   * @remarks
   * Agent ID. If not specified, the agent mapped to the current Resource Access Management (RAM) user is used by default.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      additivity: 'Additivity',
      chatDeviceId: 'ChatDeviceId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additivity: 'boolean',
      chatDeviceId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      signedSkillGroupIdList: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

