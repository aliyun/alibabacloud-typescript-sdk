// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * 1fbb6d8b-8845-4e65-871e-48bc6830****
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

