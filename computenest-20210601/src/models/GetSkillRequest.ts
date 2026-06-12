// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * s-06e9dca2-0ac9-4d2e-a965-e9db9c057e00
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

