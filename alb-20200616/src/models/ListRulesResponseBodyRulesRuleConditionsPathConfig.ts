// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRulesRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The URLs to which requests are forwarded.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

