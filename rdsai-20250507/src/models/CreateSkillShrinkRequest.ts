// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the skill.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The list of database engines.
   * 
   * This parameter is required.
   */
  dbtypesShrink?: string;
  /**
   * @remarks
   * The description of the skill. It can be up to 1000 characters in length.
   * 
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * The name of the skill, which can contain only lowercase letters, numbers, and hyphens.
   * 
   * This parameter is required.
   * 
   * @example
   * query-optimization
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      dbtypesShrink: 'Dbtypes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      dbtypesShrink: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

