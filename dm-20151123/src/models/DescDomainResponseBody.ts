// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CNAME authentication flag. 0: Succeeded. 1: Failed.
   * 
   * @example
   * 1
   */
  cnameAuthStatus?: string;
  /**
   * @remarks
   * Indicates whether the CNAME host record was modified. A value of 1 means the record was modified. Reverting to the original value is also considered a modification. A value of 0 means the record was not modified.
   * 
   * @example
   * 0
   */
  cnameConfirmStatus?: string;
  /**
   * @remarks
   * The custom part of the CNAME host record.
   * 
   * @example
   * dmtrace
   */
  cnameRecord?: string;
  /**
   * @remarks
   * The time when the domain name was created.
   * 
   * @example
   * 2025-03-19T12:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the domain name is the default domain name.
   * 
   * Value: 0 (No). This field is deprecated.
   * 
   * @example
   * 0
   */
  defaultDomain?: string;
  /**
   * @remarks
   * The DKIM authentication flag. Indicates if the DKIM record in your DNS settings passed verification. 0: Passed. 1: Not passed.
   * 
   * @example
   * 0
   */
  dkimAuthStatus?: string;
  /**
   * @remarks
   * The DKIM public key. This is the value of the DKIM record to configure in your DNS settings.
   * 
   * @example
   * v=DKIM1; k=rsa; p=MIGfMA0GCSqGSI...
   */
  dkimPublicKey?: string;
  /**
   * @remarks
   * The DKIM host record. This is the key of the DKIM record to configure in your DNS settings.
   * 
   * @example
   * aliyun-cn-hangzhou._domainkey.hangzhou26
   */
  dkimRR?: string;
  dkimRsaLength?: number;
  /**
   * @remarks
   * The DMARC authentication flag. Indicates if the DMARC record in your DNS settings passed verification. 0: Passed. 1: Not passed.
   * 
   * @example
   * 1
   */
  dmarcAuthStatus?: number;
  /**
   * @remarks
   * The DMARC host record value.
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
   * The DMARC record value parsed from the public domain name.
   * 
   * @example
   * v=DMARC1;p=none;rua=mailto:dmarc_report@service.aliyun.com
   */
  dnsDmarc?: string;
  /**
   * @remarks
   * The MX record value parsed from the public domain name.
   * 
   * @example
   * mx01.dm.aliyun.com
   */
  dnsMx?: string;
  /**
   * @remarks
   * The SPF record value parsed from the public domain name.
   * 
   * @example
   * v=xxxx
   */
  dnsSpf?: string;
  /**
   * @remarks
   * The ownership record value parsed from the public domain name.
   * 
   * @example
   * 0c40d5f125af4e42892a
   */
  dnsTxt?: string;
  /**
   * @remarks
   * The domain name ID.
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
   * The domain status. This indicates whether the domain name passed authentication. Valid values:
   * 
   * - **0**: Active. The domain name passed authentication.
   * 
   * - **1**: Inactive. The domain name failed authentication.
   * 
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @remarks
   * The ownership record provided by the Direct Mail console.
   * 
   * @example
   * 0c40d5f125af4e42892a
   */
  domainType?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * xxx
   */
  hostRecord?: string;
  /**
   * @remarks
   * The ICP filing status. **1** indicates that the domain name has an ICP filing. **0** indicates that the domain name does not have an ICP filing.
   * 
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @remarks
   * The MX authentication flag. 0: Succeeded. 1: Failed.
   * 
   * @example
   * 1
   */
  mxAuthStatus?: string;
  /**
   * @remarks
   * The MX record value provided by the Direct Mail console.
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
   * The SPF authentication flag. 0: Succeeded. 1: Failed.
   * 
   * @example
   * 1
   */
  spfAuthStatus?: string;
  /**
   * @remarks
   * The SPF record value provided by the Direct Mail console.
   * 
   * @example
   * include:spf1.dm.aliyun.com
   */
  spfRecord?: string;
  /**
   * @remarks
   * The SPF record. This field replaces the \\`spfRecord\\` field. You can directly display the value of this field without needing to calculate it from the response.
   * 
   * @example
   * v=spf1 include:spf1.dm.aliyun.com -all
   */
  spfRecordV2?: string;
  /**
   * @remarks
   * The primary domain name.
   * 
   * @example
   * example.com
   */
  tlDomainName?: string;
  /**
   * @remarks
   * The CNAME record value provided by the Direct Mail console.
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

