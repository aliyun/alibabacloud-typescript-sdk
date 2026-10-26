// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesResourcesFilter extends $dara.Model {
  /**
   * @remarks
   * Matches any item in the list (OR semantics).
   * 
   * @example
   * ["i-bp1a2b3c4d5e6f7g8h9i","i-bp9h8g7f6e5d4c3b2a1"]
   */
  contains?: string[];
  /**
   * @remarks
   * The resource instance ID blacklist filter that excludes alert rules whose associated resources contain any instance ID in the array.
   * 
   * @example
   * ["i-bp0z9y8x7w6v5u4t3s2"]
   */
  notContains?: string[];
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
      notContains: 'notContains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: { 'type': 'array', 'itemType': 'string' },
      notContains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contains)) {
      $dara.Model.validateArray(this.contains);
    }
    if(Array.isArray(this.notContains)) {
      $dara.Model.validateArray(this.notContains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

