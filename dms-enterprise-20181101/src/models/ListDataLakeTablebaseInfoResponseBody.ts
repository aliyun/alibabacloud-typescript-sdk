// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLTablebaseInfo } from "./DltablebaseInfo";


export class ListDataLakeTablebaseInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Specified parameter Rows is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B43AD641-49C2-5299-9E06-1B37EC1B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of tables in the data lake.
   */
  tablebaseInfoList?: DLTablebaseInfo[];
  /**
   * @remarks
   * The number of tables that meet the conditions.
   * 
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

