// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the resource. You can specify at most 20 tag keys.
   * 
   * The key cannot exceed 128 characters in length. The key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * > When you call this operation, the **Tag.N.Key** parameter is required and cannot be an empty string.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource. You can specify at most 20 tag values.
   * 
   * The tag value cannot exceed 128 characters in length. The value cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * > When you call this operation, the **Tag.N.Value** parameter is required and can be an empty string.
   * 
   * @example
   * FinanceJoshua
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

