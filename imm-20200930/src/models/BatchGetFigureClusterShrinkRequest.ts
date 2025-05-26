// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetFigureClusterShrinkRequest extends $dara.Model {
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
  objectIdsShrink?: string;
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
      objectIdsShrink: 'ObjectIds',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectIdsShrink: 'string',
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

