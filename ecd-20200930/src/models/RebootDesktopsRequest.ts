// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create a snapshot.
   */
  createSnapshot?: boolean;
  /**
   * @remarks
   * The cloud computer ID. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * Specifies whether to install system patches.
   */
  osUpdate?: boolean;
  /**
   * @remarks
   * The patch ID.
   * 
   * @example
   * KB5082063
   */
  patchId?: string;
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
      createSnapshot: 'CreateSnapshot',
      desktopId: 'DesktopId',
      osUpdate: 'OsUpdate',
      patchId: 'PatchId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSnapshot: 'boolean',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      osUpdate: 'boolean',
      patchId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

