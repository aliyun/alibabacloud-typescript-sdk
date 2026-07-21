// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigADConnectorTrustRequest extends $dara.Model {
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
   * Specifies whether to configure the trust password for the RDS License Domain of the AD office network.
   * 
   * @example
   * true
   */
  rdsLicenseDomain?: boolean;
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
  /**
   * @remarks
   * The trust password. This password is the one that you specified when you configured the trust relationship (that is, established a trust relationship with ecd.acs) in the AD domain.
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

