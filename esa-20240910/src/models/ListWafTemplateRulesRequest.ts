// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafTemplateRulesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * A list of template kinds.
   */
  kinds?: string[];
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * http_directory_traversal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      kinds: 'Kinds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kinds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kinds)) {
      $dara.Model.validateArray(this.kinds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesRequest extends $dara.Model {
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
   * The WAF running phase for filtering template rules.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * The query parameters for filtering template rules by criteria such as the rule type.
   * 
   * @example
   * http_anti_scan
   */
  queryArgs?: ListWafTemplateRulesRequestQueryArgs;
  /**
   * @remarks
   * The site ID. To obtain this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phase: 'Phase',
      queryArgs: 'QueryArgs',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

