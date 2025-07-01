// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage } from "./DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage";


export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages extends $dara.Model {
  package?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage[];
  static names(): { [key: string]: string } {
    return {
      package: 'Package',
    };
  }

  static types(): { [key: string]: any } {
    return {
      package: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackagesPackage },
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

