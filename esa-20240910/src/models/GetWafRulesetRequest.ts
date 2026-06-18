// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF ruleset. You can obtain this ID by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The execution phase of the WAF ruleset. Valid values:
   * 
   * - `http_whitelist`: A whitelist rule
   * 
   * - `http_custom`: A custom rule
   * 
   * - `http_managed`: A managed rule
   * 
   * - `http_anti_scan`: A scan protection rule
   * 
   * - `http_ratelimit`: A rate limit rule
   * 
   * - `ip_access_rule`: An IP access rule
   * 
   * - `http_bot`: A bot rule
   * 
   * - `http_security_level_rule`: A security rule
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The site ID. You can obtain this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      phase: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

