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
  fatherCode?: string;
  lineCode?: string;
  lineDisplayName?: string;
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
   * Indicates whether the domain name was registered with Alibaba Cloud.
   * 
   * @example
   * true
   */
  aliDomain?: boolean;
  availableTtls?: DescribeDomainInfoResponseBodyAvailableTtls;
  /**
   * @remarks
   * The time when the domain name was created.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  createTime?: string;
  dnsServers?: DescribeDomainInfoResponseBodyDnsServers;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 00efd71a-7************
   */
  domainId?: string;
  /**
   * @remarks
   * The status of the logging feature.
   * 
   * @example
   * CLOSE：关闭状态
   * OPEN：开启状态
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
   * 2***
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
   * Indicates whether blackhole filtering is activated for the domain name.
   * 
   * @example
   * false
   */
  inBlackHole?: boolean;
  /**
   * @remarks
   * Indicates whether the domain name is being scrubbed.
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
   * i-7**
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the DNS request source line.
   * 
   * @example
   * region_province
   */
  lineType?: string;
  /**
   * @remarks
   * The minimum TTL.
   * 
   * @example
   * 1
   */
  minTtl?: number;
  /**
   * @remarks
   * The Punycode for the Chinese domain name.
   * 
   * @example
   * example.com
   */
  punyCode?: string;
  /**
   * @remarks
   * The list of DNS request source lines in a tree structure.
   * 
   * @example
   * {"default":{},"unicom":{},"telecom":{},"mobile":{},"edu":{},"oversea":{},"baidu":{},"biying":{},"google":{}}
   */
  recordLineTreeJson?: string;
  recordLines?: DescribeDomainInfoResponseBodyRecordLines;
  /**
   * @remarks
   * Indicates whether the line is a regional line.
   * 
   * @example
   * false
   */
  regionLines?: boolean;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The unique request ID.
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
   * rg-aek3dj3******
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
   * Indicates whether the queried domain is a hosted subdomain. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  subDomain?: boolean;
  /**
   * @remarks
   * The edition ID of Alibaba Cloud DNS. Valid values:
   * 
   * - version_enterprise_advanced: Ultimate Edition
   * 
   * - version_personal: Personal Edition
   * 
   * - mianfei: Free Edition
   * 
   * @example
   * mianfei
   */
  versionCode?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud DNS edition.
   * 
   * @example
   * 企业旗舰版
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

