// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageRequest extends $dara.Model {
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  isDeleteByFilter?: boolean;
  /**
   * @remarks
   * The name of the image.
   * 
   * *   If this parameter is not set, the system deletes all the images that correspond to the specified ProductId parameter.
   * *   If this parameter is set, the system deletes only the image that is specified by the ProductId and PicName parameters.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the commodity.
   * 
   * >  A commodity may have multiple images.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceName: 'InstanceName',
      isDeleteByFilter: 'IsDeleteByFilter',
      picName: 'PicName',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceName: 'string',
      isDeleteByFilter: 'boolean',
      picName: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

