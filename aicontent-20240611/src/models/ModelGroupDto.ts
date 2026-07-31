// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGroupDTO extends $dara.Model {
  /**
   * @example
   * 2026-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * mg_a1b2c3d4e5f6g7h8i9j0
   */
  groupId?: string;
  /**
   * @example
   * 3
   */
  modelCount?: number;
  /**
   * @example
   * [101, 102, 103]
   */
  modelList?: number[];
  /**
   * @example
   * Professional Plan
   */
  name?: string;
  /**
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

