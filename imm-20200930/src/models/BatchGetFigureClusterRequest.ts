// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFigureClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The cluster IDs.
   * 
   * This parameter is required.
   */
  objectIds?: string[];
  /**
   * @remarks
   * The name of the project.
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
      objectIds: 'ObjectIds',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectIds)) {
      $dara.Model.validateArray(this.objectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

