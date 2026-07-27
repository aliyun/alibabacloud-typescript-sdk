// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
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

