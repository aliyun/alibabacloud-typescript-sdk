// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultimodalFineTuneDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @example
   * 车辆图片
   */
  datasetDescription?: string;
  /**
   * @example
   * ds-****
   */
  datasetId?: string;
  /**
   * @example
   * 车辆
   */
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetDescription: 'string',
      datasetId: 'string',
      datasetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

