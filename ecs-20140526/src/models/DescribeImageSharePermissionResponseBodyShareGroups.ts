// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageSharePermissionResponseBodyShareGroupsShareGroup } from "./DescribeImageSharePermissionResponseBodyShareGroupsShareGroup";


export class DescribeImageSharePermissionResponseBodyShareGroups extends $dara.Model {
  shareGroup?: DescribeImageSharePermissionResponseBodyShareGroupsShareGroup[];
  static names(): { [key: string]: string } {
    return {
      shareGroup: 'ShareGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareGroup: { 'type': 'array', 'itemType': DescribeImageSharePermissionResponseBodyShareGroupsShareGroup },
    };
  }

  validate() {
    if(Array.isArray(this.shareGroup)) {
      $dara.Model.validateArray(this.shareGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

