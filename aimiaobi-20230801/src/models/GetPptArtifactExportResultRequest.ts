// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptArtifactExportResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 15aeb61b-cdeb-4b70-94d7-99518040647e
   */
  exportTaskId?: string;
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      externalUserId: 'ExternalUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      externalUserId: 'string',
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

