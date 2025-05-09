// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataAssetsRequestTags } from "./ListDataAssetsRequestTags";


export class ListDataAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The data asset IDs.
   */
  dataAssetIds?: string[];
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   ACS::DataWorks::Table
   * *   ACS::DataWorks::Task
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
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tags that are added to data assets. This parameter specifies a filter condition.
   * 
   * *   You can specify multiple tags, which are in the logical OR relation. For example, you can query the data assets that contain one of the following tags: `["key1:v1", "key2:v1", "key3:v1"]`.
   * *   If you do not configure this parameter, tag-based filtering is not performed.
   * 
   * This parameter is required.
   */
  tags?: ListDataAssetsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      dataAssetIds: 'DataAssetIds',
      dataAssetType: 'DataAssetType',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetIds: { 'type': 'array', 'itemType': 'string' },
      dataAssetType: 'string',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tags: { 'type': 'array', 'itemType': ListDataAssetsRequestTags },
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

