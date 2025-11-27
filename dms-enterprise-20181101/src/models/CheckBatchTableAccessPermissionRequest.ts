// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBatchTableAccessPermissionRequest extends $dara.Model {
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
  tableNameList?: string[];
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
      tableNameList: 'TableNameList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      permissionType: 'string',
      tableNameList: { 'type': 'array', 'itemType': 'string' },
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableNameList)) {
      $dara.Model.validateArray(this.tableNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

