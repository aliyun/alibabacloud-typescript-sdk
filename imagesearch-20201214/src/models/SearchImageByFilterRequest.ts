// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. The operators supported by int_attr include in, not in, greater than (>), greater than or equal to (>=), less than (<), less than or equal to (<=), and equal to (=). The operators supported by str_attr include in, not in, equal to (=), and not equal to (!=). Multiple conditions can be connected by AND and OR.
   * Examples:
   * - int_attr >= 100.
   * - str_attr != "value1".
   * - int_attr = 1000 AND str_attr = "value1".
   * 
   * >A maximum of 4,096 characters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * int_attr=1000 AND str_attr="value1"
   */
  filter?: string;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, you can log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance.
   * If you have not purchased an Image Search instance, see [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. Make sure that you can distinguish between them.
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
   * The start position of the results to return. Valid values: 0 to 499. Default value: 0.
   * 
   * @example
   * 0
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceName: 'InstanceName',
      num: 'Num',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      instanceName: 'string',
      num: 'number',
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

