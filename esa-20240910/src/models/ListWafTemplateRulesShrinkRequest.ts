// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafTemplateRulesShrinkRequest extends $dara.Model {
  instanceId?: string;
  /**
   * @remarks
   * WAF operation phase, used to filter template rules for a specific phase.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * Query parameters, used to filter template rules based on conditions such as rule type.
   * 
   * @example
   * http_anti_scan
   */
  queryArgsShrink?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
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

