// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigADConnectorUserRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the AD user that has the permissions to join computers to domains.
   * 
   * This parameter is required.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The username of the AD user that has the permissions to join computers to domains.
   * 
   * After the username is configured, the cloud desktops in the same AD workspace are joined to the specified OU.
   * 
   * This parameter is required.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
  /**
   * @remarks
   * The name of the OU in the AD domain. You can call the [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) to obtain the OU name.
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUName?: string;
  /**
   * @remarks
   * The ID of the AD workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainPassword: 'string',
      domainUserName: 'string',
      OUName: 'string',
      officeSiteId: 'string',
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

