// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MasterNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  amount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  disk?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  diskType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
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

