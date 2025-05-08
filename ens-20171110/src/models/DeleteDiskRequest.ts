// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5va95bg6i5f44kgkeuazyfcxm
   */
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

