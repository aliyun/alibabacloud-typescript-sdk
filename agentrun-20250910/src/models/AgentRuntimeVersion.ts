// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentRuntimeVersion extends $dara.Model {
  /**
   * @remarks
   * The ARN of the agent runtime.
   * 
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:runtimes/7a1b6d39-9f8f-4ce2-b9c9-6db1b0b9e169
   */
  agentRuntimeArn?: string;
  /**
   * @remarks
   * The ID of the agent runtime.
   * 
   * @example
   * ar-1234567890abcdef
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * The name of the agent runtime.
   * 
   * @example
   * my-agent-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * The version of the agent runtime.
   * 
   * @example
   * LATEST
   */
  agentRuntimeVersion?: string;
  /**
   * @remarks
   * The description of the agent runtime version.
   * 
   * @example
   * Initial release with basic functionality
   */
  description?: string;
  /**
   * @remarks
   * The timestamp of the agent runtime version\\"s last update.
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

