// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CategoryListQuery } from "./CategoryListQuery";


export class ListCategoriesRequest extends $dara.Model {
  body?: CategoryListQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CategoryListQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

