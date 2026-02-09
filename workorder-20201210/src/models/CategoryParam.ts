// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryParam extends $dara.Model {
  categoryId?: number;
  categoryName?: string;
  isSelectFromDialog?: boolean;
  productId?: number;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      isSelectFromDialog: 'IsSelectFromDialog',
      productId: 'ProductId',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryName: 'string',
      isSelectFromDialog: 'boolean',
      productId: 'number',
      productName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

