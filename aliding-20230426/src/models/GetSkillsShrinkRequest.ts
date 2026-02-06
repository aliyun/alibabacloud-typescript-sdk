// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillsShrinkRequest extends $dara.Model {
  groupIdsShrink?: string;
  skillIdsShrink?: string;
  /**
   * @example
   * xxx
   */
  sourceIdOfAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdsShrink: 'GroupIds',
      skillIdsShrink: 'SkillIds',
      sourceIdOfAssistantId: 'SourceIdOfAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdsShrink: 'string',
      skillIdsShrink: 'string',
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

