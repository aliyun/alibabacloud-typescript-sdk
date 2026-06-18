// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomHostnamesResponseBodyHostnames extends $dara.Model {
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
   * The error description for the free certificate application.
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
   * The certificate expiration time, in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
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
   * The reason why the SaaS domain name is occupied. Valid values:
   * - **existing_custom_hostname**: Conflicts with an existing SaaS domain name.
   * - **existing_record**: Conflicts with an existing site record.
   * - **existing_load_balancer**: Conflicts with an existing load balancing instance.
   * - **existing_origin_pool**: Conflicts with an existing origin IPAM pool.
   * 
   * @example
   * existing_custom_hostname
   */
  conflictWith?: string;
  /**
   * @remarks
   * The time when the SaaS domain name was created, in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
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
   * - **expiration_ arrears**: The subscription plan has expired or the account has an overdue payment.
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
   * The record ID.
   * 
   * @example
   * 3386032455886912
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
   * The SaaS domain name status. Valid values:
   * - **pending**: pending verification.
   * - **active**: activated.
   * - **conflicted**: occupied.
   * - **offline**: offline.
   * - **configuring**: being configured.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The time when the SaaS domain name was last updated, in the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The TXT content for domain name verification.
   * 
   * @example
   * verify_16ab7f4d389d4dff6655f995c6a997bd
   */
  verifyCode?: string;
  /**
   * @remarks
   * The TXT name for domain name verification.
   * 
   * @example
   * _esa_custom_hostname.custom.site.com
   */
  verifyHost?: string;
  static names(): { [key: string]: string } {
    return {
      certApplyCode: 'CertApplyCode',
      certApplyMessage: 'CertApplyMessage',
      certHttpKey: 'CertHttpKey',
      certHttpValue: 'CertHttpValue',
      certNotAfter: 'CertNotAfter',
      certStatus: 'CertStatus',
      certTxtKey: 'CertTxtKey',
      certTxtValue: 'CertTxtValue',
      certType: 'CertType',
      conflictWith: 'ConflictWith',
      createTime: 'CreateTime',
      hostname: 'Hostname',
      hostnameId: 'HostnameId',
      offlineReason: 'OfflineReason',
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
      certApplyCode: 'number',
      certApplyMessage: 'string',
      certHttpKey: 'string',
      certHttpValue: 'string',
      certNotAfter: 'string',
      certStatus: 'string',
      certTxtKey: 'string',
      certTxtValue: 'string',
      certType: 'string',
      conflictWith: 'string',
      createTime: 'string',
      hostname: 'string',
      hostnameId: 'number',
      offlineReason: 'string',
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

export class ListCustomHostnamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SaaS domain names.
   */
  hostnames?: ListCustomHostnamesResponseBodyHostnames[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of SaaS domain names.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': ListCustomHostnamesResponseBodyHostnames },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

