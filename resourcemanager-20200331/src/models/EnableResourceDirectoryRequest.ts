// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableResourceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The method used to enable the resource directory. Valid values:
   * 
   * - CurrentAccount: enables the resource directory by using the current logon account.
   * - NewManagementAccount: enables the resource directory by creating a new management account. If you select this method, you must configure `MAName`, `MASecureMobilePhone`, and `VerificationCode`.
   * 
   * This parameter is required.
   * 
   * @example
   * CurrentAccount
   */
  enableMode?: string;
  /**
   * @remarks
   * The name of the new management account.
   * 
   * Format: `<Prefix>@rdadmin.aliyunid.com`. The prefix can contain letters, digits, and the special characters `_.-`. The prefix must start and end with a letter or digit, and cannot contain consecutive special characters. The prefix must be 2 to 50 characters in length.
   * 
   * @example
   * user01@rdadmin.aliyunid.com
   */
  MAName?: string;
  /**
   * @remarks
   * The secure phone number of the new management account.
   * 
   * If you leave this parameter empty, the secure phone number of the current logon account is used. The phone number must be the same as the one used to authenticate and obtain the verification code in [SendVerificationCodeForEnableRD](https://help.aliyun.com/document_detail/364248.html).
   * 
   * Format: `<Country code>-<Phone number>`.
   * 
   * <props="intl">
   * > Phone numbers from the Chinese mainland in the format `86-<Phone number>` are not supported.
   * 
   * 
   * <props="china">
   * > Only phone numbers from the Chinese mainland in the format `86-<Phone number>` are supported.
   * 
   * @example
   * xx-13900001234
   */
  MASecureMobilePhone?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * You can call [SendVerificationCodeForEnableRD](https://help.aliyun.com/document_detail/364248.html) to obtain the verification code.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableMode: 'EnableMode',
      MAName: 'MAName',
      MASecureMobilePhone: 'MASecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMode: 'string',
      MAName: 'string',
      MASecureMobilePhone: 'string',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

