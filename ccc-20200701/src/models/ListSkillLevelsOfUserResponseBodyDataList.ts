// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillLevelsOfUserResponseBodyDataList extends $dara.Model {
  mediaType?: string;
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
  skillLevel?: string;
  static names(): { [key: string]: string } {
    return {
      mediaType: 'MediaType',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaType: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

