// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReInitDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk to be initialized. You can initialize only one disk at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * d-5r7v69e0bejrnzger09w71yjv
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the image to use to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5rz3i231o531s4p4ozanxmgx7
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

