// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregatorRequestAggregatorAccounts extends $dara.Model {
  /**
   * @remarks
   * The member account ID. For more information about how to obtain the ID of a member account, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * @example
   * 171322098523****
   */
  accountId?: number;
  /**
   * @remarks
   * The name of the member account. For more information about how to obtain the name of a member account, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * @example
   * Alice
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the member account. Set this parameter to ResourceDirectory.
   * 
   * @example
   * ResourceDirectory
   */
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

