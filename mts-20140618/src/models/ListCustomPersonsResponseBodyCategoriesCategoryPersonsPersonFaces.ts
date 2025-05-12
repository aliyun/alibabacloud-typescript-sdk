// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace } from "./ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace";


export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces extends $dara.Model {
  face?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace[];
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace },
    };
  }

  validate() {
    if(Array.isArray(this.face)) {
      $dara.Model.validateArray(this.face);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

