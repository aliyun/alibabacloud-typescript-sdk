// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignInGroupRequest extends $dara.Model {
  additivity?: boolean;
  chatDeviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  signedSkillGroupIdList?: string;
  /**
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

