// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmbodiedAIPlatformShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  deviceCount?: string;
  /**
   * @remarks
   * The name of the embodied intelligence multimodal data platform.
   * > The name can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. The name can be up to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * eap_platform
   */
  platformName?: string;
  /**
   * @remarks
   * The Ray specification information of the platform.
   */
  rayConfigShrink?: string;
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

