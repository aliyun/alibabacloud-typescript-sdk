// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WindowLimit } from "./WindowLimit";


export class RateLimitRule extends $dara.Model {
  /**
   * @remarks
   * The creation time of the rate limit rule, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The descriptor ID for the rate limit rule, which associates the rule with a specific throttling target.
   * 
   * @example
   * model:gpt-4
   */
  descriptorId?: string;
  /**
   * @remarks
   * The descriptor type for the rate limit rule, such as \\"model\\" or \\"user\\".
   * 
   * @example
   * model
   */
  descriptorType?: string;
  /**
   * @remarks
   * Indicates whether the rate limit rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The last update time of the rate limit rule, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The unique identifier for the rate limit rule.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  rateLimitRuleId?: string;
  /**
   * @remarks
   * A list of time window configurations. Multiple windows can be used to enforce layered rate limiting.
   */
  windows?: WindowLimit[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      descriptorId: 'descriptorId',
      descriptorType: 'descriptorType',
      enabled: 'enabled',
      lastUpdatedAt: 'lastUpdatedAt',
      rateLimitRuleId: 'rateLimitRuleId',
      windows: 'windows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      descriptorId: 'string',
      descriptorType: 'string',
      enabled: 'boolean',
      lastUpdatedAt: 'string',
      rateLimitRuleId: 'string',
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

