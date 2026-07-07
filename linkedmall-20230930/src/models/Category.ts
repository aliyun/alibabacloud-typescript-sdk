// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Category extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 201792301
   */
  categoryId?: number;
  /**
   * @remarks
   * Indicates whether the category is a leaf category.
   * 
   * @example
   * false
   */
  isLeaf?: boolean;
  /**
   * @remarks
   * The level of the category.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * 名称测试
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent category.
   * 
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

