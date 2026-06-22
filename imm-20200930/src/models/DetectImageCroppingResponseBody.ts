// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CroppingSuggestion } from "./CroppingSuggestion";


export class DetectImageCroppingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of image cropping information.
   */
  croppings?: CroppingSuggestion[];
  /**
   * @remarks
   * The list of objects included in the cropping region, corresponding to the InclusionHints input parameter. This field is empty if no objects are included.
   */
  matchedInclusionHints?: string[];
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
      matchedInclusionHints: 'MatchedInclusionHints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppings: { 'type': 'array', 'itemType': CroppingSuggestion },
      matchedInclusionHints: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.croppings)) {
      $dara.Model.validateArray(this.croppings);
    }
    if(Array.isArray(this.matchedInclusionHints)) {
      $dara.Model.validateArray(this.matchedInclusionHints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

