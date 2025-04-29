// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeCommandShrinkRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instance.
   * 
   * Take note of the following items:
   * 
   * *   This parameter and InstanceId.N are mutually exclusive.
   * *   Valid values of N: 1 to 10. The tag key cannot be an empty string.
   * *   The number of instances that have the specified tags cannot exceed 100. If more than 100 instances have the specified tags, we recommend that you use batch tags such as batch: b1 to group the instances into batches of up to 100 instances.
   * *   The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the instance.
   * 
   * Take note of the following items:
   * 
   * *   Valid values of N: 1 to 10.
   * *   The tag value can be an empty string.
   * *   The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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

