// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDisksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The tag key **cannot be** an empty string or a duplicate value.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value **can be** an empty string.
   * 
   * @example
   * testvalue1
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

