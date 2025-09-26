// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CodeInterpreter extends $dara.Model {
  /**
   * @remarks
   * 代码解释器的唯一标识符
   */
  codeInterpreterId?: string;
  /**
   * @remarks
   * 代码解释器的名称，用于标识和区分不同的代码解释器实例
   */
  codeInterpreterName?: string;
  cpu?: number;
  /**
   * @remarks
   * 代码解释器的创建时间，采用ISO 8601格式
   */
  createdAt?: string;
  /**
   * @remarks
   * 代码解释器的描述信息，说明该解释器的用途和功能
   */
  description?: string;
  /**
   * @remarks
   * 此代码解释器的执行角色
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 代码解释器的最后更新时间，采用ISO 8601格式
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
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
   */
  status?: string;
  /**
   * @remarks
   * 当前状态的原因说明（如适用）
   */
  statusReason?: string;
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

