// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportPptArtifactRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  edit?: boolean;
  /**
   * @example
   * ppt
   */
  exportFileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  pptArtifactId?: number;
  /**
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  /**
   * @example
   * true
   */
  zip?: boolean;
  static names(): { [key: string]: string } {
    return {
      edit: 'Edit',
      exportFileType: 'ExportFileType',
      pptArtifactId: 'PptArtifactId',
      workspaceId: 'WorkspaceId',
      zip: 'Zip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edit: 'boolean',
      exportFileType: 'string',
      pptArtifactId: 'number',
      workspaceId: 'string',
      zip: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

