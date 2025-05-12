// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomPersonsResponseBodyCategoriesCategory } from "./ListCustomPersonsResponseBodyCategoriesCategory";


export class ListCustomPersonsResponseBodyCategories extends $dara.Model {
  category?: ListCustomPersonsResponseBodyCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategory },
    };
  }

  validate() {
    if(Array.isArray(this.category)) {
      $dara.Model.validateArray(this.category);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

