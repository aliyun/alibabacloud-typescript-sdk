// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Category extends $dara.Model {
  /**
   * @example
   * 201792301
   */
  categoryId?: number;
  /**
   * @example
   * false
   */
  isLeaf?: boolean;
  /**
   * @example
   * 0
   */
  level?: number;
  name?: string;
  /**
   * @example
   * 0
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'categoryId',
      isLeaf: 'isLeaf',
      level: 'level',
      name: 'name',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      isLeaf: 'boolean',
      level: 'number',
      name: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

