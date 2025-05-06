// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregatorRequestAggregatorAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * For more information about how to obtain the ID of a member, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * >  If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
   * 
   * @example
   * 173808452267****
   */
  accountId?: number;
  /**
   * @remarks
   * The display name of the member.
   * 
   * For more information about how to obtain the name of a member, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * >  If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
   * 
   * @example
   * Tony
   */
  accountName?: string;
  /**
   * @remarks
   * The resource directory to which the member belongs. Valid value: ResourceDirectory. ResourceDirectory indicates that the member belongs to a resource directory.
   * 
   * >  If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
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

