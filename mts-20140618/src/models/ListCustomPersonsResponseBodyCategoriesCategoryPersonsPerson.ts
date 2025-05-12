// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces } from "./ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces";


export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson extends $dara.Model {
  /**
   * @remarks
   * The array of the faces.
   */
  faces?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces;
  /**
   * @remarks
   * The description of the figure.
   * 
   * @example
   * PersonDescription-****
   */
  personDescription?: string;
  /**
   * @remarks
   * The ID of the figure.
   * 
   * @example
   * PersonId-****
   */
  personId?: string;
  /**
   * @remarks
   * The name of the figure.
   * 
   * @example
   * PersonName-****
   */
  personName?: string;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      personDescription: 'PersonDescription',
      personId: 'PersonId',
      personName: 'PersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces,
      personDescription: 'string',
      personId: 'string',
      personName: 'string',
    };
  }

  validate() {
    if(this.faces && typeof (this.faces as any).validate === 'function') {
      (this.faces as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

