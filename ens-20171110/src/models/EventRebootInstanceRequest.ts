// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventRebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The system event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e-9d992570200d86b9126d78aa8c37b54b
   */
  eventId?: string;
  /**
   * @remarks
   * The O&M task type. Valid values:
   * 
   * - immediate: Executes the task immediately.
   * 
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
   * This parameter is required.
   * 
   * @example
   * i-5****
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

