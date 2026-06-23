// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomHostnameRequest extends $dara.Model {
  /**
   * @remarks
   * The SSL Certificates Service certificate ID. This parameter is required when CertType is set to cas.
   * 
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * The region of the SSL Certificates Service certificate. This parameter is required when CertType is set to cas.
   * - For Chinese site accounts, set this parameter to cn-hangzhou.
   * - For International site accounts, set this parameter to ap-southeast-1.
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
   * free
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
   * The SaaS domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * custom.site.com
   */
  hostname?: string;
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
   * The ID of the record to bind. You can call the [ListRecords](https://help.aliyun.com/document_detail/2850265.html) operation to obtain the record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Specifies whether to enable SSL. Valid values:
   * - **on**: Enable SSL.
   * - **off**: Disable SSL.
   * 
   * This parameter is required.
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
      hostname: 'Hostname',
      privateKey: 'PrivateKey',
      recordId: 'RecordId',
      siteId: 'SiteId',
      sslFlag: 'SslFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casId: 'number',
      casRegion: 'string',
      certType: 'string',
      certificate: 'string',
      hostname: 'string',
      privateKey: 'string',
      recordId: 'number',
      siteId: 'number',
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

