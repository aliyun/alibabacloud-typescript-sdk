// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelMatcher } from "./LabelMatcher";


export class LabelsFilter extends $dara.Model {
  /**
   * @remarks
   * Match all labels (AND).
   * 
   * @example
   * [{"key":"env","value":"production"},{"key":"team","value":"ops"}]
   */
  allOf?: LabelMatcher[];
  /**
   * @remarks
   * Match any label (OR).
   * 
   * @example
   * [{"key":"env","value":"production"},{"key":"env","value":"staging"}]
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

