// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyDataGroupList extends $dara.Model {
  /**
   * @remarks
   * Skill group channel type.
   * 
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @remarks
   * Skill group description.
   * 
   * @example
   * 自动化技能组
   */
  description?: string;
  /**
   * @remarks
   * Display name of the skill group.
   * 
   * @example
   * 自动化技能组
   */
  displayName?: string;
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * 自动化技能组
   */
  name?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * 123456
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent account name, which is the phone number or mailbox entered during account registration. Unique within the instance.
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
   * 222222
   */
  agentId?: number;
  /**
   * @remarks
   * Agent display name shown externally.
   * 
   * @example
   * XX测试
   */
  displayName?: string;
  /**
   * @remarks
   * Skill group information to which the agent belongs.
   */
  groupList?: GetAgentResponseBodyDataGroupList[];
  /**
   * @remarks
   * Agent status. Valid values:
   * 
   * - **0**: Normal
   * - **1**: Freeze
   * - **2**: Delete
   * 
   * > Only agents with a Normal status can perform Business Activities.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Tenant ID to which the agent belongs, corresponding to the instance ID in the request parameters.
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

export class GetAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of Success indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Agent data.
   */
  data?: GetAgentResponseBodyData;
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
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentResponseBodyData,
      httpStatusCode: 'number',
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

