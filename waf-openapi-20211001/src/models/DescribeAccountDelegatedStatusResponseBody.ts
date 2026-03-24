// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountDelegatedStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 10***********34
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account. This parameter is returned only if the account is a delegated administrator.
   * 
   * @example
   * account_test
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account is a delegated administrator for WAF.
   * 
   * - **true**: The account is a delegated administrator.
   * 
   * - **false**: The account is not a delegated administrator.
   * 
   * @example
   * true
   */
  delegatedStatus?: boolean;
  /**
   * @remarks
   * The ID of the request.
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

