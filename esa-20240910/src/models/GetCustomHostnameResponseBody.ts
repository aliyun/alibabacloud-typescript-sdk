// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomHostnameResponseBodyCustomHostnameModel extends $dara.Model {
  /**
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * 免费证书申请错误码
   * 
   * @example
   * 2
   */
  certApplyCode?: number;
  /**
   * @remarks
   * 免费证书申请错误说明
   * 
   * @example
   * canceled
   */
  certApplyMessage?: string;
  /**
   * @remarks
   * 证书校验HTTP名称
   * 
   * @example
   * http://custom.site.com/.well-known/acme-challenge/jLmMHlEaZ3jb352Qo3ciaSoAC8KZ5Hk0F-4_1xLQtgc
   */
  certHttpKey?: string;
  /**
   * @remarks
   * 证书校验HTTP内容
   * 
   * @example
   * jLmMHlEaZ3jb352Qo3ciaSoAC8KZ5Hk0F-4_1xLQtgc.GridYdfJJB5PgFEL-t89XfaFvMPB4f2-I9fwLpKl6e0
   */
  certHttpValue?: string;
  /**
   * @example
   * baba2c9e90e840b3b55698cedf02b308
   */
  certId?: string;
  /**
   * @remarks
   * 证书过期时间
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  certNotAfter?: string;
  /**
   * @remarks
   * 证书状态
   * 
   * @example
   * OK
   */
  certStatus?: string;
  /**
   * @remarks
   * 证书校验TXT名称
   * 
   * @example
   * _acme-challenge.custom.site.com
   */
  certTxtKey?: string;
  /**
   * @remarks
   * 证书校验TXT内容
   * 
   * @example
   * lcKYad3UQXgrZLvMm_6TBUYKK4xTkGmninV0Mzx4gjM
   */
  certTxtValue?: string;
  /**
   * @remarks
   * 证书类型
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * 上传的证书公钥
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @example
   * existing_custom_hostname
   */
  conflictWith?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * 用户自定义的主机名
   * 
   * @example
   * custom.site.com
   */
  hostname?: string;
  /**
   * @example
   * 1234567890123
   */
  hostnameId?: number;
  /**
   * @example
   * missing_icp
   */
  offlineReason?: string;
  /**
   * @example
   * -----BEGIN RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * 绑定的源站记录ID
   * 
   * @example
   * 4042843419650112
   */
  recordId?: number;
  /**
   * @remarks
   * 绑定的源站记录名
   * 
   * @example
   * origin.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * 与主机名关联的站点ID
   * 
   * @example
   * 890601022130656
   */
  siteId?: number;
  /**
   * @remarks
   * 关联站点名称
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * SSL开关的状态
   * 
   * @example
   * on
   */
  sslFlag?: string;
  /**
   * @remarks
   * 自定义主机名状态
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * 归属校验TXT内容
   * 
   * @example
   * verify_16ab7f4d389d4dff6655f995c6a997bd
   */
  verifyCode?: string;
  /**
   * @remarks
   * 归属校验TXT名称
   * 
   * @example
   * _esa_custom_hostname.custom.site.com
   */
  verifyHost?: string;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      certApplyCode: 'CertApplyCode',
      certApplyMessage: 'CertApplyMessage',
      certHttpKey: 'CertHttpKey',
      certHttpValue: 'CertHttpValue',
      certId: 'CertId',
      certNotAfter: 'CertNotAfter',
      certStatus: 'CertStatus',
      certTxtKey: 'CertTxtKey',
      certTxtValue: 'CertTxtValue',
      certType: 'CertType',
      certificate: 'Certificate',
      conflictWith: 'ConflictWith',
      createTime: 'CreateTime',
      hostname: 'Hostname',
      hostnameId: 'HostnameId',
      offlineReason: 'OfflineReason',
      privateKey: 'PrivateKey',
      recordId: 'RecordId',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
      sslFlag: 'SslFlag',
      status: 'Status',
      updateTime: 'UpdateTime',
      verifyCode: 'VerifyCode',
      verifyHost: 'VerifyHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casId: 'number',
      certApplyCode: 'number',
      certApplyMessage: 'string',
      certHttpKey: 'string',
      certHttpValue: 'string',
      certId: 'string',
      certNotAfter: 'string',
      certStatus: 'string',
      certTxtKey: 'string',
      certTxtValue: 'string',
      certType: 'string',
      certificate: 'string',
      conflictWith: 'string',
      createTime: 'string',
      hostname: 'string',
      hostnameId: 'number',
      offlineReason: 'string',
      privateKey: 'string',
      recordId: 'number',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
      sslFlag: 'string',
      status: 'string',
      updateTime: 'string',
      verifyCode: 'string',
      verifyHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomHostnameResponseBody extends $dara.Model {
  customHostnameModel?: GetCustomHostnameResponseBodyCustomHostnameModel;
  /**
   * @remarks
   * 本次请求的唯一标识
   * 
   * @example
   * 7C414690-9D7B-5D66-9CD9-AD0B3F25ED49
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customHostnameModel: 'CustomHostnameModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHostnameModel: GetCustomHostnameResponseBodyCustomHostnameModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.customHostnameModel && typeof (this.customHostnameModel as any).validate === 'function') {
      (this.customHostnameModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

