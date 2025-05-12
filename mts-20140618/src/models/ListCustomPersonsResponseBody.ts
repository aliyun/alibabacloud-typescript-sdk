// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomPersonsResponseBodyCategories } from "./ListCustomPersonsResponseBodyCategories";


export class ListCustomPersonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of the figure libraries.
   */
  categories?: ListCustomPersonsResponseBodyCategories;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD4DED6B-0C26-5A8B-A6BE-4FA542AE4D57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: ListCustomPersonsResponseBodyCategories,
      requestId: 'string',
    };
  }

  validate() {
    if(this.categories && typeof (this.categories as any).validate === 'function') {
      (this.categories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

