// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the skill group. This parameter is optional. If not specified, it defaults to empty.
   * 
   * @example
   * 云联络中心的测试技能组。
   */
  description?: string;
  /**
   * @remarks
   * Display name of the skill group. It must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试技能组
   */
  displayName?: string;
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
   * Media type. The default value is AUDIO. Other valid values include CHAT and VIDEO.
   * 
   * @example
   * CHAT
   */
  mediaType?: string;
  /**
   * @remarks
   * The skill group name. It must be 1 to 64 characters in length, can contain digits, letters, underscores (_), and hyphens (-), and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * skillgroup
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

