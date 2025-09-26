// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CreateBrowserInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  browserName?: string;
  /**
   * @remarks
   * CPU资源配置（单位：核）
   * 
   * This parameter is required.
   */
  cpu?: number;
  credentialId?: string;
  description?: string;
  executionRoleArn?: string;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   * 
   * This parameter is required.
   */
  memory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 会话的空闲超时时间，单位为秒。实例没有会话请求后处于空闲状态，空闲态为闲置计费模式，超过此超时时间后会话自动过期，不可继续使用
   */
  sessionIdleTimeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      browserName: 'browserName',
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
      browserName: 'string',
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

