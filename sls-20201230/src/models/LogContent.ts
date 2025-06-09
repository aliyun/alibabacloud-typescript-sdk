// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogContent extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-test
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value-test
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

