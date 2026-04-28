// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter must be specified and the tag key cannot contain number signs (#). The tag key and tag value cannot exceed 2,000 bytes in length in total.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

