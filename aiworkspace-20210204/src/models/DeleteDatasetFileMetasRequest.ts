// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset file metadata.
   * 
   * This parameter is required.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaIds?: string;
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
   * The ID of the workspace where the dataset is located. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 132602
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetaIds: 'DatasetFileMetaIds',
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetaIds: 'string',
      datasetVersion: 'string',
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

