// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEntityTagsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the entity. Example: maxcompute-table.projectA.tableA.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table.projectA.tableA
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      qualifiedName: 'QualifiedName',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifiedName: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

