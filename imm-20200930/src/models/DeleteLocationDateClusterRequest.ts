// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLocationDateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For information about how to create a dataset, see [CreateDataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The ID of the group to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * location-date-cluster-71dd4f32-9597-4085-a2ab-3a7b0fd0aff9
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

