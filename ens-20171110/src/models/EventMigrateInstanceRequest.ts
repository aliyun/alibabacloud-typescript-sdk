// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventMigrateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The data migration policy. Valid values:
   * 
   * *   abandon: does not migrate data. This is the default value.
   * *   force_transfer: forcibly migrates data.
   * *   try_transfer: Migrate data as much as possible.
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
   * The type of the O\\&M task. Valid values:
   * 
   * *   immediate
   * *   scheduled
   * 
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The password of the instance. This parameter is optional. If you do not specify this parameter, a random password is used.
   * 
   * The password must be 8 to 30 characters in length. The password must contain uppercase letters, lowercase letters, digits, and special characters.
   * 
   * Note that you cannot enter a password for scheduled execution.
   * 
   * @example
   * AAaa1234
   */
  password?: string;
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

