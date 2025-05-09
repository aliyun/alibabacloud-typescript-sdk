// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeTableNameResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @example
   * C5B8E84B-42B6-4374-AD5A-6264E1753378
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tableNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tableNameList: 'TableNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tableNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNameList)) {
      $dara.Model.validateArray(this.tableNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

