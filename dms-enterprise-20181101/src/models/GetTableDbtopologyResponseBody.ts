// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDBTopologyResponseBodyDBTopology } from "./GetTableDbtopologyResponseBodyDbtopology";


export class GetTableDBTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topology of the data table.
   */
  DBTopology?: GetTableDBTopologyResponseBodyDBTopology;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 853F7FD4-D922-4EFB-931C-D253EF159E06
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBTopology: 'DBTopology',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTopology: GetTableDBTopologyResponseBodyDBTopology,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.DBTopology && typeof (this.DBTopology as any).validate === 'function') {
      (this.DBTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

