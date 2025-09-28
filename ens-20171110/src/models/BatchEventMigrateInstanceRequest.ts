// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventMigrateInstanceRequestEventInfos extends $dara.Model {
  /**
   * @example
   * abandon
   */
  dataPolicy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  password?: string;
  /**
   * @example
   * 1742452232000
   */
  planTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-55qi8m11rr53c4i964md8a00l
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPolicy: 'DataPolicy',
      eventId: 'EventId',
      opsType: 'OpsType',
      password: 'Password',
      planTime: 'PlanTime',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPolicy: 'string',
      eventId: 'string',
      opsType: 'string',
      password: 'string',
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

export class BatchEventMigrateInstanceRequest extends $dara.Model {
  eventInfos?: BatchEventMigrateInstanceRequestEventInfos[];
  static names(): { [key: string]: string } {
    return {
      eventInfos: 'EventInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfos: { 'type': 'array', 'itemType': BatchEventMigrateInstanceRequestEventInfos },
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

