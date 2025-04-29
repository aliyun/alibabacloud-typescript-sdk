// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessControlListsResponseBodyAclsAcl } from "./DescribeAccessControlListsResponseBodyAclsAcl";


export class DescribeAccessControlListsResponseBodyAcls extends $dara.Model {
  acl?: DescribeAccessControlListsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeAccessControlListsResponseBodyAclsAcl },
    };
  }

  validate() {
    if(Array.isArray(this.acl)) {
      $dara.Model.validateArray(this.acl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

