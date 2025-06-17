// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos } from "./DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos";


export class DescribeCdnUserResourcePackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84839536-2B7E-457D-9D8C-82E6C7D4E1A3
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about resource plans. The returned information is displayed in an array of ResourcePackageInfo nodes.
   */
  resourcePackageInfos?: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos,
    };
  }

  validate() {
    if(this.resourcePackageInfos && typeof (this.resourcePackageInfos as any).validate === 'function') {
      (this.resourcePackageInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

