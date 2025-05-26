// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CroppingSuggestion } from "./CroppingSuggestion";


export class DetectImageCroppingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image cropping suggestions.
   */
  croppings?: CroppingSuggestion[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91AC8C98-0F36-49D2-8290-742E24D*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      croppings: 'Croppings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppings: { 'type': 'array', 'itemType': CroppingSuggestion },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.croppings)) {
      $dara.Model.validateArray(this.croppings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

