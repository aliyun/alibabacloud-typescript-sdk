// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The migration package ID. You can call the [CreateImportMigration](https://help.aliyun.com/document_detail/206094.html) operation to query the ID of the import package and call the [CreateExportMigration](https://help.aliyun.com/document_detail/349325.html) operation to query the ID of the export package.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  migrationId?: number;
  /**
   * @remarks
   * The workspace ID. You can log on to the DataWorks console and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      migrationId: 'MigrationId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

