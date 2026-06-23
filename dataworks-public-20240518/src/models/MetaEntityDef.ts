// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityAttributeDef } from "./MetaEntityAttributeDef";


export class MetaEntityDef extends $dara.Model {
  /**
   * @remarks
   * A list of entity attribute definition objects.
   */
  attributeDefs?: MetaEntityAttributeDef[];
  /**
   * @remarks
   * The time when the definition was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1780553640613
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 业务API
   */
  displayName?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * custom_entity-biz_api
   */
  entityType?: string;
  /**
   * @remarks
   * The extension mode. Valid values: NONE and TABLE. NONE indicates a custom type. TABLE indicates that the type extends a table type.
   * 
   * @example
   * NONE
   */
  extend?: string;
  /**
   * @remarks
   * The time when the definition was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1780553640613
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the type definition.
   * 
   * @example
   * biz_api
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributeDefs: 'AttributeDefs',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      entityType: 'EntityType',
      extend: 'Extend',
      modifyTime: 'ModifyTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDefs: { 'type': 'array', 'itemType': MetaEntityAttributeDef },
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      entityType: 'string',
      extend: 'string',
      modifyTime: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeDefs)) {
      $dara.Model.validateArray(this.attributeDefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

