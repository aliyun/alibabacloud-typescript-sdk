// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the product. For more information, see [Category references](https://help.aliyun.com/document_detail/179184.html).
   * 
   * *   For product search: If a category is specified, the specified category prevails. If no category is specified, the system estimates and selects a category. The category selected by the system is included in the response.
   * *   For generic search: The parameter value is set to 88888888 regardless of whether a category is specified.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter conditions. int_attr supports the following operators: >, >=, <, <=, and =. str_attr supports the following operators: = and !=. You can set the logical operator between conditions to AND or OR.
   * 
   * Examples:
   * 
   * *   int_attr>=100
   * *   str_attr!="value1"
   * *   int_attr=1000 AND str_attr="value1"
   * 
   * @example
   * int_attr>=100
   */
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
  /**
   * @remarks
   * The number of images to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  scoreThreshold?: string;
  /**
   * @remarks
   * The number of the image to return. Valid values: 0 to 499. Default value: 0.
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

