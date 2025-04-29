// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateActivationRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the activation code. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags, call [ListTagResources](https://help.aliyun.com/document_detail/110425.html).
   * 
   * The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the activation code. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

