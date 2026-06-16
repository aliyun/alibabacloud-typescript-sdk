// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WindowLimit } from "./WindowLimit";


export class UpdateRateLimitRuleInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the rate limit rule.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * A list of time window configurations. Providing this parameter replaces the entire existing list.
   */
  windows?: WindowLimit[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      windows: 'windows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      windows: { 'type': 'array', 'itemType': WindowLimit },
    };
  }

  validate() {
    if(Array.isArray(this.windows)) {
      $dara.Model.validateArray(this.windows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

