// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventRedeployInstanceRequestEventInfos extends $dara.Model {
  /**
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @example
   * 1742452232000
   */
  opsType?: string;
  /**
   * @example
   * immediate
   */
  planTime?: number;
  /**
   * @example
   * i-55qi8m11rr53c4i964md8a00l
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

export class BatchEventRedeployInstanceRequest extends $dara.Model {
  eventInfos?: BatchEventRedeployInstanceRequestEventInfos[];
  static names(): { [key: string]: string } {
    return {
      eventInfos: 'EventInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfos: { 'type': 'array', 'itemType': BatchEventRedeployInstanceRequestEventInfos },
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

