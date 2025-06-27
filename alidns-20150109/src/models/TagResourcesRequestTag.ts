// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 20 characters in length and cannot start with `acs:` or`aliyun`.
   * 
   * @example
   * abcd
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 20 bytes in length.
   * 
   * @example
   * abcd
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

