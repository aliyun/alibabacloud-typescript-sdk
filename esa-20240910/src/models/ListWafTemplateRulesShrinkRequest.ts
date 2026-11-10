// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafTemplateRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * esa-site-aud6ftk57ym8
   */
  instanceId?: string;
  /**
   * @remarks
   * The WAF phase used to filter template rules for a specific phase.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * The query parameters used to filter template rules based on conditions such as the rule type.
   * 
   * @example
   * http_anti_scan
   */
  queryArgsShrink?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phase: 'Phase',
      queryArgsShrink: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phase: 'string',
      queryArgsShrink: 'string',
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

