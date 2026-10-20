// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventRebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the system Event.
   * 
   * This parameter is required.
   * 
   * @example
   * e-9d992570200d86b9126d78aa8c37b54b
   */
  eventId?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * - immediate: Executes the operation immediately.
   * 
   * - scheduled: Executes the operation at the specified time.
   * 
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The scheduled execution time, as a Timestamp in milliseconds. This parameter is required when OpsType is set to scheduled.
   * 
   * @example
   * 1742452232000
   */
  planTime?: number;
  /**
   * @remarks
   * Reserved parameter.
   */
  planUtcTime?: string;
  /**
   * @remarks
   * The ID of the Resource.
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

