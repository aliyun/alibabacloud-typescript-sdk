// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigImageRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * image-d79x4k11pmg19****
   */
  imageId?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-****
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

