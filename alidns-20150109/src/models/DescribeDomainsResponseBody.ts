// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsResponseBodyDomainsDomainDnsServers extends $dara.Model {
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

export class DescribeDomainsResponseBodyDomainsDomainTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeDomainsResponseBodyDomainsDomainTags extends $dara.Model {
  tag?: DescribeDomainsResponseBodyDomainsDomainTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomainTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomain extends $dara.Model {
  aliDomain?: boolean;
  createTime?: string;
  createTimestamp?: number;
  dnsServers?: DescribeDomainsResponseBodyDomainsDomainDnsServers;
  domainId?: string;
  domainLoggingSwitchStatus?: string;
  domainName?: string;
  groupId?: string;
  groupName?: string;
  instanceEndTime?: string;
  instanceExpired?: boolean;
  instanceId?: string;
  punyCode?: string;
  recordCount?: number;
  registrantEmail?: string;
  remark?: string;
  resourceGroupId?: string;
  slaveDnsStatus?: string;
  starmark?: boolean;
  tags?: DescribeDomainsResponseBodyDomainsDomainTags;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      aliDomain: 'AliDomain',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      dnsServers: 'DnsServers',
      domainId: 'DomainId',
      domainLoggingSwitchStatus: 'DomainLoggingSwitchStatus',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceEndTime: 'InstanceEndTime',
      instanceExpired: 'InstanceExpired',
      instanceId: 'InstanceId',
      punyCode: 'PunyCode',
      recordCount: 'RecordCount',
      registrantEmail: 'RegistrantEmail',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      slaveDnsStatus: 'SlaveDnsStatus',
      starmark: 'Starmark',
      tags: 'Tags',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliDomain: 'boolean',
      createTime: 'string',
      createTimestamp: 'number',
      dnsServers: DescribeDomainsResponseBodyDomainsDomainDnsServers,
      domainId: 'string',
      domainLoggingSwitchStatus: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceEndTime: 'string',
      instanceExpired: 'boolean',
      instanceId: 'string',
      punyCode: 'string',
      recordCount: 'number',
      registrantEmail: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      slaveDnsStatus: 'string',
      starmark: 'boolean',
      tags: DescribeDomainsResponseBodyDomainsDomainTags,
      versionCode: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.dnsServers && typeof (this.dnsServers as any).validate === 'function') {
      (this.dnsServers as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  domain?: DescribeDomainsResponseBodyDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomain },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $dara.Model {
  domains?: DescribeDomainsResponseBodyDomains;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68386699-8B9E-4D5B-BC4C-75A28F6C2A00
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

