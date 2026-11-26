// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsKnowledgeInsights extends $dara.Model {
  /**
   * @remarks
   * 产物资源业务 ID
   * 
   * @example
   * 2001187
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicCards extends $dara.Model {
  /**
   * @remarks
   * 产物目录业务 ID
   * 
   * @example
   * kb-topic-cards-example
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicGraph extends $dara.Model {
  /**
   * @remarks
   * 产物资源业务 ID
   * 
   * @example
   * 2001085
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicOverview extends $dara.Model {
  /**
   * @remarks
   * 产物资源业务 ID
   * 
   * @example
   * 2001186
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * 知识洞察
   */
  knowledgeInsights?: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsKnowledgeInsights;
  /**
   * @remarks
   * 主题卡片目录
   */
  topicCards?: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicCards;
  /**
   * @remarks
   * 主题关系图
   */
  topicGraph?: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicGraph;
  /**
   * @remarks
   * 主题概览
   */
  topicOverview?: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicOverview;
  static names(): { [key: string]: string } {
    return {
      knowledgeInsights: 'knowledgeInsights',
      topicCards: 'topicCards',
      topicGraph: 'topicGraph',
      topicOverview: 'topicOverview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeInsights: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsKnowledgeInsights,
      topicCards: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicCards,
      topicGraph: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicGraph,
      topicOverview: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicOverview,
    };
  }

  validate() {
    if(this.knowledgeInsights && typeof (this.knowledgeInsights as any).validate === 'function') {
      (this.knowledgeInsights as any).validate();
    }
    if(this.topicCards && typeof (this.topicCards as any).validate === 'function') {
      (this.topicCards as any).validate();
    }
    if(this.topicGraph && typeof (this.topicGraph as any).validate === 'function') {
      (this.topicGraph as any).validate();
    }
    if(this.topicOverview && typeof (this.topicOverview as any).validate === 'function') {
      (this.topicOverview as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBodySchedule extends $dara.Model {
  /**
   * @remarks
   * Cron 表达式；空表示手动执行
   * 
   * @example
   * 0 2 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * 下次计划执行时间，ISO 8601 格式
   * 
   * @example
   * 2026-11-19T02:00:00+08:00
   */
  nextRunAt?: string;
  /**
   * @remarks
   * 计划使用的 IANA 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      nextRunAt: 'nextRunAt',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      nextRunAt: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * 任务账单标识
   * 
   * @example
   * billing-example
   */
  billingId?: string;
  /**
   * @remarks
   * 任务计费状态
   * 
   * @example
   * PENDING
   */
  billingStatus?: string;
  /**
   * @remarks
   * 任务执行状态
   * 
   * @example
   * QUEUED
   */
  executionStatus?: string;
  /**
   * @remarks
   * 任务创建时间，ISO 8601 格式
   * 
   * @example
   * 2026-11-18T09:00:00+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 任务更新时间，ISO 8601 格式
   * 
   * @example
   * 2026-11-18T09:01:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * 最近一次任务错误
   * 
   * @example
   * 任务执行失败
   */
  lastError?: string;
  /**
   * @remarks
   * 任务操作类型
   * 
   * @example
   * full
   */
  operation?: string;
  /**
   * @remarks
   * 任务执行进度
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * 任务结果上报状态
   * 
   * @example
   * pending
   */
  reportStatus?: string;
  /**
   * @remarks
   * 是否复用已有任务
   */
  reused?: boolean;
  /**
   * @remarks
   * 任务业务标识
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  taskKey?: string;
  /**
   * @remarks
   * 任务触发类型
   * 
   * @example
   * manual
   */
  triggerType?: string;
  /**
   * @remarks
   * 用量统计是否完成
   */
  usageComplete?: boolean;
  static names(): { [key: string]: string } {
    return {
      billingId: 'billingId',
      billingStatus: 'billingStatus',
      executionStatus: 'executionStatus',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      lastError: 'lastError',
      operation: 'operation',
      progress: 'progress',
      reportStatus: 'reportStatus',
      reused: 'reused',
      taskKey: 'taskKey',
      triggerType: 'triggerType',
      usageComplete: 'usageComplete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingId: 'string',
      billingStatus: 'string',
      executionStatus: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      lastError: 'string',
      operation: 'string',
      progress: 'number',
      reportStatus: 'string',
      reused: 'boolean',
      taskKey: 'string',
      triggerType: 'string',
      usageComplete: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBaseSmartIndexConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * 已发布产物引用
   */
  artifacts?: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifacts;
  /**
   * @remarks
   * 当前或最近任务账单标识
   * 
   * @example
   * billing-example
   */
  billingId?: string;
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 企业知识库根目录业务 ID
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * 是否开启 LLM Wiki 智能索引
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 最近一次配置或扫描错误
   * 
   * @example
   * 自动扫描失败
   */
  lastError?: string;
  /**
   * @remarks
   * 最近成功任务标识
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  lastSuccessTaskId?: string;
  /**
   * @remarks
   * 配置生命周期：DISABLED、ENABLED 或 DISABLING
   * 
   * @example
   * ENABLED
   */
  lifecycle?: string;
  /**
   * @remarks
   * 错误描述，成功时为 success
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 配置版本；更新时作为 expectedRevision 提交
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * 自动执行计划
   */
  schedule?: GetKnowledgeBaseSmartIndexConfigurationResponseBodySchedule;
  /**
   * @remarks
   * 智能索引产物目录业务 ID
   * 
   * @example
   * kb-artifacts-example
   */
  targetDirId?: string;
  /**
   * @remarks
   * 当前或最近任务状态
   */
  task?: GetKnowledgeBaseSmartIndexConfigurationResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'artifacts',
      billingId: 'billingId',
      code: 'code',
      directoryId: 'directoryId',
      enabled: 'enabled',
      lastError: 'lastError',
      lastSuccessTaskId: 'lastSuccessTaskId',
      lifecycle: 'lifecycle',
      message: 'message',
      requestId: 'requestId',
      revision: 'revision',
      schedule: 'schedule',
      targetDirId: 'targetDirId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: GetKnowledgeBaseSmartIndexConfigurationResponseBodyArtifacts,
      billingId: 'string',
      code: 'string',
      directoryId: 'string',
      enabled: 'boolean',
      lastError: 'string',
      lastSuccessTaskId: 'string',
      lifecycle: 'string',
      message: 'string',
      requestId: 'string',
      revision: 'number',
      schedule: GetKnowledgeBaseSmartIndexConfigurationResponseBodySchedule,
      targetDirId: 'string',
      task: GetKnowledgeBaseSmartIndexConfigurationResponseBodyTask,
    };
  }

  validate() {
    if(this.artifacts && typeof (this.artifacts as any).validate === 'function') {
      (this.artifacts as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

