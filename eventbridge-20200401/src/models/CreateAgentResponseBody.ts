// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent ARN
   * 
   * @example
   * acs:eventbridge:{region}:{accountId}:agent/{agentName}
   */
  agentArn?: string;
  static names(): { [key: string]: string } {
    return {
      agentArn: 'AgentArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API response code. Valid values:
   * 
   * - Success: indicates success.
   * 
   * - Other values: indicates an error code. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAgentResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Agent with name \\"XXX\\" already exists for account 12345
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B896B484-XXXXXX-DD0E5C361108
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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
      code: 'string',
      data: CreateAgentResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

