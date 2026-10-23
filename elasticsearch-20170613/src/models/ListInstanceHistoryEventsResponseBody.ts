// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 15
   */
  xTotalCount?: number;
  /**
   * @remarks
   * The total number of failures.
   * 
   * @example
   * 2
   */
  xTotalFailed?: number;
  /**
   * @remarks
   * The total number of successes.
   * 
   * @example
   * 13
   */
  xTotalSuccess?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
      xTotalFailed: 'X-Total-Failed',
      xTotalSuccess: 'X-Total-Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
      xTotalFailed: 'number',
      xTotalSuccess: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHistoryEventsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-2ze8s9cjdf2cv969****
   */
  ecsId?: string;
  /**
   * @remarks
   * The creation time of the event. The time is displayed in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  eventCreateTime?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - FAILED: failed
   * - EXECUTED: executed
   * - EXECUTING: executing
   * 
   * @example
   * EXECUTED
   */
  eventCycleStatus?: string;
  /**
   * @remarks
   * The execution time of the event. The time is displayed in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  eventExecuteTime?: string;
  /**
   * @remarks
   * The completion time of the event. The time is displayed in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  eventFinashTime?: string;
  /**
   * @remarks
   * The event level. Valid values:
   * - INFO: information
   * - WARN: warning
   * - CRITICAL: critical
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * - ECS:AUTO_RESTART: The ECS node is automatically restarted.
   * - Instance:InstanceFailure.Reboot:Executed: The restart of the ECS instance is complete due to an instance error.
   * - Instance:InstanceFailure.Reboot:Executing: The restart of the ECS instance starts due to an instance error.
   * - Instance:SystemFailure.Reboot:Executed: The restart of the ECS instance is complete due to a system error.
   * - Instance:SystemFailure.Reboot:Executing: The restart of the ECS instance starts due to a system error.
   * - Instance:SystemFailure.Reboot:Failed: The restart of the ECS instance fails due to a system error.
   * 
   * @example
   * ECS:AUTO_RESTART
   */
  eventType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-2r42l7a740005****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the node that generated the event.
   * 
   * @example
   * 10.1.xx.xx
   */
  nodeIP?: string;
  /**
   * @remarks
   * The ID of the region where the event occurred.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'ecsId',
      eventCreateTime: 'eventCreateTime',
      eventCycleStatus: 'eventCycleStatus',
      eventExecuteTime: 'eventExecuteTime',
      eventFinashTime: 'eventFinashTime',
      eventLevel: 'eventLevel',
      eventType: 'eventType',
      instanceId: 'instanceId',
      nodeIP: 'nodeIP',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
      eventCreateTime: 'string',
      eventCycleStatus: 'string',
      eventExecuteTime: 'string',
      eventFinashTime: 'string',
      eventLevel: 'string',
      eventType: 'string',
      instanceId: 'string',
      nodeIP: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHistoryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListInstanceHistoryEventsResponseBodyHeaders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1A6830A-F59B-4E05-BFAC-9496C21DBBA7
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListInstanceHistoryEventsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceHistoryEventsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceHistoryEventsResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

