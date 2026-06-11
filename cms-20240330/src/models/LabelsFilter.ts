// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelMatcher } from "./LabelMatcher";


export class LabelsFilter extends $dara.Model {
  /**
   * @remarks
   * An array of `LabelMatcher` requirements. An object is selected only if it satisfies all of the requirements in this list (a logical AND). If provided, the list cannot be empty.
   */
  allOf?: LabelMatcher[];
  /**
   * @remarks
   * An array of `LabelMatcher` requirements. An object is selected if it satisfies at least one of the requirements in this list (a logical OR). If provided, the list cannot be empty.
   */
  anyOf?: LabelMatcher[];
  static names(): { [key: string]: string } {
    return {
      allOf: 'allOf',
      anyOf: 'anyOf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allOf: { 'type': 'array', 'itemType': LabelMatcher },
      anyOf: { 'type': 'array', 'itemType': LabelMatcher },
    };
  }

  validate() {
    if(Array.isArray(this.allOf)) {
      $dara.Model.validateArray(this.allOf);
    }
    if(Array.isArray(this.anyOf)) {
      $dara.Model.validateArray(this.anyOf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

