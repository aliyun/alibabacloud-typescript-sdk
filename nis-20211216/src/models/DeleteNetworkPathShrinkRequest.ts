// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkPathShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of network paths.
   * 
   * This parameter is required.
   */
  networkPathIdsShrink?: string;
  /**
   * @remarks
   * The region ID of the network path that you want to delete.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathIdsShrink: 'NetworkPathIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathIdsShrink: 'string',
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

