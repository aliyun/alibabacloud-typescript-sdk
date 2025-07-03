// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeArchiveTableListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  schemaName?: string;
  status?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

