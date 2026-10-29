// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the cloud disk to resize.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5tzm9wnhzlhjzcbtxo465****
   */
  diskId?: string;
  /**
   * @remarks
   * The target size of the cloud disk, in GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  newSize?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      newSize: 'NewSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      newSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

