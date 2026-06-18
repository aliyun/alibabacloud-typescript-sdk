// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentBySkillGroupIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Account name of the agent, which is the phone number or mailbox entered during account registration. It is unique within the instance.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * 666666
   */
  agentId?: number;
  /**
   * @remarks
   * Display name of the agent.
   * 
   * @example
   * 刘测试
   */
  displayName?: string;
  /**
   * @remarks
   * Agent status. Only agents with a Normal status can perform Business Activities. Valid values:
   * - **0**: Normal
   * - **1**: Frozen
   * - **2**: Deleted
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Tenant ID to which the agent belongs. This corresponds to the instance ID provided in the input parameter.
   * 
   * @example
   * 0
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentId: 'AgentId',
      displayName: 'DisplayName',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentId: 'number',
      displayName: 'string',
      status: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of "Success" indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Agent information.
   */
  data?: ListAgentBySkillGroupIdResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
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
   * Indicates whether the API invocation succeeded. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentBySkillGroupIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

