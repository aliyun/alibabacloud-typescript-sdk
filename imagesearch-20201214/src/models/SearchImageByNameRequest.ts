// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The product category. For more information, see [Category reference](https://help.aliyun.com/document_detail/179184.html).
   *  - For product image search, if you specify a category, the specified category is used. If you do not specify a category, the system predicts the category. You can obtain the predicted category from the response.
   * <props="china">
   *  - For fabric, trademark, generic, home furnishing, and industrial hardware searches, the system sets the category to 88888888 regardless of whether you specify a category.
   * 
   * <props="intl">
   * - For generic image search, the system sets the category to 88888888 regardless of whether you specify a category..
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * Specifies whether to deduplicate results based on ProductId.
   * > Set this parameter to true to enable deduplication.
   * 
   * @example
   * false
   */
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter condition. The int_attr field supports the following operators: in, not in, greater than (>), greater than or equal to (>=), less than (<), less than or equal to (<=), and equal to (=). The str_attr field supports the following operators: in, not in, equal to (=), and not equal to (!=). Multiple conditions can be connected by using AND and OR.
   * Examples:
   * - int_attr>=100.
   * - str_attr!="value1".
   * - int_attr=1000 AND str_attr="value1".
   * 
   * >The maximum length is 4,096 characters.
   * 
   * @example
   * int_attr>=100
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Make sure you distinguish between them.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of results to return. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The similarity score threshold. If you specify this parameter, only images with a similarity score greater than or equal to the threshold are returned. Valid values: 0.00 to 1.00. Up to two decimal places are supported. Default value: 0.00.
   * 
   * @example
   * 0.50
   */
  scoreThreshold?: string;
  /**
   * @remarks
   * The start position of the results to return. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      picName: 'PicName',
      productId: 'ProductId',
      scoreThreshold: 'ScoreThreshold',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      picName: 'string',
      productId: 'string',
      scoreThreshold: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

