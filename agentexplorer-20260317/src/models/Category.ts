// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CategoryChildren extends $dara.Model {
  /**
   * @example
   * ecs
   */
  code?: string;
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
  children?: CategoryChildren[];
  /**
   * @example
   * compute
   */
  code?: string;
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

