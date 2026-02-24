// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOSSMultimodalFineTuneDatasetRequest extends $dara.Model {
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
   * ds-*****ab0
   */
  datasetId?: string;
  /**
   * @example
   * https://bucket-name.oss-cn-beijing.aliyuncs.com/005ed960-6a07-11ef-ab81-f32551c4afe8
   */
  ossUrl?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      datasetId: 'DatasetId',
      ossUrl: 'OssUrl',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      datasetId: 'string',
      ossUrl: 'string',
      sourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

