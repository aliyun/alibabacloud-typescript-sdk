// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskParameters extends $dara.Model {
  /**
   * @remarks
   * The target disk capacity after the change.
   */
  newDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      newDiskSize: 'NewDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDiskSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

