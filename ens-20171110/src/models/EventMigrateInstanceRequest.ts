// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventMigrateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The data migration policy. Valid values:
   * - abandon: Does not migrate data. This is the default value.
   * - force_transfer: forcible migration of EPS resource.
   * - try_transfer: Attempts to migrate data.
   * 
   * @example
   * abandon
   */
  dataPolicy?: string;
  /**
   * @remarks
   * The ID of the system event.
   * 
   * This parameter is required.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * The type of the O&M task. Valid values:
   * 
   * - immediate: Executes the task immediately.
   * - scheduled: Executes the task at a scheduled time.
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
   * Note: You cannot specify a password when you schedule the execution time.
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
  /**
   * @remarks
   * The scheduled UTC time.
   */
  planUtcTime?: string;
  /**
   * @remarks
   * The ID of the resource.
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

