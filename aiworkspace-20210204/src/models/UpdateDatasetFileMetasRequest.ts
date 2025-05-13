// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaConentUpdate } from "./DatasetFileMetaConentUpdate";


export class UpdateDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata records to be updated for the dataset files.
   * 
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaConentUpdate[];
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
   * The ID of the tagging job that is associated with the metadata tag of the dataset file.
   * 
   * @example
   * dsjob-hv0b1****u8taig3y
   */
  tagJobId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. To obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 796**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetVersion: 'DatasetVersion',
      tagJobId: 'TagJobId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetas: { 'type': 'array', 'itemType': DatasetFileMetaConentUpdate },
      datasetVersion: 'string',
      tagJobId: 'string',
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

