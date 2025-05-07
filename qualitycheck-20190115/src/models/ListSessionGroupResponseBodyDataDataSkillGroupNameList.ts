// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataSkillGroupNameList extends $dara.Model {
  skillGroupNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupNameList)) {
      $dara.Model.validateArray(this.skillGroupNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

