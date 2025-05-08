// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportImageStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

