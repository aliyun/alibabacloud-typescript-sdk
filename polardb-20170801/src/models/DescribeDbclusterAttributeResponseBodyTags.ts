// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * MySQL
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

