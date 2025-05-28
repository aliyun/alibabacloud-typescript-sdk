// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDatasetListResponseBodyResultDataDataSource } from "./QueryDatasetListResponseBodyResultDataDataSource";
import { QueryDatasetListResponseBodyResultDataDirectory } from "./QueryDatasetListResponseBodyResultDataDirectory";


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

