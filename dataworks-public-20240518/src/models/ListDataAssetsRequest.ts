// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The custom tag key specified by the user.
   * 
   * The tag key can be up to 64 characters in length, cannot start with `dw:`, and supports only letters, digits, and the following special characters: `-@#*<>|[]()+=&%$!~`.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset domain.
   * 
   * @example
   * 1001
   */
  assetDomainId?: number;
  /**
   * @remarks
   * The ID of the asset category.
   * 
   * @example
   * cate-xxxxxxxx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * The list of unique data asset IDs.
   */
  dataAssetIds?: string[];
  /**
   * @remarks
   * The Asset Type of the data asset. Valid values:
   * 
   * - ACS::DataWorks::Table: data table.
   * 
   * - ACS::DataWorks::Task: scheduling node.
   * 
   * @example
   * ACS::DataWorks::Task
   */
  dataAssetType?: string;
  /**
   * @remarks
   * The workspace environment to which the data asset belongs. Valid values:
   * - Dev: development environment.
   * - Prod: production environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the asset. Fuzzy search by name is supported.
   * 
   * @example
   * AssetDomainName
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
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
   * The ID of the workspace.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The list of tags associated with data assets. Tags are used as query filters:
   * - Multiple values have an OR relationship. For example, `["key1:v1", "key2:v1", "key3:v1"]` queries data assets that contain any one of the specified tags.
   * - If this parameter is not specified or is left empty, no tag-based filtering is applied.
   */
  tags?: ListDataAssetsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      assetDomainId: 'AssetDomainId',
      categoryUuid: 'CategoryUuid',
      dataAssetIds: 'DataAssetIds',
      dataAssetType: 'DataAssetType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDomainId: 'number',
      categoryUuid: 'string',
      dataAssetIds: { 'type': 'array', 'itemType': 'string' },
      dataAssetType: 'string',
      envType: 'string',
      name: 'string',
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

