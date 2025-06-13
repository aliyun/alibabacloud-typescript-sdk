// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImagesFromLibRequest extends $dara.Model {
  /**
   * @example
   * [158794]
   */
  imageIds?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: 'string',
      libId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

