// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMetaQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The primary instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxsp-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The SQL statement to execute.
   * 
   * This parameter is required.
   * 
   * @example
   * show databases;
   */
  sql?: string;
  /**
   * @remarks
   * The data node (DN) instance ID.
   * 
   * @example
   * pxc-xdb-s-*
   */
  storageInstId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      sql: 'Sql',
      storageInstId: 'StorageInstId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      sql: 'string',
      storageInstId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

