// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID on Certificate Management Service.
   * 
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate ID on ESA.
   * 
   * @example
   * 30001303
   */
  id?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * yourCertName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  securityToken?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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
   * *   cas: a certificate purchased by using Certificate Management Service.
   * *   upload: a custom certificate that you upload.
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
      name: 'Name',
      ownerId: 'OwnerId',
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
      name: 'string',
      ownerId: 'number',
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

