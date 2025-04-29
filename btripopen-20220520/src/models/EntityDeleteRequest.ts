// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDeleteRequestEntityDOList } from "./EntityDeleteRequestEntityDolist";


export class EntityDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  delAll?: boolean;
  entityDOList?: EntityDeleteRequestEntityDOList[];
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
      entityDOList: 'entity_d_o_list',
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delAll: 'boolean',
      entityDOList: { 'type': 'array', 'itemType': EntityDeleteRequestEntityDOList },
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

