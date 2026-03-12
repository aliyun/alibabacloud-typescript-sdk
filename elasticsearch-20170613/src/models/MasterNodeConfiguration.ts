// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MasterNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * elasticsearch.sn2ne.large
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

