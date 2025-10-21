// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Table } from "./Table";


export class GetTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of success was true, the list and details of tables that meet the condition were returned. If the value of success was false, a null value was returned.
   */
  data?: Table[];
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * ECE641B2-AB0B-4174-9C3B-885881558637
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Table },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

