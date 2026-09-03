// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyADConnectorOfficeSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The hostname of the domain controller. The hostname must comply with Windows hostname naming conventions.
   * 
   * @example
   * beijing-ad01
   */
  adHostname?: string;
  /**
   * @remarks
   * The hostname of the backup domain controller.
   * 
   * @example
   * dc002
   */
  backupDCHostname?: string;
  /**
   * @remarks
   * The DNS address of the backup domain controller.
   * 
   * @example
   * 192.168.2.100
   */
  backupDns?: string;
  /**
   * @remarks
   * The IP address of the DNS server corresponding to the enterprise AD. Currently, only one IP address can be specified.
   * 
   * @example
   * 127.0.*.*
   */
  dnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD. The same domain name can be registered only once.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The password of the domain administrator. The password can be up to 64 characters in length.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The username of the domain administrator. The username can be up to 64 characters in length.
   * 
   * > Use sAMAccountName for the username. Do not use userPrincipalName.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-factor authentication (MFA).
   * 
   * @example
   * false
   */
  mfaEnabled?: boolean;
  /**
   * @remarks
   * The organizational unit (OU) of the AD domain. You can call [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) to obtain the value.
   * 
   * @example
   * example.com/Domain Controllers
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
   * The office network name. The name must be 2 to 255 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The DNS address of the enterprise AD subdomain. Currently, only one address can be specified. If `SubDomainName` is specified but this parameter is not, the subdomain DNS defaults to the same value as the parent domain.
   * 
   * @example
   * 127.0.*.*
   */
  subDomainDnsAddress?: string[];
  /**
   * @remarks
   * The domain name of the enterprise AD subdomain.
   * 
   * @example
   * child.example.com
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

