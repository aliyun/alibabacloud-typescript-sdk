// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkReachableAnalysisRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * Team
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`. The tag value can be an empty string.
   * 
   * You can add up to 20 tag values in each call.
   * 
   * @example
   * ops
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

