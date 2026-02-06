// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillDetailRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  groupId?: string;
  /**
   * @example
   * 8f6a2111-3828-4a9f-a3ce-51ce73c6ec9b
   */
  skillId?: string;
  /**
   * @example
   * xxx
   */
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

