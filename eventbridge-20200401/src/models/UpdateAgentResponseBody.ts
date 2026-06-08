// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentResponseBodyData extends $dara.Model {
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

export class UpdateAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpdateAgentResponseBodyData;
  /**
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @example
   * 382E6272-XXXXX-A8AF0BFAC1A5
   */
  requestId?: string;
  /**
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
      data: UpdateAgentResponseBodyData,
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

