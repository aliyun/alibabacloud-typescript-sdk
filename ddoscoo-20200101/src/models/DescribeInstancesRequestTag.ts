// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the instance to query. You can specify up to 200 tag keys. When you specify tags, take note of the following rules:
   * 
   * *   Each tag consists of a key (**Key**) and a value (**Value**), which are separated with a comma (,).
   * *   Separate multiple tags with commas (,).
   * 
   * >  The tag key (**Key**) and tag value (**Value**) must be specified in pairs.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the instance to query. You can specify up to 200 tag values. When you specify tags, take note of the following rules:
   * 
   * *   Each tag consists of a key (**Key**) and a value (**Value**), which are separated with a comma (,).
   * *   Separate multiple tags with commas (,).
   * 
   * >  The tag key (**Key**) and tag value (**Value**) must be specified in pairs.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

