// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveMetricRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the cloud service that supports initiative alert rules.
   * 
   * For more information about how to obtain the name of a cloud service, see [DescribeProductsOfActiveMetricRule](https://help.aliyun.com/document_detail/114930.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

