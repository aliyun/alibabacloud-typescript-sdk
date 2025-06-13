// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The header key.
   * 
   * *   The key must be 1 to 40 characters in length.
   * *   It can contain letters, digits, hyphens (-), and underscores (_).
   * *   Cookie and Host are not supported.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The header values.
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

