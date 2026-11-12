// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIDBClusterDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the PolarDB database for the AI model service.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID of the dataset management service.
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
   * The name of the dataset.
   * 
   * @example
   * dataset01
   */
  datasetName?: string;
  /**
   * @remarks
   * The path of the dataset.
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

