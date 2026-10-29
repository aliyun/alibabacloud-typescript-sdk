// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The JSON string of the file ID array, which contains up to 200 positive integers.
   * 
   * @example
   * [1001,1002,1003]
   */
  fileIds?: string;
  /**
   * @remarks
   * The URL of the knowledge base file.
   * 
   * @example
   * oss://bucket_name/path/to/file
   */
  fileLocation?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. If you do not specify this parameter, the default value is 1.
   * 
   * @example
   * 1
   */
  page?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. If you do not specify this parameter, the default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The processing status. Valid values: PENDING, PROCESSING, COMPLETED, FAILED, DUPLICATED, and SKIPPED.
   * 
   * @example
   * FAILED
   */
  status?: string;
  /**
   * @remarks
   * The stable ID of the authorized user. If you do not specify this parameter, all files in the knowledge base can be queried.
   * 
   * @example
   * u123
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileIds: 'FileIds',
      fileLocation: 'FileLocation',
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
      fileLocation: 'string',
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

