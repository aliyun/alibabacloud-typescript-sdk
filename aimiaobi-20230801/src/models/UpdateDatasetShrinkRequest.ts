// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetShrinkRequest extends $dara.Model {
  /**
   * @example
   * private
   */
  accessLevel?: string;
  /**
   * @remarks
   * The configurations for a third-party search dataset.
   */
  datasetConfigShrink?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * 企业自定义数据集
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * Specifies whether to enable search for the dataset.
   * 
   * @example
   * 3
   */
  searchDatasetEnable?: number;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspaceId]().
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      datasetConfigShrink: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      searchDatasetEnable: 'SearchDatasetEnable',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'string',
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

