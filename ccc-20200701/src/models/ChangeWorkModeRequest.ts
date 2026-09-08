// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeWorkModeRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID, which is the identity ID of a browser-based Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
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
   * The agent\\"s personal phone number, which is used in off-site mode. The agent can use this number to answer calls in off-site mode.
   * 
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @remarks
   * List of skill groups to sign in to. When changing the work mode to off-site mode, you can use this parameter to specify the list of skill groups that the off-site agent needs to sign in to.
   * 
   * @example
   * ["online-1@ccc-test","online-2@ccc-test","online-3@ccc-test","skg-default@ccc-test"]
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
  /**
   * @remarks
   * Work mode.
   * 
   * This parameter is required.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      signedSkillGroupIdList: 'SignedSkillGroupIdList',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      mobile: 'string',
      signedSkillGroupIdList: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

