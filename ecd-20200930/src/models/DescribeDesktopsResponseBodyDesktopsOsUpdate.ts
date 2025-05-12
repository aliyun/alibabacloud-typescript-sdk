// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopsResponseBodyDesktopsOsUpdatePackages } from "./DescribeDesktopsResponseBodyDesktopsOsUpdatePackages";


export class DescribeDesktopsResponseBodyDesktopsOsUpdate extends $dara.Model {
  checkId?: string;
  packageCount?: number;
  packages?: DescribeDesktopsResponseBodyDesktopsOsUpdatePackages[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      packageCount: 'PackageCount',
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      packageCount: 'number',
      packages: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsOsUpdatePackages },
    };
  }

  validate() {
    if(Array.isArray(this.packages)) {
      $dara.Model.validateArray(this.packages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

