// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceSystemDiskRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The capacity of the new system disk. Unit: GiB. Valid values:
   * 
   * *   Basic disk: Max{20, Size of the image specified by ImageId} to 500.
   * 
   * *   Enterprise SSD (ESSD):
   * 
   *     *   PL0 ESSD: Max{1, Size of the image specified by ImageId} to 2048.
   *     *   PL1 ESSD: Max{20, Size of the image specified by ImageId} to 2048.
   *     *   PL2 ESSD: Max{461, Size of the image specified by ImageId} to 2048.
   *     *   PL3 ESSD: Max{1261, Size of the image specified by ImageId} to 2048.
   * 
   * *   ESSD AutoPL disk: Max{1, Size of the image specified by ImageId} to 2048.
   * 
   * *   Other disk categories: Max{20, Size of the image specified by ImageId} to 2048.
   * 
   * Default value: Max{40, Size of the image specified by ImageId}.
   * 
   * >  If the capacity of the new system disk exceeds `Max{20, Capacity of the original system disk}`, you are charged for the excess capacity.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

