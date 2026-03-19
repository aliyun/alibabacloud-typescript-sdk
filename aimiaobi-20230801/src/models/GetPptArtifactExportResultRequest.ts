// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptArtifactExportResultRequest extends $dara.Model {
  /**
   * @example
   * 15aeb61b-cdeb-4b70-94d7-99518040647e
   */
  exportTaskId?: string;
  /**
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
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

