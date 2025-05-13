// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaContentCreate } from "./DatasetFileMetaContentCreate";


export class CreateDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata of the file.
   * 
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaContentCreate[];
  /**
   * @remarks
   * The dataset version name.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
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

