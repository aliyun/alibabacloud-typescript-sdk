// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppUnBindCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  appId?: number;
  /**
   * @example
   * 价格
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

