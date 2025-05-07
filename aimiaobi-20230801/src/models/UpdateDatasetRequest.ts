// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetRequestDatasetConfig } from "./UpdateDatasetRequestDatasetConfig";


export class UpdateDatasetRequest extends $dara.Model {
  datasetConfig?: UpdateDatasetRequestDatasetConfig;
  /**
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfig: UpdateDatasetRequestDatasetConfig,
      datasetDescription: 'string',
      datasetId: 'number',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

