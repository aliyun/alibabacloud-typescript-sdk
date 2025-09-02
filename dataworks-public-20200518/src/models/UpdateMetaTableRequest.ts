// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaTableRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the labels that you want to add. Separate the labels with commas (,).
   * 
   * @example
   * a,b,c
   */
  addedLabels?: string;
  /**
   * @remarks
   * The display name of the table.
   * 
   * @example
   * test
   */
  caption?: string;
  /**
   * @remarks
   * The ID of the category that you want to associate.
   * 
   * @example
   * 101
   */
  categoryId?: number;
  /**
   * @remarks
   * The environment of the DataWorks workspace. Valid values: 0 and 1. The value 0 indicates the development environment. The value 1 indicates the production environment.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The new owner ID. If you leave this parameter empty, the owner ID is not updated.
   * 
   * @example
   * 12345
   */
  newOwnerId?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The names of labels that you want to remove. Separate the labels with commas (,).
   * 
   * @example
   * a,b,c
   */
  removedLabels?: string;
  /**
   * @remarks
   * The schema information about the table. You must configure this parameter if you enable the three-layer model of MaxCompute.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * true
   */
  schema?: string;
  /**
   * @remarks
   * The GUID of the table. Specify the GUID in the format of odps.{projectName}.{tableName}.
   * 
   * @example
   * odps.test.table1
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The scope in which the table is visible. Valid values: 0, 1, and 2. The value 0 indicates that the table is invisible to all members. The value 1 indicates that the table is visible to all members. The value 2 indicates that the table is visible to workspace members.
   * 
   * @example
   * 1
   */
  visibility?: number;
  static names(): { [key: string]: string } {
    return {
      addedLabels: 'AddedLabels',
      caption: 'Caption',
      categoryId: 'CategoryId',
      envType: 'EnvType',
      newOwnerId: 'NewOwnerId',
      projectId: 'ProjectId',
      removedLabels: 'RemovedLabels',
      schema: 'Schema',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedLabels: 'string',
      caption: 'string',
      categoryId: 'number',
      envType: 'number',
      newOwnerId: 'string',
      projectId: 'number',
      removedLabels: 'string',
      schema: 'string',
      tableGuid: 'string',
      tableName: 'string',
      visibility: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

