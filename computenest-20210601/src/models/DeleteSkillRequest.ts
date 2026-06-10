// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSkillRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Skill  ID
   * 
   * This parameter is required.
   * 
   * @example
   * s-06e9dca2-0ac9-4d2e-a965-e9db9c057e00
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

