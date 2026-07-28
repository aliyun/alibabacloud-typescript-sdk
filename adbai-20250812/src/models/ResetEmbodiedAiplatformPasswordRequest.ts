// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetEmbodiedAIPlatformPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The new password for the admin user of the embodied intelligence platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 123*******
   */
  password?: string;
  /**
   * @remarks
   * The name of the embodied intelligence multimodal data platform.
   * 
   * This parameter is required.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > You can call the DescribeRegions operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      password: 'Password',
      platformName: 'PlatformName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      password: 'string',
      platformName: 'string',
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

