// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillDetailRequest extends $dara.Model {
  groupId?: string;
  skillId?: string;
  sourceIdOfAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      skillId: 'SkillId',
      sourceIdOfAssistantId: 'SourceIdOfAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      skillId: 'string',
      sourceIdOfAssistantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

