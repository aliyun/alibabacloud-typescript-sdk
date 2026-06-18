// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserWafRulesetsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the execution phase of the WAF rule.
   * 
   * - `http_whitelist`: whitelist rule
   * 
   * - `http_custom`: custom rule
   * 
   * - `http_managed`: managed rule
   * 
   * - `http_anti_scan`: anti-scan rule
   * 
   * - `http_ratelimit`: rate limit rule
   * 
   * - `ip_access_rule`: IP access rule
   * 
   * - `http_bot`: advanced mode bot
   * 
   * - `http_security_level_rule`: security rule
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * Parameters for filtering and sorting the results.
   */
  queryArgsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgsShrink: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

