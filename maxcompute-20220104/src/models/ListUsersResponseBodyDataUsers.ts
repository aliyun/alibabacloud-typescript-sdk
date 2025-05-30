// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 167835629082
   */
  accountId?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * Bob@
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the account.
   * 
   * @example
   * ALIYUN
   */
  accountType?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Bob
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1567253789
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      accountType: 'accountType',
      displayName: 'displayName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountType: 'string',
      displayName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

