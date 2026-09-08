// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddNumbersToSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of phone number group IDs.
   * 
   * @example
   * ["38f5b191-b764-45b8-bd93-4b65f839e13a"]
   */
  instNumberGroupIdList?: string;
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
   * The list of phone numbers. Ensure that the phone numbers already exist in the current instance.
   * 
   * @example
   * ["0103182****","0102387****"]
   */
  numberList?: string;
  /**
   * @remarks
   * The skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instNumberGroupIdList: 'InstNumberGroupIdList',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instNumberGroupIdList: 'string',
      instanceId: 'string',
      numberList: 'string',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

