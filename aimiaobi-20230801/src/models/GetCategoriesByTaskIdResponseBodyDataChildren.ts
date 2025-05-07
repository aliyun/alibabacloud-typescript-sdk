// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesByTaskIdResponseBodyDataChildren extends $dara.Model {
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

