// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserEntityTag } from "./UserEntityTag";


export class SetEntityTagsRequest extends $dara.Model {
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
  tags?: UserEntityTag[];
  static names(): { [key: string]: string } {
    return {
      qualifiedName: 'QualifiedName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifiedName: 'string',
      tags: { 'type': 'array', 'itemType': UserEntityTag },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

