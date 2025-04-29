// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntitySetRequestEntityDOList } from "./EntitySetRequestEntityDolist";


export class EntitySetRequest extends $dara.Model {
  entityDOList?: EntitySetRequestEntityDOList[];
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
      entityDOList: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityDOList: { 'type': 'array', 'itemType': EntitySetRequestEntityDOList },
      thirdpartId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityDOList)) {
      $dara.Model.validateArray(this.entityDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

