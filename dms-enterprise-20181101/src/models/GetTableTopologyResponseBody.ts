// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableTopologyResponseBodyTableTopology } from "./GetTableTopologyResponseBodyTableTopology";


export class GetTableTopologyResponseBody extends $dara.Model {
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
   * F5ED6A40-F344-4C7D-A8F0-5685CA584CA7
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
  /**
   * @remarks
   * The topology information.
   */
  tableTopology?: GetTableTopologyResponseBodyTableTopology;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableTopology: 'TableTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableTopology: GetTableTopologyResponseBodyTableTopology,
    };
  }

  validate() {
    if(this.tableTopology && typeof (this.tableTopology as any).validate === 'function') {
      (this.tableTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

