// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  directoryId?: string;
  /**
   * @remarks
   * Information about the directory where the dataset is located
   * 
   * @example
   * Queries the datasets of a specified workspace. The datasets are sorted in descending order by creation time.
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Specifies the directory ID.
   * 
   * *   If this field is not empty, all datasets in the directory are obtained.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * true
   */
  withChildren?: boolean;
  /**
   * @remarks
   * The name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      withChildren: 'WithChildren',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      withChildren: 'boolean',
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

