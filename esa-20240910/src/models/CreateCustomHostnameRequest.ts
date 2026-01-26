// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomHostnameRequest extends $dara.Model {
  /**
   * @remarks
   * 云盾证书ID，使用云盾证书时必填
   * 
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * 云盾证书所在地域，使用云盾证书时必填
   * 
   * @example
   * cn-hangzhou
   */
  casRegion?: string;
  /**
   * @remarks
   * 证书类型，SSL 开启时必填
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * 证书公钥，使用上传证书时必填
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * 自定义主机名
   * 
   * This parameter is required.
   * 
   * @example
   * custom.site.com
   */
  hostname?: string;
  /**
   * @remarks
   * 证书私钥，使用上传证书时必填
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * 绑定的源站记录ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  recordId?: number;
  /**
   * @remarks
   * 关联站点ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * SSL开关
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

