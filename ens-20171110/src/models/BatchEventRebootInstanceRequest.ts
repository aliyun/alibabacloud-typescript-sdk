// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventRebootInstanceRequestEventInfos extends $dara.Model {
  /**
   * @remarks
   * The system event ID.
   * 
   * @example
   * e-4452cec5a8f8eb9b2879a054207687d6
   */
  eventId?: string;
  /**
   * @remarks
   * The O&M task type. Valid values:
   * 
   * - immediate: immediate execution.
   * 
   * - scheduled: scheduled execution.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The scheduled execution time. The value is a timestamp in milliseconds. This parameter is required when OpsType is set to scheduled.
   * 
   * @example
   * 1742452232000
   */
  planTime?: number;
  planUtcTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * n-54hi3ffi63zrjt4wzx9mepeyh
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      opsType: 'OpsType',
      planTime: 'PlanTime',
      planUtcTime: 'PlanUtcTime',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      opsType: 'string',
      planTime: 'number',
      planUtcTime: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEventRebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  eventInfos?: BatchEventRebootInstanceRequestEventInfos[];
  static names(): { [key: string]: string } {
    return {
      eventInfos: 'EventInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfos: { 'type': 'array', 'itemType': BatchEventRebootInstanceRequestEventInfos },
    };
  }

  validate() {
    if(Array.isArray(this.eventInfos)) {
      $dara.Model.validateArray(this.eventInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

