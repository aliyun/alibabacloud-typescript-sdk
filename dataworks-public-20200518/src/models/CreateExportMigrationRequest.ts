// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the export task.
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The export mode of the export task. Valid values:
   * 
   * *   FULL: The export task is used to export all data objects.
   * *   INCREMENTAL: The export task is used to export data objects that were modified since the specified point in time. If you set this parameter to INCREMENTAL, you must configure the IncrementalSince parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * FULL
   */
  exportMode?: string;
  /**
   * @remarks
   * The status of the data objects that you want to export in the export task. The system exports data objects in the state that is specified by this parameter. Valid values:
   * 
   * *   SAVED
   * *   SUBMITTED
   * *   DEPLOYED
   * 
   * @example
   * SAVED
   * 
   * **if can be null:**
   * true
   */
  exportObjectStatus?: string;
  /**
   * @remarks
   * The start time of the incremental export task.
   * 
   * The IncrementalSince parameter takes effect only when the ExportMode parameter is set to INCREMENTAL.
   * 
   * @example
   * 1589904000000
   * 
   * **if can be null:**
   * true
   */
  incrementalSince?: number;
  /**
   * @remarks
   * The name of the export task.
   * 
   * The name of each export task must be unique. You must ensure that no duplicate export task exists in the current workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_export_01
   */
  name?: string;
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
      description: 'Description',
      exportMode: 'ExportMode',
      exportObjectStatus: 'ExportObjectStatus',
      incrementalSince: 'IncrementalSince',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exportMode: 'string',
      exportObjectStatus: 'string',
      incrementalSince: 'number',
      name: 'string',
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

