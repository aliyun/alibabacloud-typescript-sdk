// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetFileMetaRequest extends $dara.Model {
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
   * The workspace ID. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

