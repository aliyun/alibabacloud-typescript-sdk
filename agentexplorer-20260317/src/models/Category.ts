// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CategoryChildren extends $dara.Model {
  /**
   * @remarks
   * Level 2 Category Code
   * 
   * @example
   * ecs
   */
  code?: string;
  /**
   * @remarks
   * Level 2 Category Name
   * 
   * @example
   * 弹性计算
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class Category extends $dara.Model {
  /**
   * @remarks
   * Sub-categories
   */
  children?: CategoryChildren[];
  /**
   * @remarks
   * Level 1 Category Code
   * 
   * @example
   * compute
   */
  code?: string;
  /**
   * @remarks
   * Level 1 Category Name
   * 
   * @example
   * 计算
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      code: 'code',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': CategoryChildren },
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

