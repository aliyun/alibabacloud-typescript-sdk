// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FigureClusterForReq } from "./FigureClusterForReq";


export class UpdateFigureClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The information about the cluster.
   * 
   * This parameter is required.
   */
  figureCluster?: FigureClusterForReq;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
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
      figureCluster: 'FigureCluster',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      figureCluster: FigureClusterForReq,
      projectName: 'string',
    };
  }

  validate() {
    if(this.figureCluster && typeof (this.figureCluster as any).validate === 'function') {
      (this.figureCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

