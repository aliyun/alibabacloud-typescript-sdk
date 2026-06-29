// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomHostnameResponseBodyCustomHostnameModel extends $dara.Model {
  /**
   * @remarks
   * The SSL Certificates Service certificate ID.
   * 
   * @example
   * 30000478
   */
  casId?: number;
  /**
   * @remarks
   * The error code for the free certificate application.
   * 
   * @example
   * 2
   */
  certApplyCode?: number;
  /**
   * @remarks
   * The error message for the free certificate application.
   * 
   * @example
   * canceled
   */
  certApplyMessage?: string;
  /**
   * @remarks
   * The HTTP address for certificate verification.
   * 
   * @example
   * http://custom.site.com/.well-known/acme-challenge/jLmMHlEaZ3jb352Qo3ciaSoAC8KZ5Hk0F-4_1xLQtgc
   */
  certHttpKey?: string;
  /**
   * @remarks
   * The HTTP content for certificate verification.
   * 
   * @example
   * jLmMHlEaZ3jb352Qo3ciaSoAC8KZ5Hk0F-4_1xLQtgc.GridYdfJJB5PgFEL-t89XfaFvMPB4f2-I9fwLpKl6e0
   */
  certHttpValue?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * baba2c9e90e840b3b55698cedf02b308
   */
  certId?: string;
  /**
   * @remarks
   * The certificate expiration time, in ISO 8601 format with UTC time. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  certNotAfter?: string;
  /**
   * @remarks
   * The certificate status. Valid values:
   * - **OK**: Normal.
   * - **Applying**: Being applied.
   * - **ApplyFailed**: Application failed.
   * - **Expiring**: About to expire.
   * - **Expired**: Expired.
   * 
   * @example
   * OK
   */
  certStatus?: string;
  /**
   * @remarks
   * The TXT name for certificate verification.
   * 
   * @example
   * _acme-challenge.custom.site.com
   */
  certTxtKey?: string;
  /**
   * @remarks
   * The TXT content for certificate verification.
   * 
   * @example
   * lcKYad3UQXgrZLvMm_6TBUYKK4xTkGmninV0Mzx4gjM
   */
  certTxtValue?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * - **free**: Free certificate.
   * - **upload**: Uploaded certificate.
   * - **cas**: SSL Certificates Service certificate.
   * 
   * @example
   * free
   */
  certType?: string;
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
   * The reason why the SaaS domain name is occupied. Valid values:
   * - **existing_custom_hostname**: Conflicts with an existing SaaS domain name.
   * - **existing_record**: Conflicts with an existing site record.
   * - **existing_load_balancer**: Conflicts with an existing load balancing instance.
   * - **existing_origin_pool**: Conflicts with an existing origin IPAM pool.
   * - **existing_site**: Conflicts with an existing site.
   * 
   * @example
   * existing_custom_hostname
   */
  conflictWith?: string;
  /**
   * @remarks
   * The time when the SaaS domain name was created, in ISO 8601 format with UTC time. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The SaaS domain name.
   * 
   * @example
   * custom.site.com
   */
  hostname?: string;
  /**
   * @remarks
   * The ID of the SaaS domain name.
   * 
   * @example
   * 1234567890123
   */
  hostnameId?: number;
  /**
   * @remarks
   * The reason why the SaaS domain name was taken offline. Valid values:
   * - **expiration_arrears**: The subscription plan expired or the account has an overdue payment.
   * - **internally_disabled**: Disabled by the system.
   * - **missing_icp**: The domain name does not have an ICP filing.
   * - **content_violation**: Content violation.
   * - **proactively_disabled**: You proactively disabled the domain name or the usage cap you configured was reached.
   * 
   * @example
   * missing_icp
   */
  offlineReason?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 4042843419650112
   */
  recordId?: number;
  /**
   * @remarks
   * The record name.
   * 
   * @example
   * origin.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 890601022130656
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The SSL switch. Valid values:
   * - **on**: SSL is enabled.
   * - **off**: SSL is disabled.
   * 
   * @example
   * on
   */
  sslFlag?: string;
  /**
   * @remarks
   * The status of the SaaS domain name. Valid values:
   * - **pending**: Pending verification.
   * - **active**: Activated.
   * - **conflicted**: Occupied.
   * - **offline**: Offline.
   * - **configuring**: Being configured.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The time when the SaaS domain name was last updated, in ISO 8601 format with UTC time. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The TXT content for domain verification.
   * 
   * @example
   * verify_16ab7f4d389d4dff6655f995c6a997bd
   */
  verifyCode?: string;
  /**
   * @remarks
   * The TXT name for domain verification.
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
  /**
   * @remarks
   * The information about the queried SaaS domain name.
   */
  customHostnameModel?: GetCustomHostnameResponseBodyCustomHostnameModel;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request.
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

