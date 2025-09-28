// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventRebootInstanceRequestEventInfos extends $dara.Model {
  /**
   * @example
   * e-4452cec5a8f8eb9b2879a054207687d6
   */
  eventId?: string;
  /**
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @example
   * 1742452232000
   */
  planTime?: number;
  /**
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

