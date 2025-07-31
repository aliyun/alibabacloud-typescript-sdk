// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountByRowPermissionIdResponseBodyDataUserMappingListAccounts extends $dara.Model {
  /**
   * @example
   * 300901111
   */
  accountId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountByRowPermissionIdResponseBodyDataUserMappingList extends $dara.Model {
  /**
   * @example
   * PERSONAL
   */
  accountType?: string;
  accounts?: GetAccountByRowPermissionIdResponseBodyDataUserMappingListAccounts[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accounts: { 'type': 'array', 'itemType': GetAccountByRowPermissionIdResponseBodyDataUserMappingListAccounts },
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountByRowPermissionIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 300001235
   */
  id?: number;
  userMappingList?: GetAccountByRowPermissionIdResponseBodyDataUserMappingList[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      userMappingList: 'UserMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      userMappingList: { 'type': 'array', 'itemType': GetAccountByRowPermissionIdResponseBodyDataUserMappingList },
    };
  }

  validate() {
    if(Array.isArray(this.userMappingList)) {
      $dara.Model.validateArray(this.userMappingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountByRowPermissionIdResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAccountByRowPermissionIdResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAccountByRowPermissionIdResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

