// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntitySetShrinkRequest extends $dara.Model {
  entityDOListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 340049
   */
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      entityDOListShrink: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDOListShrink: 'string',
      thirdpartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

