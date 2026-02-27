// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillShrinkRequest extends $dara.Model {
  contentShrink?: string;
  dbtypesShrink?: string;
  description?: string;
  /**
   * @example
   * sql-optimization
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8f6a2111-3828-4a9f-a3ce-51ce73c6****
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      dbtypesShrink: 'Dbtypes',
      description: 'Description',
      name: 'Name',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      dbtypesShrink: 'string',
      description: 'string',
      name: 'string',
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

