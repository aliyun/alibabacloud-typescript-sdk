// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppBindCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

