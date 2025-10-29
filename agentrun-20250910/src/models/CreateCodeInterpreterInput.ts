// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CreateCodeInterpreterInput extends $dara.Model {
  /**
   * @remarks
   * 代码解释器的名称，用于标识和区分不同的代码解释器实例
   * 
   * This parameter is required.
   * 
   * @example
   * my-code-interpreter
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * CPU资源配置（单位：核数）
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @example
   * cred-1234567890abcdef
   */
  credentialId?: string;
  /**
   * @remarks
   * 代码解释器的描述信息，说明该解释器的用途和功能
   * 
   * @example
   * Python code interpreter for data analysis
   */
  description?: string;
  /**
   * @remarks
   * 此代码解释器的执行角色
   * 
   * @example
   * acs:ram::1760720386195983:role/CodeInterpreterExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * 代码解释器的网络配置，包括VPC、安全组等网络访问设置
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 会话的空闲超时时间，单位为秒。实例没有会话请求后处于空闲状态，空闲态为闲置计费模式，超过此超时时间后会话自动过期，不可继续使用
   * 
   * @example
   * 3600
   */
  sessionIdleTimeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterName: 'codeInterpreterName',
      cpu: 'cpu',
      credentialId: 'credentialId',
      description: 'description',
      executionRoleArn: 'executionRoleArn',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterName: 'string',
      cpu: 'number',
      credentialId: 'string',
      description: 'string',
      executionRoleArn: 'string',
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      sessionIdleTimeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

