// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * Resource category ID
   * 
   * This parameter is required.
   * 
   * @example
   * rc-123****7890
   */
  resourceCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCategoryId: 'ResourceCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCategoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

