// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockEmbodiedAIPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * The instance cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the embodied intelligence multimodal data platform.
   * > The name must start with a lowercase letter and end with a lowercase letter or digit. It can contain lowercase letters, digits, and underscores. The name can be up to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  /**
   * @remarks
   * The region ID.
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
      platformName: 'PlatformName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

