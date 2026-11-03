// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAuthConfigRequestConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * - **GOTRUE_EXTERNAL_EMAIL_ENABLED**: Allows external emails.
   * - **GOTRUE_SITE_URL**: The website URL displayed when the AI application sends emails.
   * - **GOTRUE_SMTP_PORT**: The port of the SMTP service provider.
   * - **GOTRUE_SMTP_SENDER_NAME**: The name of the email sender.
   * - **GOTRUE_SMTP_USER**: The username of the SMTP service provider.
   * - **GOTRUE_SMTP_PASS**: The password of the SMTP service provider.
   * - **GOTRUE_SMTP_ADMIN_EMAIL**: The email address of the SMTP service provider.
   * - **GOTRUE_SMTP_HOST**: The host address of the SMTP service provider.
   * - **GOTRUE_MAILER_AUTOCONFIRM**: Specifies whether to enable auto-confirmation.
   * - **GOTRUE_MAILER_OTP_EXP**: The validity period of the one-time password (OTP). Unit: seconds.
   * - **GOTRUE_MAILER_OTP_LENGTH**: The length of the one-time password (OTP) verification code. The value must be an integer greater than or equal to 6.
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
  /**
   * @remarks
   * The reserved parameter.
   */
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
   * The region ID.
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

