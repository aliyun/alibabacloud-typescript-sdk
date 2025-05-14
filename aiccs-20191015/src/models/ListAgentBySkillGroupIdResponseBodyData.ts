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

