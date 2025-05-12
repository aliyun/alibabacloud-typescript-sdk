// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigADConnectorTrustRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise AD office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-778418****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * Specifies whether to configure a trust password for the Remote Desktop Services (RDS) License Domain of the enterprise AD office network.
   * 
   * Valid values:
   * 
   * *   true: configures a trust password for the RDS License Domain of the AD office network.
   * 
   * *   false: configures a trust password for a regular enterprise AD office network.
   * 
   * @example
   * true
   */
  rdsLicenseDomain?: boolean;
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
  /**
   * @remarks
   * The trust password. You can specify the password when you configure a trust relationship between the AD domain and the ecd.acs domain.
   * 
   * This parameter is required.
   * 
   * @example
   * password123***
   */
  trustKey?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      rdsLicenseDomain: 'RdsLicenseDomain',
      regionId: 'RegionId',
      trustKey: 'TrustKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      rdsLicenseDomain: 'boolean',
      regionId: 'string',
      trustKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

