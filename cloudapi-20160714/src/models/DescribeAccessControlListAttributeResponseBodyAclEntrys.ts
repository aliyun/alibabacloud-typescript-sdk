// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry } from "./DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry";


export class DescribeAccessControlListAttributeResponseBodyAclEntrys extends $dara.Model {
  aclEntry?: DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry },
    };
  }

  validate() {
    if(Array.isArray(this.aclEntry)) {
      $dara.Model.validateArray(this.aclEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

