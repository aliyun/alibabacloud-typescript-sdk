// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKillInstanceSessionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the task that terminated the sessions.
   * 
   * >  If the sessions of a PolarDB for MySQL cluster were terminated, **NodeId** is left empty, and **KillAllSessions** is set to **true**, the task IDs are returned based on the number of nodes. Example: ["f77d535b45405bd462b21caa3ee8\\*\\*\\*\\*", "e93ab549abb081eb5dcd5396a29b\\*\\*\\*\\*"].
   * 
   * @example
   * f77d535b45405bd462b21caa3ee8****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

