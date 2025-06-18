// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelProperty extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SKlearn
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Framework
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

