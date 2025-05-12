// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace extends $dara.Model {
  /**
   * @remarks
   * The ID of the face.
   * 
   * @example
   * 15****
   */
  faceId?: string;
  /**
   * @remarks
   * The URL of the facial image that was registered for the figure.
   * 
   * @example
   * http://example-****.jpeg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

