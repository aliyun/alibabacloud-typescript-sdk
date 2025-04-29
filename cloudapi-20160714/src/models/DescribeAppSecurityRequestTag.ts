// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppSecurityRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 123
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

