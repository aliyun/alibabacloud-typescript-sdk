// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddNumbersToSkillGroupRequest extends $dara.Model {
  instNumberGroupIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * ["0103182****","0102387****"]
   */
  numberList?: string;
  /**
   * @remarks
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

