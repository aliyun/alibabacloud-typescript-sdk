// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentRuntimeVersion extends $dara.Model {
  /**
   * @remarks
   * 智能体运行时的ARN
   */
  agentRuntimeArn?: string;
  /**
   * @remarks
   * 智能体运行时的ID
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * 智能体运行时的名称
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 已发布版本的版本号
   */
  agentRuntimeVersion?: string;
  /**
   * @remarks
   * 此版本的描述
   */
  description?: string;
  /**
   * @remarks
   * 最后更新的时间戳
   */
  lastUpdatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeArn: 'agentRuntimeArn',
      agentRuntimeId: 'agentRuntimeId',
      agentRuntimeName: 'agentRuntimeName',
      agentRuntimeVersion: 'agentRuntimeVersion',
      description: 'description',
      lastUpdatedAt: 'lastUpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeArn: 'string',
      agentRuntimeId: 'string',
      agentRuntimeName: 'string',
      agentRuntimeVersion: 'string',
      description: 'string',
      lastUpdatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

