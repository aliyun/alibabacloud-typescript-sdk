// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsUserResourcePackageResponseBodyResourcePackageInfos } from "./DescribeVsUserResourcePackageResponseBodyResourcePackageInfos";


export class DescribeVsUserResourcePackageResponseBody extends $dara.Model {
  requestId?: string;
  resourcePackageInfos?: DescribeVsUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeVsUserResourcePackageResponseBodyResourcePackageInfos,
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

