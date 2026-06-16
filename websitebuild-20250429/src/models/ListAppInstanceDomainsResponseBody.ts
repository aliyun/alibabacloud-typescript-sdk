// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceDomainsResponseBodyModuleDataCertificate extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * 2024
   */
  certificateName?: string;
  /**
   * @remarks
   * The certificate status.
   * 
   * @example
   * ACTIVE
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * self-signed
   */
  certificateType?: string;
  /**
   * @remarks
   * The expiration date of the certificate.
   * 
   * @example
   * 4885718400000
   */
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'CertificateName',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      certificateStatus: 'string',
      certificateType: 'string',
      endTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleDataOwnership extends $dara.Model {
  /**
   * @remarks
   * The account owner type. Valid values: CURRENT and OTHER.
   * 
   * @example
   * 1813244684017878
   */
  account?: string;
  /**
   * @remarks
   * The registrar type. Valid values: ALIYUN and OTHER.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The root domain name corresponding to the domain name.
   * 
   * @example
   * tjouya.cn
   */
  rootDomain?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      provider: 'Provider',
      rootDomain: 'RootDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      provider: 'string',
      rootDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleDataQualification extends $dara.Model {
  /**
   * @remarks
   * The ICP entity filing number.
   */
  icpRecordNumber?: string;
  /**
   * @remarks
   * The ICP website filing number.
   */
  icpSiteRecordNumber?: string;
  /**
   * @remarks
   * The public security filing number.
   */
  policeRecordNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpRecordNumber: 'IcpRecordNumber',
      icpSiteRecordNumber: 'IcpSiteRecordNumber',
      policeRecordNumber: 'PoliceRecordNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpRecordNumber: 'string',
      icpSiteRecordNumber: 'string',
      policeRecordNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord extends $dara.Model {
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * portal-dev.bambulab.net
   */
  host?: string;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * 1
   */
  recordType?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * Maintenance
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      recordType: 'RecordType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      recordType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleDataResolution extends $dara.Model {
  /**
   * @remarks
   * The DNS record information.
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * code: 400, invalid unionId request id: 09CC0F8B-49C2-7EFB-81E8-9AEF49068D02
   */
  errorMsg?: string;
  /**
   * @remarks
   * The domain name resolution status.
   * 
   * @example
   * SUCCESSFUL
   */
  resolutionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dnsRecord: 'DnsRecord',
      errorMsg: 'ErrorMsg',
      resolutionStatus: 'ResolutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecord: ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord,
      errorMsg: 'string',
      resolutionStatus: 'string',
    };
  }

  validate() {
    if(this.dnsRecord && typeof (this.dnsRecord as any).validate === 'function') {
      (this.dnsRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord extends $dara.Model {
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * ${host}
   */
  host?: string;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * 1
   */
  recordType?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 159.138.94.138
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      recordType: 'RecordType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      recordType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleDataVerification extends $dara.Model {
  /**
   * @remarks
   * The DNS record that the user needs to configure.
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * code: 400, invalid unionId request id: 2270AB0B-6FD0-7F72-9DC5-7A02B67CBB3B
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ownership verification status.
   * 
   * @example
   * SUCCESSFUL
   */
  verificationStatus?: string;
  /**
   * @remarks
   * The ownership verification status code.
   * 
   * @example
   * NoAliyunServiceRoleForWebsiteBuildPublishAuth
   */
  verificationStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      dnsRecord: 'DnsRecord',
      errorMsg: 'ErrorMsg',
      verificationStatus: 'VerificationStatus',
      verificationStatusCode: 'VerificationStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecord: ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord,
      errorMsg: 'string',
      verificationStatus: 'string',
      verificationStatusCode: 'string',
    };
  }

  validate() {
    if(this.dnsRecord && typeof (this.dnsRecord as any).validate === 'function') {
      (this.dnsRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleData extends $dara.Model {
  /**
   * @remarks
   * The SSL certificate information of the domain name.
   */
  certificate?: ListAppInstanceDomainsResponseBodyModuleDataCertificate;
  /**
   * @remarks
   * The time when the instance was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 1683256054000
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * kaibaidu.com
   */
  domainName?: string;
  /**
   * @remarks
   * The overall binding status.
   * 
   * @example
   * ACTIVE
   */
  overallStatus?: string;
  /**
   * @remarks
   * The domain name ownership information.
   */
  ownership?: ListAppInstanceDomainsResponseBodyModuleDataOwnership;
  /**
   * @remarks
   * The domain name qualification information.
   */
  qualification?: ListAppInstanceDomainsResponseBodyModuleDataQualification;
  /**
   * @remarks
   * The domain name resolution information.
   */
  resolution?: ListAppInstanceDomainsResponseBodyModuleDataResolution;
  /**
   * @remarks
   * The domain name verification information.
   */
  verification?: ListAppInstanceDomainsResponseBodyModuleDataVerification;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      overallStatus: 'OverallStatus',
      ownership: 'Ownership',
      qualification: 'Qualification',
      resolution: 'Resolution',
      verification: 'Verification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: ListAppInstanceDomainsResponseBodyModuleDataCertificate,
      createTime: 'string',
      domainName: 'string',
      overallStatus: 'string',
      ownership: ListAppInstanceDomainsResponseBodyModuleDataOwnership,
      qualification: ListAppInstanceDomainsResponseBodyModuleDataQualification,
      resolution: ListAppInstanceDomainsResponseBodyModuleDataResolution,
      verification: ListAppInstanceDomainsResponseBodyModuleDataVerification,
    };
  }

  validate() {
    if(this.certificate && typeof (this.certificate as any).validate === 'function') {
      (this.certificate as any).validate();
    }
    if(this.ownership && typeof (this.ownership as any).validate === 'function') {
      (this.ownership as any).validate();
    }
    if(this.qualification && typeof (this.qualification as any).validate === 'function') {
      (this.qualification as any).validate();
    }
    if(this.resolution && typeof (this.resolution as any).validate === 'function') {
      (this.resolution as any).validate();
    }
    if(this.verification && typeof (this.verification as any).validate === 'function') {
      (this.verification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextCertificate extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * jfztkg202502
   */
  certificateName?: string;
  /**
   * @remarks
   * The certificate status.
   * 
   * @example
   * ACTIVE
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * The expiration date of the certificate.
   * 
   * @example
   * 2025-01-15T02:04:00Z
   */
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'CertificateName',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      certificateStatus: 'string',
      certificateType: 'string',
      endTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextOwnership extends $dara.Model {
  /**
   * @remarks
   * The account owner type. Valid values: CURRENT and OTHER.
   * 
   * @example
   * 拾肆gavin
   */
  account?: string;
  /**
   * @remarks
   * The registrar type. Valid values: ALIYUN and OTHER.
   * 
   * @example
   * pai
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextQualification extends $dara.Model {
  /**
   * @remarks
   * The ICP entity filing number.
   */
  icpRecordNumber?: string;
  /**
   * @remarks
   * The ICP website filing number.
   */
  icpSiteRecordNumber?: string;
  /**
   * @remarks
   * The public security filing number.
   */
  policeRecordNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpRecordNumber: 'IcpRecordNumber',
      icpSiteRecordNumber: 'IcpSiteRecordNumber',
      policeRecordNumber: 'PoliceRecordNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpRecordNumber: 'string',
      icpSiteRecordNumber: 'string',
      policeRecordNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord extends $dara.Model {
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * 172.16.6.1
   */
  host?: string;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * A
   */
  recordType?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 2025032000000054nuba0r0b0a79y70c1c983tsz09xw9hg3p04kqxmbt4g2p65h
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      recordType: 'RecordType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      recordType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextResolution extends $dara.Model {
  /**
   * @remarks
   * The DNS record information.
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @remarks
   * The domain name resolution status.
   * 
   * @example
   * SUCCESSFUL
   */
  resolutionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dnsRecord: 'DnsRecord',
      errorMsg: 'ErrorMsg',
      resolutionStatus: 'ResolutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecord: ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord,
      errorMsg: 'string',
      resolutionStatus: 'string',
    };
  }

  validate() {
    if(this.dnsRecord && typeof (this.dnsRecord as any).validate === 'function') {
      (this.dnsRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord extends $dara.Model {
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * www.abc.com
   */
  host?: string;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * 5
   */
  recordType?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * faHuBlyPcodSjBvBJYpm3-9W_cCSowLLQ4zAUyguEGM
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      recordType: 'RecordType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      recordType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNextVerification extends $dara.Model {
  /**
   * @remarks
   * The DNS record that the user needs to configure.
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ownership verification status.
   * 
   * @example
   * SUCCESSFUL
   */
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dnsRecord: 'DnsRecord',
      errorMsg: 'ErrorMsg',
      verificationStatus: 'VerificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecord: ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord,
      errorMsg: 'string',
      verificationStatus: 'string',
    };
  }

  validate() {
    if(this.dnsRecord && typeof (this.dnsRecord as any).validate === 'function') {
      (this.dnsRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModuleNext extends $dara.Model {
  /**
   * @remarks
   * The SSL certificate information of the domain name.
   */
  certificate?: ListAppInstanceDomainsResponseBodyModuleNextCertificate;
  /**
   * @remarks
   * The time when the instance was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 1741572465000
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * usdcoin.xin
   */
  domainName?: string;
  /**
   * @remarks
   * The overall binding status.
   * 
   * @example
   * ACTIVE
   */
  overallStatus?: string;
  /**
   * @remarks
   * The domain name ownership information.
   */
  ownership?: ListAppInstanceDomainsResponseBodyModuleNextOwnership;
  /**
   * @remarks
   * The domain name qualification information.
   */
  qualification?: ListAppInstanceDomainsResponseBodyModuleNextQualification;
  /**
   * @remarks
   * The domain name resolution information.
   */
  resolution?: ListAppInstanceDomainsResponseBodyModuleNextResolution;
  /**
   * @remarks
   * The domain name verification information.
   */
  verification?: ListAppInstanceDomainsResponseBodyModuleNextVerification;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      overallStatus: 'OverallStatus',
      ownership: 'Ownership',
      qualification: 'Qualification',
      resolution: 'Resolution',
      verification: 'Verification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: ListAppInstanceDomainsResponseBodyModuleNextCertificate,
      createTime: 'string',
      domainName: 'string',
      overallStatus: 'string',
      ownership: ListAppInstanceDomainsResponseBodyModuleNextOwnership,
      qualification: ListAppInstanceDomainsResponseBodyModuleNextQualification,
      resolution: ListAppInstanceDomainsResponseBodyModuleNextResolution,
      verification: ListAppInstanceDomainsResponseBodyModuleNextVerification,
    };
  }

  validate() {
    if(this.certificate && typeof (this.certificate as any).validate === 'function') {
      (this.certificate as any).validate();
    }
    if(this.ownership && typeof (this.ownership as any).validate === 'function') {
      (this.ownership as any).validate();
    }
    if(this.qualification && typeof (this.qualification as any).validate === 'function') {
      (this.qualification as any).validate();
    }
    if(this.resolution && typeof (this.resolution as any).validate === 'function') {
      (this.resolution as any).validate();
    }
    if(this.verification && typeof (this.verification as any).validate === 'function') {
      (this.verification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The query results.
   */
  data?: ListAppInstanceDomainsResponseBodyModuleData[];
  /**
   * @remarks
   * The decision weight.
   */
  next?: ListAppInstanceDomainsResponseBodyModuleNext;
  /**
   * @remarks
   * Indicates whether a next page exists.
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether a previous page exists.
   */
  prePage?: boolean;
  /**
   * @remarks
   * In addition to pagination limits, the server processes up to 1,000 recent records per query. If the results exceed 1,000 records, **ResultLimit** is **true**. In this case, narrow the time range and search again. Otherwise, **ResultLimit** is **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      next: 'Next',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      resultLimit: 'ResultLimit',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListAppInstanceDomainsResponseBodyModuleData },
      next: ListAppInstanceDomainsResponseBodyModuleNext,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      resultLimit: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.next && typeof (this.next as any).validate === 'function') {
      (this.next as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstanceDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The maximum number of entries to return per query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: ListAppInstanceDomainsResponseBodyModule;
  /**
   * @remarks
   * The token for the next query. This parameter is empty if there are no more results.
   * 
   * @example
   * dw+qdTi1EjVSWX/INJdYNw==
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      maxResults: 'MaxResults',
      module: 'Module',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      maxResults: 'number',
      module: ListAppInstanceDomainsResponseBodyModule,
      nextToken: 'string',
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

