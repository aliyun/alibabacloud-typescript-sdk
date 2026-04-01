// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskAttributeRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rcd-wz9c8isqly8637zw****
   */
  diskId?: string;
  /**
   * @example
   * testDisk
   */
  diskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      diskId: 'DiskId',
      diskName: 'DiskName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      diskId: 'string',
      diskName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

