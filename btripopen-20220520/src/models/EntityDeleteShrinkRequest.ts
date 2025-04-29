// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityDeleteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  delAll?: boolean;
  entityDOListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      delAll: 'del_all',
      entityDOListShrink: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delAll: 'boolean',
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

