// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaContentCreate } from "./DatasetFileMetaContentCreate";


export class CreateDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * A list of file metadata content.
   * 
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaContentCreate[];
  /**
   * @remarks
   * The name of the dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The ID of the workspace where the dataset is located. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetas: { 'type': 'array', 'itemType': DatasetFileMetaContentCreate },
      datasetVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetas)) {
      $dara.Model.validateArray(this.datasetFileMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

