// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEventMigrateInstanceRequestEventInfos extends $dara.Model {
  /**
   * @remarks
   * The data migration policy. Valid values:
   * - abandon: Does not migrate data. This is the default value.
   * - force_transfer: Performs forcible migration of EPS resource data.
   * - try_transfer: Migrates data on a best-effort basis.
   * 
   * @example
   * abandon
   */
  dataPolicy?: string;
  /**
   * @remarks
   * The event ID, in the format of e-*.
   * 
   * This parameter is required.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * The O&M task type. Valid values:
   * 
   * - immediate: immediate execution.
   * - scheduled: scheduled execution.
   * 
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The instance password. This parameter is optional. If you do not specify this parameter, a random password is used.
   * 
   * The password must be 8 to 30 characters in length and must contain uppercase letters, lowercase letters, and digits.
   * 
   * Note: Password specification is not supported for scheduled execution.
   * 
   * @example
   * AAaa1234
   */
  password?: string;
  /**
   * @remarks
   * The scheduled execution time. The value is a timestamp in milliseconds.
   * This parameter is required when OpsType is set to scheduled.
   * 
   * @example
   * 1742452232000
   */
  planTime?: number;
  planUtcTime?: string;
  /**
   * @remarks
   * The resource ID, in the format of i-*.
   * 
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
      planUtcTime: 'PlanUtcTime',
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

export class BatchEventMigrateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
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

