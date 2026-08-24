// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKillInstanceSessionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The task ID for terminating sessions.
   * 
   * > When you invoke this API operation for a PolarDB for MySQL instance with the **NodeId** request parameter left empty (no node ID specified) and the **KillAllSessions** request parameter set to **true** (terminate all sessions), a list of task IDs is returned based on the number of nodes, such as ["f77d535b45405bd462b21caa3ee8\\*\\*\\*\\*", "e93ab549abb081eb5dcd5396a29b\\*\\*\\*\\*"\\].
   * 
   * @example
   * f77d535b45405bd462b21caa3ee8****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

