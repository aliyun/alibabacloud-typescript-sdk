// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBatchTableAccessPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 43153
   */
  dbId?: number;
  /**
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QUERY
   */
  permissionType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableNameListShrink?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      permissionType: 'PermissionType',
      tableNameListShrink: 'TableNameList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      permissionType: 'string',
      tableNameListShrink: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

