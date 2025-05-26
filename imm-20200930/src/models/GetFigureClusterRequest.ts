// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFigureClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset name.[](~~CreateDataset~~)
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The ID of the face clustering task. You can obtain the ID from the face clustering information returned after you call the [QueryFigureClusters](~~QueryFigureClusters~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster-1f2e1a2c-d5ee-4bc5-84f6-fef94ea****
   */
  objectId?: string;
  /**
   * @remarks
   * The project name.[](~~CreateProject~~)
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

