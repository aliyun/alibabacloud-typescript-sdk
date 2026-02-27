// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillShrinkRequest extends $dara.Model {
  contentShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbtypesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
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

