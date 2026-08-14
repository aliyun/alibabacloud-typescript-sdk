// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer4RuleBakModeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bakMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      bakMode: 'BakMode',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bakMode: 'string',
      listeners: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

