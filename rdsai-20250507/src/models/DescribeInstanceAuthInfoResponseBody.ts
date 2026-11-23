// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAuthInfoResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * The Supabase ANON_KEY.
   * 
   * @example
   * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz****J9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzU1Nzg1ODc1LCJleHAiOjEzMjY2NDI1ODc1fQ.EGNFdeWRZBsdB051EzQsBwvDJveC9IMEXWUCDLX****
   */
  anonKey?: string;
  /**
   * @remarks
   * The API key used to access E2B-compatible sandbox APIs. This parameter is returned when the sandbox is enabled and a service key exists.
   * 
   * @example
   * e2b_65794a30655841694f694a4b563151694c434a68624763694f694a49557a49314e694a392e65794a7063334d694f694a7a64584268596d467a5a534973496e4a76624755694f694a7a5a584a3261574e6c58334a766247556****34a70595851694f6a45334f5451314d6a67774d444173496d5634634349364d544d7a4d4455784e6a67774d4442392e41414543417751464267634943516f4c4441304f4478415245684d554652595847426b6147787764486838
   */
  e2bApiKey?: string;
  /**
   * @remarks
   * The Supabase SERVICE_ROLE_KEY.
   * 
   * @example
   * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz****J9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE3NTU3ODU4NzUsImV4cCI6MTMyNjY0MjU4NzV9.oJt4UF8cpSDOvjW39IM4fLp2750rEvxFnkNqcVM****
   */
  serviceKey?: string;
  static names(): { [key: string]: string } {
    return {
      anonKey: 'AnonKey',
      e2bApiKey: 'E2bApiKey',
      serviceKey: 'ServiceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anonKey: 'string',
      e2bApiKey: 'string',
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
   * - **GOTRUE_EXTERNAL_EMAIL_ENABLED**: Specifies whether to allow external emails.
   * - **GOTRUE_SITE_URL**: The website URL displayed when the AI application sends emails.
   * - **GOTRUE_SMTP_PORT**: The port of the SMTP service provider.
   * - **GOTRUE_SMTP_SENDER_NAME**: The name of the email sender.
   * - **GOTRUE_SMTP_USER**: The username of the SMTP service provider.
   * - **GOTRUE_SMTP_PASS**: The password of the SMTP service provider.
   * - **GOTRUE_SMTP_ADMIN_EMAIL**: The email address of the SMTP service provider.
   * - **GOTRUE_SMTP_HOST**: The host address of the SMTP service provider.
   * - **GOTRUE_MAILER_AUTOCONFIRM**: Specifies whether to enable automatic confirmation.
   * - **GOTRUE_MAILER_OTP_EXP**: The validity period of the one-time password (OTP). Unit: seconds.
   * - **GOTRUE_MAILER_OTP_LENGTH**: The length of the one-time password (OTP). The value must be an integer greater than or equal to 6.
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
   * A reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  branchName?: string;
  /**
   * @remarks
   * The list of authentication information.
   */
  configList?: DescribeInstanceAuthInfoResponseBodyConfigList[];
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
   * The JWT secret.
   * 
   * @example
   * g7jgepleljS8nxAwsOd2EDWkBWi7JcU1m2Gj****
   */
  jwtSecret?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      branchName: 'BranchName',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      jwtSecret: 'JwtSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: DescribeInstanceAuthInfoResponseBodyApiKeys,
      branchName: 'string',
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

