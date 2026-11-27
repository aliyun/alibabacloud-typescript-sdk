// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceAccountRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the account name. If you leave this parameter empty, the system randomly generates a prefix.
   * 
   * <props="china">The length ranges from 2 to 50 characters.
   * 
   * <props="intl">The length ranges from 2 to 37 characters.
   * 
   * Format: The prefix can contain letters, digits, and special characters such as underscores (_), periods (.), and hyphens (-). It must start and end with a letter or a digit, and cannot contain consecutive special characters.
   * 
   * The format of the complete account name is <AccountNamePrefix>@<ResourceDirectoryId>.aliyunid.com. Example: alice@rd-3G****.aliyunid.com.
   * 
   * The account name must be unique in the resource directory.
   * 
   * @example
   * alice
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * The name must be 2 to 50 characters in length.
   * 
   * Format: The name can contain Chinese characters, letters, digits, underscores (_), periods (.), hyphens (-), and spaces.
   * 
   * The display name must be unique in the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Dev
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-r23M55****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The ID of the settlement account. If you leave this parameter empty, the newly created member pays its own bills.
   * 
   * @example
   * 12323344****
   */
  payerAccountId?: string;
  /**
   * @remarks
   * The identity type of the member. Valid values:
   * 
   * - resell: reseller account. This is the default value. The created member automatically establishes a reseller relationship with your reseller. You must use the management account to pay for the new member.
   * - non_resell: non-reseller account. The created member is a regular Alibaba Cloud account and has no relationship with your current reseller. The account purchases resources directly from Alibaba Cloud and pays its own bills.
   * 
   * > This parameter is supported only for reseller customers on the international site.
   * 
   * @example
   * resell
   */
  resellAccountType?: string;
  /**
   * @remarks
   * The tags of the member.
   */
  tag?: CreateResourceAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      displayName: 'DisplayName',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
      resellAccountType: 'ResellAccountType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      displayName: 'string',
      parentFolderId: 'string',
      payerAccountId: 'string',
      resellAccountType: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceAccountRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

