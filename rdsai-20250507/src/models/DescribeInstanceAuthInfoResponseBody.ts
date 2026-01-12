// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAuthInfoResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * The ANON_KEY of Supabase.
   * 
   * @example
   * eyxxxJ9.ey****
   */
  anonKey?: string;
  /**
   * @remarks
   * The SERVICE_ROLE_KEY of Supabase.
   * 
   * @example
   * eyxxxJ9.ey****KfQ.DaYxxxt4Q
   */
  serviceKey?: string;
  static names(): { [key: string]: string } {
    return {
      anonKey: 'AnonKey',
      serviceKey: 'ServiceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anonKey: 'string',
      serviceKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAuthInfoResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * *   **GOTRUE_EXTERNAL_EMAIL_ENABLED**: Enables authentication via external email addresses.
   * *   **GOTRUE_SITE_URL**: the URL that is displayed in the emails sent from the instance.
   * *   **GOTRUE_SMTP_PORT**: the port of the SMTP service provider.
   * *   **GOTRUE_SMTP_SENDER_NAME**: the name of the sender of the email.
   * *   **GOTRUE_SMTP_USER**: the username of the SMTP service provider.
   * *   **GOTRUE_SMTP_PASS**: the key of the SMTP service provider.
   * *   **GOTRUE_SMTP_ADMIN_EMAIL**: the email address of the SMTP service provider.
   * *   **GOTRUE_SMTP_HOST**: The host address of the SMTP service provider.
   * *   **GOTRUE_MAILER_AUTOCONFIRM**: specifies whether to enable automatic confirmation.
   * *   **GOTRUE_MAILER_OTP_EXP**: The validity period of the one-time password (OTP). Unit: seconds.
   * *   **GOTRUE_MAILER_OTP_LENGTH**: The verification code length of the one-time password (OTP). The value must be an integer greater than or equal to 6.
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

export class DescribeInstanceAuthInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API keys.
   */
  apiKeys?: DescribeInstanceAuthInfoResponseBodyApiKeys;
  /**
   * @remarks
   * The authentication configurations.
   */
  configList?: DescribeInstanceAuthInfoResponseBodyConfigList[];
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The JWT key.
   * 
   * @example
   * i5o1XAp4sR*****oyOb3O
   */
  jwtSecret?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87249A6F-xxx-804C-E1E0AD1FAD90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      jwtSecret: 'JwtSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: DescribeInstanceAuthInfoResponseBodyApiKeys,
      configList: { 'type': 'array', 'itemType': DescribeInstanceAuthInfoResponseBodyConfigList },
      instanceName: 'string',
      jwtSecret: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKeys && typeof (this.apiKeys as any).validate === 'function') {
      (this.apiKeys as any).validate();
    }
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

