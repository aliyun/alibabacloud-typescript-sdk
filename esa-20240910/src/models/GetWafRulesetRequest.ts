// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF ruleset. You can call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation to obtain the ID.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The WAF rule execution phase. Valid values:
   * - http_whitelist: whitelist rules
   * - http_custom: custom rules
   * - http_managed: managed rules
   * - http_anti_scan: scan protection rules
   * - http_ratelimit: rate limiting rules
   * - ip_access_rule: IP access rules
   * - http_bot: advanced mode bots
   * - http_security_level_rule: security rules
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
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

