// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineAgentDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 2235****
   */
  agentId?: number;
  /**
   * @remarks
   * Agent status. Valid values: **1~6**.
   * 
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @remarks
   * Agent status code. Valid values:  
   * - **AgentCheckout**: Agent logged off.  
   * - **AgentReady**: Agent idle.  
   * - **AgentBreak**: Agent on break.  
   * - **AgentAcw**: Post-processing after a call.  
   * - **AgentBusyForCall**: In a call.
   * 
   * @example
   * AgentCheckout
   */
  agentStatusCode?: string;
  /**
   * @remarks
   * Indicates whether the agent is assigned. Valid values:  
   * **false**: Not assigned (no call).  
   * **true**: Assigned (in a call).
   * 
   * @example
   * false
   */
  assigned?: boolean;
  /**
   * @remarks
   * Break type. Valid values:  
   * - **1**: Short break.  
   * - **2**: Meal break.  
   * - **3**: Meeting.  
   * - **4**: Coaching.  
   * - **5**: Training.
   * 
   * @example
   * 1
   */
  restType?: number;
  /**
   * @remarks
   * Tenant ID to which the agent belongs, corresponding to the instance ID in the input parameter.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  tenantId?: number;
  /**
   * @remarks
   * Heartbeat signature.
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
   * Status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Agent service data.
   */
  data?: GetHotlineAgentDetailResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
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

