// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWafRulesetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the WAF ruleset.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The WAF rule execution phase. Valid values:
   * 
   * - http_whitelist
   * 
   * - http_custom
   * 
   * - http_managed
   * 
   * - http_anti_scan
   * 
   * - http_ratelimit
   * 
   * - ip_access_rule
   * 
   * - http_bot
   * 
   * - http_security_level_rule
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The site ID. To get this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The site configuration version. This parameter applies only if versioning is enabled for the site. The default is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      phase: 'Phase',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phase: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

