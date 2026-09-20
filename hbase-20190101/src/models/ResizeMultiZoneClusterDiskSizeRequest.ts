// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeMultiZoneClusterDiskSizeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the multi-zone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-f5d6vc2r8d6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The disk size of core nodes. The value must be greater than the current disk size and must be a multiple of 40. Unit: GB. Maximum value: 64000.
   * 
   * @example
   * 480
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * The disk size of log nodes. The value must be greater than the current disk size of log nodes and must be a multiple of 40. Unit: GB. Maximum value: 8000.
   * 
   * @example
   * 440
   */
  logDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreDiskSize: 'CoreDiskSize',
      logDiskSize: 'LogDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreDiskSize: 'number',
      logDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

