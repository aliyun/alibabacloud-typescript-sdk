// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";
import { LoggingConfiguration } from "./LoggingConfiguration";
import { TracingConfiguration } from "./TracingConfiguration";


export class CreateFlowInput extends $dara.Model {
  /**
   * @remarks
   * 工作流的定义内容，采用JSON或YAML格式
   * 
   * @example
   * {}
   */
  definition?: string;
  /**
   * @remarks
   * 工作流的描述信息，用于说明该工作流的用途和功能
   * 
   * @example
   * Customer service automation flow
   */
  description?: string;
  /**
   * @remarks
   * 工作流的环境变量配置，包含一组命名变量列表
   */
  environmentConfiguration?: EnvironmentConfiguration;
  /**
   * @remarks
   * 为工作流提供访问云服务权限的执行角色ARN
   * 
   * @example
   * acs:ram::1760720386195983:role/FlowExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 工作流的外部存储位置，如OSS路径
   * 
   * @example
   * oss://bucket/path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * 工作流的唯一标识名称，用于区分不同的工作流实例
   * 
   * This parameter is required.
   * 
   * @example
   * my-flow
   */
  flowName?: string;
  /**
   * @remarks
   * 工作流的日志配置
   */
  loggingConfiguration?: LoggingConfiguration;
  /**
   * @remarks
   * 工作流所属的资源组标识符
   * 
   * @example
   * rg-acfmxsn4m4a4b4a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 工作流的标签信息，用于资源分类和管理
   * 
   * @example
   * production,automation
   */
  tags?: string[];
  /**
   * @remarks
   * 工作流的链路追踪配置
   */
  tracingConfiguration?: TracingConfiguration;
  /**
   * @remarks
   * 工作流所属的工作空间标识符，用于资源隔离和权限管理
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'definition',
      description: 'description',
      environmentConfiguration: 'environmentConfiguration',
      executionRoleArn: 'executionRoleArn',
      externalStorageLocation: 'externalStorageLocation',
      flowName: 'flowName',
      loggingConfiguration: 'loggingConfiguration',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      tracingConfiguration: 'tracingConfiguration',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      environmentConfiguration: EnvironmentConfiguration,
      executionRoleArn: 'string',
      externalStorageLocation: 'string',
      flowName: 'string',
      loggingConfiguration: LoggingConfiguration,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      tracingConfiguration: TracingConfiguration,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.environmentConfiguration && typeof (this.environmentConfiguration as any).validate === 'function') {
      (this.environmentConfiguration as any).validate();
    }
    if(this.loggingConfiguration && typeof (this.loggingConfiguration as any).validate === 'function') {
      (this.loggingConfiguration as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

