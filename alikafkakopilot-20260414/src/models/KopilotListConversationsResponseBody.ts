// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataScheduledTaskInfoBySessionIdValue } from "./DataScheduledTaskInfoBySessionIdValue";


export class KopilotListConversationsResponseBodyDataAutomationOverviewDestinationQuota extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tasks or channels allowed, subject to the actual configuration.
   * 
   * @example
   * 3
   */
  limit?: number;
  /**
   * @remarks
   * The remaining quota, calculated as the limit minus the used quantity. The minimum value is 0.
   * 
   * @example
   * 2
   */
  remaining?: number;
  /**
   * @remarks
   * The number of non-deleted notification channels. Disabled channels still consume quota.
   * 
   * @example
   * 1
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      remaining: 'Remaining',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      remaining: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewDestinationsItemsLastDelivery extends $dara.Model {
  /**
   * @remarks
   * The time when the notification service accepted the delivery, in UTC ISO 8601 format. This field is empty if the delivery has not been accepted.
   * 
   * @example
   * 2026-09-17T12:01:00Z
   */
  acceptedAt?: string;
  /**
   * @remarks
   * The time when the record was created, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The unique identifier of the delivery record.
   * 
   * @example
   * dlv_0123456789abcdef0123456789abcdef
   */
  deliveryId?: string;
  /**
   * @remarks
   * The time of the most recent delivery attempt, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:01:00Z
   */
  lastAttemptAt?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * - AUTO: automatic delivery.
   * - MANUAL: manual delivery.
   * - TEST: connectivity test.
   * 
   * @example
   * AUTO
   */
  sendKind?: string;
  /**
   * @remarks
   * The most recent delivery status. ACCEPTED indicates that the notification service has accepted the delivery, but does not mean the recipient has read it.
   * 
   * @example
   * ACCEPTED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedAt: 'AcceptedAt',
      createdAt: 'CreatedAt',
      deliveryId: 'DeliveryId',
      lastAttemptAt: 'LastAttemptAt',
      sendKind: 'SendKind',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedAt: 'string',
      createdAt: 'string',
      deliveryId: 'string',
      lastAttemptAt: 'string',
      sendKind: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewDestinationsItems extends $dara.Model {
  /**
   * @remarks
   * The time when the record was created, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The unique identifier of the notification channel.
   * 
   * @example
   * dst_0123456789abcdef0123456789abcdef
   */
  destinationId?: string;
  /**
   * @remarks
   * The most recent delivery record. This field is empty if no delivery has been made.
   */
  lastDelivery?: KopilotListConversationsResponseBodyDataAutomationOverviewDestinationsItemsLastDelivery;
  /**
   * @remarks
   * The name of the notification channel.
   * 
   * @example
   * Inspection Notification Group
   */
  name?: string;
  /**
   * @remarks
   * The configuration status of the channel. Valid values:
   * - ACTIVE: enabled.
   * - DISABLED: disabled.
   * Being enabled does not indicate that a delivery has been successfully sent.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The type of the notification channel. DINGTALK_WEBHOOK indicates a DingTalk custom chatbot.
   * 
   * @example
   * DINGTALK_WEBHOOK
   */
  type?: string;
  /**
   * @remarks
   * The time when the record was last updated, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The version number used for concurrent update verification of the record.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      destinationId: 'DestinationId',
      lastDelivery: 'LastDelivery',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      updatedAt: 'UpdatedAt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      destinationId: 'string',
      lastDelivery: KopilotListConversationsResponseBodyDataAutomationOverviewDestinationsItemsLastDelivery,
      name: 'string',
      status: 'string',
      type: 'string',
      updatedAt: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.lastDelivery && typeof (this.lastDelivery as any).validate === 'function') {
      (this.lastDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewDestinations extends $dara.Model {
  /**
   * @remarks
   * Indicates whether more pages are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of tasks or notification channels on the current page.
   */
  items?: KopilotListConversationsResponseBodyDataAutomationOverviewDestinationsItems[];
  /**
   * @remarks
   * The cursor for the next page. This field is empty if no more pages are available.
   * 
   * @example
   * 123
   */
  nextCursor?: string;
  /**
   * @remarks
   * The total number of non-deleted records in the list.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      items: 'Items',
      nextCursor: 'NextCursor',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': KopilotListConversationsResponseBodyDataAutomationOverviewDestinationsItems },
      nextCursor: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewQuota extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tasks or channels allowed, subject to the actual configuration.
   * 
   * @example
   * 3
   */
  limit?: number;
  /**
   * @remarks
   * The remaining quota, calculated as the limit minus the used quantity. The minimum value is 0.
   * 
   * @example
   * 2
   */
  remaining?: number;
  /**
   * @remarks
   * The number of task quota slots consumed. Tasks in DRAFT, ENABLED, PAUSED, or NEEDS_AUTH status are counted. Completed and deleted tasks do not consume quota.
   * 
   * @example
   * 1
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      remaining: 'Remaining',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      remaining: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsActiveRun extends $dara.Model {
  /**
   * @remarks
   * The error code of a failed run. This field is empty if no error occurred.
   * 
   * @example
   * UPSTREAM_TIMEOUT
   */
  errorCode?: string;
  /**
   * @remarks
   * The user-facing failure reason. This field is empty if no error occurred.
   * 
   * @example
   * Model or tool calling invoke timed out. Try again later
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the run finished, in UTC ISO 8601 format. This field is typically empty for queued or running executions.
   * 
   * @example
   * 2026-09-17T12:01:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The unique identifier of a single run.
   * 
   * @example
   * run_0123456789abcdef0123456789abcdef
   */
  runId?: string;
  /**
   * @remarks
   * The status of a single run. Valid values:
   * - QUEUED: queued.
   * - RUNNING: running.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      finishedAt: 'FinishedAt',
      runId: 'RunId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      finishedAt: 'string',
      runId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsConfiguration extends $dara.Model {
  /**
   * @remarks
   * The six-field cron expression with the seconds field fixed to 0. This field is used only for the CRON schedule type.
   */
  cronExpression?: string;
  /**
   * @remarks
   * The list of notification channel IDs that receive task results. A maximum of 3 IDs are supported.
   */
  destinationIds?: string[];
  /**
   * @remarks
   * The list of instance IDs within the query scope.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The instruction for the scheduled task execution.
   * 
   * @example
   * Query the current risks of the specified instances and summarize the results
   */
  instruction?: string;
  /**
   * @remarks
   * The fixed interval in seconds. Valid values: 900 to 31536000. This field is used only for the FIXED_INTERVAL schedule type.
   * 
   * @example
   * 900
   */
  intervalSeconds?: number;
  /**
   * @remarks
   * The time budget for a single task run, in seconds. Default value: 600. Valid values: 30 to 1800.
   * 
   * @example
   * 600
   */
  maxRunSeconds?: number;
  /**
   * @remarks
   * The token budget for a single task run. Default value: 3000000. Valid values: 1000 to 10000000.
   * 
   * @example
   * 3000000
   */
  maxTokens?: number;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * Kafka Resource Inspection
   */
  name?: string;
  /**
   * @remarks
   * The region where the queried resources reside.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource scope mode. Valid values:
   * - ACCOUNT: account-level query.
   * - NONE: no resource task.
   * - EXPLICIT: specified instances.
   * 
   * @example
   * ACCOUNT
   */
  resourceMode?: string;
  /**
   * @remarks
   * The one-time execution time in ISO 8601 format with time zone. This field is used only for the ONCE schedule type.
   * 
   * @example
   * 2026-09-18T12:00:00Z
   */
  runAt?: string;
  /**
   * @remarks
   * The schedule type. Valid values:
   * - ONCE: one-time execution.
   * - CRON: cron expression.
   * - FIXED_INTERVAL: fixed interval.
   * 
   * @example
   * FIXED_INTERVAL
   */
  scheduleType?: string;
  /**
   * @remarks
   * The session mode for displaying results. Valid values:
   * - SHARED: shared session.
   * - PER_RUN: independent session for each run.
   * 
   * @example
   * SHARED
   */
  sessionMode?: string;
  /**
   * @remarks
   * The ID of the target session that stores run results in shared mode.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  targetSessionId?: string;
  /**
   * @remarks
   * The scheduling time zone. Default value: Asia/Shanghai.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      destinationIds: 'DestinationIds',
      instanceIds: 'InstanceIds',
      instruction: 'Instruction',
      intervalSeconds: 'IntervalSeconds',
      maxRunSeconds: 'MaxRunSeconds',
      maxTokens: 'MaxTokens',
      name: 'Name',
      regionId: 'RegionId',
      resourceMode: 'ResourceMode',
      runAt: 'RunAt',
      scheduleType: 'ScheduleType',
      sessionMode: 'SessionMode',
      targetSessionId: 'TargetSessionId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      destinationIds: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instruction: 'string',
      intervalSeconds: 'number',
      maxRunSeconds: 'number',
      maxTokens: 'number',
      name: 'string',
      regionId: 'string',
      resourceMode: 'string',
      runAt: 'string',
      scheduleType: 'string',
      sessionMode: 'string',
      targetSessionId: 'string',
      timezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationIds)) {
      $dara.Model.validateArray(this.destinationIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsLastCompletedRun extends $dara.Model {
  /**
   * @remarks
   * The error code of a failed run. This field is empty if no error occurred.
   * 
   * @example
   * UPSTREAM_TIMEOUT
   */
  errorCode?: string;
  /**
   * @remarks
   * The user-facing failure reason. This field is empty if no error occurred.
   * 
   * @example
   * Model or tool calling invoke timed out. Try again later
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the run finished, in UTC ISO 8601 format. This field is empty if the run has not finished.
   * 
   * @example
   * 2026-09-17T12:01:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The unique identifier of a single run.
   * 
   * @example
   * run_0123456789abcdef0123456789abcdef
   */
  runId?: string;
  /**
   * @remarks
   * The status of the most recent completed run. For example, SUCCEEDED indicates success and FAILED indicates failure.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      finishedAt: 'FinishedAt',
      runId: 'RunId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      finishedAt: 'string',
      runId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewTasksItems extends $dara.Model {
  /**
   * @remarks
   * The currently queued or running execution record. This field is empty if no active run exists.
   */
  activeRun?: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsActiveRun;
  /**
   * @remarks
   * The task execution configuration.
   */
  configuration?: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsConfiguration;
  /**
   * @remarks
   * The time when the record was created, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The most recent completed run record, including failed runs. This field is empty if no record exists.
   */
  lastCompletedRun?: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsLastCompletedRun;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * Kafka Resource Inspection
   */
  name?: string;
  /**
   * @remarks
   * The next scheduled execution time, in UTC ISO 8601 format. This field is empty if no next run is scheduled.
   * 
   * @example
   * 2026-09-17T12:15:00Z
   */
  nextRunAt?: string;
  /**
   * @remarks
   * The human-readable description of the execution schedule.
   * 
   * @example
   * Every 900 seconds
   */
  scheduleDescription?: string;
  /**
   * @remarks
   * The session mode for displaying results. Valid values:
   * - SHARED: shared session.
   * - PER_RUN: independent session for each run.
   * 
   * @example
   * SHARED
   */
  sessionMode?: string;
  /**
   * @remarks
   * The ID of the source session from which the task was created.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  sourceSessionId?: string;
  /**
   * @remarks
   * The status of the scheduled task. Valid values:
   * - DRAFT: Draft.
   * - ENABLED: Enabled.
   * - PAUSED: Paused.
   * - NEEDS_AUTH: Pending authorization.
   * - COMPLETED: Completed.
   * 
   * This status is independent of the running status.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the target session that stores run results in shared mode.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  targetSessionId?: string;
  /**
   * @remarks
   * The unique identifier of the scheduled task.
   * 
   * @example
   * task_0123456789abcdef0123456789abcdef
   */
  taskId?: string;
  /**
   * @remarks
   * The time when the record was last updated, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The version number used for concurrent update verification of the current record.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      activeRun: 'ActiveRun',
      configuration: 'Configuration',
      createdAt: 'CreatedAt',
      lastCompletedRun: 'LastCompletedRun',
      name: 'Name',
      nextRunAt: 'NextRunAt',
      scheduleDescription: 'ScheduleDescription',
      sessionMode: 'SessionMode',
      sourceSessionId: 'SourceSessionId',
      status: 'Status',
      targetSessionId: 'TargetSessionId',
      taskId: 'TaskId',
      updatedAt: 'UpdatedAt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeRun: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsActiveRun,
      configuration: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsConfiguration,
      createdAt: 'string',
      lastCompletedRun: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItemsLastCompletedRun,
      name: 'string',
      nextRunAt: 'string',
      scheduleDescription: 'string',
      sessionMode: 'string',
      sourceSessionId: 'string',
      status: 'string',
      targetSessionId: 'string',
      taskId: 'string',
      updatedAt: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.activeRun && typeof (this.activeRun as any).validate === 'function') {
      (this.activeRun as any).validate();
    }
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.lastCompletedRun && typeof (this.lastCompletedRun as any).validate === 'function') {
      (this.lastCompletedRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverviewTasks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether more pages are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of tasks or notification channels on the current page.
   */
  items?: KopilotListConversationsResponseBodyDataAutomationOverviewTasksItems[];
  /**
   * @remarks
   * The cursor for the next page. This field is empty if no more pages are available.
   * 
   * @example
   * 123
   */
  nextCursor?: string;
  /**
   * @remarks
   * The total number of non-deleted records in the list.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      items: 'Items',
      nextCursor: 'NextCursor',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': KopilotListConversationsResponseBodyDataAutomationOverviewTasksItems },
      nextCursor: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataAutomationOverview extends $dara.Model {
  /**
   * @remarks
   * The time when the overview was generated, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  asOf?: string;
  /**
   * @remarks
   * The quota for the number of notification channels of the current primary account in this environment, counted across regions.
   */
  destinationQuota?: KopilotListConversationsResponseBodyDataAutomationOverviewDestinationQuota;
  /**
   * @remarks
   * The paginated results of notification channels. Webhook URLs and signing keys are not returned.
   */
  destinations?: KopilotListConversationsResponseBodyDataAutomationOverviewDestinations;
  /**
   * @remarks
   * The home region for tasks and notification channels.
   * 
   * @example
   * cn-beijing
   */
  homeRegion?: string;
  /**
   * @remarks
   * The quota for the number of scheduled tasks of the current primary account in this environment, counted across regions.
   */
  quota?: KopilotListConversationsResponseBodyDataAutomationOverviewQuota;
  /**
   * @remarks
   * The paginated results of scheduled tasks for the account.
   */
  tasks?: KopilotListConversationsResponseBodyDataAutomationOverviewTasks;
  static names(): { [key: string]: string } {
    return {
      asOf: 'AsOf',
      destinationQuota: 'DestinationQuota',
      destinations: 'Destinations',
      homeRegion: 'HomeRegion',
      quota: 'Quota',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asOf: 'string',
      destinationQuota: KopilotListConversationsResponseBodyDataAutomationOverviewDestinationQuota,
      destinations: KopilotListConversationsResponseBodyDataAutomationOverviewDestinations,
      homeRegion: 'string',
      quota: KopilotListConversationsResponseBodyDataAutomationOverviewQuota,
      tasks: KopilotListConversationsResponseBodyDataAutomationOverviewTasks,
    };
  }

  validate() {
    if(this.destinationQuota && typeof (this.destinationQuota as any).validate === 'function') {
      (this.destinationQuota as any).validate();
    }
    if(this.destinations && typeof (this.destinations as any).validate === 'function') {
      (this.destinations as any).validate();
    }
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyDataScheduledTaskQuota extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tasks or channels allowed, subject to the actual configuration.
   * 
   * @example
   * 3
   */
  limit?: number;
  /**
   * @remarks
   * The remaining quota, calculated as the limit minus the used quantity. The minimum value is 0.
   * 
   * @example
   * 2
   */
  remaining?: number;
  /**
   * @remarks
   * The number of task quota slots consumed. Tasks in DRAFT, ENABLED, PAUSED, or NEEDS_AUTH status are counted. Completed and deleted tasks do not consume quota.
   * 
   * @example
   * 1
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      remaining: 'Remaining',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      remaining: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The overview of tasks, notification channels, and quotas for the current account. Returned only when the request includes the overview and the feature is available.
   */
  automationOverview?: KopilotListConversationsResponseBodyDataAutomationOverview;
  /**
   * @remarks
   * The list of session IDs.
   */
  conversationIds?: string[];
  /**
   * @remarks
   * The number of entries returned on the current page in a paged query.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * A mapping that uses session IDs as keys and associated task summaries as values.
   */
  scheduledTaskInfoBySessionId?: { [key: string]: DataScheduledTaskInfoBySessionIdValue };
  /**
   * @remarks
   * The quota for the number of scheduled tasks of the current primary account in this environment, counted across regions.
   */
  scheduledTaskQuota?: KopilotListConversationsResponseBodyDataScheduledTaskQuota;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 1734455674565
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      automationOverview: 'AutomationOverview',
      conversationIds: 'ConversationIds',
      count: 'Count',
      page: 'Page',
      scheduledTaskInfoBySessionId: 'ScheduledTaskInfoBySessionId',
      scheduledTaskQuota: 'ScheduledTaskQuota',
      size: 'Size',
      total: 'Total',
      totalPages: 'TotalPages',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automationOverview: KopilotListConversationsResponseBodyDataAutomationOverview,
      conversationIds: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      page: 'number',
      scheduledTaskInfoBySessionId: { 'type': 'map', 'keyType': 'string', 'valueType': DataScheduledTaskInfoBySessionIdValue },
      scheduledTaskQuota: KopilotListConversationsResponseBodyDataScheduledTaskQuota,
      size: 'number',
      total: 'number',
      totalPages: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.automationOverview && typeof (this.automationOverview as any).validate === 'function') {
      (this.automationOverview as any).validate();
    }
    if(Array.isArray(this.conversationIds)) {
      $dara.Model.validateArray(this.conversationIds);
    }
    if(this.scheduledTaskInfoBySessionId) {
      $dara.Model.validateMap(this.scheduledTaskInfoBySessionId);
    }
    if(this.scheduledTaskQuota && typeof (this.scheduledTaskQuota as any).validate === 'function') {
      (this.scheduledTaskQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: KopilotListConversationsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DF166F2-F581-5254-AAB6-B482083FA7B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: KopilotListConversationsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

