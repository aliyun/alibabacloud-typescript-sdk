// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfigAppPackagePackageSigns } from "./WafRuleConfigAppPackagePackageSigns";


export class WafRuleConfigAppPackage extends $dara.Model {
  packageSigns?: WafRuleConfigAppPackagePackageSigns[];
  static names(): { [key: string]: string } {
    return {
      packageSigns: 'PackageSigns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageSigns: { 'type': 'array', 'itemType': WafRuleConfigAppPackagePackageSigns },
    };
  }

  validate() {
    if(Array.isArray(this.packageSigns)) {
      $dara.Model.validateArray(this.packageSigns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

