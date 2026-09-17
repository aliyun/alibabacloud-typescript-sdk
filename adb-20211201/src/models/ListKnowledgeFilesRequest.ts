// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The JSON string of the file ID array. A maximum of 200 positive integers are supported.
   * 
   * @example
   * [1001,1002,1003]
   */
  fileIds?: string;
  /**
   * @remarks
   * The page number, starting from 1. If this parameter is not specified, Ray uses a default value of 1.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. If this parameter is not specified, Ray uses a default value of 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The processing status. Valid values:
   * 
   * - PENDING
   * - PROCESSING
   * - COMPLETED
   * - FAILED
   * - DUPLICATED
   * - SKIPPED
   * 
   * @example
   * FAILED
   */
  status?: string;
  /**
   * @remarks
   * The stable ID of the authorized user. If this parameter is not specified, all files in the knowledge base can be queried.
   * 
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

