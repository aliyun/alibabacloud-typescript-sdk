// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class UpdateWafRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Rule configuration.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * WAF rule ID, which can be obtained by calling the [ListWafRules](https://help.aliyun.com/document_detail/2878257.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * The position of the rule in the rule set.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * Rule status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      position: 'Position',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      id: 'number',
      position: 'number',
      siteId: 'number',
      siteVersion: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

