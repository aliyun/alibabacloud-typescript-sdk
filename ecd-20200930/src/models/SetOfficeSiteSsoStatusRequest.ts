// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetOfficeSiteSsoStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or shutdown single sign-on (SSO) logon.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSso?: boolean;
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
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSso: 'EnableSso',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSso: 'boolean',
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

