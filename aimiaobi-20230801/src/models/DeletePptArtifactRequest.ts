// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePptArtifactRequest extends $dara.Model {
  pptArtifactId?: string;
  /**
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pptArtifactId: 'PptArtifactId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pptArtifactId: 'string',
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

