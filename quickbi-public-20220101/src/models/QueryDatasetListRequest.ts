// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * - If you specify this parameter, all datasets in the folder are returned.
   * 
   * @example
   * schemaad8aad00-9c55-4984-a767-b4e0ec60****
   */
  directoryId?: string;
  /**
   * @remarks
   * The keyword used to search for datasets by name.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the dataset list.
   * 
   * - Start value: 1
   * 
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Default value: 10
   * 
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
   * - true: Returns all datasets in the folder specified by DirectoryId and its subdirectories.
   * 
   * - false: Returns only the datasets in the folder specified by DirectoryId.
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

