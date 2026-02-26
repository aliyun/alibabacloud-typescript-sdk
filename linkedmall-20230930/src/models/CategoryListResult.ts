// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Category } from "./Category";


export class CategoryListResult extends $dara.Model {
  categories?: Category[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': Category },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

