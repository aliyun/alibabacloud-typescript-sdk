// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountDelegatedStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 10***********34
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name. This parameter is returned only when the account is a delegated administrator.
   * 
   * @example
   * account_test
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the user is a delegated administrator of WAF. Valid values:
   * 
   * - **true**: The user is a delegated administrator of WAF.
   * 
   * - **false**: The user is not a delegated administrator of WAF.
   * 
   * @example
   * true
   */
  delegatedStatus?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8161375D-5958-5627-BFDE-DF1458A73E87
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      delegatedStatus: 'DelegatedStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      delegatedStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

