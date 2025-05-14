// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSkillShrinkRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  paramsShrink?: string;
  /**
   * @example
   * a1d033dd-xxxx-49cf-b49b-2068081bb551
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      paramsShrink: 'Params',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsShrink: 'string',
      skillId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

