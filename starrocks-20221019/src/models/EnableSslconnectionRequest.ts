// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSSLConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Custom SSL certificate.
   * 
   * @example
   * MIIP0wIBAzCCD4wGCSqGSIb3DQEHAaCCD30Egg95MIIPdTCCBbwGCSqGSIb3DQEHAaCCBa0EggWpMIIFpTCCBaEGCyqGSIb3DQEMCgECoIIFQDCCBTwwZgYJKoZIhvcNAQUNMFkwOAYJKoZIhvcNAQUMMCsEFHkQJTDaeFabOsRTB4Q7hgW6if7hAgInEAIBIDAMBggqhkiG9w0CCQU
   */
  customSSLCertificate?: string;
  /**
   * @remarks
   * Specifies whether to use a custom certificate.
   * 
   * @example
   * true
   */
  enableCustom?: boolean;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * c-0104730e9de40215
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether this request renews an existing certificate.
   * 
   * @example
   * true
   */
  renewal?: boolean;
  /**
   * @remarks
   * Key password.
   * 
   * @example
   * KoZ13vcNAQ
   */
  sslKeyPassword?: string;
  /**
   * @remarks
   * Keystore password.
   * 
   * @example
   * 21esSd9Ao
   */
  sslKeystorePassword?: string;
  static names(): { [key: string]: string } {
    return {
      customSSLCertificate: 'CustomSSLCertificate',
      enableCustom: 'EnableCustom',
      instanceId: 'InstanceId',
      renewal: 'Renewal',
      sslKeyPassword: 'SslKeyPassword',
      sslKeystorePassword: 'SslKeystorePassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSSLCertificate: 'string',
      enableCustom: 'boolean',
      instanceId: 'string',
      renewal: 'boolean',
      sslKeyPassword: 'string',
      sslKeystorePassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

