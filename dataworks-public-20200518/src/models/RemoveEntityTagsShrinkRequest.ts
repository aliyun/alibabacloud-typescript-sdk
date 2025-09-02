// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEntityTagsShrinkRequest extends $dara.Model {
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
   * The tag keys.
   * 
   * This parameter is required.
   */
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      qualifiedName: 'QualifiedName',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifiedName: 'string',
      tagKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

