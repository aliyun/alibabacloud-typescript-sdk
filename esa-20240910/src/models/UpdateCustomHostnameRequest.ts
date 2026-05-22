// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomHostnameRequest extends $dara.Model {
  /**
   * @remarks
   * 云盾证书ID，使用云盾证书时必填
   */
  casId?: number;
  /**
   * @remarks
   * 云盾证书所在地域，使用云盾证书时必填
   */
  casRegion?: string;
  /**
   * @remarks
   * 证书类型，SSL 开启时必填
   */
  certType?: string;
  /**
   * @remarks
   * 证书公钥，使用上传证书时必填
   */
  certificate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostnameId?: number;
  /**
   * @remarks
   * 证书私钥，使用上传证书时必填
   */
  privateKey?: string;
  /**
   * @remarks
   * 绑定的源站记录ID
   */
  recordId?: number;
  /**
   * @remarks
   * SSL开关
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

