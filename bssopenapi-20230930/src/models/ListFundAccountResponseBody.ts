// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Account creation time
   * 
   * @example
   * 2024-12-30 12:00:00
   */
  createDate?: string;
  /**
   * @remarks
   * Account ID of the MA user associated with the account
   * 
   * @example
   * 1232121
   */
  fundAccountAdminAccountId?: string;
  /**
   * @remarks
   * Name of the MA user associated with the account
   * 
   * @example
   * 云某的账户
   */
  fundAccountAdminAccountName?: string;
  /**
   * @remarks
   * Account ID
   * 
   * @example
   * 1022231
   */
  fundAccountId?: string;
  /**
   * @remarks
   * Account name
   * 
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @remarks
   * Account ID of the fund account owner
   * 
   * @example
   * 132123211
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @remarks
   * Account status.
   * VALID: valid.
   * FROZEN: frozen.
   * CLOSED: closed.
   * 
   * @example
   * VALID
   */
  fundAccountStatus?: string;
  /**
   * @remarks
   * Account type.
   * DIRECT_USER: Alibaba Cloud direct customer account.
   * RESELLER_QUOTA: ecosystem account.
   * 
   * @example
   * DIRECT_USER
   */
  fundAccountType?: string;
  /**
   * @remarks
   * Level-1 marketplace
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * Set of account permissions that the user has.
   * using: use.
   * manage: manage.
   * owner: own.
   */
  permissions?: string[];
  /**
   * @remarks
   * Site
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
   * Data list
   */
  data?: ListFundAccountResponseBodyData[];
  /**
   * @remarks
   * Response metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Request ID
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

