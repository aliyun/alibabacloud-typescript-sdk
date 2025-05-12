// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The method to connect to cloud computers from Alibaba Cloud Workspace clients.
   * 
   * >  VPC connection relies on the Alibaba Cloud PrivateLink service. You can use PrivateLink for free. When you set this parameter to `VPC` or `Any`, the system automatically activates PrivateLink.
   * 
   * Valid values:
   * 
   * *   INTERNET (default): allows end users to connect to cloud computers over the Internet.
   * *   VPC: allows end users to connect to cloud computers over VPCs.
   * *   ANY: allows end users to connect to cloud computers over the Internet and VPCs. When end users connect to cloud computers from Elastic Desktop Service, you can choose a connection method based on your business requirements.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * Specifies whether to grant the local administrator permissions to users that are authorized to use cloud computers in the office network.
   * 
   * Valid values:
   * 
   * * true (default)
   * * false
   * 
   * @example
   * false
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable two-factor verification when an end user logs on to an Alibaba Cloud Workspace client. This parameter is required only for convenience office networks. If two-factor verification is enabled, the system checks whether security risks exist within the logon account when the end user uses a convenience user to log on to the client. If risks are detected, the system sends a verification code to the email address that is associated with the account of the convenience user. Then, the end user can log on to the client only when the verification code is correct.
   * 
   * @example
   * false
   */
  needVerifyLoginRisk?: boolean;
  /**
   * @remarks
   * Specifies whether to enable device verification. This parameter is required only for convenience office networks. This parameter is left empty for enterprise Active Directory (AD) office networks.
   * 
   * @example
   * false
   */
  needVerifyZeroDevice?: boolean;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-882398****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name. The name must be 2 to 255 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.\\
   * This parameter is empty by default.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      enableAdminAccess: 'EnableAdminAccess',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      enableAdminAccess: 'boolean',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

