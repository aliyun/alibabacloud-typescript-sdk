// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatabaseSummaryModel extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  createTime?: string;
  /**
   * @remarks
   * The creation source of the database.
   */
  createdBySource?: string;
  /**
   * @remarks
   * The user who created the database.
   */
  createdByUser?: string;
  /**
   * @remarks
   * The database type.
   */
  dbType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The data storage location of the database.
   */
  location?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * abc
   */
  owner?: string;
  /**
   * @remarks
   * The logical database name.
   * 
   * @example
   * testSchema
   */
  schemaName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
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

