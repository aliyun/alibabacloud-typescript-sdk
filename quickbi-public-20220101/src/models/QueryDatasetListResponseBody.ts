// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListResponseBodyResultDataDataSource extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 261b252d-c3c3-498a-a0a7-5d1ec6cd****
   */
  dsId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * test
   */
  dsName?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  id?: string;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the folder path.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  pathId?: string;
  /**
   * @remarks
   * The name of the folder path.
   * 
   * @example
   * test
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  createTime?: string;
  /**
   * @remarks
   * The information about the data source to which the dataset belongs.
   */
  dataSource?: QueryDatasetListResponseBodyResultDataDataSource;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * company_sales_record_copy12
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The information about the folder in which the dataset is located.
   */
  directory?: QueryDatasetListResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The time when the dataset was last modified.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  modifyTime?: string;
  /**
   * @remarks
   * Indicates whether extraction-based acceleration is enabled. Valid values:
   * 
   * - true: Enabled
   * 
   * - false: Disabled
   * 
   * @example
   * true
   */
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * The user ID of the dataset owner in Quick BI.
   * 
   * @example
   * 136516262323****
   */
  ownerId?: string;
  /**
   * @remarks
   * The nickname of the dataset owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * Indicates whether row-level permissions are enabled. Valid values:
   * 
   * - true: Enabled
   * 
   * - false: Disabled
   * 
   * @example
   * true
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad06adf
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      description: 'Description',
      directory: 'Directory',
      modifyTime: 'ModifyTime',
      openOfflineAcceleration: 'OpenOfflineAcceleration',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSource: QueryDatasetListResponseBodyResultDataDataSource,
      datasetId: 'string',
      datasetName: 'string',
      description: 'string',
      directory: QueryDatasetListResponseBodyResultDataDirectory,
      modifyTime: 'string',
      openOfflineAcceleration: 'boolean',
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The details of the dataset list.
   */
  data?: QueryDatasetListResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDatasetListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The paged results of the dataset list. The details of the datasets are returned in the Data parameter.
   */
  result?: QueryDatasetListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

