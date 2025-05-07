// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountMaskingPrivilegeResponseBodyDataUserPrivilege extends $dara.Model {
  expireTime?: string;
  privilege?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      privilege: 'Privilege',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      privilege: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

