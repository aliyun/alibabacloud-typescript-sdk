// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainInfoResponseBodyAvailableTtls extends $dara.Model {
  availableTtl?: string[];
  static names(): { [key: string]: string } {
    return {
      availableTtl: 'AvailableTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableTtl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.availableTtl)) {
      $dara.Model.validateArray(this.availableTtl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyDnsServers extends $dara.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServer)) {
      $dara.Model.validateArray(this.dnsServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyRecordLinesRecordLine extends $dara.Model {
  /**
   * @remarks
   * The code of the parent line. This parameter is not returned if the line has no parent line.
   * 
   * @example
   * internal
   */
  fatherCode?: string;
  /**
   * @remarks
   * The code of the line.
   * 
   * @example
   * cn_region_xibei
   */
  lineCode?: string;
  /**
   * @remarks
   * The name of the parent line.
   */
  lineDisplayName?: string;
  /**
   * @remarks
   * The name of the line.
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineCode: 'LineCode',
      lineDisplayName: 'LineDisplayName',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineCode: 'string',
      lineDisplayName: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyRecordLines extends $dara.Model {
  recordLine?: DescribeDomainInfoResponseBodyRecordLinesRecordLine[];
  static names(): { [key: string]: string } {
    return {
      recordLine: 'RecordLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLine: { 'type': 'array', 'itemType': DescribeDomainInfoResponseBodyRecordLinesRecordLine },
    };
  }

  validate() {
    if(Array.isArray(this.recordLine)) {
      $dara.Model.validateArray(this.recordLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the domain name was registered in Alibaba Cloud.
   * 
   * @example
   * true
   */
  aliDomain?: boolean;
  /**
   * @remarks
   * The available time to live (TTL) values that can be configured for the domain name. Available TTL values are not returned by default. If you want to query such information, set NeedDetailAttributes to true.
   */
  availableTtls?: DescribeDomainInfoResponseBodyAvailableTtls;
  /**
   * @remarks
   * The time when the domain name was created.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The DNS servers that are used to resolve the domain name.
   */
  dnsServers?: DescribeDomainInfoResponseBodyDnsServers;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 00efd71a-770e-4255-b54e-6fe5659baffe
   */
  domainId?: string;
  /**
   * @remarks
   * Indicates whether the DNS traffic analysis feature is enabled. Valid values:
   */
  domainLoggingSwitchStatus?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 2223
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * mygroup
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether blackhole filtering was triggered.
   * 
   * @example
   * false
   */
  inBlackHole?: boolean;
  /**
   * @remarks
   * Indicates whether traffic scrubbing was in progress.
   * 
   * @example
   * false
   */
  inClean?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud DNS instance.
   * 
   * @example
   * i-7bg
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the DNS request line.
   * 
   * @example
   * region_province
   */
  lineType?: string;
  /**
   * @remarks
   * The minimum TTL value.
   * 
   * @example
   * 1
   */
  minTtl?: number;
  /**
   * @remarks
   * The Punycode for the domain name. This parameter is returned only for Chinese domain names.
   * 
   * @example
   * example.com
   */
  punyCode?: string;
  /**
   * @remarks
   * The tree-structure DNS request lines.
   * 
   * @example
   * {"default":{},"unicom":{},"telecom":{},"mobile":{},"edu":{},"oversea":{},"baidu":{},"biying":{},"google":{}}
   */
  recordLineTreeJson?: string;
  /**
   * @remarks
   * The DNS request lines.
   */
  recordLines?: DescribeDomainInfoResponseBodyRecordLines;
  /**
   * @remarks
   * Indicates whether the DNS request lines are regional lines.
   * 
   * @example
   * false
   */
  regionLines?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek3dj3wvclgcxo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether secondary DNS is supported.
   * 
   * @example
   * true
   */
  slaveDns?: boolean;
  /**
   * @remarks
   * Indicates whether the queried domain name is a hosted subdomain name. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  subDomain?: boolean;
  /**
   * @remarks
   * The version ID of Alibaba Cloud DNS.
   * 
   * @example
   * version1
   */
  versionCode?: string;
  /**
   * @remarks
   * The edition of Alibaba Cloud DNS.
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      aliDomain: 'AliDomain',
      availableTtls: 'AvailableTtls',
      createTime: 'CreateTime',
      dnsServers: 'DnsServers',
      domainId: 'DomainId',
      domainLoggingSwitchStatus: 'DomainLoggingSwitchStatus',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      inBlackHole: 'InBlackHole',
      inClean: 'InClean',
      instanceId: 'InstanceId',
      lineType: 'LineType',
      minTtl: 'MinTtl',
      punyCode: 'PunyCode',
      recordLineTreeJson: 'RecordLineTreeJson',
      recordLines: 'RecordLines',
      regionLines: 'RegionLines',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDns: 'SlaveDns',
      subDomain: 'SubDomain',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliDomain: 'boolean',
      availableTtls: DescribeDomainInfoResponseBodyAvailableTtls,
      createTime: 'string',
      dnsServers: DescribeDomainInfoResponseBodyDnsServers,
      domainId: 'string',
      domainLoggingSwitchStatus: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      inBlackHole: 'boolean',
      inClean: 'boolean',
      instanceId: 'string',
      lineType: 'string',
      minTtl: 'number',
      punyCode: 'string',
      recordLineTreeJson: 'string',
      recordLines: DescribeDomainInfoResponseBodyRecordLines,
      regionLines: 'boolean',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDns: 'boolean',
      subDomain: 'boolean',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.availableTtls && typeof (this.availableTtls as any).validate === 'function') {
      (this.availableTtls as any).validate();
    }
    if(this.dnsServers && typeof (this.dnsServers as any).validate === 'function') {
      (this.dnsServers as any).validate();
    }
    if(this.recordLines && typeof (this.recordLines as any).validate === 'function') {
      (this.recordLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

