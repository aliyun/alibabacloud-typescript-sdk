// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntityAddRequestEntityDOList extends $dara.Model {
  /**
   * @example
   * 12345
   */
  entityId?: string;
  /**
   * @example
   * 1
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

export class EntityAddRequest extends $dara.Model {
  entityDOList?: EntityAddRequestEntityDOList[];
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
      entityDOList: { 'type': 'array', 'itemType': EntityAddRequestEntityDOList },
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

