// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMvDetailModel } from "./OpenStructMvDetailModel";


export class TableSummaryModel extends $dara.Model {
  createTime?: string;
  description?: string;
  mvDetailModel?: OpenStructMvDetailModel;
  owner?: string;
  SQL?: string;
  schemaName?: string;
  tableName?: string;
  tableSize?: number;
  tableType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      mvDetailModel: 'MvDetailModel',
      owner: 'Owner',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableSize: 'TableSize',
      tableType: 'TableType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      mvDetailModel: OpenStructMvDetailModel,
      owner: 'string',
      SQL: 'string',
      schemaName: 'string',
      tableName: 'string',
      tableSize: 'number',
      tableType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.mvDetailModel && typeof (this.mvDetailModel as any).validate === 'function') {
      (this.mvDetailModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

