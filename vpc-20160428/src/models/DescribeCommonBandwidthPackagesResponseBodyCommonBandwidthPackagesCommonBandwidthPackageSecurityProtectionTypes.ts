// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackageSecurityProtectionTypes extends $dara.Model {
  securityProtectionType?: string[];
  static names(): { [key: string]: string } {
    return {
      securityProtectionType: 'SecurityProtectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityProtectionType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionType)) {
      $dara.Model.validateArray(this.securityProtectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

