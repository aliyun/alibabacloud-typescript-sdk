// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnTagDataAssetsRequestTags } from "./UnTagDataAssetsRequestTags";


export class UnTagDataAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The data asset IDs.
   * 
   * This parameter is required.
   */
  dataAssetIds?: string[];
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   ACS::DataWorks::Table
   * *   ACS::DataWorks::Task
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::DataWorks::Task
   */
  dataAssetType?: string;
  /**
   * @remarks
   * The environment of the workspace to which the data asset belongs. Valid values:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The tags that you want to remove.
   * 
   * This parameter is required.
   */
  tags?: UnTagDataAssetsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      dataAssetIds: 'DataAssetIds',
      dataAssetType: 'DataAssetType',
      envType: 'EnvType',
      projectId: 'ProjectId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetIds: { 'type': 'array', 'itemType': 'string' },
      dataAssetType: 'string',
      envType: 'string',
      projectId: 'number',
      tags: { 'type': 'array', 'itemType': UnTagDataAssetsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.dataAssetIds)) {
      $dara.Model.validateArray(this.dataAssetIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

