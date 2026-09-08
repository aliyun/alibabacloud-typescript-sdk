// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the agent\\"s profile picture.
   * 
   * @example
   * http://abc.com/sam.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The agent\\"s ID number. Set this as needed.
   * 
   * @example
   * 1001
   */
  displayId?: string;
  /**
   * @remarks
   * The display name of the agent. It must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 坐席小王
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the agent. After the agent is created, an email is sent to this address. The email contains the logon URL for Cloud Contact Center, and the username and password for the RAM account. Keep this information secure.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The logon name of the agent. It must be 4 to 64 characters in length and can contain uppercase letters, lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @remarks
   * The personal phone number of the agent. This number is used in OFF_SITE mode. The agent can use this number to answer calls in OFF_SITE mode.
   * 
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @remarks
   * Specifies whether to send an email notification.
   * 
   * - true: Send
   * 
   * - false: Do not send
   * 
   * @example
   * true
   */
  needEmailNotification?: string;
  /**
   * @remarks
   * The agent\\"s nickname.
   * 
   * @example
   * 老王
   */
  nickname?: string;
  /**
   * @remarks
   * Specifies whether the agent must reset the password upon the first logon. If set to true, the agent is prompted to reset the password when they first log on to the RAM account. Otherwise, they are not prompted. The default value is false.
   * 
   * @example
   * false
   */
  resetPassword?: boolean;
  /**
   * @remarks
   * The role ID. The format is Role\\@InstanceID. The following roles are supported: Admin (administrator), Manager (skill group leader), and Agent (agent).
   * 
   * This parameter is required.
   * 
   * @example
   * Agent@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * A list of skill levels for skill groups. This is a string in the format of a JSON array. The array can contain up to 100 elements. Each element is an object that contains two fields: skillGroupId and skillLevel. For skillGroupId, enter the ID of the skill group to add. For skillLevel, enter the skill level to add. The value can range from 1 to 10. A smaller value indicates a higher skill level, meaning the agent can handle more calls per unit of time.
   * 
   * @example
   * [{"skillGroupId":"skillgroup1@ccc-test","skillLevel":1},{"skillGroupId":"skillgroup2@ccc-test","skillLevel":10}]
   */
  skillLevelList?: string;
  /**
   * @remarks
   * The work mode.
   * 
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      needEmailNotification: 'NeedEmailNotification',
      nickname: 'Nickname',
      resetPassword: 'ResetPassword',
      roleId: 'RoleId',
      skillLevelList: 'SkillLevelList',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      needEmailNotification: 'string',
      nickname: 'string',
      resetPassword: 'boolean',
      roleId: 'string',
      skillLevelList: 'string',
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

