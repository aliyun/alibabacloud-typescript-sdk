// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeWuyingServerDiskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The size and specifications of the data cloud disks.
   */
  dataDiskListShrink?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The new capacity of the system cloud disk, in GB.
   * 
   * @example
   * 220
   */
  systemDiskNewSize?: number;
  /**
   * @remarks
   * The workstation ID.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskListShrink: 'DataDiskList',
      productType: 'ProductType',
      systemDiskNewSize: 'SystemDiskNewSize',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskListShrink: 'string',
      productType: 'string',
      systemDiskNewSize: 'number',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

