// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventRebootInstanceRequestEventInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the system event.
   * 
   * @example
   * e-4452cec5a8f8eb9b2879a054207687d6
   */
  eventId?: string;
  /**
   * @remarks
   * The type of the O\\&M task.
   * 
   * *   immediate
   * *   scheduled
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The execution time of the reservation. The timestamp is measured in milliseconds. If the OpsType parameter is set to scheduled, this parameter is required.
   * 
   * @example
   * 1742452232000
   */
  planTime?: number;
  /**
   * @remarks
   * A client ID.
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
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      opsType: 'string',
      planTime: 'number',
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
   * The details of events.
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

