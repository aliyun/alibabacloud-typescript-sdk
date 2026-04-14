// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";


/**
 */
export class ConvertFlowDSLDataConversionPlanIssues extends $dara.Model {
  /**
   * @remarks
   * 问题描述
   * 
   * This parameter is required.
   * 
   * @example
   * Tool node requires Toolset installation
   */
  description?: string;
  /**
   * @remarks
   * 问题的详细信息（JSON对象）
   */
  details?: { [key: string]: string };
  /**
   * @remarks
   * 问题类型：needs_config, needs_conversion, unsupported
   * 
   * This parameter is required.
   * 
   * @example
   * needs_config
   */
  issueType?: string;
  /**
   * @remarks
   * 问题严重程度：info, warning, error
   * 
   * This parameter is required.
   * 
   * @example
   * warning
   */
  level?: string;
  /**
   * @remarks
   * Dify DSL中的节点标识符
   * 
   * This parameter is required.
   * 
   * @example
   * 1760514991682
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点显示名称
   * 
   * @example
   * Google Search
   */
  nodeTitle?: string;
  /**
   * @remarks
   * 节点类型
   * 
   * This parameter is required.
   * 
   * @example
   * tool
   */
  nodeType?: string;
  /**
   * @remarks
   * 解决建议
   * 
   * @example
   * Install Toolset \"google\" before using this flow
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      details: 'details',
      issueType: 'issueType',
      level: 'level',
      nodeId: 'nodeId',
      nodeTitle: 'nodeTitle',
      nodeType: 'nodeType',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      details: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      issueType: 'string',
      level: 'string',
      nodeId: 'string',
      nodeTitle: 'string',
      nodeType: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(this.details) {
      $dara.Model.validateMap(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLDataConversionPlanSummary extends $dara.Model {
  /**
   * @remarks
   * 完全兼容的节点数
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  compatibleNodes?: number;
  /**
   * @remarks
   * 需要手动配置的节点数
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  nodesNeedConfig?: number;
  /**
   * @remarks
   * 需要特殊转换处理的节点数
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  nodesNeedConversion?: number;
  /**
   * @remarks
   * Dify DSL中的总节点数
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  totalNodes?: number;
  /**
   * @remarks
   * 不支持的节点数
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  unsupportedNodes?: number;
  static names(): { [key: string]: string } {
    return {
      compatibleNodes: 'compatibleNodes',
      nodesNeedConfig: 'nodesNeedConfig',
      nodesNeedConversion: 'nodesNeedConversion',
      totalNodes: 'totalNodes',
      unsupportedNodes: 'unsupportedNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleNodes: 'number',
      nodesNeedConfig: 'number',
      nodesNeedConversion: 'number',
      totalNodes: 'number',
      unsupportedNodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLDataConversionPlan extends $dara.Model {
  /**
   * @remarks
   * 节点兼容性问题详情
   */
  issues?: ConvertFlowDSLDataConversionPlanIssues[];
  /**
   * @remarks
   * 节点兼容性统计摘要
   * 
   * This parameter is required.
   */
  summary?: ConvertFlowDSLDataConversionPlanSummary;
  static names(): { [key: string]: string } {
    return {
      issues: 'issues',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issues: { 'type': 'array', 'itemType': ConvertFlowDSLDataConversionPlanIssues },
      summary: ConvertFlowDSLDataConversionPlanSummary,
    };
  }

  validate() {
    if(Array.isArray(this.issues)) {
      $dara.Model.validateArray(this.issues);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLDataFlow extends $dara.Model {
  /**
   * @remarks
   * 工作流的FnF State Machine定义（YAML格式）
   * 
   * This parameter is required.
   */
  definition?: string;
  /**
   * @remarks
   * 工作流的描述信息
   * 
   * @example
   * Converted from external workflow
   */
  description?: string;
  /**
   * @remarks
   * 工作流的环境变量配置
   */
  environmentConfiguration?: EnvironmentConfiguration;
  /**
   * @remarks
   * 转换后的工作流名称
   * 
   * This parameter is required.
   * 
   * @example
   * dify-flow
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'definition',
      description: 'description',
      environmentConfiguration: 'environmentConfiguration',
      flowName: 'flowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      environmentConfiguration: EnvironmentConfiguration,
      flowName: 'string',
    };
  }

  validate() {
    if(this.environmentConfiguration && typeof (this.environmentConfiguration as any).validate === 'function') {
      (this.environmentConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLDataPluginErrors extends $dara.Model {
  /**
   * @remarks
   * 相关节点的标识符
   * 
   * @example
   * 1760514996015
   */
  nodeId?: string;
  /**
   * @remarks
   * 插件提供商名称
   * 
   * This parameter is required.
   * 
   * @example
   * langgenius
   */
  providerName?: string;
  /**
   * @remarks
   * 错误原因描述
   * 
   * This parameter is required.
   * 
   * @example
   * Plugin not found in marketplace
   */
  reason?: string;
  /**
   * @remarks
   * 工具名称
   * 
   * @example
   * google_search
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'nodeId',
      providerName: 'providerName',
      reason: 'reason',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      providerName: 'string',
      reason: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLDataToolsetInstallations extends $dara.Model {
  /**
   * @remarks
   * Toolset描述
   * 
   * @example
   * Google Search Plugin
   */
  description?: string;
  /**
   * @remarks
   * Toolset名称
   * 
   * This parameter is required.
   * 
   * @example
   * google
   */
  name?: string;
  /**
   * @remarks
   * Toolset规格配置（JSON对象）
   * 
   * This parameter is required.
   */
  spec?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.spec) {
      $dara.Model.validateMap(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertFlowDSLData extends $dara.Model {
  /**
   * @remarks
   * DSL兼容性分析和转换计划
   */
  conversionPlan?: ConvertFlowDSLDataConversionPlan;
  /**
   * @remarks
   * 转换后的AgentRun Flow配置信息
   * 
   * This parameter is required.
   */
  flow?: ConvertFlowDSLDataFlow;
  /**
   * @remarks
   * 插件识别或转换过程中的错误信息
   */
  pluginErrors?: ConvertFlowDSLDataPluginErrors[];
  /**
   * @remarks
   * 需要安装的Toolset配置列表
   */
  toolsetInstallations?: ConvertFlowDSLDataToolsetInstallations[];
  static names(): { [key: string]: string } {
    return {
      conversionPlan: 'conversionPlan',
      flow: 'flow',
      pluginErrors: 'pluginErrors',
      toolsetInstallations: 'toolsetInstallations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionPlan: ConvertFlowDSLDataConversionPlan,
      flow: ConvertFlowDSLDataFlow,
      pluginErrors: { 'type': 'array', 'itemType': ConvertFlowDSLDataPluginErrors },
      toolsetInstallations: { 'type': 'array', 'itemType': ConvertFlowDSLDataToolsetInstallations },
    };
  }

  validate() {
    if(this.conversionPlan && typeof (this.conversionPlan as any).validate === 'function') {
      (this.conversionPlan as any).validate();
    }
    if(this.flow && typeof (this.flow as any).validate === 'function') {
      (this.flow as any).validate();
    }
    if(Array.isArray(this.pluginErrors)) {
      $dara.Model.validateArray(this.pluginErrors);
    }
    if(Array.isArray(this.toolsetInstallations)) {
      $dara.Model.validateArray(this.toolsetInstallations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

