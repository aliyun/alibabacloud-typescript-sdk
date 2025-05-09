// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDBTopologyResponseBodyDBTopology } from "./GetDbtopologyResponseBodyDbtopology";


export class GetDBTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topology of the data table.
   */
  DBTopology?: GetDBTopologyResponseBodyDBTopology;
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
   * The error message returned if the request failed.
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
   * C5B8E84B-42B6-4374-AD5A-6264E1753378
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
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
      DBTopology: GetDBTopologyResponseBodyDBTopology,
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

