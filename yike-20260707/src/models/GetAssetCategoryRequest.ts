// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetCategoryRequest extends $dara.Model {
  /**
   * @example
   * scenery
   */
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

