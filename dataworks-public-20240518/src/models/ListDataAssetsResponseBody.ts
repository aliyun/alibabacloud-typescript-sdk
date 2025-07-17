// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lineage-based automatic backtrack feature is enabled for the mapping.
   * 
   * @example
   * false
   */
  autoTraceEnabled?: boolean;
  /**
   * @remarks
   * The creator of the mapping between the data asset and the tag.
   * 
   * @example
   * 12345
   */
  creator?: string;
  /**
   * @remarks
   * The data asset ID.
   * 
   * @example
   * 7259557313
   */
  dataAssetId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The way in which the mapping between the data asset and the tag is created. Valid values:
   * 
   * *   System
   * *   UserDefined
   * 
   * @example
   * UserDefined
   */
  tagSource?: string;
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
      autoTraceEnabled: 'AutoTraceEnabled',
      creator: 'Creator',
      dataAssetId: 'DataAssetId',
      key: 'Key',
      tagSource: 'TagSource',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTraceEnabled: 'boolean',
      creator: 'string',
      dataAssetId: 'string',
      key: 'string',
      tagSource: 'string',
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

export class ListDataAssetsResponseBodyPagingInfoDataAssets extends $dara.Model {
  /**
   * @remarks
   * The mappings between data assets and tags.
   */
  dataAssetTagMappings?: ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings[];
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
   * The data asset ID.
   * 
   * @example
   * 7259557313
   */
  id?: string;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * ali_cn_es_gfn
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 54275
   */
  projectId?: number;
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
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataAssetTagMappings: 'DataAssetTagMappings',
      envType: 'EnvType',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetTagMappings: { 'type': 'array', 'itemType': ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings },
      envType: 'string',
      id: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataAssetTagMappings)) {
      $dara.Model.validateArray(this.dataAssetTagMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAssetsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data assets.
   */
  dataAssets?: ListDataAssetsResponseBodyPagingInfoDataAssets[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataAssets: 'DataAssets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssets: { 'type': 'array', 'itemType': ListDataAssetsResponseBodyPagingInfoDataAssets },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataAssets)) {
      $dara.Model.validateArray(this.dataAssets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDataAssetsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataAssetsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

