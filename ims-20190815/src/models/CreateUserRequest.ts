// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length. The tag value cannot start with `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * alice
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

export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * The description must be 1 to 128 characters in length.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * The name must be 1 to 24 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile number of the RAM user.
   * 
   * Format: Country code-Mobile phone number.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: CreateUserRequestTag[];
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * The name is in the format of `<username>@<AccountAlias>.onaliyun.com`. `<username>` indicates the name of the RAM user. `<AccountAlias>.onaliyun.com` indicates the default domain name. For more information about how to query the default domain name, see [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html).
   * 
   * The value of `UserPrincipalName` must be `1 to 128` characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The value of `<username>` must be `1 to 64` characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      tag: 'Tag',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      tag: { 'type': 'array', 'itemType': CreateUserRequestTag },
      userPrincipalName: 'string',
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

