// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserResourcesResponseBodyResourcesOsUpdatePackages } from "./DescribeUserResourcesResponseBodyResourcesOsUpdatePackages";


export class DescribeUserResourcesResponseBodyResourcesOsUpdate extends $dara.Model {
  checkId?: string;
  kbListString?: string;
  packageCount?: number;
  packages?: DescribeUserResourcesResponseBodyResourcesOsUpdatePackages[];
  updateCatalogUrl?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      kbListString: 'KbListString',
      packageCount: 'PackageCount',
      packages: 'Packages',
      updateCatalogUrl: 'UpdateCatalogUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      kbListString: 'string',
      packageCount: 'number',
      packages: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesOsUpdatePackages },
      updateCatalogUrl: 'string',
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

