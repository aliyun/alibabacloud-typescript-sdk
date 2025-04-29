// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the ECS instance. You can specify up to 20 tags for each ECS instance.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` and cannot contain `http://` or `https://`.
   * 
   * @example
   * binary
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the ECS instance. You can specify up to 20 tags for each ECS instance.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * alterTable
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

