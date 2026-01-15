// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The user-defined content. The value can be up to 4,096 characters in length.
   * 
   * >  If you set this parameter, the response includes this parameter and its value. You can add text such as an image description.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
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
  /**
   * @remarks
   * The attribute, which is an integer. The attribute can be used to filter images when you search for images. If you set this parameter, the response includes this parameter and its value.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 20
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The name of the image. The name can be up to 512 characters in length.
   * 
   * > *   An image is uniquely identified by the values of the ProductId and PicName parameters.
   * >*   If you add an image whose product ID (ProductId) and image name (PicName) are the same as those of an existing image, the newly added image overwrites the existing image.
   * 
   * This parameter is required.
   * 
   * @example
   * namexxx.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product. The ID can be up to 512 characters in length.
   * 
   * >  A product may have multiple images.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The attribute, which is a string. The value can be up to 128 characters in length. The attribute can be used to filter images. If you set this parameter, the response includes this parameter and its value.
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @example
   * test
   */
  strAttr2?: string;
  strAttr3?: string;
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      customContent: 'CustomContent',
      instanceName: 'InstanceName',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customContent: 'string',
      instanceName: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

