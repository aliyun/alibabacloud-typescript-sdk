// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Flow } from "./Flow";
import { AgentRuntime } from "./AgentRuntime";


/**
 */
export class AgentResourceLatestVersion extends $dara.Model {
  /**
   * @remarks
   * 版本发布时间，采用ISO 8601格式
   * 
   * @example
   * 2025-03-15T08:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 该版本的描述信息
   * 
   * @example
   * 修复了消息处理的并发问题
   */
  description?: string;
  /**
   * @remarks
   * 版本发布者（仅 AgentRuntime 类型资源返回）
   * 
   * @example
   * admin
   */
  publisher?: string;
  /**
   * @remarks
   * 最新发布的版本号
   * 
   * @example
   * 3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      publisher: 'publisher',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      publisher: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentResource extends $dara.Model {
  /**
   * @remarks
   * 当 resourceType 为 Flow 时，此字段包含完整的工作流对象，包括所有配置和状态信息；当 resourceType 为 AgentRuntime 时，此字段为空
   */
  flow?: Flow;
  /**
   * @remarks
   * 资源的最新发布版本摘要，包含版本号、描述和创建时间。如果资源没有已发布版本，则此字段为空
   */
  latestVersion?: AgentResourceLatestVersion;
  /**
   * @remarks
   * 资源类型标识符，用于区分资源是智能体运行时（AgentRuntime）还是工作流（Flow）
   * 
   * @example
   * AgentRuntime
   */
  resourceType?: string;
  /**
   * @remarks
   * 当 resourceType 为 AgentRuntime 时，此字段包含完整的智能体运行时对象，包括所有配置和状态信息；当 resourceType 为 Flow 时，此字段为空
   */
  runtime?: AgentRuntime;
  static names(): { [key: string]: string } {
    return {
      flow: 'flow',
      latestVersion: 'latestVersion',
      resourceType: 'resourceType',
      runtime: 'runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: Flow,
      latestVersion: AgentResourceLatestVersion,
      resourceType: 'string',
      runtime: AgentRuntime,
    };
  }

  validate() {
    if(this.flow && typeof (this.flow as any).validate === 'function') {
      (this.flow as any).validate();
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

