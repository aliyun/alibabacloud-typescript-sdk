// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootDesktopsRequest extends $dara.Model {
  createSnapshot?: boolean;
  /**
   * @remarks
   * An array of 1 to 100 desktop IDs.
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
   * @example
   * KB5082063
   */
  patchId?: string;
  /**
   * @remarks
   * The ID of the region. Call [DescribeRegions](~~DescribeRegions~~) to get a list of regions where Elastic Desktop Service is available.
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

