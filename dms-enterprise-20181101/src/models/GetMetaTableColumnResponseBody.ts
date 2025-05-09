// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMetaTableColumnResponseBodyColumnList } from "./GetMetaTableColumnResponseBodyColumnList";


export class GetMetaTableColumnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about fields in the table.
   */
  columnList?: GetMetaTableColumnResponseBodyColumnList[];
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingTableGuid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * TableGuid is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 087DFBA1-378B-5D25-B13B-31F6409F****
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
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': GetMetaTableColumnResponseBodyColumnList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

