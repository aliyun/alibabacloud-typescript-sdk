// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUdmDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp15************xy70
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

