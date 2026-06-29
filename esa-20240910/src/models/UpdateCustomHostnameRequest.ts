// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomHostnameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL Certificates Service certificate. This parameter is required when CertType is set to cas.
   * 
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * The region of the SSL Certificates Service certificate. This parameter is required when CertType is set to cas. Valid values:
   * - Chinese mainland accounts: cn-hangzhou.
   * - International accounts: ap-southeast-1.
   * 
   * @example
   * cn-hangzhou
   */
  casRegion?: string;
  /**
   * @remarks
   * The certificate type. This parameter is required when SslFlag is set to on. Valid values:
   * - **free**: free certificate.
   * - **upload**: uploaded certificate.
   * - **cas**: SSL Certificates Service certificate.
   * 
   * @example
   * cas
   */
  certType?: string;
  /**
   * @remarks
   * The certificate content. This parameter is required when CertType is set to upload.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The ID of the SaaS domain name. You can obtain the ID by calling the [ListCustomHostnames](https://help.aliyun.com/document_detail/3018667.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  hostnameId?: number;
  /**
   * @remarks
   * The certificate private key. This parameter is required when CertType is set to upload.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The ID of the record to bind. You can obtain the ID by calling the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The SSL switch. Valid values:
   * - **on**: Enables SSL.
   * - **off**: Disables SSL.
   * 
   * @example
   * on
   */
  sslFlag?: string;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      casRegion: 'CasRegion',
      certType: 'CertType',
      certificate: 'Certificate',
      hostnameId: 'HostnameId',
      privateKey: 'PrivateKey',
      recordId: 'RecordId',
      sslFlag: 'SslFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casId: 'number',
      casRegion: 'string',
      certType: 'string',
      certificate: 'string',
      hostnameId: 'number',
      privateKey: 'string',
      recordId: 'number',
      sslFlag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

