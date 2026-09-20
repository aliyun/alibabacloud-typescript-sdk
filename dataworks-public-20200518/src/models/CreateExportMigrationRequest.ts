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
   * The export mode of the task. Valid values:
   * - FULL: exports the target task in full.
   * - INCREMENTAL: incrementally exports the target task from a specified point in time. If you select this mode, you must also configure the IncrementalSince parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * FULL
   */
  exportMode?: string;
  /**
   * @remarks
   * The status of the export task. The system exports tasks in the specified status. Valid values:
   * - SAVED: saved. Tasks that have been saved are exported.
   * - SUBMITTED: submitted. Tasks that have been submitted are exported.
   * - DEPLOYED: deployed. Tasks that have been deployed are exported.
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
   * The start time for incrementally exporting the target node.
   * 
   * This parameter takes effect only when the ExportMode parameter settings is set to INCREMENTAL.
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
   * The name must be unique. No duplicate export task names can exist in the current DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_export_01
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
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

