// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Tag extends $dara.Model {
  /**
   * @remarks
   * The key for the tag.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value for the tag.
   * 
   * @example
   * test-value
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

