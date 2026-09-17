// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SeverityLevelsFilter extends $dara.Model {
  /**
   * @remarks
   * The hit condition: the set of severity levels covered by the rule contains at least one level in the array (OR semantics).
   * 
   * @example
   * ["CRITICAL","ERROR"]
   */
  contains?: string[];
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contains)) {
      $dara.Model.validateArray(this.contains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

