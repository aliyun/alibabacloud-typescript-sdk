// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentBySkillGroupIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 666666
   */
  agentId?: number;
  displayName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: ListAgentBySkillGroupIdResponseBodyData[];
  /**
   * @example
   * xxxx
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

