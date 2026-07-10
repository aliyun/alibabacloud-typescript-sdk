// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityDeleteRequestEntityDOList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EntityDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  delAll?: boolean;
  entityDOList?: EntityDeleteRequestEntityDOList[];
  /**
   * @remarks
   * This parameter is required.
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

