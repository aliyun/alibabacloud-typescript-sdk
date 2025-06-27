// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkPathRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of network paths.
   * 
   * This parameter is required.
   */
  networkPathIds?: string[];
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
      networkPathIds: 'NetworkPathIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkPathIds)) {
      $dara.Model.validateArray(this.networkPathIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

