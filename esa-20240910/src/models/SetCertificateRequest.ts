// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud certificate ID. This parameter is required when Type is set to cas.
   * 
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * The certificate content. This parameter is required when Type is set to upload.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate ID. Certificates of the free type (created by calling the ApplyCertificate operation) are not supported. Certificates of the cas and upload types are supported.
   * 
   * @example
   * babae7c40fef412d887688b91c9e****
   */
  id?: string;
  /**
   * @remarks
   * The keyless server ID. This parameter takes effect only when Type is set to keyless.
   * 
   * @example
   * 1233112****
   */
  keyServerId?: string;
  /**
   * @remarks
   * The certificate name. This parameter is required when Type is set to upload.
   * 
   * @example
   * yourCertName
   */
  name?: string;
  /**
   * @remarks
   * The certificate private key. This parameter is required when Type is set to upload.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The region. This parameter is required when Type is set to cas. Valid values:
   * 
   * - China site accounts: cn-hangzhou.
   * 
   * - International site accounts: ap-southeast-1.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  securityToken?: string;
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
   * The certificate type. Valid values:
   * 
   * - **cas**: certificate from SSL Certificates Service.
   * 
   * - **upload**: custom uploaded certificate.
   * 
   * - **keyless**: keyless certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * cas
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      certificate: 'Certificate',
      id: 'Id',
      keyServerId: 'KeyServerId',
      name: 'Name',
      privateKey: 'PrivateKey',
      region: 'Region',
      securityToken: 'SecurityToken',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casId: 'number',
      certificate: 'string',
      id: 'string',
      keyServerId: 'string',
      name: 'string',
      privateKey: 'string',
      region: 'string',
      securityToken: 'string',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

