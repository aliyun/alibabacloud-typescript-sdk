// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";
import { LoggingConfiguration } from "./LoggingConfiguration";
import { TracingConfiguration } from "./TracingConfiguration";


export class FlowVersion extends $dara.Model {
  /**
   * @remarks
   * 工作流版本的创建时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 工作流版本的定义内容（完整快照，仅在 GetFlowVersion 时返回）
   * 
   * @example
   * Type: StateMachine\nName: my-flow\n...
   */
  definition?: string;
  /**
   * @remarks
   * 工作流版本的描述信息
   * 
   * @example
   * Version 1.0 - Initial release
   */
  description?: string;
  /**
   * @remarks
   * 工作流版本的环境变量配置（完整快照，仅在 GetFlowVersion 时返回）
   */
  environmentConfiguration?: EnvironmentConfiguration;
  /**
   * @remarks
   * 工作流版本的外部存储位置（完整快照，仅在 GetFlowVersion 时返回）
   * 
   * @example
   * oss://bucket/path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * 工作流的唯一标识符
   * 
   * @example
   * flow-1234567890abcdef
   */
  flowId?: string;
  flowName?: string;
  /**
   * @remarks
   * 工作流版本号
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * 工作流版本的日志配置（完整快照，仅在 GetFlowVersion 时返回）
   */
  loggingConfiguration?: LoggingConfiguration;
  /**
   * @remarks
   * 工作流版本的链路追踪配置（完整快照，仅在 GetFlowVersion 时返回）
   */
  tracingConfiguration?: TracingConfiguration;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      definition: 'definition',
      description: 'description',
      environmentConfiguration: 'environmentConfiguration',
      externalStorageLocation: 'externalStorageLocation',
      flowId: 'flowId',
      flowName: 'flowName',
      flowVersion: 'flowVersion',
      loggingConfiguration: 'loggingConfiguration',
      tracingConfiguration: 'tracingConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      definition: 'string',
      description: 'string',
      environmentConfiguration: EnvironmentConfiguration,
      externalStorageLocation: 'string',
      flowId: 'string',
      flowName: 'string',
      flowVersion: 'string',
      loggingConfiguration: LoggingConfiguration,
      tracingConfiguration: TracingConfiguration,
    };
  }

  validate() {
    if(this.environmentConfiguration && typeof (this.environmentConfiguration as any).validate === 'function') {
      (this.environmentConfiguration as any).validate();
    }
    if(this.loggingConfiguration && typeof (this.loggingConfiguration as any).validate === 'function') {
      (this.loggingConfiguration as any).validate();
    }
    if(this.tracingConfiguration && typeof (this.tracingConfiguration as any).validate === 'function') {
      (this.tracingConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

