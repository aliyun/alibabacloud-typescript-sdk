// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CodeInterpreter extends $dara.Model {
  /**
   * @remarks
   * 代码解释器的唯一标识符
   * 
   * @example
   * ci-1234567890abcdef
   */
  codeInterpreterId?: string;
  /**
   * @remarks
   * 代码解释器的名称，用于标识和区分不同的代码解释器实例
   * 
   * @example
   * my-code-interpreter
   */
  codeInterpreterName?: string;
  /**
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * 代码解释器的创建时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
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
   * 代码解释器的最后更新时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * 代码解释器的网络配置信息
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 代码解释器的当前状态，如READY（就绪）、TERMINATED（已终止）等
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 当前状态的原因说明（如适用）
   * 
   * @example
   * Code interpreter is ready for use
   */
  statusReason?: string;
  /**
   * @example
   * tenant-1234567890abcdef
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterId: 'codeInterpreterId',
      codeInterpreterName: 'codeInterpreterName',
      cpu: 'cpu',
      createdAt: 'createdAt',
      description: 'description',
      executionRoleArn: 'executionRoleArn',
      lastUpdatedAt: 'lastUpdatedAt',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      status: 'status',
      statusReason: 'statusReason',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterId: 'string',
      codeInterpreterName: 'string',
      cpu: 'number',
      createdAt: 'string',
      description: 'string',
      executionRoleArn: 'string',
      lastUpdatedAt: 'string',
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      status: 'string',
      statusReason: 'string',
      tenantId: 'string',
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

