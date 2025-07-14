// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListResponseBodyResultDataDataSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @example
   * 261b252d-c3c3-498a-a0a7-5d1ec6cd****
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the scaling group was modified.
   * 
   * @example
   * The name of the training dataset.
   */
  dsName?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
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
   * The ID of the directory path.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * Information about the directory where the dataset is located
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  pathId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * Test a data source
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
   * The details of the dataset list.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  createTime?: string;
  /**
   * @remarks
   * Test Space
   */
  dataSource?: QueryDatasetListResponseBodyResultDataDataSource;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * 5820f58c-c734-4d8a-baf1-7979af4f****
   */
  datasetId?: string;
  /**
   * @remarks
   * Tom
   * 
   * @example
   * company_sales_record_copy12
   */
  datasetName?: string;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * The total number of rows in the table.
   */
  description?: string;
  /**
   * @remarks
   * The information about the data source to which the dataset belongs.
   */
  directory?: QueryDatasetListResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The nickname of the dataset owner.
   * 
   * @example
   * 2020-11-02 10:36:05
   */
  modifyTime?: string;
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 136516262323****
   */
  ownerId?: string;
  /**
   * @remarks
   * Whether to enable row-level permissions. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The incremental log backup feature is disabled.
   * 
   * @example
   * The ID of the workspace.
   */
  ownerName?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * true
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad06adf
   */
  workspaceId?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * Test dataset
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
   * Returns the pagination results of the dataset list. The detailed information of the dataset list is stored in the response parameter Data.
   */
  data?: QueryDatasetListResponseBodyResultData[];
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Current page number for dataset list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
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
   * The keyword used to search for the dataset name.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Test dataset
   */
  result?: QueryDatasetListResponseBodyResult;
  /**
   * @remarks
   * Whether to recursively wrap the dataset in the subdirectory. Valid values:
   * 
   * *   true: returns datasets in all recursive subdirectories in the directoryId directory.
   * *   false: Only datasets in the directory specified by directoryId are returned, excluding subdirectories.
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

