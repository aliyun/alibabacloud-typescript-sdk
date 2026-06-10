// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent key. It is used to specify the agent in Platform as a Service (PaaS) API calls.
   * 
   * @example
   * 4e7400028e6f4a7393ed3acf6a7b8927_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * 业务空间_881
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent details.
   */
  data?: GetAgentInfoResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Parameter.Invalid
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FC384CE1-8D42-1900-84E1-F33F990F2B5E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgentInfoResponseBodyData,
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

