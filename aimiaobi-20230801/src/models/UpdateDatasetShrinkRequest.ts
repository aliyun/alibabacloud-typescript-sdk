// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetShrinkRequest extends $dara.Model {
  datasetConfigShrink?: string;
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
      datasetConfigShrink: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetConfigShrink: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      searchDatasetEnable: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

