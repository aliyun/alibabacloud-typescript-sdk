// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk that you want to resize.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5tzm9wnhzlhjzcbtxo465****
   */
  diskId?: string;
  /**
   * @remarks
   * The size of the disk that you want to resize. Unit: GiB.
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

