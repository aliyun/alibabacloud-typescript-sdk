// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomSourceAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Export format type. Default is jsonLine. jsonline: Exports in jsonLine format. excel: Exports in Excel format.
   * 
   * @example
   * jsonLine
   */
  exportType?: string;
  /**
   * @remarks
   * Unique ID for the task
   * 
   * This parameter is required.
   * 
   * @example
   * c9f226b02cca4f42a84c5e955c39dfd2
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier for the workspace: AgentKey
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

