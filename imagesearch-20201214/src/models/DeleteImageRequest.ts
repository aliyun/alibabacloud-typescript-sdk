// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. The operators supported for int_attr include greater than (>), greater than or equal to (>=), less than (<), less than or equal to (<=), and equal to (=). The operators supported for str_attr include equal to (=) and not equal to (!=). Multiple conditions can be connected by using AND and OR.
   * Examples:
   * - int_attr >= 100.
   * - str_attr != "value1".
   * - int_attr = 1000 AND str_attr = "value1".
   * >A maximum of 4096 characters are supported.
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. The instance name must be unique within the same region. Make sure that you use the correct value.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * Specifies whether to delete images based on the Filter parameter.
   * > 1. If this parameter is set to true, images are deleted based on the Filter parameter, and Filter is required.   
   *  2. If this parameter is set to false, images are deleted based on ProductId or the combination of ProductId and PicName. ProductId is required.
   * 
   * @example
   * false
   */
  isDeleteByFilter?: boolean;
  /**
   * @remarks
   * The image name.
   *  - If you do not specify this parameter, all images under the specified ProductId are deleted.
   *  - If you specify this parameter, the image specified by the combination of ProductId and PicName is deleted.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * > 1. A product can have multiple images. 2. If IsDeleteByFilter is set to false, this parameter is required.
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

