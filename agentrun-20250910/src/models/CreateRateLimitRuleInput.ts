// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WindowLimit } from "./WindowLimit";


export class CreateRateLimitRuleInput extends $dara.Model {
  /**
   * @remarks
   * The descriptor ID for the rate limit rule. This parameter is required if the descriptor type is not `model`. For `model` types, the server assembles the ID.
   * 
   * @example
   * model:gpt-4
   */
  descriptorId?: string;
  /**
   * @remarks
   * The descriptor type for the rate limit rule, such as `model` or `user`.
   * 
   * This parameter is required.
   * 
   * @example
   * model
   */
  descriptorType?: string;
  /**
   * @remarks
   * Whether to enable the rate limit rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * A list of time window configurations. At least one window is required.
   * 
   * This parameter is required.
   */
  windows?: WindowLimit[];
  static names(): { [key: string]: string } {
    return {
      descriptorId: 'descriptorId',
      descriptorType: 'descriptorType',
      enabled: 'enabled',
      windows: 'windows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptorId: 'string',
      descriptorType: 'string',
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

