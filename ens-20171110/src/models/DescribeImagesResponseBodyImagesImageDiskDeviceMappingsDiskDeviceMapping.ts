// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The format of the image.
   * 
   * @example
   * The format of the image.
   * raw
   * qcow2
   */
  format?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  size?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * Data
   */
  type?: string;
  /**
   * @remarks
   * The ID of image.
   * 
   * @example
   * i-test
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      size: 'Size',
      type: 'Type',
      imageId: 'imageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      size: 'string',
      type: 'string',
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

