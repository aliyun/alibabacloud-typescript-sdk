// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWafRulesetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the WAF ruleset.
   * 
   * @example
   * this is a test ruleset.
   */
  description?: string;
  /**
   * @remarks
   * The expression for the WAF ruleset.
   * 
   * This parameter is required.
   * 
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-ads11w
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the WAF ruleset.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The execution phase of the WAF ruleset.
   * 
   * - `http_whitelist`: whitelist rule
   * 
   * - `http_custom`: custom rule
   * 
   * - `http_managed`: managed rule
   * 
   * - `http_anti_scan`: scan protection rule
   * 
   * - `http_ratelimit`: rate limiting rule
   * 
   * - `ip_access_rule`: IP access rule
   * 
   * - `http_bot`: advanced bot
   * 
   * - `http_security_level_rule`: security rule
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * A list of rule configurations within the WAF ruleset.
   */
  rulesShrink?: string;
  /**
   * @remarks
   * The shared configuration for WAF batch rules.
   */
  sharedShrink?: string;
  /**
   * @remarks
   * The status of the WAF ruleset.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      instanceId: 'InstanceId',
      name: 'Name',
      phase: 'Phase',
      rulesShrink: 'Rules',
      sharedShrink: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      instanceId: 'string',
      name: 'string',
      phase: 'string',
      rulesShrink: 'string',
      sharedShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

