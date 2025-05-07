// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSkillGroupConfigResponseBodyDataSkillGroupConfig } from "./ListSkillGroupConfigResponseBodyDataSkillGroupConfig";


export class ListSkillGroupConfigResponseBodyData extends $dara.Model {
  skillGroupConfig?: ListSkillGroupConfigResponseBodyDataSkillGroupConfig[];
  static names(): { [key: string]: string } {
    return {
      skillGroupConfig: 'SkillGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupConfig: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfig },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupConfig)) {
      $dara.Model.validateArray(this.skillGroupConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

