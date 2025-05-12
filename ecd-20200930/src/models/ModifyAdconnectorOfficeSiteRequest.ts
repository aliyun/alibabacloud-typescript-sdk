// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyADConnectorOfficeSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The hostname of the domain controller. The hostname must comply with the naming conventions for hostnames in Windows.
   * 
   * @example
   * beijing-ad01
   */
  adHostname?: string;
  /**
   * @remarks
   * The hostname of the secondary domain controller.
   * 
   * @example
   * dc002
   */
  backupDCHostname?: string;
  /**
   * @remarks
   * The IP address of the DNS server corresponding to the secondary domain controller.
   * 
   * @example
   * 192.168.2.100
   */
  backupDns?: string;
  /**
   * @remarks
   * The IP addresses of the DNS servers corresponding to the enterprise ADs. You can specify only one DNS IP address.
   * 
   * @example
   * 127.0.*.*
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD system. You can register each domain name only once.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The password of the domain administrator. The username can be up to 64 characters in length.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The username of the domain administrator. The username can be up to 64 characters in length.
   * 
   * > Specify the value of the sAMAccountName parameter instead of the value of the userPrincipalName parameter as the username.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-factor authentication (MFA).
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  mfaEnabled?: boolean;
  /**
   * @remarks
   * The name of the organizational unit (OU) in the AD domain. You can call the [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) operation to obtain OUs.
   * 
   * @example
   * oldad.com/Domain Controllers
   */
  OUName?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name. The name must be 2 to 255 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP addresses of the DNS servers corresponding to the enterprise AD subdomains. You can specify only one DNS IP address. If you specify `SubDomainName` and leave this parameter empty, the value is the same as that of the enterprise AD domain.
   * 
   * @example
   * 127.0.*.*
   */
  subDomainDnsAddress?: string[];
  /**
   * @remarks
   * The name of the subdomain in the enterprise AD domain.
   * 
   * @example
   * childexample.com
   */
  subDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      backupDCHostname: 'BackupDCHostname',
      backupDns: 'BackupDns',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      mfaEnabled: 'MfaEnabled',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      backupDCHostname: 'string',
      backupDns: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      mfaEnabled: 'boolean',
      OUName: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsAddress)) {
      $dara.Model.validateArray(this.dnsAddress);
    }
    if(Array.isArray(this.subDomainDnsAddress)) {
      $dara.Model.validateArray(this.subDomainDnsAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

