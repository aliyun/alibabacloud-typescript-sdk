// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege } from "./DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege";


export class DescribeAccountMaskingPrivilegeResponseBodyData extends $dara.Model {
  userPrivilege?: DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege[];
  static names(): { [key: string]: string } {
    return {
      userPrivilege: 'UserPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrivilege: { 'type': 'array', 'itemType': DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege },
    };
  }

  validate() {
    if(Array.isArray(this.userPrivilege)) {
      $dara.Model.validateArray(this.userPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

