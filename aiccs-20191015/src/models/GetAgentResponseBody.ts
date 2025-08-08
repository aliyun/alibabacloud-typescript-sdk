// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyDataGroupList extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelType?: number;
  description?: string;
  displayName?: string;
  name?: string;
  /**
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

export class GetAgentResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAgentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
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

