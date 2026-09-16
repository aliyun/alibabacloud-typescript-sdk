// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @example
   * [1001,1002,1003]
   */
  fileIds?: string;
  /**
   * @example
   * 1
   */
  page?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * FAILED
   */
  status?: string;
  /**
   * @example
   * u123
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileIds: 'FileIds',
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileIds: 'string',
      page: 'string',
      pageSize: 'string',
      status: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

