// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDesktopsRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  createSnapshot?: string;
  /**
   * @remarks
   * An array of 1 to 100 cloud desktop IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * Specifies whether to apply pending patch updates.
   * 
   * @example
   * false
   */
  osUpdate?: boolean;
  /**
   * @example
   * KB5082063
   */
  patchId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to get a list of regions that Elastic Desktop Service supports.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies the billing mode for the cloud desktops after they are stopped.
   * 
   * @example
   * StopCharging
   */
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      createSnapshot: 'CreateSnapshot',
      desktopId: 'DesktopId',
      osUpdate: 'OsUpdate',
      patchId: 'PatchId',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSnapshot: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      osUpdate: 'boolean',
      patchId: 'string',
      regionId: 'string',
      stoppedMode: 'string',
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

