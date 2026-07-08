// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindPptArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12342
   */
  artifactId?: number;
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @remarks
   * The task ID.
   * 
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
   * @remarks
   * [The workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * llm-xgpt3m25qdosdjr3
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      externalUserId: 'ExternalUserId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'number',
      externalUserId: 'string',
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

