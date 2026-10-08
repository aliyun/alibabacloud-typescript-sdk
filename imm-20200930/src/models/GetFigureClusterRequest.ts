// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFigureClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information about how to obtain the dataset name, see [CreateDataset](~~CreateDataset~~).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The object ID of the clustering group. You can obtain the object ID from the face group information returned by [QueryFigureClusters](~~QueryFigureClusters~~).
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster-1f2e1a2c-d5ee-4bc5-84f6-fef94ea****
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the project. For more information about how to obtain the project name, see [CreateProject](~~CreateProject~~).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
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

