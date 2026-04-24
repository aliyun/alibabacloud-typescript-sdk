// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
  /**
   * @example
   * 1
   */
  imageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageVersion: 'ImageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      imageVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

