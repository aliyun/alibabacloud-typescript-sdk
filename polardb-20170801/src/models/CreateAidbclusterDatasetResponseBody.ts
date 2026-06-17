// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB database cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The dataset management service ID.
   * 
   * @example
   * pcs-2zeei***
   */
  dataServiceId?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * pds-2ze88***
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * dataset01
   */
  datasetName?: string;
  /**
   * @remarks
   * The path to the dataset.
   * 
   * @example
   * polardb_ai/datasets/train/sft/dataset01
   */
  path?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      dataServiceId: 'DataServiceId',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      path: 'Path',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      dataServiceId: 'string',
      datasetId: 'string',
      datasetName: 'string',
      path: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

