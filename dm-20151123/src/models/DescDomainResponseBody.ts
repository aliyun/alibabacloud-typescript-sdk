// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * CNAME verification flag, 0 for success, 1 for failure.
   * 
   * @example
   * 1
   */
  cnameAuthStatus?: string;
  /**
   * @remarks
   * Indicates whether the CNAME host record has been modified, 1 for modified (reverting to the original value also counts as modification), 0 for not modified.
   * 
   * @example
   * 0
   */
  cnameConfirmStatus?: string;
  /**
   * @remarks
   * Custom part of the CNAME host record
   * 
   * @example
   * dmtrace
   */
  cnameRecord?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2025-03-19T12:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Whether it is the default domain,
   * 
   * Value: 0 No (this field is deprecated)
   * 
   * @example
   * 0
   */
  defaultDomain?: string;
  /**
   * @remarks
   * DKIM verification flag, indicating whether the DKIM record set by the user in DNS has passed validation, 0: Passed, 1: Not passed
   * 
   * @example
   * 0
   */
  dkimAuthStatus?: string;
  /**
   * @remarks
   * DKIM public key value, the value that users need to set for the DKIM record in DNS
   * 
   * @example
   * v=DKIM1; k=rsa; p=MIGfMA0GCSqGSI...
   */
  dkimPublicKey?: string;
  /**
   * @remarks
   * DKIM host record, the key that the user needs to set in the DNS for the DKIM record
   * 
   * @example
   * aliyun-cn-hangzhou._domainkey.hangzhou26
   */
  dkimRR?: string;
  dkimRsaLength?: number;
  /**
   * @remarks
   * DMARC verification flag, indicating whether the DMARC record set by the user in DNS has passed validation, 0: Passed, 1: Not passed
   * 
   * @example
   * 1
   */
  dmarcAuthStatus?: number;
  /**
   * @remarks
   * DMARC host record value
   * 
   * @example
   * _dmarc.xxx
   */
  dmarcHostRecord?: string;
  /**
   * @remarks
   * DMARC record value
   * 
   * @example
   * v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com
   */
  dmarcRecord?: string;
  /**
   * @remarks
   * DMARC record value resolved through the public domain name
   * 
   * @example
   * v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com
   */
  dnsDmarc?: string;
  /**
   * @remarks
   * MX record value resolved from the public network domain
   * 
   * @example
   * mx01.dm.aliyun.com
   */
  dnsMx?: string;
  /**
   * @remarks
   * SPF record value resolved from the public network domain
   * 
   * @example
   * v=xxxx
   */
  dnsSpf?: string;
  /**
   * @remarks
   * Ownership record value resolved from the public network domain
   * 
   * @example
   * 0c40d5f125af4e42892a
   */
  dnsTxt?: string;
  /**
   * @remarks
   * Domain ID
   * 
   * @example
   * 158910
   */
  domainId?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * test.example.net
   */
  domainName?: string;
  /**
   * @remarks
   * Domain status. Indicates whether the verification was successful, with values:
   * 
   * - **0**: Available, verified successfully
   * - **1**: Unavailable, verification failed
   * 
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @remarks
   * Ownership record provided by the email push console
   * 
   * @example
   * 0c40d5f125af4e42892a
   */
  domainType?: string;
  /**
   * @remarks
   * Host record
   * 
   * @example
   * xxx
   */
  hostRecord?: string;
  /**
   * @remarks
   * Filing status. **1** indicates filed, **0** indicates not filed.
   * 
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @remarks
   * MX verification flag, 0 for success, 1 for failure.
   * 
   * @example
   * 1
   */
  mxAuthStatus?: string;
  /**
   * @remarks
   * MX record value provided by the email push console
   * 
   * @example
   * mx01.dm.aliyun.com
   */
  mxRecord?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 51B74264-46B4-43C8-A9A0-6B8E8BC04F34
   */
  requestId?: string;
  /**
   * @remarks
   * SPF verification flag, 0 for success, 1 for failure.
   * 
   * @example
   * 1
   */
  spfAuthStatus?: string;
  /**
   * @remarks
   * SPF record value provided by the email push console
   * 
   * @example
   * include:spf1.dm.aliyun.com
   */
  spfRecord?: string;
  /**
   * @remarks
   * SPF record. Previously, the SPF display content needed to be calculated by the calling end based on the spfRecord in the response. The new field spfRecordV2 replaces spfRecord, and the calling end can directly display this field after obtaining it;
   * 
   * @example
   * v=spf1 include:spf1.dm.aliyun.com -all
   */
  spfRecordV2?: string;
  /**
   * @remarks
   * Primary domain
   * 
   * @example
   * example.com
   */
  tlDomainName?: string;
  /**
   * @remarks
   * CNAME record value provided by the email push console
   * 
   * @example
   * tracedm.aliyuncs.com
   */
  tracefRecord?: string;
  static names(): { [key: string]: string } {
    return {
      cnameAuthStatus: 'CnameAuthStatus',
      cnameConfirmStatus: 'CnameConfirmStatus',
      cnameRecord: 'CnameRecord',
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      dkimAuthStatus: 'DkimAuthStatus',
      dkimPublicKey: 'DkimPublicKey',
      dkimRR: 'DkimRR',
      dkimRsaLength: 'DkimRsaLength',
      dmarcAuthStatus: 'DmarcAuthStatus',
      dmarcHostRecord: 'DmarcHostRecord',
      dmarcRecord: 'DmarcRecord',
      dnsDmarc: 'DnsDmarc',
      dnsMx: 'DnsMx',
      dnsSpf: 'DnsSpf',
      dnsTxt: 'DnsTxt',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      hostRecord: 'HostRecord',
      icpStatus: 'IcpStatus',
      mxAuthStatus: 'MxAuthStatus',
      mxRecord: 'MxRecord',
      requestId: 'RequestId',
      spfAuthStatus: 'SpfAuthStatus',
      spfRecord: 'SpfRecord',
      spfRecordV2: 'SpfRecordV2',
      tlDomainName: 'TlDomainName',
      tracefRecord: 'TracefRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameAuthStatus: 'string',
      cnameConfirmStatus: 'string',
      cnameRecord: 'string',
      createTime: 'string',
      defaultDomain: 'string',
      dkimAuthStatus: 'string',
      dkimPublicKey: 'string',
      dkimRR: 'string',
      dkimRsaLength: 'number',
      dmarcAuthStatus: 'number',
      dmarcHostRecord: 'string',
      dmarcRecord: 'string',
      dnsDmarc: 'string',
      dnsMx: 'string',
      dnsSpf: 'string',
      dnsTxt: 'string',
      domainId: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      hostRecord: 'string',
      icpStatus: 'string',
      mxAuthStatus: 'string',
      mxRecord: 'string',
      requestId: 'string',
      spfAuthStatus: 'string',
      spfRecord: 'string',
      spfRecordV2: 'string',
      tlDomainName: 'string',
      tracefRecord: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

