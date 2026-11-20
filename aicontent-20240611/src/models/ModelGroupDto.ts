// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGroupDTO extends $dara.Model {
  /**
   * @remarks
   * The time when the group was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the group was updated. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier of the group. It starts with the mg_ prefix and remains unchanged after creation.
   * 
   * @example
   * mg_a1b2c3d4e5f6g7h8i9j0
   */
  groupId?: string;
  /**
   * @remarks
   * The number of models currently included in the group.
   * 
   * @example
   * 3
   */
  modelCount?: number;
  /**
   * @remarks
   * The array of all member model IDs.
   * 
   * @example
   * [101, 102, 103]
   */
  modelList?: number[];
  /**
   * @remarks
   * The name of the group. If a system group is unnamed, the default platform name is returned.
   * 
   * @example
   * Professional Edition plan
   */
  name?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * - system: The group is automatically created by the system and cannot be edited or deleted.
   * - manual: The group is manually created.
   * 
   * @example
   * manual
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      modelCount: 'modelCount',
      modelList: 'modelList',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'string',
      modelCount: 'number',
      modelList: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelList)) {
      $dara.Model.validateArray(this.modelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

