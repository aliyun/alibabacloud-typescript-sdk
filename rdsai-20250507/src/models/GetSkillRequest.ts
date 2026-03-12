// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The languages supported by the skill. Valid values:
   * 
   * *   zh-CN: Simplified Chinese
   * *   zh-TW: Traditional Chinese
   * *   en-US: English
   * *   ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The unique identifier of the skill.
   * 
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

