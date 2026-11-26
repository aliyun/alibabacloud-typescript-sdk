// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineAgentDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 2235****
   */
  agentId?: number;
  /**
   * @remarks
   * The agent status. Valid values: **1** to **6**.
   * 
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @remarks
   * The agent status code. Valid values:
   * 
   * - **AgentCheckout**: off duty
   * - **AgentReady**: idle
   * - **AgentBreak**: on break
   * - **AgentAcw**: in after-call work
   * - **AgentBusyForCall**: on a call
   * 
   * @example
   * AgentCheckout
   */
  agentStatusCode?: string;
  /**
   * @remarks
   * Indicates whether the agent is assigned. Valid values:
   * - **false**: not assigned (no active calls)
   * - **true**: assigned (active calls)
   * 
   * @example
   * false
   */
  assigned?: boolean;
  /**
   * @remarks
   * The break type. Valid values: 
   * 
   * - **1**: break
   * - **2**: meal
   * - **3**: meeting
   * - **4**: coaching
   * - **5**: training
   * 
   * @example
   * 1
   */
  restType?: number;
  /**
   * @remarks
   * The ID of the tenant to which the agent belongs. This ID corresponds to the instance ID in the request parameters.
   * 
   * @example
   * 205282
   */
  tenantId?: number;
  /**
   * @remarks
   * The heartbeat signature.
   * 
   * @example
   * dnthF_oinHg7JMJDmKqex3Ux****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      agentStatusCode: 'AgentStatusCode',
      assigned: 'Assigned',
      restType: 'RestType',
      tenantId: 'TenantId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentStatus: 'number',
      agentStatusCode: 'string',
      assigned: 'boolean',
      restType: 'number',
      tenantId: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The agent service data.
   */
  data?: GetHotlineAgentDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - **true**: successful
   * - **false**: failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotlineAgentDetailResponseBodyData,
      httpStatusCode: 'number',
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

