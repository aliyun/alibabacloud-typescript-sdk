// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-44665544****
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

