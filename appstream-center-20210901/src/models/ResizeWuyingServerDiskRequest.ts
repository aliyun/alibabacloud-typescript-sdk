// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeWuyingServerDiskRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The disk number.
   * 
   * @example
   * 1
   */
  diskNo?: string;
  /**
   * @remarks
   * The disk subtype.
   * 
   * @example
   * USER_DATA
   */
  diskSubType?: string;
  /**
   * @remarks
   * The type of disk data included in the image. By default, the system cloud disk and data cloud disks of the instance are included.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  /**
   * @remarks
   * The new size.
   * 
   * @example
   * 220
   */
  newSize?: number;
  static names(): { [key: string]: string } {
    return {
      diskNo: 'DiskNo',
      diskSubType: 'DiskSubType',
      diskType: 'DiskType',
      newSize: 'NewSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskNo: 'string',
      diskSubType: 'string',
      diskType: 'string',
      newSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeWuyingServerDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The size and specifications of the data cloud disks.
   */
  dataDiskList?: ResizeWuyingServerDiskRequestDataDiskList[];
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
   * The new size of the system cloud disk, in GB.
   * 
   * @example
   * 220
   */
  systemDiskNewSize?: number;
  /**
   * @remarks
   * The ID of the WUYING Workspace.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskList: 'DataDiskList',
      productType: 'ProductType',
      systemDiskNewSize: 'SystemDiskNewSize',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskList: { 'type': 'array', 'itemType': ResizeWuyingServerDiskRequestDataDiskList },
      productType: 'string',
      systemDiskNewSize: 'number',
      wuyingServerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskList)) {
      $dara.Model.validateArray(this.dataDiskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

