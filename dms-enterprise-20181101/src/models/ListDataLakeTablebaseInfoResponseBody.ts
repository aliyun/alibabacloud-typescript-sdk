// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLTablebaseInfo } from "./DltablebaseInfo";


export class ListDataLakeTablebaseInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Rows is not valid.
   */
  errorMessage?: string;
  /**
   * @example
   * B43AD641-49C2-5299-9E06-1B37EC1B****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tablebaseInfoList?: DLTablebaseInfo[];
  /**
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tablebaseInfoList: 'TablebaseInfoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tablebaseInfoList: { 'type': 'array', 'itemType': DLTablebaseInfo },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tablebaseInfoList)) {
      $dara.Model.validateArray(this.tablebaseInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

