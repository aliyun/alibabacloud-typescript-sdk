// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentConversationsResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"role":"owner","admin":false,"canRead":true,"canWrite":true,"canManage":true}
   */
  access?: any;
  /**
   * @example
   * {"runtime":"claude","connectionId":"connection-example","modelId":"model-example","connectionName":"示例连接","modelDisplayName":"示例模型"}
   */
  agent?: any;
  /**
   * @example
   * {"sessionId":"0198c8a91f4d7f01a3c21e97","purposes":[]}
   */
  analysisCoverage?: any;
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e97
   */
  conversationId?: string;
  /**
   * @example
   * 2026-08-19T12:00:00.000Z
   */
  createdAt?: string;
  /**
   * @example
   * 1000000000000001
   */
  createdBy?: string;
  /**
   * @example
   * waiting
   */
  currentRunStatus?: string;
  /**
   * @example
   * null
   */
  editMonitorId?: string;
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e97
   */
  id?: string;
  /**
   * @example
   * {"userId":"1000000000000001","name":null,"nickName":null,"email":null,"avatar":null}
   */
  owner?: any;
  /**
   * @example
   * {"id":"project-example","name":"RocketMQ 诊断","color":"#1677ff","initial":"R","agentProfile":"customer"}
   */
  project?: any;
  /**
   * @example
   * rocketmq-customer
   */
  scenarioId?: string;
  /**
   * @example
   * private
   */
  shareScope?: string;
  /**
   * @example
   * null
   */
  sourceSessionId?: string;
  /**
   * @example
   * null
   */
  tagging?: any;
  /**
   * @example
   * 消息堆积排查
   */
  title?: string;
  /**
   * @example
   * 3
   */
  toolCallCount?: number;
  /**
   * @example
   * 2026-08-19T12:05:00.000Z
   */
  updatedAt?: string;
  /**
   * @example
   * ["rocketmq-agent"]
   */
  usedSkills?: string[];
  static names(): { [key: string]: string } {
    return {
      access: 'access',
      agent: 'agent',
      analysisCoverage: 'analysisCoverage',
      conversationId: 'conversationId',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      currentRunStatus: 'currentRunStatus',
      editMonitorId: 'editMonitorId',
      id: 'id',
      owner: 'owner',
      project: 'project',
      scenarioId: 'scenarioId',
      shareScope: 'shareScope',
      sourceSessionId: 'sourceSessionId',
      tagging: 'tagging',
      title: 'title',
      toolCallCount: 'toolCallCount',
      updatedAt: 'updatedAt',
      usedSkills: 'usedSkills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      access: 'any',
      agent: 'any',
      analysisCoverage: 'any',
      conversationId: 'string',
      createdAt: 'string',
      createdBy: 'string',
      currentRunStatus: 'string',
      editMonitorId: 'string',
      id: 'string',
      owner: 'any',
      project: 'any',
      scenarioId: 'string',
      shareScope: 'string',
      sourceSessionId: 'string',
      tagging: 'any',
      title: 'string',
      toolCallCount: 'number',
      updatedAt: 'string',
      usedSkills: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.usedSkills)) {
      $dara.Model.validateArray(this.usedSkills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentConversationsResponseBody extends $dara.Model {
  /**
   * @example
   * [{"id":"0198c8a91f4d7f01a3c21e97","title":"消息堆积排查"}]
   */
  data?: ListAgentConversationsResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJpZCI6IjAxOThjOGE5In0=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgentConversationsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
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

