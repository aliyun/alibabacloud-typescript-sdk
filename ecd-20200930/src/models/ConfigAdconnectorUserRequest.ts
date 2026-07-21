// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigADConnectorUserRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the AD user that has the permission to join computers to the domain.
   * 
   * This parameter is required.
   * 
   * @example
   * testPassword
   */
  domainPassword?: string;
  /**
   * @remarks
   * The username of the AD user that has the permission to join computers to the domain. After the configuration is complete, cloud computers created in the corresponding AD office network are added to the specified OU.
   * 
   * This parameter is required.
   * 
   * @example
   * Administrator
   */
  domainUserName?: string;
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
   * The ID of the AD office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

