// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallDataAgentMcpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MCP ID created in DataAgent.
   * 
   * @example
   * {"uuid":"6126jk***h2"}
   */
  data?: any;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request failed.
   * 
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-***-695C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

