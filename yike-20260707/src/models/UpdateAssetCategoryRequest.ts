// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssetCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  categoryId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scenery
   */
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

