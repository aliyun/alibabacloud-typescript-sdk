// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo } from "./DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo";


export class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  resourcePackageInfo?: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
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

