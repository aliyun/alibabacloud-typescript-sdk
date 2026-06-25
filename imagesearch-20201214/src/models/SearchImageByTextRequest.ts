// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByTextRequest extends $dara.Model {
  /**
   * @remarks
   * If this parameter is set to true, duplicate data is removed based on the ProductId field during the search.
   * 
   * @example
   * false
   */
  distinctProductId?: boolean;
  /**
   * @remarks
   * The filter condition. The int_attr field supports the following operators: in, not in, greater than (>), greater than or equal to (>=), less than (<), less than or equal to (<=), and equal to (=). The str_attr field supports the following operators: in, not in, equal to (=), and not equal to (!=). You can use AND and OR to connect multiple conditions.
   * Examples:
   * - int_attr >= 100.
   * - str_attr != "value1".
   * - int_attr = 1000 AND str_attr = "value1".
   * 
   * >The filter condition can be up to 4,096 characters in length.
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, see [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
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
   * The similarity score threshold. After you specify this parameter, only images whose similarity scores are greater than or equal to the threshold are returned. Valid values: 0.00 to 1.00. The value supports up to two decimal places. Default value: 0.00.
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
  /**
   * @remarks
   * The description text for searching images. Chinese and English are supported.
   * 
   * >The text can be up to 512 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      distinctProductId: 'DistinctProductId',
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      scoreThreshold: 'ScoreThreshold',
      start: 'Start',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctProductId: 'boolean',
      filter: 'string',
      instanceName: 'string',
      num: 'number',
      scoreThreshold: 'string',
      start: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

