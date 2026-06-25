// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetFileMetaConentUpdate } from "./DatasetFileMetaConentUpdate";


export class UpdateDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * A list of dataset file metadata to update.
   * 
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaConentUpdate[];
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
   * The ID of the tagging job for updating metadata tags.
   * 
   * @example
   * dsjob-hv0b1****u8taig3y
   */
  tagJobId?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the dataset. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

