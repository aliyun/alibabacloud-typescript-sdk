// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineAgentDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2235****
   */
  agentId?: number;
  /**
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @example
   * AgentCheckout
   */
  agentStatusCode?: string;
  /**
   * @example
   * false
   */
  assigned?: boolean;
  /**
   * @example
   * 1
   */
  restType?: number;
  /**
   * @example
   * ccc_xp_pre-cn-***
   */
  tenantId?: number;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineAgentDetailResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
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

