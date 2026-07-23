// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code. Valid values:
   * - Success: the operation is successful.
   * 
   * @example
   * AgentNotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B896B484-F16D-59DE-9E23-DD0E5C361108
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

