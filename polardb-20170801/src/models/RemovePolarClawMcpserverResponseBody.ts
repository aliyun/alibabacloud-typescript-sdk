// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePolarClawMCPServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates success.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the deleted MCP server.
   * 
   * @example
   * test-v1
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      ok: 'Ok',
      requestId: 'RequestId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      message: 'string',
      ok: 'boolean',
      requestId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

