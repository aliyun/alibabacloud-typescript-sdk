// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentPlatformShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters required to create the metric analysis platform.
   * 
   * This parameter is required.
   */
  aiPlatformConfigShrink?: string;
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
   * The name of the metric analysis platform.
   * 
   * This parameter is required.
   * 
   * @example
   * testplatform
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the DescribeRegions operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aiPlatformConfigShrink: 'AiPlatformConfig',
      DBClusterId: 'DBClusterId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiPlatformConfigShrink: 'string',
      DBClusterId: 'string',
      name: 'string',
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

