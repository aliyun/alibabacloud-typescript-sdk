// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NetworkConfiguration } from "./NetworkConfiguration";


export class CodeInterpreter extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the CodeInterpreter.
   * 
   * @example
   * ci-1234567890abcdef
   */
  codeInterpreterId?: string;
  /**
   * @remarks
   * A user-defined name for the CodeInterpreter instance.
   * 
   * @example
   * my-code-interpreter
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * The number of CPU cores allocated to the instance.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The creation timestamp for the CodeInterpreter, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the CodeInterpreter.
   * 
   * @example
   * Python code interpreter for data analysis
   */
  description?: string;
  /**
   * @remarks
   * The ARN of the execution role for this CodeInterpreter.
   * 
   * @example
   * acs:ram::1760720386195983:role/CodeInterpreterExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The last update timestamp for the CodeInterpreter, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The memory allocated to the instance, in MB.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The network configuration for the CodeInterpreter.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The current status of the CodeInterpreter, such as READY or TERMINATED.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the current status, if applicable.
   * 
   * @example
   * Code interpreter is ready for use
   */
  statusReason?: string;
  /**
   * @remarks
   * The unique identifier for the tenant.
   * 
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

