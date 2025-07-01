// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStoragePackagesResponseBodyPackagesPackage } from "./DescribeStoragePackagesResponseBodyPackagesPackage";


export class DescribeStoragePackagesResponseBodyPackages extends $dara.Model {
  package?: DescribeStoragePackagesResponseBodyPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeStoragePackagesResponseBodyPackagesPackage },
    };
  }

  validate() {
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

