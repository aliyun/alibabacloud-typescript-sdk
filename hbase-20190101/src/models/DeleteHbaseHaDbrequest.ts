// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHBaseHaDBRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BDS cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * bds-bp14112fd7g52s1****
   */
  bdsId?: string;
  /**
   * @remarks
   * The ID of the HA instance. You can call the QueryHBaseHaDB operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ha-sw2o0l01s4r76****
   */
  haId?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
      haId: 'HaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
      haId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

