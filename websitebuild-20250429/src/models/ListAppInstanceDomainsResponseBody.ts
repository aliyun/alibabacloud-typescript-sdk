// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceDomainsResponseBodyModuleDataCertificate extends $dara.Model {
  /**
   * @remarks
   * Certificate name.
   * 
   * @example
   * 2024
   */
  certificateName?: string;
  /**
   * @remarks
   * Certificate status
   * 
   * @example
   * ACTIVE
   */
  certificateStatus?: string;
  /**
   * @remarks
   * Certificate type
   * 
   * @example
   * self-signed
   */
  certificateType?: string;
  /**
   * @remarks
   * Certificate expiration date
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
   * Account owner type: CURRENT OTHER
   * 
   * @example
   * 1813244684017878
   */
  account?: string;
  /**
   * @remarks
   * Registrar type: ALIYUN OTHER
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The root domain name of the domain.
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

export class ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord extends $dara.Model {
  /**
   * @remarks
   * Host record
   * 
   * @example
   * portal-dev.bambulab.net
   */
  host?: string;
  /**
   * @remarks
   * Record type
   * 
   * @example
   * 1
   */
  recordType?: string;
  /**
   * @remarks
   * Record value
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
   * DNS record information
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * code: 400, invalid unionId request id: 09CC0F8B-49C2-7EFB-81E8-9AEF49068D02
   */
  errorMsg?: string;
  /**
   * @remarks
   * Domain resolution status
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
   * Host record
   * 
   * @example
   * ${host}
   */
  host?: string;
  /**
   * @remarks
   * Record type
   * 
   * @example
   * 1
   */
  recordType?: string;
  /**
   * @remarks
   * Record value
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
   * DNS record guide that the user needs to configure.
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * code: 400, invalid unionId request id: 2270AB0B-6FD0-7F72-9DC5-7A02B67CBB3B
   */
  errorMsg?: string;
  /**
   * @remarks
   * Ownership verification status.
   * 
   * @example
   * SUCCESSFUL
   */
  verificationStatus?: string;
  /**
   * @remarks
   * Ownership verification status
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
   * Domain SSL certificate information
   */
  certificate?: ListAppInstanceDomainsResponseBodyModuleDataCertificate;
  /**
   * @remarks
   * Instance creation time (required, format: yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 1683256054000
   */
  createTime?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * kaibaidu.com
   */
  domainName?: string;
  /**
   * @remarks
   * Binding overall status
   * 
   * @example
   * ACTIVE
   */
  overallStatus?: string;
  /**
   * @remarks
   * Domain ownership information
   */
  ownership?: ListAppInstanceDomainsResponseBodyModuleDataOwnership;
  /**
   * @remarks
   * Domain resolution information
   */
  resolution?: ListAppInstanceDomainsResponseBodyModuleDataResolution;
  /**
   * @remarks
   * Domain verification information
   */
  verification?: ListAppInstanceDomainsResponseBodyModuleDataVerification;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      overallStatus: 'OverallStatus',
      ownership: 'Ownership',
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
   * Certificate name.
   * 
   * @example
   * jfztkg202502
   */
  certificateName?: string;
  /**
   * @remarks
   * Certificate status
   * 
   * @example
   * ACTIVE
   */
  certificateStatus?: string;
  /**
   * @remarks
   * Certificate type
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * 证书的到期日期
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
   * Account owner type: CURRENT OTHER
   * 
   * @example
   * 拾肆gavin
   */
  account?: string;
  /**
   * @remarks
   * Registrar type: ALIYUN OTHER
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

export class ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord extends $dara.Model {
  /**
   * @remarks
   * Host record
   * 
   * @example
   * 172.16.6.1
   */
  host?: string;
  /**
   * @remarks
   * Record type
   * 
   * @example
   * A
   */
  recordType?: string;
  /**
   * @remarks
   * Record value
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
   * DNS record information
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @remarks
   * Domain resolution status
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
   * Host record
   * 
   * @example
   * www.abc.com
   */
  host?: string;
  /**
   * @remarks
   * Record type
   * 
   * @example
   * 5
   */
  recordType?: string;
  /**
   * @remarks
   * Record value
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
   * Guide for DNS records that the user needs to configure.
   */
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @remarks
   * Ownership verification status.
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
   * Domain SSL certificate information
   */
  certificate?: ListAppInstanceDomainsResponseBodyModuleNextCertificate;
  /**
   * @remarks
   * Instance creation time (required, format: yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 1741572465000
   */
  createTime?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * usdcoin.xin
   */
  domainName?: string;
  /**
   * @remarks
   * Binding overall status
   * 
   * @example
   * ACTIVE
   */
  overallStatus?: string;
  /**
   * @remarks
   * Domain ownership information
   */
  ownership?: ListAppInstanceDomainsResponseBodyModuleNextOwnership;
  /**
   * @remarks
   * Domain resolution information
   */
  resolution?: ListAppInstanceDomainsResponseBodyModuleNextResolution;
  /**
   * @remarks
   * Domain verification information
   */
  verification?: ListAppInstanceDomainsResponseBodyModuleNextVerification;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      overallStatus: 'OverallStatus',
      ownership: 'Ownership',
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Query result.
   */
  data?: ListAppInstanceDomainsResponseBodyModuleData[];
  /**
   * @remarks
   * Decision weight
   */
  next?: ListAppInstanceDomainsResponseBodyModuleNext;
  /**
   * @remarks
   * Whether there is a next page.
   */
  nextPage?: boolean;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Whether there is a previous page
   */
  prePage?: boolean;
  /**
   * @remarks
   * Apart from pagination limits, the server can process up to the most recent 1000 records. If the result exceeds 1000 records, **ResultLimit** will be **true**, please narrow down the time range and search again; otherwise, **ResultLimit** will be **false**.
   */
  resultLimit?: boolean;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 0
   */
  totalItemNum?: number;
  /**
   * @remarks
   * Total number of pages.
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
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message, used to replace `%s` in the error message of the returned parameter **ErrMessage**.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid**, and **DynamicMessage** returns **DtsJobId**, it means that the input request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Response data
   */
  module?: ListAppInstanceDomainsResponseBodyModule;
  /**
   * @remarks
   * 下一个查询开始的Token。没有下一个查询时为空。
   * 
   * @example
   * dw+qdTi1EjVSWX/INJdYNw==
   */
  nextToken?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Exception message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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

