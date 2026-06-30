// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSkillShrinkRequest extends $dara.Model {
  paramsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  skillId?: string;
  stream?: boolean;
  sourceIdOfAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      paramsShrink: 'Params',
      skillId: 'SkillId',
      stream: 'Stream',
      sourceIdOfAssistantId: 'sourceIdOfAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsShrink: 'string',
      skillId: 'string',
      stream: 'boolean',
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

