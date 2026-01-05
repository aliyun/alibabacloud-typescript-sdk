// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlotLifeCycle extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * Running
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

