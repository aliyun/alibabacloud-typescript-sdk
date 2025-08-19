// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceAccountRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The prefix for the Alibaba Cloud account name of the member. If you leave this parameter empty, the system randomly generates a prefix.
   * 
   * The prefix must be 2 to 37 characters in length.
   * 
   * The prefix can contain letters, digits, and special characters but cannot contain consecutive special characters. The prefix must start with a letter or digit and end with a letter or digit. Valid special characters include underscores (`_`), periods (.), and hyphens (`-`).
   * 
   * The complete Alibaba Cloud account name of a member in a resource directory is in the @.aliyunid.com format, such as `alice@rd-3G****.aliyunid.com`.
   * 
   * Each name must be unique in the resource directory.
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
   * The name can contain letters, digits, underscores (_), periods (.), hyphens (-), and spaces.
   * 
   * The name must be unique in the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Dev
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks whether an identity type can be specified for the member. If the request does not pass the dry run, an error code is returned.
   * *   false (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The ID of the billing account. If you leave this parameter empty, the newly created member is used as its billing account.
   * 
   * @example
   * 12323344****
   */
  payerAccountId?: string;
  /**
   * @remarks
   * The identity type of the member. Valid values:
   * 
   * *   resell: The member is an account for a reseller. This is the default value. A relationship is automatically established between the member and the reseller. The management account of the resource directory must be used as the billing account of the member.
   * *   non_resell: The member is not an account for a reseller. The member is an account that is not associated with a reseller. You can directly use the account to purchase Alibaba Cloud resources. The member is used as its own billing account.
   * 
   * > This parameter is available only for resellers at the international site (alibabacloud.com).
   * 
   * @example
   * resell
   */
  resellAccountType?: string;
  /**
   * @remarks
   * The tag of the member.
   */
  tag?: CreateResourceAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      displayName: 'DisplayName',
      dryRun: 'DryRun',
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
      dryRun: 'boolean',
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

