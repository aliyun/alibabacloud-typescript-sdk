// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The migration task ID.
   * 
   * You can call the [CreateImportMigration](https://help.aliyun.com/document_detail/2780280.html) operation to obtain the ID of the import task and call the [CreateExportMigration](https://help.aliyun.com/document_detail/2780281.html) operation to obtain the ID of the export task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  migrationId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
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

