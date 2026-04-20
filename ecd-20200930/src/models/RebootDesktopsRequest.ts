// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootDesktopsRequest extends $dara.Model {
  createSnapshot?: boolean;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  osUpdate?: boolean;
  /**
   * @example
   * KB5082063
   */
  patchId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

