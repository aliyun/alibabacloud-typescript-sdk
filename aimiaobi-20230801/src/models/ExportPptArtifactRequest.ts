// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportPptArtifactRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates if the exported artifact is editable.
   * 
   * @example
   * true
   */
  edit?: boolean;
  /**
   * @remarks
   * The export file type.
   * 
   * @example
   * ppt
   */
  exportFileType?: string;
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @remarks
   * The ID of the PPT artifact.
   * 
   * This parameter is required.
   * 
   * @example
   * 123123
   */
  pptArtifactId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * Indicates if the exported file is compressed into a ZIP package.
   * 
   * @example
   * true
   */
  zip?: boolean;
  static names(): { [key: string]: string } {
    return {
      edit: 'Edit',
      exportFileType: 'ExportFileType',
      externalUserId: 'ExternalUserId',
      pptArtifactId: 'PptArtifactId',
      workspaceId: 'WorkspaceId',
      zip: 'Zip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edit: 'boolean',
      exportFileType: 'string',
      externalUserId: 'string',
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

