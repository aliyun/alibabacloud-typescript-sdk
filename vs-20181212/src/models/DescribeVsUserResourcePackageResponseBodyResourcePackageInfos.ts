// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo } from "./DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo";


export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  resourcePackageInfo?: DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackageInfo)) {
      $dara.Model.validateArray(this.resourcePackageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

