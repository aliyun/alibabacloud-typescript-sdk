// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceTag extends $dara.Model {
  /**
   * @remarks
   * The tag key, up to 128 characters in length.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value, up to 256 characters in length.
   * 
   * @example
   * recommendation
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

