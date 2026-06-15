// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CNAME verification status. Valid values: `0` (Success), `1` (Failure).
   * 
   * @example
   * 1
   */
  cnameAuthStatus?: string;
  /**
   * @remarks
   * Indicates if the CNAME host record has been modified. A value of `1` indicates a change, including reverting to the original value. A value of `0` indicates no change.
   * 
   * @example
   * 0
   */
  cnameConfirmStatus?: string;
  /**
   * @remarks
   * The CNAME host record.
   * 
   * @example
   * dmtrace
   */
  cnameRecord?: string;
  /**
   * @remarks
   * The time the domain name was created.
   * 
   * @example
   * 2025-03-19T12:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates if this is the default domain name.
   * 
   * This parameter is deprecated and always returns `0` (No).
   * 
   * @example
   * 0
   */
  defaultDomain?: string;
  /**
   * @remarks
   * The DKIM verification status. Valid values: `0` (Verified), `1` (Not verified).
   * 
   * @example
   * 0
   */
  dkimAuthStatus?: string;
  /**
   * @remarks
   * The public key for the DKIM record.
   * 
   * @example
   * v=DKIM1; k=rsa; p=MIGfMA0GCSqGSI...
   */
  dkimPublicKey?: string;
  /**
   * @remarks
   * The DKIM host record.
   * 
   * @example
   * aliyun-cn-hangzhou._domainkey.hangzhou26
   */
  dkimRR?: string;
  /**
   * @remarks
   * The length of the DKIM RSA key, such as `1024` or `2048`.
   * 
   * @example
   * 1024
   */
  dkimRsaLength?: number;
  /**
   * @remarks
   * The DMARC verification status. Valid values: `0` (Verified), `1` (Not verified).
   * 
   * @example
   * 1
   */
  dmarcAuthStatus?: number;
  /**
   * @remarks
   * The DMARC host record.
   * 
   * @example
   * _dmarc.xxx
   */
  dmarcHostRecord?: string;
  /**
   * @remarks
   * The DMARC record value.
   * 
   * @example
   * v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com
   */
  dmarcRecord?: string;
  /**
   * @remarks
   * The DMARC record value resolved from public DNS.
   * 
   * @example
   * v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com
   */
  dnsDmarc?: string;
  /**
   * @remarks
   * The MX record value resolved from public DNS.
   * 
   * @example
   * mx01.dm.aliyun.com
   */
  dnsMx?: string;
  /**
   * @remarks
   * The SPF record value resolved from public DNS.
   * 
   * @example
   * v=xxxx
   */
  dnsSpf?: string;
  /**
   * @remarks
   * The ownership record value resolved from public DNS.
   * 
   * @example
   * 0c40d5f125af4e42892a
   */
  dnsTxt?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 158910
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.example.net
   */
  domainName?: string;
  /**
   * @remarks
   * The verification status of the domain name. Valid values:
   * 
   * - **0**: Available. The domain name is verified.
   * 
   * - **1**: Unavailable. The domain name failed verification.
   * 
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @remarks
   * The required value for the domain ownership verification record, from the Direct Mail console.
   * 
   * @example
   * 0c40d5f125af4e42892a
   */
  domainType?: string;
  domainVersion?: number;
  /**
   * @remarks
   * The host record for domain ownership verification.
   * 
   * @example
   * xxx
   */
  hostRecord?: string;
  /**
   * @remarks
   * The ICP filing status. **1** indicates the filing is complete. **0** indicates no filing is found.
   * 
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @remarks
   * The MX verification status. Valid values: `0` (Success), `1` (Failure).
   * 
   * @example
   * 1
   */
  mxAuthStatus?: string;
  /**
   * @remarks
   * The MX record value from the Direct Mail console.
   * 
   * @example
   * mx01.dm.aliyun.com
   */
  mxRecord?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51B74264-46B4-43C8-A9A0-6B8E8BC04F34
   */
  requestId?: string;
  /**
   * @remarks
   * The SPF verification status. Valid values: `0` (Success), `1` (Failure).
   * 
   * @example
   * 1
   */
  spfAuthStatus?: string;
  /**
   * @remarks
   * The SPF record value from the Direct Mail console.
   * 
   * @example
   * include:spf1.dm.aliyun.com
   */
  spfRecord?: string;
  /**
   * @remarks
   * The complete SPF record. This parameter replaces `SpfRecord`. You can directly use the value of `SpfRecordV2` without constructing it from the value of `SpfRecord`.
   * 
   * @example
   * v=spf1 include:spf1.dm.aliyun.com -all
   */
  spfRecordV2?: string;
  /**
   * @remarks
   * The root domain.
   * 
   * @example
   * example.com
   */
  tlDomainName?: string;
  /**
   * @remarks
   * The CNAME record value from the Direct Mail console.
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
      domainVersion: 'DomainVersion',
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
      domainVersion: 'number',
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

