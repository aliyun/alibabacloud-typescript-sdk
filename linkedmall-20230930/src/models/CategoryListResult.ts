// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Category } from "./Category";


export class CategoryListResult extends $dara.Model {
  /**
   * @remarks
   * The category collection.
   */
  categories?: Category[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D1FC14F-CE54-1A1F-A322-D6DC87D49AFE
   */
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

