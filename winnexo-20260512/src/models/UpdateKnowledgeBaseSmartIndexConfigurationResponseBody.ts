// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsKnowledgeInsights extends $dara.Model {
  /**
   * @remarks
   * The business ID of the knowledge insights resource.
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicCards extends $dara.Model {
  /**
   * @remarks
   * The business ID of the topic card artifact directory.
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicGraph extends $dara.Model {
  /**
   * @remarks
   * The business ID of the topic graph resource.
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicOverview extends $dara.Model {
  /**
   * @remarks
   * The business ID of the topic overview resource.
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * The resource reference for knowledge insights. This value is empty if the artifact is not yet available.
   */
  knowledgeInsights?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsKnowledgeInsights;
  /**
   * @remarks
   * The reference to the directory where topic cards are located. This value is empty if the artifact is not yet available.
   */
  topicCards?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicCards;
  /**
   * @remarks
   * The resource reference for the topic graph. This value is empty if the artifact is not yet available.
   */
  topicGraph?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicGraph;
  /**
   * @remarks
   * The resource reference for the topic overview. This value is empty if the artifact is not yet available.
   */
  topicOverview?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicOverview;
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
      knowledgeInsights: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsKnowledgeInsights,
      topicCards: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicCards,
      topicGraph: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicGraph,
      topicOverview: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifactsTopicOverview,
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodySchedule extends $dara.Model {
  /**
   * @remarks
   * The current five-part cron automatic execution schedule. An empty value indicates manual execution.
   * 
   * @example
   * 0 2 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The next scheduled execution time in ISO 8601 format. This value is empty when no automatic schedule is configured.
   * 
   * @example
   * 2026-11-19T02:00:00+08:00
   */
  nextRunAt?: string;
  /**
   * @remarks
   * The IANA time zone name for the execution schedule. Default value: Asia/Shanghai when not configured.
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The bill ID corresponding to the task. The existence of a bill ID does not indicate that the deduction is complete.
   * 
   * @example
   * billing-example
   */
  billingId?: string;
  /**
   * @remarks
   * The billing status of the task. For example, PENDING indicates that settlement is not complete, and ENDED indicates that the billing process has ended. This status is returned separately from the task execution status.
   * 
   * @example
   * PENDING
   */
  billingStatus?: string;
  /**
   * @remarks
   * The execution status of the task. For example, QUEUED indicates that the task is queued, RUNNING indicates that the task is running, SUCCEEDED indicates that the task succeeded, and FAILED indicates that the task failed. Evaluate the build result based on the task status. A successful configuration save does not indicate a successful task.
   * 
   * @example
   * QUEUED
   */
  executionStatus?: string;
  /**
   * @remarks
   * The time when the task was created, in ISO 8601 format.
   * 
   * @example
   * 2026-11-18T09:00:00+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was updated, in ISO 8601 format.
   * 
   * @example
   * 2026-11-18T09:01:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The description of the most recent task error. This value is empty if no error occurred.
   * 
   * @example
   * Task execution failed
   */
  lastError?: string;
  /**
   * @remarks
   * The operation type of the smart index task. Valid values:
   * - full: Full build.
   * - incremental: Incremental update.
   * 
   * @example
   * full
   */
  operation?: string;
  /**
   * @remarks
   * The execution progress reported by the task. This value is empty if the task has not yet reported progress.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * The reporting status of the task result. For example, pending indicates that the result is waiting to be reported, and not_required indicates that reporting is not required.
   * 
   * @example
   * pending
   */
  reportStatus?: string;
  /**
   * @remarks
   * Indicates whether an existing task was reused. The value is false if no task was reused.
   */
  reused?: boolean;
  /**
   * @remarks
   * The business ID of the smart index task.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  taskKey?: string;
  /**
   * @remarks
   * The trigger type of the task. Valid values:
   * - manual: Manually triggered.
   * - scheduled: Triggered by an automatic schedule.
   * The build task generated upon the first enabling uses manual.
   * 
   * @example
   * manual
   */
  triggerType?: string;
  /**
   * @remarks
   * Indicates whether the task usage statistics are complete. This status is independent of the task execution status and billing status.
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

export class UpdateKnowledgeBaseSmartIndexConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The references to published smart index artifacts. This value is empty if no artifacts are available or if the feature is disabled. Internal storage credentials are not included.
   */
  artifacts?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifacts;
  /**
   * @remarks
   * The bill ID of the current or most recent task. This value is empty if no corresponding task exists. The existence of a bill ID does not indicate that the deduction is complete.
   * 
   * @example
   * billing-example
   */
  billingId?: string;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. If the request fails, a specific business error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business ID of the root directory for the enterprise knowledge base. Subsequent configuration operations use this ID.
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * Indicates whether the LLM Wiki smart index is currently enabled. This parameter indicates the configuration switch status and does not indicate whether the build task is complete.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The description of the most recent configuration or scan error. This value is empty if no error occurred.
   * 
   * @example
   * Automatic scan failed
   */
  lastError?: string;
  /**
   * @remarks
   * The business ID of the most recent successful build task. This value is empty if no successful task exists.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  lastSuccessTaskId?: string;
  /**
   * @remarks
   * The configuration lifecycle. Valid values:
   * - DISABLED: Disabled.
   * - ENABLED: Enabled.
   * - DISABLING: Artifacts are being cleaned up after disabling.
   * 
   * @example
   * ENABLED
   */
  lifecycle?: string;
  /**
   * @remarks
   * The response message. The value is success if the request is successful. If the request fails, this parameter describes the cause of the error.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID. You can use this ID to troubleshoot issues related to this call.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The current configuration version. Submit this value as expectedRevision during the next update. The value is 0 when not configured, and increments by 1 after each successful save.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The automatic execution schedule. An empty cronExpression indicates manual execution.
   */
  schedule?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodySchedule;
  /**
   * @remarks
   * The business ID of the smart index artifact directory. This value is empty if no artifact directory exists or if the feature is disabled.
   * 
   * @example
   * kb-artifacts-example
   */
  targetDirId?: string;
  /**
   * @remarks
   * The status of the task generated by this save operation, or the current or most recent task status returned by the read operation. This value is empty if no corresponding task exists.
   */
  task?: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyTask;
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
      artifacts: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyArtifacts,
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
      schedule: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodySchedule,
      targetDirId: 'string',
      task: UpdateKnowledgeBaseSmartIndexConfigurationResponseBodyTask,
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

