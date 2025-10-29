// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentRuntimeVersion extends $dara.Model {
  /**
   * @remarks
   * 智能体运行时的ARN
   * 
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:runtimes/7a1b6d39-9f8f-4ce2-b9c9-6db1b0b9e169
   */
  agentRuntimeArn?: string;
  /**
   * @remarks
   * 智能体运行时的ID
   * 
   * @example
   * ar-1234567890abcdef
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * 智能体运行时的名称
   * 
   * @example
   * my-agent-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 已发布版本的版本号
   * 
   * @example
   * LATEST
   */
  agentRuntimeVersion?: string;
  /**
   * @remarks
   * 此版本的描述
   * 
   * @example
   * Initial release with basic functionality
   */
  description?: string;
  /**
   * @remarks
   * 最后更新的时间戳
   * 
   * @example
   * 2025-01-10T10:30:00Z
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

