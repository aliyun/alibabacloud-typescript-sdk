// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmbodiedAIPlatformShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The total number of devices.
   * 
   * @example
   * 3
   */
  deviceCount?: string;
  /**
   * @remarks
   * The name of the embodied AI multimodal data platform.
   * > The name must be 1 to 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
   * 
   * This parameter is required.
   * 
   * @example
   * eap_platform
   */
  platformName?: string;
  /**
   * @remarks
   * The Ray specifications of the platform.
   */
  rayConfigShrink?: string;
  /**
   * @remarks
   * The configuration of development and training resources.
   */
  rayTrainConfigShrink?: string;
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
  /**
   * @remarks
   * The Webserver specification of the platform.
   * 
   * @example
   * large
   */
  webserverSpecName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      deviceCount: 'DeviceCount',
      platformName: 'PlatformName',
      rayConfigShrink: 'RayConfig',
      rayTrainConfigShrink: 'RayTrainConfig',
      regionId: 'RegionId',
      webserverSpecName: 'WebserverSpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      deviceCount: 'string',
      platformName: 'string',
      rayConfigShrink: 'string',
      rayTrainConfigShrink: 'string',
      regionId: 'string',
      webserverSpecName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

