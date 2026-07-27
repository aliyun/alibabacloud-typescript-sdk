// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAuthConfigRequestConfigList extends $dara.Model {
  /**
   * @remarks
   * The configuration item name. Valid values:
   * 
   * - **GOTRUE_EXTERNAL_EMAIL_ENABLED**: specifies whether to allow external email addresses.
   * - **GOTRUE_SITE_URL**: the website URL displayed when the AI application sends emails.
   * - **GOTRUE_SMTP_PORT**: the port of the SMTP provider.
   * - **GOTRUE_SMTP_SENDER_NAME**: the name of the email sender.
   * - **GOTRUE_SMTP_USER**: the username of the SMTP provider.
   * - **GOTRUE_SMTP_PASS**: the secret key of the SMTP provider.
   * - **GOTRUE_SMTP_ADMIN_EMAIL**: the email address of the SMTP provider.
   * - **GOTRUE_SMTP_HOST**: the host address of the SMTP provider.
   * - **GOTRUE_MAILER_AUTOCONFIRM**: specifies whether to enable automatic confirmation.
   * - **GOTRUE_MAILER_OTP_EXP**: the validity period of the one-time password (OTP). Unit: seconds.
   * - **GOTRUE_MAILER_OTP_LENGTH**: the length of the one-time password (OTP) verification code. The value must be an integer greater than or equal to 6.
   * 
   * @example
   * GOTRUE_SITE_URL
   */
  name?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * http://8.152. XXX.XXX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ModifyInstanceAuthConfigRequest extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The list of authentication configurations.
   */
  configList?: ModifyInstanceAuthConfigRequestConfigList[];
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      configList: { 'type': 'array', 'itemType': ModifyInstanceAuthConfigRequestConfigList },
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

