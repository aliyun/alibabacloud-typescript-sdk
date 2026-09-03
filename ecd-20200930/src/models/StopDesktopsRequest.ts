// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create a snapshot.
   * 
   * @example
   * false
   */
  createSnapshot?: string;
  /**
   * @remarks
   * The cloud computer IDs. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * Specifies whether to perform a patch update when an update is ready. A value of true indicates that the patch update is performed.
   * 
   * @example
   * false
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The billing mode after the cloud computers are stopped.
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

