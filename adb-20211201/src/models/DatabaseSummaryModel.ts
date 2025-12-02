// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatabaseSummaryModel extends $dara.Model {
  createTime?: string;
  createdBySource?: string;
  createdByUser?: string;
  dbType?: string;
  description?: string;
  location?: string;
  owner?: string;
  schemaName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdBySource: 'CreatedBySource',
      createdByUser: 'CreatedByUser',
      dbType: 'DbType',
      description: 'Description',
      location: 'Location',
      owner: 'Owner',
      schemaName: 'SchemaName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createdBySource: 'string',
      createdByUser: 'string',
      dbType: 'string',
      description: 'string',
      location: 'string',
      owner: 'string',
      schemaName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

