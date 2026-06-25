// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetJobRequest extends $dara.Model {
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
   * The description of the dataset job.
   * 
   * @example
   * This is a job description of a dataset.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the workspace. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      description: 'string',
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

