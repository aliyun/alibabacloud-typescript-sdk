// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafTemplateRulesRequestQueryArgs } from "./ListWafTemplateRulesRequestQueryArgs";


export class ListWafTemplateRulesRequest extends $dara.Model {
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
  queryArgs?: ListWafTemplateRulesRequestQueryArgs;
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
      phase: 'Phase',
      queryArgs: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      queryArgs: ListWafTemplateRulesRequestQueryArgs,
      siteId: 'number',
    };
  }

  validate() {
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

