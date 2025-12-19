// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPptArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12342
   */
  artifactId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 85da2bfe-6f05-41af-9841-d73c5bbf43a2
   * 
   * **if can be null:**
   * false
   */
  taskId?: string;
  /**
   * @example
   * llm-xgpt3m25qdosdjr3
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'number',
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

