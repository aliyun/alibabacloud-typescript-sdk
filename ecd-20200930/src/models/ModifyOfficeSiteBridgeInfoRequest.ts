// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteBridgeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * @example
   * vb-fsifhaiushfishf***
   */
  bridgeId?: string;
  /**
   * @remarks
   * The virtual bridge specifications.
   * 
   * @example
   * vb.pro
   */
  bridgeLevel?: string;
  /**
   * @remarks
   * The third-party plugin type of the virtual bridge.
   * 
   * @example
   * unsr
   */
  bridgeType?: string;
  /**
   * @remarks
   * Specifies whether to enable the bridge.
   * 
   * @example
   * true
   */
  enableBridge?: boolean;
  /**
   * @remarks
   * The activation code object.
   * 
   * @example
   * ab5b76f4c0bf4a5abd06ea23991a47afa1a4bb4acb4e4204882b40795f946e74
   */
  license?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-387822****
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
      bridgeId: 'BridgeId',
      bridgeLevel: 'BridgeLevel',
      bridgeType: 'BridgeType',
      enableBridge: 'EnableBridge',
      license: 'License',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeId: 'string',
      bridgeLevel: 'string',
      bridgeType: 'string',
      enableBridge: 'boolean',
      license: 'string',
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

