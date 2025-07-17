// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @example
   * 30000322682
   */
  parentCategoryId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parentCategoryId: 'ParentCategoryId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parentCategoryId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

