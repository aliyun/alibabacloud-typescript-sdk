// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetLabel extends $dara.Model {
  /**
   * @remarks
   * The label key, which must be 1 to 128 characters long.
   */
  key?: string;
  /**
   * @remarks
   * The label value, which can be 0 to 128 characters long.
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

