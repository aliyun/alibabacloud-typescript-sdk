// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KibanaNodeConfiguration extends $dara.Model {
  amount?: number;
  disk?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

