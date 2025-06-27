// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsResponseBodyDomainsDomainDnsServers } from "./DescribeDomainsResponseBodyDomainsDomainDnsServers";
import { DescribeDomainsResponseBodyDomainsDomainTags } from "./DescribeDomainsResponseBodyDomainsDomainTags";


export class DescribeDomainsResponseBodyDomainsDomain extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the domain name was registered with Alibaba Cloud.
   * 
   * @example
   * true
   */
  aliDomain?: boolean;
  /**
   * @remarks
   * The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-30T05:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the domain name was added. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660546144000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The names of the DNS servers configured for the domain name assigned by Alibaba Cloud DNS.
   */
  dnsServers?: DescribeDomainsResponseBodyDomainsDomainDnsServers;
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
   * Indicates whether the DNS traffic analysis feature is enabled for the domain name. Valid values:
   * 
   * *   OPEN
   * *   CLOSE
   * 
   * @example
   * OPEN
   */
  domainLoggingSwitchStatus?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * abc.com
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
   * The time when the Alibaba Cloud DNS instance expires. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-03-14T16:00Z
   */
  instanceEndTime?: string;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud DNS instance expires.
   * 
   * @example
   * false
   */
  instanceExpired?: boolean;
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
   * The Punycode for the domain name. This parameter is returned only for Chinese domain names.
   * 
   * @example
   * abc.com
   */
  punyCode?: string;
  /**
   * @remarks
   * The number of Domain Name System (DNS) records added for the domain name.
   * 
   * @example
   * 100
   */
  recordCount?: number;
  /**
   * @remarks
   * The email address of the registrant.
   * 
   * @example
   * test@example.com
   */
  registrantEmail?: string;
  /**
   * @remarks
   * The description of the domain name.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the domain name belongs.
   * 
   * @example
   * rg-acf
   */
  resourceGroupId?: string;
  slaveDnsStatus?: string;
  /**
   * @remarks
   * Indicates whether the domain name was added to favorites.
   * 
   * @example
   * true
   */
  starmark?: boolean;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tags?: DescribeDomainsResponseBodyDomainsDomainTags;
  /**
   * @remarks
   * The edition code of Alibaba Cloud DNS.
   * 
   * @example
   * version_enterprise_basic
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

