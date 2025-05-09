// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLTable } from "./Dltable";


export class ListDataLakeTableResponseBody extends $dara.Model {
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
   * 3D3FB827-E667-50DB-AD59-C83F8237FECB
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tableList?: DLTable[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tableList: 'TableList',
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
      tableList: { 'type': 'array', 'itemType': DLTable },
    };
  }

  validate() {
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

