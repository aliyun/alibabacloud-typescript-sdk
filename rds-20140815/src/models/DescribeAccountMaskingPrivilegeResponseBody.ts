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

export class DescribeAccountMaskingPrivilegeResponseBody extends $dara.Model {
  data?: DescribeAccountMaskingPrivilegeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAccountMaskingPrivilegeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

