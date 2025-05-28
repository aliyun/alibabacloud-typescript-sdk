// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiDatasourceRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the API data source name.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * Current page number for API data source list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

