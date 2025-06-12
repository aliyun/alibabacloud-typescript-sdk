// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataListSkillLevelList extends $dara.Model {
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @example
   * 5
   */
  skillLevel?: number;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

