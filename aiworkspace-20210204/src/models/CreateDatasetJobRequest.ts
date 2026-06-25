// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a job description.
   */
  description?: string;
  /**
   * @remarks
   * The task operation.
   * 
   * - SemanticIndex: semantic index
   * 
   * - IntelligentTag: intelligent tagging
   * 
   * - FileMetaExport: metadata export
   * 
   * - FileMetaBuild: build and update metadata
   * 
   * - IntelligentTagRevert: revoke intelligent tagging
   * 
   * - FileMetaImport: metadata import
   * 
   * This parameter is required.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The task type.
   * 
   * - Full (default): forces the processing of all metadata. This task takes a long time to execute.
   * 
   * - Increment: processes only changed or unsuccessfully processed metadata. The SemanticIndex and IntelligentTag tasks support Increment and Full. Other tasks support only Full.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The task details.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * The workspace ID. For more information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

