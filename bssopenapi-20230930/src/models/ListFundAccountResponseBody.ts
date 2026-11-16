// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the account was created. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-12-30 12:00:00
   */
  createDate?: string;
  /**
   * @remarks
   * The account ID of the MA user corresponding to the account.
   * 
   * @example
   * 1232121
   */
  fundAccountAdminAccountId?: string;
  /**
   * @remarks
   * The username of the MA user corresponding to the account.
   * 
   * @example
   * Yun\\"s account
   */
  fundAccountAdminAccountName?: string;
  /**
   * @remarks
   * The fund account ID.
   * 
   * @example
   * 1022231
   */
  fundAccountId?: string;
  /**
   * @remarks
   * The fund account name.
   * 
   * @example
   * Yun\\"s account
   */
  fundAccountName?: string;
  /**
   * @remarks
   * The account ID of the fund account owner.
   * 
   * @example
   * 132123211
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @remarks
   * The account status. Valid values:
   * - VALID: Valid.
   * - FROZEN: Frozen. 
   * - CLOSED: Closed.
   * 
   * @example
   * VALID
   */
  fundAccountStatus?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * - DIRECT_USER: Alibaba Cloud direct customer account. 
   * - RESELLER_QUOTA: Ecosystem account.
   * 
   * @example
   * DIRECT_USER
   */
  fundAccountType?: string;
  /**
   * @remarks
   * The primary marketplace.
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * The set of account permissions owned by the user. Valid values:
   * - using: Use.
   * - manage: Manage.
   * - owner: Own.
   */
  permissions?: string[];
  /**
   * @remarks
   * The site.
   * 
   * @example
   * 26842
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      fundAccountAdminAccountId: 'FundAccountAdminAccountId',
      fundAccountAdminAccountName: 'FundAccountAdminAccountName',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      fundAccountStatus: 'FundAccountStatus',
      fundAccountType: 'FundAccountType',
      nbid: 'Nbid',
      permissions: 'Permissions',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      fundAccountAdminAccountId: 'string',
      fundAccountAdminAccountName: 'string',
      fundAccountId: 'string',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'string',
      fundAccountStatus: 'string',
      fundAccountType: 'string',
      nbid: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      site: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  data?: ListFundAccountResponseBodyData[];
  /**
   * @remarks
   * The metadata of the response structure.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFundAccountResponseBodyData },
      metadata: 'any',
      requestId: 'string',
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

