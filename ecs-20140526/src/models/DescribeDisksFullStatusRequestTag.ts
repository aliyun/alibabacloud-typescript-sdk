// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksFullStatusRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the EBS device. A key-value pair consists of a key specified by the Tag.N.Key parameter and a value specified by the `Tag.N.Value` parameter. The two parameters are associated with each other. Valid values of N: 1 to 20.
   * 
   * Up to 1,000 resources with the specified tags can be returned in the response.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the EBS device. A key-value pair consists of a key specified by the `Tag.N.Key` parameter and a value specified by the Tag.N.Value parameter. The two parameters are associated with each other. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
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

