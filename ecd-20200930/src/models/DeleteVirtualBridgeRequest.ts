// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVirtualBridgeRequest extends $dara.Model {
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vb-fjsidhfishfiu****
   */
  bridgeId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by WUYING Workspace.
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeId: 'string',
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

