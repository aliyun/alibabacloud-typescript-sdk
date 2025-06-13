// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the HTTP header. The header key must be 1 to 40 characters in length, It can contain letters, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The values of the HTTP header.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

