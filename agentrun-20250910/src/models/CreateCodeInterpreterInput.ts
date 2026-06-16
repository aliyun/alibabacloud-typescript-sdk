// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CreateCodeInterpreterInput extends $dara.Model {
  /**
   * @remarks
   * The name of the code interpreter. Use this to identify and distinguish code interpreter instances.
   * 
   * This parameter is required.
   * 
   * @example
   * my-code-interpreter
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * The amount of CPU to allocate, in cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The credential ID used for authentication.
   * 
   * @example
   * cred-1234567890abcdef
   */
  credentialId?: string;
  /**
   * @remarks
   * A description of the code interpreter.
   * 
   * @example
   * Python code interpreter for data analysis
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the execution role for the code interpreter.
   * 
   * @example
   * acs:ram::1760720386195983:role/CodeInterpreterExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The amount of memory to allocate, in megabytes (MB).
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * Specifies the network configuration for the code interpreter, including VPC and security group settings.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The idle timeout for a session, in seconds. If an instance has no new requests for this duration, its session expires and cannot be reused.
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

