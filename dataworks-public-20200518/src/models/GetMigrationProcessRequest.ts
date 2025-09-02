// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The migration package ID. You can call the CreateImportMigration operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  migrationId?: number;
  /**
   * @remarks
   * The workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID.
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

