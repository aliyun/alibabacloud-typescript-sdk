// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceDomainsResponseBodyModuleDataCertificate extends $dara.Model {
  /**
   * @example
   * 2024
   */
  certificateName?: string;
  /**
   * @example
   * ACTIVE
   */
  certificateStatus?: string;
  /**
   * @example
   * self-signed
   */
  certificateType?: string;
  /**
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
   * @example
   * 1813244684017878
   */
  account?: string;
  /**
   * @example
   * ROS
   */
  provider?: string;
  /**
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
   * @example
   * portal-dev.bambulab.net
   */
  host?: string;
  /**
   * @example
   * 1
   */
  recordType?: string;
  /**
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
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataResolutionDnsRecord;
  /**
   * @example
   * code: 400, invalid unionId request id: 09CC0F8B-49C2-7EFB-81E8-9AEF49068D02
   */
  errorMsg?: string;
  /**
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
   * @example
   * ${host}
   */
  host?: string;
  /**
   * @example
   * 1
   */
  recordType?: string;
  /**
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
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleDataVerificationDnsRecord;
  /**
   * @example
   * code: 400, invalid unionId request id: 2270AB0B-6FD0-7F72-9DC5-7A02B67CBB3B
   */
  errorMsg?: string;
  /**
   * @example
   * SUCCESSFUL
   */
  verificationStatus?: string;
  /**
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
  certificate?: ListAppInstanceDomainsResponseBodyModuleDataCertificate;
  /**
   * @example
   * 1683256054000
   */
  createTime?: string;
  /**
   * @example
   * kaibaidu.com
   */
  domainName?: string;
  /**
   * @example
   * ACTIVE
   */
  overallStatus?: string;
  ownership?: ListAppInstanceDomainsResponseBodyModuleDataOwnership;
  resolution?: ListAppInstanceDomainsResponseBodyModuleDataResolution;
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
   * @example
   * jfztkg202502
   */
  certificateName?: string;
  /**
   * @example
   * ACTIVE
   */
  certificateStatus?: string;
  /**
   * @example
   * Server
   */
  certificateType?: string;
  /**
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
  account?: string;
  /**
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
   * @example
   * 172.16.6.1
   */
  host?: string;
  /**
   * @example
   * A
   */
  recordType?: string;
  /**
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
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextResolutionDnsRecord;
  /**
   * @example
   * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
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
   * @example
   * www.abc.com
   */
  host?: string;
  /**
   * @example
   * 5
   */
  recordType?: string;
  /**
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
  dnsRecord?: ListAppInstanceDomainsResponseBodyModuleNextVerificationDnsRecord;
  /**
   * @example
   * aliuid:1133664521498319 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
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
  certificate?: ListAppInstanceDomainsResponseBodyModuleNextCertificate;
  /**
   * @example
   * 1741572465000
   */
  createTime?: string;
  /**
   * @example
   * usdcoin.xin
   */
  domainName?: string;
  /**
   * @example
   * ACTIVE
   */
  overallStatus?: string;
  ownership?: ListAppInstanceDomainsResponseBodyModuleNextOwnership;
  resolution?: ListAppInstanceDomainsResponseBodyModuleNextResolution;
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
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListAppInstanceDomainsResponseBodyModuleData[];
  next?: ListAppInstanceDomainsResponseBodyModuleNext;
  nextPage?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  prePage?: boolean;
  resultLimit?: boolean;
  /**
   * @example
   * 0
   */
  totalItemNum?: number;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/gl3d6l3817id8p1/gl3d6l3817id8p1.diff.zip?Expires=1750392068&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=Bcj3eohy8nmlSQ7AAGdq7JZoLjM%3D
   */
  dynamicMessage?: string;
  errorArgs?: any[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  module?: ListAppInstanceDomainsResponseBodyModule;
  /**
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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

