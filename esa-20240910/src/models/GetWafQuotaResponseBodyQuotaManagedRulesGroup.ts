// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafQuotaResponseBodyQuotaManagedRulesGroup extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the WAF managed rules group is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The total number quota allowed for the WAF managed rules group.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

