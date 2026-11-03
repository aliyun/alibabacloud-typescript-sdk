// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextDatabaseSyncJobReadinessResponseBodyDataChecks extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source is ready.
   * 
   * @example
   * true
   */
  connectionReady?: boolean;
  /**
   * @remarks
   * Indicates whether the import task is enabled.
   * 
   * @example
   * true
   */
  jobEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether scheduling is configured.
   * 
   * @example
   * true
   */
  scheduleConfigured?: boolean;
  /**
   * @remarks
   * Indicates whether scheduling is not automatically paused.
   * 
   * @example
   * true
   */
  scheduleNotAutoPaused?: boolean;
  /**
   * @remarks
   * Indicates whether the selection is confirmed.
   * 
   * @example
   * true
   */
  selectionConfirmed?: boolean;
  /**
   * @remarks
   * Indicates whether the target is ready.
   */
  targetReady?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionReady: 'ConnectionReady',
      jobEnabled: 'JobEnabled',
      scheduleConfigured: 'ScheduleConfigured',
      scheduleNotAutoPaused: 'ScheduleNotAutoPaused',
      selectionConfirmed: 'SelectionConfirmed',
      targetReady: 'TargetReady',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionReady: 'boolean',
      jobEnabled: 'boolean',
      scheduleConfigured: 'boolean',
      scheduleNotAutoPaused: 'boolean',
      selectionConfirmed: 'boolean',
      targetReady: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseSyncJobReadinessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason for the automatic pause.
   * 
   * @example
   * Three consecutive execution failures
   */
  autoPauseReason?: string;
  /**
   * @remarks
   * The summary of check items.
   * 
   * @example
   * {"jobEnabled":true,"connectionReady":true,"selectionConfirmed":true,"scheduleConfigured":true,"scheduleNotAutoPaused":true}
   */
  checks?: GetContextDatabaseSyncJobReadinessResponseBodyDataChecks;
  /**
   * @remarks
   * Indicates whether the task is ready.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * Indicates whether the task is ready for a manual run.
   * 
   * @example
   * true
   */
  readyForManualRun?: boolean;
  /**
   * @remarks
   * Indicates whether the task is ready for a scheduled run.
   * 
   * @example
   * true
   */
  readyForScheduledRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPauseReason: 'AutoPauseReason',
      checks: 'Checks',
      ready: 'Ready',
      readyForManualRun: 'ReadyForManualRun',
      readyForScheduledRun: 'ReadyForScheduledRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPauseReason: 'string',
      checks: GetContextDatabaseSyncJobReadinessResponseBodyDataChecks,
      ready: 'boolean',
      readyForManualRun: 'boolean',
      readyForScheduledRun: 'boolean',
    };
  }

  validate() {
    if(this.checks && typeof (this.checks as any).validate === 'function') {
      (this.checks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextDatabaseSyncJobReadinessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetContextDatabaseSyncJobReadinessResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetContextDatabaseSyncJobReadinessResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

