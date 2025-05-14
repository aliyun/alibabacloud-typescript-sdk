// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAgentResponseBodyDataGroupList } from "./GetAgentResponseBodyDataGroupList";


export class GetAgentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 222222
   */
  agentId?: number;
  displayName?: string;
  groupList?: GetAgentResponseBodyDataGroupList[];
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
      groupList: 'GroupList',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentId: 'number',
      displayName: 'string',
      groupList: { 'type': 'array', 'itemType': GetAgentResponseBodyDataGroupList },
      status: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

