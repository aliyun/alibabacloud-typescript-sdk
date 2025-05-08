// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfigAppSdkCustomSign } from "./WafRuleConfigAppSdkCustomSign";


export class WafRuleConfigAppSdk extends $dara.Model {
  customSign?: WafRuleConfigAppSdkCustomSign;
  customSignStatus?: string;
  featureAbnormal?: string[];
  static names(): { [key: string]: string } {
    return {
      customSign: 'CustomSign',
      customSignStatus: 'CustomSignStatus',
      featureAbnormal: 'FeatureAbnormal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSign: WafRuleConfigAppSdkCustomSign,
      customSignStatus: 'string',
      featureAbnormal: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.customSign && typeof (this.customSign as any).validate === 'function') {
      (this.customSign as any).validate();
    }
    if(Array.isArray(this.featureAbnormal)) {
      $dara.Model.validateArray(this.featureAbnormal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

