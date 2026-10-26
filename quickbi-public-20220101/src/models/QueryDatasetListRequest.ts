// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * - If this parameter is specified, all datasets in the specified directory are returned.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  directoryId?: string;
  /**
   * @remarks
   * The keyword used to search for dataset names.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the dataset list.
   * 
   * - Minimum value: 1
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page for a paged query.
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to recursively include datasets in subdirectories. Valid values:
   * 
   * - true: Returns datasets in all recursive subdirectories under the directory specified by directoryId.
   * - false: Returns only datasets in the directory specified by directoryId, excluding subdirectories.
   * 
   * @example
   * true
   */
  withChildren?: boolean;
  /**
   * @remarks
   * The workspace ID.
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

