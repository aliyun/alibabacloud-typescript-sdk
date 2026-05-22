// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class UpdateWafRuleRequest extends $dara.Model {
  config?: WafRuleConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  siteVersion?: number;
  /**
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

