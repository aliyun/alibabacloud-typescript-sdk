// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetJobRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The job description.
   */
  description?: string;
  /**
   * @remarks
   * The job action.
   * 
   * Valid values:
   * 
   * *   SemanticIndex
   * *   IntelligentTag
   * *   FileMetaExport
   * 
   * This parameter is required.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The job mode.
   * 
   * Valid values:
   * 
   * *   Full: full mode.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The job configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      description: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
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

