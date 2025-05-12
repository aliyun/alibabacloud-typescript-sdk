// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson } from "./ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson";


export class ListCustomPersonsResponseBodyCategoriesCategoryPersons extends $dara.Model {
  person?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson[];
  static names(): { [key: string]: string } {
    return {
      person: 'Person',
    };
  }

  static types(): { [key: string]: any } {
    return {
      person: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson },
    };
  }

  validate() {
    if(Array.isArray(this.person)) {
      $dara.Model.validateArray(this.person);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

