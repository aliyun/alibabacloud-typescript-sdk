// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeMultiZoneClusterDiskSizeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-f5d6vc2r8d6****
   */
  clusterId?: string;
  /**
   * @example
   * 480
   */
  coreDiskSize?: number;
  /**
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

