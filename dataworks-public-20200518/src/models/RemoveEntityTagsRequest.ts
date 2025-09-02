// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEntityTagsRequest extends $dara.Model {
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
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      qualifiedName: 'QualifiedName',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifiedName: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

