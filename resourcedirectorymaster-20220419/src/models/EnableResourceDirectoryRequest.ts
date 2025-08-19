// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableResourceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The mode in which you enable a resource directory. Valid values:
   * 
   * *   CurrentAccount: The current account is used to enable a resource directory.
   * *   NewManagementAccount: A newly created account is used to enable a resource directory. If you select this mode, you must configure the `MAName`, `MASecureMobilePhone`, and `VerificationCode` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * CurrentAccount
   */
  enableMode?: string;
  /**
   * @remarks
   * The name of the newly created account.
   * 
   * Specify the name in the `<Prefix>@rdadmin.aliyunid.com` format. The prefix can contain letters, digits, and special characters but cannot contain consecutive special characters. The prefix must start and end with a letter or digit. Valid special characters include underscores (`_`), periods (.), and hyphens (-). The prefix must be 2 to 50 characters in length.
   * 
   * @example
   * user01@rdadmin.aliyunid.com
   */
  MAName?: string;
  /**
   * @remarks
   * The mobile phone number that is bound to the newly created account.
   * 
   * If you leave this parameter empty, the mobile phone number that is bound to the current account is used. The mobile phone number you specify must be the same as the mobile phone number that you specify when you call the [SendVerificationCodeForEnableRD](~~SendVerificationCodeForEnableRD~~) operation to obtain a verification code.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * @example
   * xx-13900001234
   */
  MASecureMobilePhone?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * You can call the [SendVerificationCodeForEnableRD](~~SendVerificationCodeForEnableRD~~) operation to obtain the verification code.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      enableMode: 'EnableMode',
      MAName: 'MAName',
      MASecureMobilePhone: 'MASecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

