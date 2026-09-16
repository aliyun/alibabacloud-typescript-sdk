// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The supported languages. Valid values:
   * * zh-CN: Simplified Chinese
   * * zh-TW: Traditional Chinese
   * * en-US: English
   * * ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The unique identifier of the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-44665544****
   */
  skillId?: string;
  /**
   * @remarks
   * The ContextDB workspace ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      skillId: 'SkillId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      skillId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

